import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  gender: { type: String, enum: ["male", "female"], required: true },
  email: { type: String, required: true, unique: true },
  about_me: { type: String },
  phone: { type: String },
  city: { type: String },
  state: { type: String },
  country: { type: String },
  website: { type: String },
  interests: [{ type: String }],
  languages: [{ type: String }],
  dob: { type: Date }, // Combined DOB field
  settings: {
    notifications: {
      enable_notification: { type: Boolean, default: true },
      enable_notification_sound: { type: Boolean, default: true },
      enable_sms: { type: Boolean, default: false },
    },
    privacy: {
      hide_profile: { type: Boolean, default: false },
      hide_profile_photo: { type: Boolean, default: false },
      show_me_online: { type: Boolean, default: true },
      expose_author_name: { type: Boolean, default: true },
    },
    display: {
      theme: { type: String, enum: ["day", "night"], default: "day" },
    },
    interactions: {
      enable_tagging: { type: Boolean, default: true },
      enable_friend_requests: { type: Boolean, default: true },
      enable_follow_me: { type: Boolean, default: true },
    },
  },
  profile_photo: { type: String },
  cover_photo: { type: String },
});

export const User = mongoose.model("User", userSchema);
