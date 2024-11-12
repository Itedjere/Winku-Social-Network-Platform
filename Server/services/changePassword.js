import bcrypt from "bcryptjs";
import { changePasswordValidationSchema } from "../validations/validationSchema.js";
import { User } from "../models/userModel.js";

export const changePassword = async (passwordInfo, userId) => {
  // Validate the passwordInfo
  const { error, value } =
    changePasswordValidationSchema.validate(passwordInfo);
  if (error) {
    throw new Error(`Validation error: ${error.details[0].message}`);
  }

  // Retrieve the user and compare current password
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }

  const validPassword = await bcrypt.compare(
    passwordInfo.current_password,
    user.password
  );

  if (!validPassword) {
    throw new Error("Incorrect current password");
  }

  // Hash the new password
  const bcryptSalt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(
    passwordInfo.new_password,
    bcryptSalt
  );

  // Update the user's password in the database
  user.password = hashedPassword;
  await user.save();

  // Return success message
  return { status: true, message: "Password changed successfully" };
};
