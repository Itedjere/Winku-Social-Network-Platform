import { User } from "../models/userModel.js";

export const retrieveUser = async (userId) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("Failed to find user. Please try again");
  }

  return user;
};
