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

export const loginValidationSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export const changePasswordValidationSchema = Joi.object({
  new_password: Joi.string()
    .pattern(
      new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
      )
    )
    .required()
    .messages({
      "string.pattern.base":
        "Password must be at least 8 characters long and contain an uppercase letter, lowercase letter, digit, and special character.",
      "string.empty": "New password is required.",
    }),

  confirm_password: Joi.any()
    .valid(Joi.ref("new_password"))
    .required()
    .messages({
      "any.only": "Confirm password does not match new password.",
    }),

  current_password: Joi.string().required().messages({
    "string.empty": "Current password is required.",
  }),
});
