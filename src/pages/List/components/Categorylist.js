import React, { useMemo } from "react";
import Sort from "./Sort";
import { returnCategoryName } from "../../../helpers";

const Categorylist = ({ category, allCategories, newest, lowprice, highprice, defaultFn, mode }) => {
  const categoryName = useMemo(() => returnCategoryName(category, allCategories), [category, allCategories]);

  return (
    <div>
      <div>
        <h3 className="my-4 font-bold text-3xl text-slate-950 text-center capitalize">
          {categoryName}
        </h3>
      </div>
      <Sort newest={newest} lowprice={lowprice} highprice={highprice} defaultFn={defaultFn} mode={mode} />
    </div>
  );
};

export default Categorylist;
