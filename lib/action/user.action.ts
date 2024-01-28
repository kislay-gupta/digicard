"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { UserParams } from "../shared.types";

export async function createUser(params: UserParams) {
  try {
    connectToDatabase();
    const {
      fullName,
      email,
      photo,
      personalPhoneNumber,
      personalWhatsapp,
      companyName,
      companyPhoneNumber,
      companyWhatsappNumber,
      companyInstagram,
      facebookPageId,
      telegramChannel,
      companyWebsite,
    } = params;

    const user = await User.create({
      fullName,
      email,
      photo,
      personalPhoneNumber,
      personalWhatsapp,
      companyName,
      companyPhoneNumber,
      companyWhatsappNumber,
      companyInstagram,
      facebookPageId,
      telegramChannel,
      companyWebsite,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getAllUser(params: any) {
  try {
    connectToDatabase();
    const users = await User.find({}).sort({ createdAt: -1 });

    return { users };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export async function getUserById(userId: string) {
  try {
    connectToDatabase();
    const user = await User.findById(userId);
    return { user };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
