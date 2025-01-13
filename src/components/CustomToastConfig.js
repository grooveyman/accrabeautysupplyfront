import React from 'react';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Don't forget to import the toast CSS!

const CustomToastConfig = () => {
  return (
    <ToastContainer
      position="bottom-left"
      autoClose={3000} // Time in milliseconds before the toast closes automatically
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick={true} // Close the toast when clicked
      rtl={false} // Set to true for right-to-left layout
      pauseOnFocusLoss
      pauseOnHover
      transition={Zoom}
      stacked
    //   toastClassName="toast"
    //   bodyClassName="toast-body"
    //   progressClassName="toast-progress"
    />
  );
};

export default CustomToastConfig;
