import { z } from "zod";

export const UserSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: "FullName must be at least 3 characters" }),
  designation: z.string().min(3),
  email: z.string().email({ message: "Please enter a valid email" }),
  photo: z.string(),
  personalPhoneNumber: z
    .string()
    .length(10, { message: "Please enter a valid phone number" }),
  personalWhatsapp: z
    .string()
    .length(10, { message: "Please enter a valid phone number" }),
  companyName: z
    .string()
    .min(1, { message: "company name must be at least 1 characters" }),
  companyPhoto: z.string(),
  aboutCompany: z.string().min(10).max(500),
  companyInstagram: z
    .string()
    .min(1)
    .max(30, { message: "Please enter a valid Instagram username" }),
  facebookPageId: z.string(),
  companyWebsite: z.string().url({ message: "Please enter a valid url" }),
});
