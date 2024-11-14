import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
  textContent: { type: String, required: true },
  replies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Reply" }],
  createdAt: { type: Date, default: Date.now },
});

export const Comment = mongoose.model("Comment", commentSchema);
