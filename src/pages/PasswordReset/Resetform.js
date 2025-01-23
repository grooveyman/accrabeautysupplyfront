import React from "react";
import { useFormik } from "formik";
import { ResettPasswordSchema } from "../../helpers/FormValidation";
import {
  showErrorToast,
  showSuccessToast,
} from "../../helpers/Helperfunctions";
import { usePost } from "../../hooks";
import { Endpoints } from "../../services";
import { Link, useSearchParams, useNavigate } from "react-router-dom";

const Resetform = () => {
    const [searchParams] = useSearchParams();
    const resetToken = searchParams.get("token");
    const emailParam = searchParams.get("username");
    const navigate = useNavigate();

  const { postReq, isPending } = usePost(
    ["resetpassword"],
    Endpoints.RESET_PASSWORD
  );
  const iniValues = {
    password: "",
    confirmpassword: "",
  };

  const formik = useFormik({
    initialValues: iniValues,

    validationSchema: ResettPasswordSchema,

    // Submit handler
    onSubmit: (values) => {
      postReq({'email': emailParam, 'password': values.password, 'password_confirmation': values.confirmpassword, 'token': resetToken}, {
        onSuccess: (data) => {
          showSuccessToast(
            "Password successfully changed!"
          );
          return navigate('/');
        },
        onError: (error) => {
          showErrorToast("Failed to reset password");
        },
      });
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="passwordContainer mb-4 sm:mb-2">
          <label
            htmlFor="password"
            className="block text-sm/6 font-medium text-gray-900 mb-2"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 ${
              formik.touched.password && formik.errors.password
                ? "outline-red-500"
                : "outline-gray-300 focus:outline-slate-950"
            } placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 sm:text-sm/6`}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-xs">{formik.errors.password}</div>
          ) : null}
        </div>
        <div className="passwordContainer mb-4 sm:mb-2">
          <label
            htmlFor="password"
            className="block text-sm/6 font-medium text-gray-900 mb-2"
          >
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmpassword"
            id="confirmpassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmpassword}
            className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 ${
              formik.touched.confirmpassword && formik.errors.confirmpassword
                ? "outline-red-500"
                : "outline-gray-300 focus:outline-slate-950"
            } placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 sm:text-sm/6`}
          />
          {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
            <div className="text-red-500 text-xs">
              {formik.errors.confirmpassword}
            </div>
          ) : null}
        </div>
        <button
          type="submit"
          className="rounded-md w-full bg-slate-950 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 mb-4"
          disabled={isPending}
        >
          {isPending ? "Submitting..." : "Submit"}
        </button>
      </form>
      <Link
        to={"/"}
        className="block text-center rounded-md w-full bg-transparent px-3 py-3 text-sm font-semibold text-gray-600 hover:shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 mb-3"
      >
        Cancel
      </Link>
    </div>
  );
};

export default Resetform;
