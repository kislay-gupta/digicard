"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { GetUserByIdParams, UserParams } from "../shared.types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import mongoose from "mongoose";

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
      companyInstagram,
      facebookPageId,
      companyWebsite,
      designation,
      aboutCompany,
      companyPhoto,
    } = params;

    const user = await User.create({
      fullName,
      email,
      photo,
      personalPhoneNumber,
      personalWhatsapp,
      companyName,
      companyInstagram,
      facebookPageId,
      companyWebsite,
      designation,
      aboutCompany,
      companyPhoto,
    });
    return user;
    revalidatePath("/users");
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getAllUser(params: any) {
  try {
    connectToDatabase();

    const users = await User.find({}).sort({ params });

    return { users };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export async function getUserById(params: GetUserByIdParams) {
  try {
    connectToDatabase();
    const { userId } = params;
    console.log(userId, "user id");
    const objectId = new mongoose.Types.ObjectId(userId);

    const user = await User.findOne({ _id: objectId });

    if (!user) {
      // User not found, redirect to the desired page
      return redirect("/user-not-found"); // Assuming you're using Express
    }

    return { user };
  } catch (error: any) {
    console.log(error);

    // Handle other errors (e.g., database connection issues) and potentially redirect to different pages
    if (error.message === "user not found") {
      return redirect("/user-not-found");
    } else {
      // Handle other errors as needed, potentially with different redirects
      return redirect("/error");
    }
  }
}
