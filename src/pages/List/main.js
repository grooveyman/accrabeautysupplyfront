import React, { memo, useMemo } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "./components/Breadcrumbs";
import Categorylist from "./components/Categorylist";
import Productlist from "./components/Productlist";
import NotFound from "../NotFound";
import { useContext } from "react";
import { CategoriesContext } from "../../context/CategoriesCtxProvider";
import { formatText } from "../../helpers";

// const validCategories = [
//   "cosmetics",
//   "humanhair",
//   "artificialhair",
//   "fashion",
//   "fabrics",
//   "newarrivals",
// ];

const List = () => {
  const { category } = useParams();
  // console.log(category)

  const { categoriesData } = useContext(CategoriesContext);
  // console.log(categoriesData)
  const allCategories = categoriesData?.results;
  // console.log(allCategories)

const categoryLinks = useMemo(
  () => categoriesData?.results?.map((item) => formatText(item.name)),
  [categoriesData]
);


  if (!categoryLinks.includes(category)) {
    return <NotFound />;
  }

  return (
    <main>
      <section className="max-w-full py-4 px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs category={category} allCategories={allCategories} />
          <Categorylist category={category} allCategories={allCategories} />
          <Productlist category={category} allCategories={allCategories} />
        </div>
      </section>
    </main>
  );
};

export default memo(List);
