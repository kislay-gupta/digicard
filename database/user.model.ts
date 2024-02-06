import { Schema, models, model, Document } from "mongoose";

export interface IUser extends Document {
  fullName: string;
  email: string;
  photo: string;
  personalPhoneNumber: string;
  personalWhatsapp: string;
  designation: string;
  companyName: string;
  companyPhoto: string;
  aboutCompany: string;
  companyInstagram?: string;
  facebookPageId?: string;
  companyWebsite?: string;
  createdAt: Date;
}

const UserSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  photo: { type: String, required: true },
  companyPhoto: { type: String, required: true },
  designation: { type: String, required: true },
  aboutCompany: { type: String, required: true },
  personalPhoneNumber: { type: String, required: true },
  personalWhatsapp: { type: String, required: true },
  companyName: { type: String, required: true },
  facebookPageId: { type: String },
  companyInstagram: { type: String, required: true },
  companyWebsite: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const User = models.User || model("User", UserSchema);

export default User;
