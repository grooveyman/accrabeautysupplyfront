import React from "react";
import { NavLink } from "react-router-dom";
import BarIcon from "./BarIcon";

const Logo = () => {
  return (
    <div className="flex items-center	gap-3">
      <BarIcon />
      <NavLink to={'/'}>
      <h3 className="text-lg lg:text-2xl font-black text-black">AccraBeautySupply</h3>
      </NavLink>
    </div>
    
  );
};

export default Logo;
