import { z } from "zod";

export const UserSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 1 characters" }),
  email: z.string().email(),
  photo: z.string(),
  personalPhoneNumber: z.string(),
  personalWhatsapp: z.string(),
  companyName: z.string(),
  companyPhoneNumber: z.string(),
  companyWhatsappNumber: z.string(),
  companyInstagram: z.string(),
  facebookPageId: z.string(),
  telegramChannel: z.string(),
  companyWebsite: z.string().url(),
});
