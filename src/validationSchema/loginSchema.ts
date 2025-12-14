import * as Yup from "yup";

export const LoginSchema = Yup.object({
  email: Yup.string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Invalid email address"
    )
    .required("Email is required"),
  
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});