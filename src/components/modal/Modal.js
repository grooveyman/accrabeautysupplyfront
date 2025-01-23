import React, { Fragment, useContext } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { ModalContext } from "../../context";

const Backdrop = (props) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full min-h-screen h-full z-[1000] ${classes.backdrop}`}
      onClick={props.closeFnc}
    />
  );
};

const ModalOverlay = ({ children, customstyle, initial, animate, exit, transition }) => {
  const { menuOpen, cartOpen, authOpen } = useContext(ModalContext);

  return (
    <AnimatePresence>
      {(menuOpen || cartOpen || authOpen) && (
        <motion.div
          key="sideMenu"
          initial={initial}
          animate={animate}
          exit={exit}
          transition={transition}
          className={customstyle}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
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
        <ModalOverlay customstyle={props.customstyle} initial={props.initial} animate={props.animate} exit={props.exit} transition={props.transition}>
          {props.children}
        </ModalOverlay>,
        modalPortal
      )}
    </Fragment>
  );
};

export default Modal;
