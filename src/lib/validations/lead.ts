import { z } from "zod";

// Validates US phone numbers (e.g., +1 5551234567, (555) 123-4567, 555-123-4567, 5551234567)
const usPhoneRegex = /^(?:\+1\s?)?\(?([2-9][0-8][0-9])\)?[-.\s]?([2-9][0-9]{2})[-.\s]?([0-9]{4})$/;

export const leadFormSchema = z.object({
  printerSeries: z.string().optional(),
  issueFacing: z.string().optional(),
  operatingSystem: z.string().optional(),
  email: z.union([z.literal(""), z.string().email("Please enter a valid email address")]).optional(),
  phone: z
    .string()
    .regex(usPhoneRegex, "Please enter a valid US phone number"),
  pageUrl: z.string().optional(),
  source: z.string().optional(),
  // Honeypot field for spam prevention
  honeypot: z.string().max(0, "Invalid submission").optional(),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;
