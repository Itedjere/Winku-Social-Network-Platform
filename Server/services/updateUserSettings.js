import mongoose from "mongoose";
import { User } from "../models/userModel.js";

export const updateUserSettings = async (args, req) => {
  const { settings } = args;
  const { userId } = req;

  // Validate userId
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    throw new Error("Invalid user ID");
  }

  // Find and update the user
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }

  // Update only provided settings fields
  if (settings.notifications) {
    user.settings.notifications = {
      ...user.settings.notifications,
      ...settings.notifications,
    };
  }
  if (settings.privacy) {
    user.settings.privacy = {
      ...user.settings.privacy,
      ...settings.privacy,
    };
  }
  if (settings.display) {
    user.settings.display = {
      ...user.settings.display,
      ...settings.display,
    };
  }
  if (settings.interactions) {
    user.settings.interactions = {
      ...user.settings.interactions,
      ...settings.interactions,
    };
  }

  // Save the updated user
  await user.save();

  // Return updated user
  return user;
};
