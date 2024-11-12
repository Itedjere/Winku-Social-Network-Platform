import Joi from "joi";

export const signupValidationSchema = Joi.object({
  firstname: Joi.string().min(3).required(),
  lastname: Joi.string().min(3).required(),
  username: Joi.string().min(2).required(),
  password: Joi.string()
    .pattern(
      new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
      )
    )
    .required()
    .messages({
      "string.pattern.base":
        "Password must be at least 8 characters long and contain an uppercase letter, lowercase letter, digit, and special character.",
    }),
  gender: Joi.string().valid("MALE", "FEMALE").required(),
  email: Joi.string().email().required(),
});
