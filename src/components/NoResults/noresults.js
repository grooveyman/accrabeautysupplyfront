import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import animation1 from "../../assets/animations/Animation1731140711323.lottie";

const Noresults = ({children}) => {
  return (
    <div className="flex items-center justify-center flex-col my-16 customstyle">
      <div className="max-w-lg h-auto">
        <DotLottieReact src={animation1} loop autoplay />
      </div>
      <div>
        <h3 className="my-2 font-bold text-xl text-slate-950 text-center">
          No products here at the moment.
        </h3>
      </div>
      <div>
        <p className="text-base/7 text-gray-600 text-center">
          {children}
        </p>
      </div>
    </div>
  );
};

export default Noresults;
