import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";
import { loginValidationSchema } from "../validations/validationSchema.js";

export const loginUser = async (loginInfo) => {
  try {
    // Validate loginInfo
    const { error, value } = loginValidationSchema.validate(loginInfo);
    if (error) {
      throw new Error(`Validation error: ${error.details[0].message}`);
    }

    // Find user by username
    const user = await User.findOne({ username: loginInfo.username });

    // Return error if user is not found
    if (!user) {
      throw new Error("Incorrect login details");
    }

    // Check if password is valid
    const validPassword = await bcrypt.compare(
      loginInfo.password,
      user.password
    );
    if (!validPassword) {
      throw new Error("Incorrect login details");
    }

    // Generate token
    const jwtPrivateKey = process.env.JWTPRIVATEKEY;
    if (!jwtPrivateKey) {
      throw new Error("JWT Private Key is missing in environment variables.");
    }

    const token = jwt.sign({ userId: user._id }, jwtPrivateKey, {
      expiresIn: "7d",
    });

    // Return the user and token
    return { user, token };
  } catch (error) {
    console.error("Error during login:", error.message);
    throw new Error("Login failed. Please check your details and try again.");
  }
};
