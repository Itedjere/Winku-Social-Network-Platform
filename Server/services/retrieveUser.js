import mongoose from "mongoose";
import { User } from "../models/userModel.js";
import { Friend } from "../models/friendModel.js";

export const retrieveUser = async (profileId, req) => {
  // Validate profileId as a MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(profileId)) {
    throw new Error("Invalid user ID.");
  }

  const user = await User.findById(profileId);

  if (!user) {
    throw new Error("User not found.");
  }

  return user;
};
