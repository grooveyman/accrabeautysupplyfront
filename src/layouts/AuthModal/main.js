import React, { useContext, useState } from "react";
import Modal from "../../components/modal/Modal";
import XIcon from "../Header/components/XIcon";
import Authform from "./Components/Authform";
import { ModalContext, Authcontext } from "../../context";
import { useFormik } from "formik";
import { LoginSchema, RegistrationSchema } from "../../helpers";
import ForgotPasswordForm from "./Components/ForgotPasswordForm";
import { usePost } from "../../hooks";
import { Endpoints } from "../../services";
import { showErrorToast, showSuccessToast } from "../../helpers/Helperfunctions";
import { useNavigate } from "react-router-dom";

const AuthModal = () => {
  const { closeAuth } = useContext(ModalContext);
  const { loginActive, openLogin, closeLogin, loginHandler } = useContext(Authcontext);
  const [forgotPasswordView, setforgotPasswordView] = useState(false);
  const {postReq, isPending} = usePost(['customers'], Endpoints.CUSTOMERS);
  const {postReq: login, isPending: isSubmitting} = usePost(['login'], Endpoints.LOGIN);
  const navigate = useNavigate()

  const iniValues = {
    othernames: "",
    lastname: "",
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: iniValues,

    validationSchema: loginActive ? LoginSchema : RegistrationSchema,

    // Submit handler
    onSubmit: (values) => {
      if(!loginActive){
       return postReq(values, {
        onSuccess: (data) => {
          // console.log("Data returned from API:", data);
          // console.log(data.data.token.plainTextToken)
          showSuccessToast('Successful')
          loginHandler() //set isLoggedIn to true
          const usercode = data.data.usercode;
          const token = data.data.token.plainTextToken;
          const firstname = data.data.othernames;
          const expiryDate = data.data.token.accessToken.expires_at;
          localStorage.setItem('token', token)
          localStorage.setItem('user', usercode)
          localStorage.setItem('firstname', firstname)
          localStorage.setItem("tokenExpiry", expiryDate);
          closeAuth()
          
          return navigate('/');

        },
        onError: (error) => {
          // console.error("Custom Error Handler:", error);
          if(error.status === 422){
            showErrorToast("User already exists!")
          }
        }
      })
      }

      login({'email': values.email, 'password': values.password}, {
        onSuccess: (data) => {
          // console.log("Data returned from API:", data);
          showSuccessToast('Login successful')
          loginHandler() //set isLoggedIn to true
          const token = data.data.access_token;
          const usercode = data.data.usercode;
          const firstname = data.data.othernames;
          const expiryDate = data.data.expires_at;
          // const expiration = new Date();
          localStorage.setItem('token', token)
          localStorage.setItem('user', usercode)
          localStorage.setItem('firstname', firstname)
          localStorage.setItem("tokenExpiry", expiryDate);
          closeAuth()
          
          return navigate('/');
        },
        onError: (error) => {
          // console.error("Custom Error Handler:", error);
          if(error.status === 401){
            showErrorToast('Invalid Credentials!')
          }
        }
      });
    },
  });

  const loginSwitchhandler = () => {
    formik.resetForm();
    openLogin();
  };

  const signupSwitchhandler = () => {
    formik.resetForm();
    closeLogin();
  };

  const formSwitchHandler = () => {
    setforgotPasswordView(prevstate => !prevstate);
  };

  if (forgotPasswordView) {
    return (
      <Modal
        onClose={closeAuth}
        customstyle={
          "sm:max-w-md w-full p-8 sm:p-4 bg-gray-50 fixed z-[1001] h-screen sm:h-[400px] sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-md overflow-y-auto"
        }
      >
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-5">
            <h3 className="my-2 text-xl text-slate-950">
              Forgot your password?
            </h3>
            <XIcon handleClick={closeAuth} />
          </div>
          <ForgotPasswordForm forgotFormSwitch={formSwitchHandler} />
        </div>
      </Modal>
    );
  }

  return (
    <Modal
      onClose={closeAuth}
      customstyle={
        "sm:max-w-md w-full p-8 sm:p-4 bg-gray-50 fixed z-[1001] h-screen sm:h-[520px] sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-md overflow-y-auto"
      }
    >
      <div className="flex flex-col">
        <div className="flex justify-end mb-5 sm:mb-3">
          <XIcon handleClick={closeAuth} />
        </div>
        <div className="flex border-b-gray-300 border-b relative mb-3">
          <div
            className={`w-1/2 absolute border-b-2 border-b-slate-950 h-full transition-transform duration-300 ${
              loginActive ? "translate-x-0" : "translate-x-full"
            }`}
          ></div>
          <div
            className={`w-1/2 text-center cursor-pointer z-10 py-3 hover:text-slate-950 ${
              loginActive ? "text-slate-950" : "text-gray-500"
            }`}
            onClick={loginSwitchhandler}
          >
            Login
          </div>
          <div
            className={`w-1/2 text-center cursor-pointer z-10 py-3 hover:text-slate-950  ${
              loginActive ? "text-gray-500" : "text-slate-950"
            }`}
            onClick={signupSwitchhandler}
          >
            Sign up
          </div>
        </div>
        <div className="formContent">
          <Authform formik={formik} forgotFormSwitch={formSwitchHandler} isLoading={isPending} isSubmitting={isSubmitting} />
        </div>
      </div>
    </Modal>
  );
};

export default AuthModal;
