import React from "react";
import "../Footer.css";

const Newsletter = () => {
  return (
    <div className="newsletter py-3 flex lg:flex-row flex-col gap-y-4 lg:gap-y-0 justify-between w-full">
      <div>
        <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
          Subscribe to our newsletter
        </h3>
        <p className="text-base/7 text-gray-600">
          Get trend updates, style tips and more
        </p>
      </div>

      <div className="lg:max-w-md w-full flex items-center">
        <div className="flex flex-col sm:flex-row w-full gap-x-3">
          <div className="w-full sm:max-w-md mb-3 sm:mb-0">
            <input
              type="text"
              name="letteremail"
              id="letteremail"
              autoComplete="email"
              placeholder="Enter your email"
              className="block w-full sm:max-w-md rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm/6"
            />
          </div>
          <div>
            <button className="rounded-md w-full bg-slate-950 px-4 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
