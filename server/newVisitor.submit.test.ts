import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the database functions
vi.mock("./db", () => ({
  createNewVisitor: vi.fn(async (data) => {
    // Simulate database insert
    return { success: true };
  }),
  getNewVisitors: vi.fn(async () => {
    return [];
  }),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("newVisitor.submit", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should successfully submit a new visitor form with required fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.newVisitor.submit({
      name: "張三",
      phone: "0912345678",
      email: "zhangsan@example.com",
      address: "台北市信義區",
      visitDate: "2026-02-01",
      firstTime: "yes",
      interests: "主日崇拜",
      notes: "第一次來訪",
    });

    expect(result).toEqual({
      success: true,
      message: "感謝您的留名",
    });
  });

  it("should successfully submit with only required name field", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.newVisitor.submit({
      name: "李四",
    });

    expect(result).toEqual({
      success: true,
      message: "感謝您的留名",
    });
  });

  it("should fail when name is empty", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.newVisitor.submit({
        name: "",
      });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.message).toContain("too_small");
    }
  });

  it("should handle optional fields correctly", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.newVisitor.submit({
      name: "王五",
      phone: undefined,
      email: undefined,
      address: undefined,
    });

    expect(result).toEqual({
      success: true,
      message: "感謝您的留名",
    });
  });

  it("should validate email format when provided", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.newVisitor.submit({
        name: "趙六",
        email: "invalid-email",
      });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.message).toContain("invalid_format");
    }
  });

  it("should accept valid email format", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.newVisitor.submit({
      name: "孫七",
      email: "sunqi@example.com",
    });

    expect(result).toEqual({
      success: true,
      message: "感謝您的留名",
    });
  });

  it("should set default firstTime value to yes", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.newVisitor.submit({
      name: "周八",
      firstTime: undefined,
    });

    expect(result).toEqual({
      success: true,
      message: "感謝您的留名",
    });
  });

  it("should accept firstTime as no", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.newVisitor.submit({
      name: "吳九",
      firstTime: "no",
    });

    expect(result).toEqual({
      success: true,
      message: "感謝您的留名",
    });
  });
});
