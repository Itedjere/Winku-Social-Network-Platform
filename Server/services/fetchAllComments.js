import { Comment } from "../models/commentModel.js";

export const fetchAllComments = async (postId) => {
  // fetch all comments for a particular postId
  const comments = await Comment.find({ postId })
    .sort({ createdAt: -1 })
    .populate("userId", "firstname lastname profile_photo")
    .populate("postId")
    .exec();

  // loop through each comment and return count of replies array as repliesCount
  const commentsWithRepliesCount = comments.map((comment) => ({
    ...comment.toObject(),
    repliesCount: comment.replies.length,
  }));

  // return comments
  return commentsWithRepliesCount;
};
