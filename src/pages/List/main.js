import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "./components/Breadcrumbs";
import Categorylist from "./components/Categorylist";
import Productlist from "./components/Productlist";
import NotFound from "../NotFound";

const validCategories = [
  "cosmetics",
  "humanhair",
  "artificialhair",
  "fashion",
  "fabrics",
  "newarrivals",
];

const List = () => {
  const { category } = useParams();

  if (!validCategories.includes(category)) {
    return <NotFound />;
  }

  return (
    <main>
      <section className="max-w-full py-4 px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs category={category} />
          <Categorylist category={category} />
          <Productlist />
        </div>
      </section>
    </main>
  );
};

export default List;
