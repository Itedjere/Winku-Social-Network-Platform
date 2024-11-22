import { Post } from "../models/postModel.js";
import { addPostValidationSchema } from "../validations/validationSchema.js";

export const createPost = async (postInfo, req) => {
  // throw error if the postInfo fails validation
  const { error, value } = addPostValidationSchema.validate(postInfo);
  if (error) {
    throw new Error(`Validation error: ${error.details[0].message}`);
  }

  // Create the post with required fields
  const post = new Post({
    user: req.userId,
    postType: postInfo.postType,
    textContent: postInfo.textContent,
    mediaURL: postInfo.mediaURL,
  });

  await post.save();
  return Post.findById(post._id).populate("user");
  // return await post.populate("userId", "_id firstname lastname profile_photo"); // Only include specific fields
};
