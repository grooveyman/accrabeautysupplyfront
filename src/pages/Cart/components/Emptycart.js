import React from "react";
import { Link } from "react-router-dom";

const Emptycart = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen text-center p-8">
        <div className="relative w-24 h-24 mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-full h-full"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-gray-600">
          Oops! Your bag is empty.
        </h2>
        <p className="mt-2 text-gray-500">
          Let's change that! Browse our awesome products and bring some life to
          your bag.
        </p>

        <Link
          to="/"
          className="mt-6 px-4 py-2 bg-slate-950 text-white rounded-lg hover:bg-slate-800 transition"
        >
          Back to Shop
        </Link>
      </div>
    </div>
  );
};

export default Emptycart;
