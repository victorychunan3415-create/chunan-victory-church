import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";

describe("contact.submit", () => {
  it("successfully submits a contact message with all fields", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {} as any,
      res: {} as any,
    });

    const result = await caller.contact.submit({
      name: "John Doe",
      phone: "0912345678",
      email: "john@example.com",
      subject: "General Inquiry",
      message: "I would like to know more about your church.",
      messageType: "general",
    });

    expect(result.success).toBe(true);
    expect(result.message).toContain("感謝您的訊息");
  });

  it("successfully submits a contact message with required fields only", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {} as any,
      res: {} as any,
    });

    const result = await caller.contact.submit({
      name: "Jane Doe",
      email: "jane@example.com",
      subject: "Counseling Request",
      message: "I need spiritual guidance.",
      messageType: "counseling",
    });

    expect(result.success).toBe(true);
    expect(result.message).toContain("感謝您的訊息");
  });

  it("rejects submission with missing name", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {} as any,
      res: {} as any,
    });

    try {
      await caller.contact.submit({
        name: "",
        email: "test@example.com",
        subject: "Test",
        message: "Test message",
      });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.message).toContain("too_small");
    }
  });

  it("rejects submission with invalid email", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {} as any,
      res: {} as any,
    });

    try {
      await caller.contact.submit({
        name: "Test User",
        email: "invalid-email",
        subject: "Test",
        message: "Test message",
      });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.message).toContain("invalid_format");
    }
  });

  it("rejects submission with missing subject", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {} as any,
      res: {} as any,
    });

    try {
      await caller.contact.submit({
        name: "Test User",
        email: "test@example.com",
        subject: "",
        message: "Test message",
      });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.message).toContain("too_small");
    }
  });

  it("rejects submission with missing message", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {} as any,
      res: {} as any,
    });

    try {
      await caller.contact.submit({
        name: "Test User",
        email: "test@example.com",
        subject: "Test",
        message: "",
      });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.message).toContain("too_small");
    }
  });

  it("accepts different message types", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {} as any,
      res: {} as any,
    });

    const messageTypes = ["general", "counseling", "venue_rental", "other"];

    for (const type of messageTypes) {
      const result = await caller.contact.submit({
        name: "Test User",
        email: "test@example.com",
        subject: "Test",
        message: "Test message",
        messageType: type,
      });

      expect(result.success).toBe(true);
    }
  });
});
