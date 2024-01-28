import { Schema, models, model, Document } from "mongoose";

export interface IUser extends Document {
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
  createdAt: Date;
}

const UserSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  photo: { type: String, required: true },
  personalPhoneNumber: { type: String, required: true },
  personalWhatsapp: { type: String, required: true },
  companyName: { type: String, required: true },
  companyPhoneNumber: { type: String, required: true },
  companyWhatsappNumber: { type: String, required: true },
  companyInstagram: { type: String, required: true },
  telegramChannel: { type: String, required: true },
  companyWebsite: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const User = models.User || model("User", UserSchema);

export default User;
