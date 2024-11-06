import React from "react";
import Sort from "./Sort";

const Categorylist = ({ category }) => {
  return (
    <div>
      <div>
        <h3 className="mb-4 font-bold text-3xl text-slate-950 text-center capitalize">
          {category === "artificialhair"
            ? "artificial hair"
            : category === "humanhair"
            ? "human hair"
            : category}
        </h3>
      </div>
      <Sort />
    </div>
  );
};

export default Categorylist;
