import * as Yup from "yup";

export const RegistrationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  otherNames: Yup.string().required("Required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),

//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref("password"), null], "Passwords must match") // Matches password
//     .required("Confirm Password is required"),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
