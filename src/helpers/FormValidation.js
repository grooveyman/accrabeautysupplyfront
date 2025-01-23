import * as Yup from "yup";

export const RegistrationSchema = Yup.object().shape({
  othernames: Yup.string().trim().required("First Name is required"),
  lastname: Yup.string().trim().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});

export const ResettPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
    confirmpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match") // Matches password
    .required("Confirm Password is required"),
});
