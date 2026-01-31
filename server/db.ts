import { eq, desc } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, InsertNewVisitor, newVisitors, InsertContactMessage, contactMessages, InsertPrayerRequest, prayerRequests, InsertEventRegistration, eventRegistrations, InsertNews, news } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

export async function createNewVisitor(data: InsertNewVisitor) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  try {
    const result = await db.insert(newVisitors).values(data);
    return result;
  } catch (error) {
    console.error("[Database] Failed to create new visitor:", error);
    throw error;
  }
}

export async function getNewVisitors() {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  try {
    const result = await db.select().from(newVisitors).orderBy(newVisitors.createdAt);
    return result;
  } catch (error) {
    console.error("[Database] Failed to get new visitors:", error);
    throw error;
  }
}

export async function createContactMessage(data: InsertContactMessage) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  try {
    const result = await db.insert(contactMessages).values(data);
    return result;
  } catch (error) {
    console.error("[Database] Failed to create contact message:", error);
    throw error;
  }
}

export async function getContactMessages() {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  try {
    const result = await db.select().from(contactMessages).orderBy(contactMessages.createdAt);
    return result;
  } catch (error) {
    console.error("[Database] Failed to get contact messages:", error);
    throw error;
  }
}

export async function createPrayerRequest(data: InsertPrayerRequest) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  try {
    const result = await db.insert(prayerRequests).values(data);
    return result;
  } catch (error) {
    console.error("[Database] Failed to create prayer request:", error);
    throw error;
  }
}

export async function getPrayerRequests() {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  try {
    const result = await db.select().from(prayerRequests).where(eq(prayerRequests.isPublic, "yes")).orderBy(prayerRequests.createdAt);
    return result;
  } catch (error) {
    console.error("[Database] Failed to get prayer requests:", error);
    throw error;
  }
}

export async function createEventRegistration(data: InsertEventRegistration) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  try {
    const result = await db.insert(eventRegistrations).values(data);
    return result;
  } catch (error) {
    console.error("[Database] Failed to create event registration:", error);
    throw error;
  }
}

export async function getEventRegistrations(eventName?: string) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  try {
    if (eventName) {
      const result = await db.select().from(eventRegistrations).where(eq(eventRegistrations.eventName, eventName)).orderBy(eventRegistrations.createdAt);
      return result;
    } else {
      const result = await db.select().from(eventRegistrations).orderBy(eventRegistrations.createdAt);
      return result;
    }
  } catch (error) {
    console.error("[Database] Failed to get event registrations:", error);
    throw error;
  }
}

export async function createNews(data: InsertNews) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  try {
    const result = await db.insert(news).values(data);
    return result;
  } catch (error) {
    console.error("[Database] Failed to create news:", error);
    throw error;
  }
}

export async function updateNews(id: number, data: Partial<InsertNews>) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  try {
    const result = await db.update(news).set({ ...data, updatedAt: new Date() }).where(eq(news.id, id));
    return result;
  } catch (error) {
    console.error("[Database] Failed to update news:", error);
    throw error;
  }
}

export async function deleteNews(id: number) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  try {
    const result = await db.delete(news).where(eq(news.id, id));
    return result;
  } catch (error) {
    console.error("[Database] Failed to delete news:", error);
    throw error;
  }
}

export async function getNewsById(id: number) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  try {
    const result = await db.select().from(news).where(eq(news.id, id)).limit(1);
    return result.length > 0 ? result[0] : undefined;
  } catch (error) {
    console.error("[Database] Failed to get news by id:", error);
    throw error;
  }
}

export async function getAllNews(status?: string) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  try {
    if (status) {
      const result = await db.select().from(news).where(eq(news.status, status as any)).orderBy(desc(news.createdAt));
      return result;
    } else {
      const result = await db.select().from(news).orderBy(desc(news.createdAt));
      return result;
    }
  } catch (error) {
    console.error("[Database] Failed to get all news:", error);
    throw error;
  }
}

export async function getPublishedNews() {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  try {
    const result = await db.select().from(news).where(eq(news.status, "published")).orderBy(desc(news.publishedAt));
    return result;
  } catch (error) {
    console.error("[Database] Failed to get published news:", error);
    throw error;
  }
}
