import { User } from "../models/userModel.js";

export const uploadProfilePhoto = async (args, req) => {
  const { fileUrl } = args;
  const { userId } = req;

  const user = await User.findOneAndUpdate(
    { _id: userId },
    { profile_photo: fileUrl },
    { new: true }
  );

  if (!user) {
    throw new Error("Failed to save photo in database");
  }

  return user;
};
