import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../../../context";

const Authform = ({ formik, forgotFormSwitch }) => {
  const { loginActive, closeLogin } = useContext(Authcontext);

  return (
    <form onSubmit={formik.handleSubmit}>
      {!loginActive && (
        <div className="flex gap-3 nameContainer mb-4 sm:mb-2">
          <div className="firstnameContainer w-full">
            <label
              htmlFor="firstName"
              className="block text-sm/6 font-medium text-gray-900 mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 ${
                formik.touched.firstName && formik.errors.firstName
                  ? "outline-red-500" // Error state
                  : "outline-gray-300 focus:outline-slate-950"
              } placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 sm:text-sm/6`}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="text-red-500 text-xs">
                {formik.errors.firstName}
              </div>
            ) : null}
          </div>
          <div className="othernamesContainer w-full">
            <label
              htmlFor="otherNames"
              className="block text-sm/6 font-medium text-gray-900 mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              name="otherNames"
              id="otherNames"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.otherNames}
              className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 ${
                formik.touched.otherNames && formik.errors.otherNames
                  ? "outline-red-500"
                  : "outline-gray-300 focus:outline-slate-950"
              } placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 sm:text-sm/6`}
            />
            {formik.touched.otherNames && formik.errors.otherNames ? (
              <div className="text-red-500 text-xs">
                {formik.errors.otherNames}
              </div>
            ) : null}
          </div>
        </div>
      )}
      <div className="emailContainer mb-4 sm:mb-2">
        <label
          htmlFor="email"
          className="block text-sm/6 font-medium text-gray-900 mb-2"
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

      {loginActive && (
        <div className="signInContainer">
          <div className="mb-4 ">
            <span
              className="underline underline-offset-2 text-sm cursor-pointer text-gray-900 hover:text-gray-600"
              onClick={forgotFormSwitch}
            >
              Forgot Password?
            </span>
          </div>
          <button
            type="submit"
            className="rounded-md w-full bg-slate-950 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 mb-4"
          >
            Sign In
          </button>

          <div
            className="flex justify-center cursor-pointer"
            onClick={closeLogin}
          >
            <span className="underline underline-offset-2 text-sm text-gray-900 hover:text-gray-600">
              New to AccraBeautySupply? Register
            </span>
          </div>
        </div>
      )}

      {!loginActive && (
        <div className="registrationContainer">
          <div className="mt-3 sm:mt-2 sm:mb-2 mb-5">
            <p className="text-sm text-gray-600">
              By registering, you agree to our{" "}
              {
                <Link to={"#"} className="underline underline-offset-2">
                  Terms & Conditions
                </Link>
              }
              ,{" "}
              {
                <Link to={"#"} className="underline underline-offset-2">
                  Privacy and Cookie Policy
                </Link>
              }
              .
            </p>
          </div>

          <button
            type="submit"
            className="rounded-md w-full bg-slate-950 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          >
            Register
          </button>
        </div>
      )}
    </form>
  );
};

export default Authform;
