import { toast } from "react-toastify";
import * as Yup from "yup";
import moment from "moment";

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

export const changePasswordSchema = Yup.object({
  current_password: Yup.string().required(),
  new_password: passwordSchema,
  confirm_password: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("new_password"), null], "Passwords must match"),
});

export const profileEditBasicSchema = Yup.object({
  firstname: Yup.string().required().min(3),
  lastname: Yup.string().required().min(3),
  phone: Yup.string()
    .matches(/^(\+234|0)[789]\d{9}$/, "Enter a valid phone number")
    .required("Phone number is required"),
  dob: Yup.date().nullable(),
  gender: Yup.string()
    .oneOf(["MALE", "FEMALE"], "Please select a valid gender")
    .required("Gender is required"),
  city: Yup.string().nullable(),
  state: Yup.string().nullable(),
  country: Yup.string().required(),
  about_me: Yup.string().nullable(),
}).required();

export const loginSchema = Yup.object({
  username: Yup.string().required(),
  password: Yup.string().required(),
}).required();

export const handleApolloErrors = (error) => {
  if (error.graphQLErrors?.length > 0) {
    error.graphQLErrors.forEach(({ message }) => toast.error(message));
  } else if (error.networkError) {
    toast.error("Network error occurred. Please try again.");
  } else {
    toast.error("An unexpected error occurred.");
  }
};

// Determine postType based on file MIME type
export const mimeToPostType = {
  "image/jpeg": "IMAGE",
  "image/png": "IMAGE",
  "image/gif": "IMAGE",
  "video/mp4": "VIDEO",
  "video/mpeg": "VIDEO",
  "video/x-matroska": "VIDEO",
};

export const formatPostDate = (dateString) => {
  const now = moment();
  const postDate = moment(dateString);

  if (now.diff(postDate, "seconds") < 60) {
    return `${now.diff(postDate, "seconds")}s`; // Seconds ago
  } else if (now.diff(postDate, "minutes") < 60) {
    return `${now.diff(postDate, "minutes")}m`; // Minutes ago
  } else if (now.diff(postDate, "hours") < 24) {
    return `${now.diff(postDate, "hours")}h`; // Hours ago
  } else if (now.diff(postDate, "days") < 7) {
    return `${now.diff(postDate, "days")}d`; // Days ago
  } else if (now.year() === postDate.year()) {
    return postDate.format("MMMM D [at] h:mm a"); // Month Day at Time
  } else {
    return postDate.format("MMMM D, YYYY [at] h:mm a"); // Full Date for older years
  }
};

export const formatDate = (date) => {
  if (!date) return ""; // Handle null or undefined dates
  const isoDate = new Date(date).toISOString(); // Convert to ISO format
  return isoDate.slice(0, 10); // Extract only the date part
};

export const photoCropTypes = {
  portrait: {
    width: 200,
    height: 200,
    cropType: "portrait",
  },
  landscape: {
    width: 1366,
    height: 400,
    cropType: "landscape",
  },
};
