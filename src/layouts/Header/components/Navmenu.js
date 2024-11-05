import React from "react";
import classes from "../Header.module.css";
import { NavLink } from "react-router-dom";

const NAV_ITEMS = [
  { id: 1, name: "Cosmetics", path: "/cosmetics" },
  { id: 2, name: "Human hair", path: "/humanhair" },
  { id: 3, name: "Artificial hair", path: "/artificialhair" },
  { id: 4, name: "Fabrics", path: "/fabrics" },
  { id: 5, name: "Fashion", path: "/fashion" }
];

const Navmenu = () => {
  return (
    <div className={classes.navigations}>
      <div className="hidden lg:flex relative">
        {NAV_ITEMS.map((navitem) => (
          <NavLink
            to={navitem.path}
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
