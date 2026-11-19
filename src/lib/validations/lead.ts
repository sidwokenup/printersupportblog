import { z } from "zod";

// Validates US phone numbers (e.g., +1 5551234567, (555) 123-4567, 555-123-4567, 5551234567)
const usPhoneRegex = /^(?:\+1\s?)?\(?([2-9][0-8][0-9])\)?[-.\s]?([2-9][0-9]{2})[-.\s]?([0-9]{4})$/;

export const leadFormSchema = z.object({
  fullName: z.string().optional(),
  email: z.union([z.literal(""), z.string().email("Please enter a valid email address")]).optional(),
  phone: z
    .string()
    .regex(usPhoneRegex, "Please enter a valid US phone number (e.g. (555) 123-4567)"),
  leadType: z.enum(["callback", "promotions", "general"]).optional(),
  printerSeries: z.string().optional(),
  interestCategory: z.string().optional(),
  issueFacing: z.string().optional(),
  preferredTime: z.string().optional(),
  promotionalOptIn: z.boolean().optional(),
  operatingSystem: z.string().optional(),
  pageUrl: z.string().optional(),
  source: z.string().optional(),
  honeypot: z.string().max(0, "Invalid submission").optional(),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;
