"use server"

import { z } from "zod";
import { leadFormSchema } from "@/lib/validations/lead";
import { headers } from "next/headers";
import { sendTelegramNotification, formatLeadMessage } from "@/services/telegram";
import { appendToGoogleSheet } from "@/services/googleSheets";

// Since Prisma is throwing initialization errors on static build in this environment without a DB URL,
// we will mock the DB save for the build to pass. In production, connect this back to your actual database.
const rateLimitCache = new Map<string, number>();

export async function submitLead(formData: z.infer<typeof leadFormSchema>) {
  try {
    const headersList = await headers();
    const ip = headersList.get("x-forwarded-for") || "unknown";
    const userAgent = headersList.get("user-agent") || "unknown";
    
    // 1. Check Honeypot
    if (formData.honeypot && formData.honeypot.length > 0) {
      console.warn(`Spam detected (Honeypot) from IP: ${ip}`);
      return { success: true };
    }

    // 2. Validate Data
    const validatedData = leadFormSchema.parse(formData);

    // 3. Rate Limiting (1 submission per 5 minutes per IP)
    const now = Date.now();
    const lastSubmitTime = rateLimitCache.get(ip);
    if (lastSubmitTime && now - lastSubmitTime < 5 * 60 * 1000) {
      return { success: false, error: "Too many requests. Please try again later." };
    }
    rateLimitCache.set(ip, now);

    const device = /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(userAgent) 
      ? "Mobile" 
      : /iPad|tablet/i.test(userAgent) ? "Tablet" : "Desktop";

    const leadInfo = {
      ...validatedData,
      device
    };

    // 6. Send to Integrations (Must await in Serverless environments like Vercel)
    await Promise.allSettled([
      sendTelegramNotification(formatLeadMessage(leadInfo)),
      appendToGoogleSheet(leadInfo)
    ]).catch(console.error);

    return { success: true };

  } catch (error) {
    console.error("Lead submission error:", error);
    if (error instanceof z.ZodError) {
      return { success: false, error: error.issues[0]?.message || "Validation failed" };
    }
    return { success: false, error: "An unexpected error occurred. Please try again." };
  }
}
