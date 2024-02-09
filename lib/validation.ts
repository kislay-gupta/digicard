import * as z from "zod"; // Imports all Zod functions, including `when`

export const UserSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: "Full name must be at least 3 characters" }),
  designation: z
    .string()
    .min(3, { message: "Designation must be at least 3 characters" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  photo: z.string(),
  personalPhoneNumber: z
    .string()
    .length(10, { message: "Please enter a valid 10-digit phone number" }),
  personalWhatsapp: z
    .string()
    .length(10, { message: "Please enter a valid 10-digit WhatsApp number" }),
  companyName: z
    .string()
    .min(1, { message: "Company name must be at least 1 character" }),
  companyPhoto: z.string(),
  aboutCompany: z.string().min(10).max(500, {
    message: "About company must be between 10 and 500 characters",
  }),
  companyInstagram: z.string().min(1).max(30, {
    message: "Please enter a valid Instagram username (1-30 characters)",
  }),
  facebookPageId: z.string(),
  companyWebsite: z
    .string()
    .url({ message: "Please enter a valid URL for the company website" }),
});
