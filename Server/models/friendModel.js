import mongoose from "mongoose";

const friendSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  friend: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  status: {
    type: String,
    enum: ["PENDING", "ACCEPTED", "BLOCKED"],
    default: "PENDING",
  },
  createdAt: { type: Date, default: Date.now },
});

friendSchema.index({ user: 1, friend: 1 }, { unique: true }); // Prevent duplicate relationships

export const Friend = mongoose.model("Friend", friendSchema);
