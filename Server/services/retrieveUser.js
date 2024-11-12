import mongoose from "mongoose";
import { User } from "../models/userModel.js";

export const retrieveUser = async (userId) => {
  // Validate userId as a MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    throw new Error("Invalid user ID.");
  }

  const user = await User.findById(userId);

  if (!user) {
    throw new Error("User not found.");
  }

  return user;
};
