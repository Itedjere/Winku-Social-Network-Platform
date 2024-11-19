import * as Yup from "yup";

export const passwordSchema = Yup.string()
  .required("Password is required")
  .min(8, "Password must be at least 8 characters long")
  .matches(/[a-z]/, "Password must contain at least one lowercase letter")
  .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
  .matches(/\d/, "Password must contain at least one number")
  .matches(
    /[!@#$%^&*(),.?":{}|<>]/,
    "Password must contain at least one special character"
  );

export const registerSchema = Yup.object({
  firstname: Yup.string().required().min(3),
  lastname: Yup.string().required().min(3),
  username: Yup.string().required().min(3),
  password: passwordSchema,
  gender: Yup.string()
    .oneOf(["MALE", "FEMALE"], "Please select a valid gender")
    .required("Gender is required"),
  email: Yup.string().required().email(),
  terms: Yup.boolean()
    .oneOf([true], "You must agree to the terms and conditions")
    .required("You must agree to the terms and conditions"),
}).required();
