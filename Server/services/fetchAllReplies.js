import { Reply } from "../models/replyModel.js";

export const fetchAllReplies = async (commentId) => {
  const replies = await Reply.find({ commentId })
    .sort({ createdAt: -1 })
    .populate("userId", "firstname lastname profile_photo")
    .populate("commentId")
    .exec();

  return replies;
};
