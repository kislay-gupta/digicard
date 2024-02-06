import { Schema } from "mongoose";
import { IUser } from "@/mongodb";

export interface UserParams {
  fullName: string;
  designation: string;
  email: string;
  photo: string;
  personalPhoneNumber: string;
  personalWhatsapp: string;
  companyName: string;
  aboutCompany?: string;
  companyPhoto?: string;
  companyInstagram?: string;
  facebookPageId?: string;

  companyWebsite?: string;
}

export interface GetUserByIdParams {
  userId: string;
}
