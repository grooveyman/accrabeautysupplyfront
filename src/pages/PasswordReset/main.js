import React from "react";
import Resetform from "./Resetform";
import { Link } from "react-router-dom";


const main = () => {

     
  return (
    <main>
      <section className="max-w-full py-4 px-4">
        <div className="max-w-7xl mx-auto max-h-screen flex justify-center">
          <div className="sm:rounded-md max-w-md w-full p-4">
            <Link to={'/'}><div className="text-center mb-8"><h3 className="text-xl font-black text-black">AccraBeautySupply</h3></div></Link>
            <div className="mb-3">
              <h3 className="my-2 text-xl text-gray-900">
                Create a new password
              </h3>
            </div>
            <Resetform />
          </div>
        </div>
      </section>
    </main>
  );
};

export default main;
