import React, { useContext } from "react";
import Modal from "../../components/modal/Modal";
import XIcon from "../Header/components/XIcon";
import Authform from "./Components/Authform";
import { ModalContext, Authcontext } from "../../context";

const AuthModal = () => {
  const { closeAuth } = useContext(ModalContext);
  const { loginActive, openLogin, closeLogin } = useContext(Authcontext);
  return (
    <Modal
      onClose={closeAuth}
      customstyle={
        "sm:max-w-md w-full p-8 sm:p-4 bg-gray-50 fixed z-[1001] h-screen sm:h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:rounded-md"
      }
    >
      <div className="flex flex-col">
        <div className="flex justify-end mb-5 sm:mb-3">
          <XIcon handleClick={closeAuth} />
        </div>
        <div className="flex border-b-gray-300 border-b relative mb-4">
          <div
            className={`w-1/2 absolute border-b-2 border-b-slate-950 h-full transition-transform duration-300 ${
              loginActive ? "translate-x-0" : "translate-x-full"
            }`}
          ></div>
          <div
            className={`w-1/2 text-center cursor-pointer z-10 py-3 ${
              loginActive ? "text-slate-950" : "text-gray-500"
            }`}
            onClick={openLogin}
          >
            Login
          </div>
          <div
            className={`w-1/2 text-center cursor-pointer z-10 py-3 ${
              loginActive ? "text-gray-500" : "text-slate-950"
            }`}
            onClick={closeLogin}
          >
            Sign up
          </div>
        </div>
        <div className="formContent">
          <Authform />
        </div>
      </div>
    </Modal>
  );
};

export default AuthModal;
