import React from "react";
import Sort from "./Sort";
import { returnCategoryName } from "../../../helpers";

const Categorylist = ({ category }) => {
  return (
    <div>
      <div>
        <h3 className="my-4 font-bold text-3xl text-slate-950 text-center capitalize">
          {returnCategoryName(category)}
        </h3>
      </div>
      <Sort category={category} />
    </div>
  );
};

export default Categorylist;
