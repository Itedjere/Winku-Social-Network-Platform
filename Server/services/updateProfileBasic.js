import { User } from "../models/userModel.js";
import { profileEditBasicValidationSchema } from "../validations/validationSchema.js";

export const updateProfileBasic = async (args, req) => {
  const { basicInfo } = args;
  // Validate the user details
  const { error, value } = profileEditBasicValidationSchema.validate(basicInfo);

  if (error) {
    throw new Error(`Validation error: ${error.details[0].message}`);
  }

  //   find user model and update it
  const user = await User.findOneAndUpdate(
    { _id: req.userId },
    { ...basicInfo },
    { new: true }
  );

  if (!user) {
    throw new Error("An error occured. Please try again");
  }

  return user;
};
