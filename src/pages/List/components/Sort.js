import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Sort = ({ category }) => {
  const [sorttoggle, setSortToggle] = useState(false);

  const handleSortToggle = () => {
    setSortToggle(!sorttoggle);
  };

  useEffect(() => {
    setSortToggle(false);
  }, [category]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sorttoggle) {
        setSortToggle(false);
      }
    };

    if (sorttoggle) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [sorttoggle]);

  return (
    <div className="w-full flex justify-between items-center">
      <div>
        <p className="text-sm font-medium text-gray-700">Total Products</p>
      </div>
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
          id="menu-button"
          aria-expanded="false"
          aria-haspopup="true"
          onClick={handleSortToggle}
        >
          Sort
          <svg
            className={`${sorttoggle ? 'rotate-180' : ''} transition-all -mr-1 ml-1 h-5 w-5 shrink-0 text-gray-400 group-hover:text-gray-500 hover:bg-neutral-100`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div
          className={` ${
            sorttoggle ? "block" : "hidden"
          } absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <Link
              to={"#"}
              className="block w-full text-left px-4 py-2 text-sm hover:bg-neutral-100 font-medium text-gray-900"
              tabIndex="-1"
              id="menu-item-0"
            >
              Most Popular
            </Link>
            <Link
              to={"#"}
              className="block w-full text-left px-4 py-2 text-sm text-gray-500 hover:bg-neutral-100"
              tabIndex="-1"
              id="menu-item-2"
            >
              Newest
            </Link>
            <Link
              to={"#"}
              className="block w-full text-left px-4 py-2 text-sm text-gray-500 hover:bg-neutral-100"
              tabIndex="-1"
              id="menu-item-3"
            >
              Price: Low to High
            </Link>
            <Link
              to={"#"}
              className="block w-full text-left px-4 py-2 text-sm text-gray-500 hover:bg-neutral-100"
              tabIndex="-1"
              id="menu-item-4"
            >
              Price: High to Low
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sort;
