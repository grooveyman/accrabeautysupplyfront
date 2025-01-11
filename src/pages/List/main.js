import React, { memo, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "./components/Breadcrumbs";
import Categorylist from "./components/Categorylist";
import Productlist from "./components/Productlist";
import NotFound from "../NotFound";
import { useContext } from "react";
import { CategoriesContext } from "../../context/CategoriesCtxProvider";
import { formatText } from "../../helpers";

const List = () => {
  //console.log('this is productlist')
  const { category } = useParams();
  const [mode, setMode] = useState("default");
  const [totalProducts, setTotalProducts] = useState(0);

  const { categoriesData } = useContext(CategoriesContext);
  const allCategories = categoriesData?.results || {};

const categoryLinks = useMemo(
  () => categoriesData?.results?.map((item) => formatText(item.name)),
  [categoriesData]
);

const newest = () => {
  setMode("newest");
}

const lowprice = () => {
  setMode("lowprice");
}

const highprice = () => {
  setMode("highprice");
}

const defaultFn = () => {
  setMode("default");
}



  if (!categoryLinks.includes(category)) {
    return <NotFound />;
  }

  return (
    <main>
      <section className="max-w-full py-4 px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs category={category} allCategories={allCategories} />
          <Categorylist category={category} allCategories={allCategories} newest={newest} lowprice={lowprice} highprice={highprice} defaultFn={defaultFn} mode={mode} totalProducts={totalProducts} />
          <Productlist category={category} allCategories={allCategories} mode={mode} totalProducts={totalProducts} setTotalProducts={setTotalProducts} />
        </div>
      </section>
    </main>
  );
};

export default memo(List);
