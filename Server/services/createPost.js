import { Post } from "../models/postModel.js";
import { addPostValidationSchema } from "../validations/validationSchema.js";

export const createPost = async (postInfo, req) => {
  // If a file was uploaded, save the media URL
  let mediaURL = null;
  if (!req.file) {
    throw new Error("Please add a media to your post");
  }
  mediaURL = `/uploads/${req.file?.filename}`; // Path to the uploaded file

  // throw error if the postInfo fails validation
  const { error, value } = addPostValidationSchema.validate(postInfo);
  if (error) {
    throw new Error(`Validation error: ${error.details[0].message}`);
  }

  // Create the post with required fields
  const post = new Post({
    userId: req.userId,
    postType: postInfo.postType,
    textContent: postInfo.textContent,
    mediaURL,
    createdAt: new Date(),
  });

  await post.save();
  return await post
    .populate("userId", "firstname lastname profile_photo")
    .execPopulate(); // Only include specific fields
};
