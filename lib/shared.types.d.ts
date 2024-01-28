import { Schema } from "mongoose";
import { IUser } from "@/mongodb";

export interface UserParams {
  fullName: string;
  email: string;
  photo: string;
  personalPhoneNumber: string;
  personalWhatsapp: string;
  companyName: string;
  companyPhoneNumber: string;
  companyWhatsappNumber: string;
  companyInstagram?: string;
  facebookPageId?: string;
  telegramChannel?: string;
  companyWebsite?: string;
}
