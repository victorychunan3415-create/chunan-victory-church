import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";

describe("prayer.submit", () => {
  it("should submit a prayer request successfully", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: { protocol: "https", headers: {} } as any,
      res: {} as any,
    });

    const result = await caller.prayer.submit({
      name: "John Doe",
      email: "john@example.com",
      phone: "0912345678",
      title: "為家人禱告",
      content: "請為我的家人禱告,願他們都能信主。",
      category: "family",
      isPublic: "yes",
    });

    expect(result).toEqual({
      success: true,
      message: "感謝您的代禱需求!願神保守您。",
    });
  });

  it("should reject prayer request with empty name", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: { protocol: "https", headers: {} } as any,
      res: {} as any,
    });

    try {
      await caller.prayer.submit({
        name: "",
        title: "為家人禱告",
        content: "請為我的家人禱告",
      });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.message).toContain("too_small");
    }
  });

  it("should reject prayer request with empty title", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: { protocol: "https", headers: {} } as any,
      res: {} as any,
    });

    try {
      await caller.prayer.submit({
        name: "John Doe",
        title: "",
        content: "請為我的家人禱告",
      });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.message).toContain("too_small");
    }
  });

  it("should reject prayer request with empty content", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: { protocol: "https", headers: {} } as any,
      res: {} as any,
    });

    try {
      await caller.prayer.submit({
        name: "John Doe",
        title: "為家人禱告",
        content: "",
      });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.message).toContain("too_small");
    }
  });
});

describe("event.register", () => {
  it("should register for an event successfully", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: { protocol: "https", headers: {} } as any,
      res: {} as any,
    });

    const result = await caller.event.register({
      eventName: "洗禮預備課程",
      eventDate: "2026-02-20",
      name: "Jane Doe",
      email: "jane@example.com",
      phone: "0987654321",
      numberOfPeople: 2,
      notes: "我和我的朋友一起報名",
    });

    expect(result).toEqual({
      success: true,
      message: "報名成功!感謝您的參與。",
    });
  });

  it("should reject event registration with empty name", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: { protocol: "https", headers: {} } as any,
      res: {} as any,
    });

    try {
      await caller.event.register({
        eventName: "洗禮預備課程",
        eventDate: "2026-02-20",
        name: "",
        email: "jane@example.com",
      });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.message).toContain("too_small");
    }
  });

  it("should reject event registration with invalid email", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: { protocol: "https", headers: {} } as any,
      res: {} as any,
    });

    try {
      await caller.event.register({
        eventName: "洗禮預備課程",
        eventDate: "2026-02-20",
        name: "Jane Doe",
        email: "invalid-email",
      });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.message).toContain("Invalid email");
    }
  });

  it("should register with default numberOfPeople", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: { protocol: "https", headers: {} } as any,
      res: {} as any,
    });

    const result = await caller.event.register({
      eventName: "春季復興特會",
      eventDate: "2026-03-15",
      name: "Bob Smith",
      email: "bob@example.com",
    });

    expect(result).toEqual({
      success: true,
      message: "報名成功!感謝您的參與。",
    });
  });
});
