import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../../../context";

const Authform = () => {
  const { loginActive, closeLogin } = useContext(Authcontext);

  return (
    <form>
      {loginActive || (
        <div className="flex gap-3 nameContainer mb-4 sm:mb-2">
          <div className="firstnameContainer w-full">
            <label
              htmlFor="firstname"
              className="block text-sm/6 font-medium text-gray-900 mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-slate-950 sm:text-sm/6"
            />
          </div>
          <div className="othernamesContainer w-full">
            <label
              htmlFor="othernames"
              className="block text-sm/6 font-medium text-gray-900 mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              name="othernames"
              id="othernames"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-slate-950 sm:text-sm/6"
            />
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
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-slate-950 sm:text-sm/6"
        />
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
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-slate-950 sm:text-sm/6"
        />
      </div>

      {loginActive && (
        <div className="signInContainer">
          <div className="mb-4 ">
            <Link to={""} className="underline underline-offset-2 text-sm">
              Forgot Password?
            </Link>
          </div>
          <button className="rounded-md w-full bg-slate-950 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 mb-3">
            Sign In
          </button>

          <div className="flex justify-center cursor-pointer" onClick={closeLogin}>
            <span className="underline underline-offset-2 text-sm">
              New to AccraBeautySupply? Register
            </span>
          </div>
        </div>
      )}

      {loginActive || (
        <div className="registrationContainer">
          <div className="mt-3 sm:mt-2 sm:mb-3 mb-5">
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

          <button className="rounded-md w-full bg-slate-950 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 mb-3">
            Register
          </button>
        </div>
      )}
    </form>
  );
};

export default Authform;
