import React from "react";
import classes from "../Header.module.css";
import { NavLink } from "react-router-dom";
import {formatText} from "../../../helpers"
import {NAV_ITEMS} from "../../../helpers" 

const Navmenu = () => {
  return (
    <div className={classes.navigations}>
      <div className="hidden lg:flex relative">
        {NAV_ITEMS.map((navitem) => (
          <NavLink
            to={'/'+ formatText(navitem.name)}
            key={navitem.id}
            className={classes.navlink}
          >
            {navitem.name}
          </NavLink>
        ))}
        <div className={classes.animation}></div>
      </div>
    </div>
  );
};

export default Navmenu;
