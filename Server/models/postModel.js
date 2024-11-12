import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  postType: { type: String, enum: ["TEXT", "IMAGE", "VIDEO"], required: true },
  textContent: { type: String, required: true },
  mediaURL: { type: String }, // URL to media file if it's an image/video
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export const Post = mongoose.model("Post", postSchema);