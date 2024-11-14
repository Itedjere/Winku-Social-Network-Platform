import mongoose from "mongoose";

const replySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  commentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
    required: true,
  },
  textContent: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Reply = mongoose.model("Reply", replySchema);
