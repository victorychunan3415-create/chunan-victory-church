import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createNewVisitor, getNewVisitors, createContactMessage, getContactMessages, createPrayerRequest, getPrayerRequests, createEventRegistration, getEventRegistrations, createNews, updateNews, deleteNews, getNewsById, getAllNews, getPublishedNews } from "./db";
import { protectedProcedure } from "./_core/trpc";
import { generateSitemap } from "./sitemap";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  newVisitor: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1),
          phone: z.string().optional(),
          email: z.string().email().optional(),
          address: z.string().optional(),
          visitDate: z.string().optional(),
          firstTime: z.string().optional().default("yes"),
          interests: z.string().optional(),
          notes: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        try {
          await createNewVisitor({
            name: input.name,
            phone: input.phone || null,
            email: input.email || null,
            address: input.address || null,
            visitDate: input.visitDate || null,
            firstTime: input.firstTime || "yes",
            interests: input.interests || null,
            notes: input.notes || null,
          });
          return { success: true, message: "感謝您的留名" };
        } catch (error) {
          throw new Error("提交失敗");
        }
      }),
  }),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1),
          phone: z.string().optional(),
          email: z.string().email(),
          subject: z.string().min(1),
          message: z.string().min(1),
          messageType: z.string().optional().default("general"),
        })
      )
      .mutation(async ({ input }) => {
        try {
          await createContactMessage({
            name: input.name,
            phone: input.phone || null,
            email: input.email,
            subject: input.subject,
            message: input.message,
            messageType: input.messageType || "general",
            status: "new",
          });
          return { success: true, message: "感謝您的訊息!我們會盡快與您聯繫。" };
        } catch (error) {
          throw new Error("提交失敗");
        }
      }),
  }),

  prayer: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1),
          email: z.string().email().optional(),
          phone: z.string().optional(),
          title: z.string().min(1),
          content: z.string().min(1),
          category: z.string().optional().default("general"),
          isPublic: z.string().optional().default("yes"),
        })
      )
      .mutation(async ({ input }) => {
        try {
          await createPrayerRequest({
            name: input.name,
            email: input.email || null,
            phone: input.phone || null,
            title: input.title,
            content: input.content,
            category: input.category || "general",
            isPublic: input.isPublic || "yes",
            status: "active",
          });
          return { success: true, message: "感謝您的代禱需求!願神保守您。" };
        } catch (error) {
          throw new Error("提交失敗");
        }
      }),
    list: publicProcedure.query(async () => {
      try {
        const requests = await getPrayerRequests();
        return requests;
      } catch (error) {
        throw new Error("無法獲取代禱事項");
      }
    }),
  }),

  event: router({
    register: publicProcedure
      .input(
        z.object({
          eventName: z.string().min(1),
          eventDate: z.string().min(1),
          name: z.string().min(1),
          email: z.string().email(),
          phone: z.string().optional(),
          numberOfPeople: z.number().optional().default(1),
          notes: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        try {
          await createEventRegistration({
            eventName: input.eventName,
            eventDate: input.eventDate,
            name: input.name,
            email: input.email,
            phone: input.phone || null,
            numberOfPeople: input.numberOfPeople || 1,
            notes: input.notes || null,
            status: "registered",
          });
          return { success: true, message: "報名成功!感謝您的參與。" };
        } catch (error) {
          throw new Error("報名失敗");
        }
      }),
    list: publicProcedure
      .input(z.object({ eventName: z.string().optional() }))
      .query(async ({ input }) => {
        try {
          const registrations = await getEventRegistrations(input.eventName);
          return registrations;
        } catch (error) {
          throw new Error("無法獲取報名資訊");
        }
      }),
  }),

  news: router({
    list: publicProcedure
      .query(async () => {
        try {
          const newsList = await getPublishedNews();
          return newsList;
        } catch (error) {
          throw new Error("無法獲取新聞列表");
        }
      }),
    getById: publicProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        try {
          const newsItem = await getNewsById(input.id);
          return newsItem;
        } catch (error) {
          throw new Error("無法獲取新聞詳情");
        }
      }),
    create: protectedProcedure
      .input(
        z.object({
          title: z.string().min(1, "標題不能為空"),
          excerpt: z.string().optional(),
          content: z.string().min(1, "內容不能為空"),
          category: z.string().default("announcement"),
          imageUrl: z.string().optional(),
          imageKey: z.string().optional(),
          status: z.enum(["draft", "published", "archived"]).default("draft"),
        })
      )
      .mutation(async ({ input, ctx }) => {
        try {
          if (ctx.user?.role !== "admin") {
            throw new Error("您沒有權限執行此操作");
          }
          await createNews({
            title: input.title,
            excerpt: input.excerpt || null,
            content: input.content,
            category: input.category,
            imageUrl: input.imageUrl || null,
            imageKey: input.imageKey || null,
            status: input.status,
            authorId: ctx.user.id,
            publishedAt: input.status === "published" ? new Date() : null,
          });
          return { success: true, message: "新聞已建立" };
        } catch (error) {
          throw new Error("建立新聞失敗");
        }
      }),
    update: protectedProcedure
      .input(
        z.object({
          id: z.number(),
          title: z.string().optional(),
          excerpt: z.string().optional(),
          content: z.string().optional(),
          category: z.string().optional(),
          imageUrl: z.string().optional(),
          imageKey: z.string().optional(),
          status: z.enum(["draft", "published", "archived"]).optional(),
        })
      )
      .mutation(async ({ input, ctx }) => {
        try {
          if (ctx.user?.role !== "admin") {
            throw new Error("您沒有權限執行此操作");
          }
          const updateData: any = {};
          if (input.title !== undefined) updateData.title = input.title;
          if (input.excerpt !== undefined) updateData.excerpt = input.excerpt;
          if (input.content !== undefined) updateData.content = input.content;
          if (input.category !== undefined) updateData.category = input.category;
          if (input.imageUrl !== undefined) updateData.imageUrl = input.imageUrl;
          if (input.imageKey !== undefined) updateData.imageKey = input.imageKey;
          if (input.status !== undefined) {
            updateData.status = input.status;
            if (input.status === "published") {
              updateData.publishedAt = new Date();
            }
          }
          await updateNews(input.id, updateData);
          return { success: true, message: "新聞已更新" };
        } catch (error) {
          throw new Error("更新新聞失敗");
        }
      }),
    delete: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input, ctx }) => {
        try {
          if (ctx.user?.role !== "admin") {
            throw new Error("您沒有權限執行此操作");
          }
          await deleteNews(input.id);
          return { success: true, message: "新聞已刪除" };
        } catch (error) {
          throw new Error("刪除新聞失敗");
        }
      }),
    listAll: protectedProcedure
      .input(z.object({ status: z.string().optional() }))
      .query(async ({ input, ctx }) => {
        try {
          if (ctx.user?.role !== "admin") {
            throw new Error("您沒有權限執行此操作");
          }
          const newsList = await getAllNews(input.status);
          return newsList;
        } catch (error) {
          throw new Error("無法獲取新聞列表");
        }
      }),
  }),
  seo: router({
    sitemap: publicProcedure.query(() => {
      return generateSitemap();
    }),
  }),
});

export type AppRouter = typeof appRouter;
