import React, { useContext } from "react";
import Modal from "../../components/modal/Modal";
import XIcon from "../Header/components/XIcon";
import { NavLink } from "react-router-dom";
import { ModalContext } from "../../context";
import { Authcontext } from "../../context";

const NAV_ITEMS = [
  { id: 1, name: "Cosmetics", path: "/cosmetics" },
  { id: 2, name: "Human hair", path: "/humanhair" },
  { id: 3, name: "Artificial hair", path: "/artificialhair" },
  { id: 4, name: "Fabrics", path: "/fabrics" },
  { id: 5, name: "Fashion", path: "/fashion" },
];

const Sidemenu = () => {
  const { closeMenu, menuOpen, openAuth } = useContext(ModalContext);
  const {closeLogin} = useContext(Authcontext)

  const openRegistration = () => {
    closeLogin();
    closeMenu();
    openAuth();
  }

  const openSignIn = () => {
    closeMenu();
    openAuth();
  }

  return (
    <Modal
      customstyle={`bg-gray-200 w-full sm:w-6/12 lg:w-2/6 ${
        menuOpen
          ? "animate__animated animate__slideInLeft"
          : "animate__animated animate__slideOutLeft"
      } h-screen fixed top-0 left-0 z-[1001] py-4`}
      onClose={closeMenu}
    >
      <div className="flex items-center justify-between px-8">
        <NavLink to={"/"} onClick={closeMenu}>
          <h3 className="text-xl font-black text-gray-600 max-w-44">
            AccraBeautySupply
          </h3>
        </NavLink>
        <XIcon handleClick={closeMenu} />
      </div>
      <div className="bg-white rounded-md mx-8 px-4 mt-8 py-4 shadow-slate-900">
        <ul className="flex flex-col gap-5">
          {NAV_ITEMS.map((navitem) => (
            <li key={navitem.id} onClick={closeMenu}>
              <NavLink to={navitem.path} className="flex justify-between">
                <h3 className="text-2xl text-gray-600 hover:text-slate-950">
                  {navitem.name}
                </h3>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="px-8 mt-8">
        <h3 className="text-lg font-black text-slate-950 mb-3">My Account</h3>
        <button className="rounded-md w-full bg-slate-950 px-4 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 mb-3" onClick={openSignIn}>
          Sign In
        </button>
        <button className="rounded-md w-full bg-white px-4 py-1.5 text-sm font-semibold shadow-sm hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate- border border-slate-950" onClick={openRegistration}>
          Register
        </button>
      </div>
    </Modal>
  );
};

export default Sidemenu;
