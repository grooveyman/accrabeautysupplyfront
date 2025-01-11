import React, { useContext } from "react";
import classes from "../Header.module.css";
import { NavLink } from "react-router-dom";
import {formatText} from "../../../helpers"
// import { NAV_ITEMS } from "../../../helpers";
import { CategoriesContext } from "../../../context/CategoriesCtxProvider";

const Navmenu = () => {
  const {categoriesData, isLoading} = useContext(CategoriesContext);
  const categories = categoriesData?.results || {};



  return (
    <div className={classes.navigations}>
      <div className="hidden lg:flex relative">
        {!isLoading && categories.map((category) => (
          <NavLink
            to={'/'+ formatText(category.name)}
            key={category.id}
            className={classes.navlink}
          >
            {category.name}
          </NavLink>
        ))}
        <div className={classes.animation}></div>
      </div>
    </div>
  );
};

export default Navmenu;
