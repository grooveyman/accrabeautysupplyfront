import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Bubble from "./Bubble";
import classes from "../Header.module.css";
import { ModalContext, Authcontext } from "../../../context";
import AuthMenu from "./AuthMenu";

const Navitems = () => {
  const { toggleAuth } = useContext(ModalContext);
  const { isLoggedIn } = useContext(Authcontext);

  const [toggleAuthMenu, setToggleAuthMenu] = useState(false);

  const authMenuHandler = (e) => {
    e.stopPropagation();
    setToggleAuthMenu((prevstate) => !prevstate);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (toggleAuthMenu) {
        setToggleAuthMenu(false);
      }
    };

    if (toggleAuthMenu) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [toggleAuthMenu]);

  return (
    <div className="flex justify-between gap-1">
      <NavLink
        to={"/search"}
        className={`flex justify-center items-center px-1 ${classes.icon}`}
        title="Search"
      >
        <div className="search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </NavLink>

      <div
        className={`hidden sm:flex sm:justify-center sm:items-center sm:px-1 cursor-pointer relative ${classes.icon}`}
        onClick={isLoggedIn ? authMenuHandler : toggleAuth}
        title="User"
      >
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          {isLoggedIn && "Emmanuel"}
        </div>
        <AuthMenu toggleAuthMenu={toggleAuthMenu} />
      </div>

      <NavLink
        to={"/cart"}
        className={`flex justify-center items-center px-1 ${classes.icon}`}
        title="Bag"
      >
        <div className="shoppingbagicon relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          <Bubble />
        </div>
      </NavLink>
    </div>
  );
};

export default Navitems;
