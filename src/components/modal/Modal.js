import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={`fixed top-0 left-0 w-full h-screen z-[1000] lg:hidden ${classes.backdrop}`} onClick={props.closeFnc} />;
};

const ModalOverlay = ({ children, customstyle }) => {
  return (
    <div className={customstyle}>
      <div>{children}</div>
    </div>
  );
};

const modalPortal = document.getElementById("modalPortal");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop closeFnc={props.onClose} />,
        modalPortal
      )}
      {ReactDOM.createPortal(
        <ModalOverlay customstyle={props.customstyle}>{props.children}</ModalOverlay>,
        modalPortal
      )}
    </Fragment>
  );
};

export default Modal;
