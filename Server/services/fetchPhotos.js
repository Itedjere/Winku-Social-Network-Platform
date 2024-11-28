import mongoose from "mongoose";
import { Post } from "../models/postModel.js";

export const fetchPhotos = async (args) => {
  const { profileId } = args;

  // validate profile id
  if (!mongoose.Types.ObjectId.isValid(profileId)) {
    throw new Error("Invalid user ID.");
  }

  // write query
  const photos = await Post.find({ user: profileId, postType: "IMAGE" }).sort({
    createdAt: -1,
  });

  if (!photos) {
    throw new Error("Failed to fetch photos");
  }

  // return result
  return photos;
};
