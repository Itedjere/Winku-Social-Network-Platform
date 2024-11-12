import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import { User } from "../models/userModel.js";
import { signupValidationSchema } from "../validations/validationSchema.js";

export const registerUser = async (signupInfo) => {
  // Validate the user details
  const { error, value } = signupValidationSchema.validate(signupInfo);
  if (error) {
    throw new Error(`Validation error: ${error.details[0].message}`);
  }

  // Check if user already exists
  const existingUser = await User.findOne({ email: signupInfo.email });
  if (existingUser) {
    throw new Error("An account with this email already exists.");
  }

  // Check if username already exists
  const existingUsername = await User.findOne({
    username: signupInfo.username,
  });
  if (existingUsername) {
    throw new Error("An account with this username already exists.");
  }

  // Hash password
  const bcryptSalt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(signupInfo.password, bcryptSalt);

  // Save user details
  const user = new User({ ...signupInfo, password: hashedPassword });
  await user.save();

  if (!user) {
    throw new Error("Failed to sign you up. Please try again.");
  }

  // Generate token
  const jwtPrivateKey = process.env.JWTPRIVATEKEY;
  if (!jwtPrivateKey) {
    throw new Error("JWT Private Key is missing in environment variables.");
  }

  const token = jwt.sign({ userId: user._id }, jwtPrivateKey, {
    expiresIn: "7d",
  });

  // Return the new user and token
  return { user, token };
};
