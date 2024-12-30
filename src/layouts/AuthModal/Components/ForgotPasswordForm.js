import React from "react";
import { useFormik } from "formik";
import { ForgotPasswordSchema } from "../../../helpers/FormValidation";

const ForgotPasswordForm = ({ forgotFormSwitch }) => {
  const iniValues = {
    email: "",
  };

  const formik = useFormik({
    initialValues: iniValues,

    validationSchema: ForgotPasswordSchema,

    // Submit handler
    onSubmit: (values) => {
      console.log("Form Data:", values);
    },
  });

  return (
    <div className="formContent">
      <div className="text-base text-gray-900 mb-4">
        Enter your email address and we'll send you a link to reset your
        password
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="emailContainer mb-4">
          <label
            htmlFor="email"
            className="block text-sm/6 font-medium text-gray-700 mb-2"
          >
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 ${
              formik.touched.email && formik.errors.email
                ? "outline-red-500"
                : "outline-gray-300 focus:outline-slate-950"
            } placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 sm:text-sm/6`}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-xs">{formik.errors.email}</div>
          ) : null}
        </div>
        <button
          type="submit"
          className="rounded-md w-full bg-slate-950 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 mb-4"
        >
          Reset Password
        </button>
      </form>
        <button
          className="rounded-md w-full bg-transparent px-3 py-3 text-sm font-semibold text-gray-600 hover:shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 mb-3"
          onClick={forgotFormSwitch}
        >
          Back To Sign In
        </button>
    </div>
  );
};

export default ForgotPasswordForm;
