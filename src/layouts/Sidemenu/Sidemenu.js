import React, { useContext } from "react";
import Modal from "../../components/modal/Modal";
import XIcon from "../Header/components/XIcon";
import { NavLink } from "react-router-dom";
import { ModalContext } from "../../context";

const NAV_ITEMS = [
  { id: 1, name: "Cosmetics", path: "/cosmetics" },
  { id: 2, name: "Human hair", path: "/humanhair" },
  { id: 3, name: "Artificial hair", path: "/artificialhair" },
  { id: 4, name: "Fabrics", path: "/fabrics" },
  { id: 5, name: "Fashion", path: "/fashion" },
];

const Sidemenu = () => {
  const {closeMenu, toggleMenu } = useContext(ModalContext);

  return (
    <Modal
      customstyle={`bg-gray-200 w-full sm:w-8/12 ${toggleMenu ? 'animate__animated animate__slideInLeft': 'animate__animated animate__slideOutLeft'} h-screen fixed top-0 left-0 z-[1001] py-4 lg:hidden`}
      onClose={closeMenu}
      togglestyle={toggleMenu ? 'block': 'hidden'}
    >
      <div className="flex items-center justify-between px-8">
        <NavLink to={"/"} onClick={closeMenu}>
          <h3 className="text-2xl font-black text-gray-600 max-w-44">
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
                <h3 className="text-2xl text-gray-600">{navitem.name}</h3>
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
    </Modal>
  );
};

export default Sidemenu;
