import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "./components/Breadcrumbs";
import Categorylist from "./components/Categorylist";

const List = () => {
  const { category } = useParams();

  return (
    <main>
      <section className="max-w-full py-4 px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs category={category} />
          <Categorylist category={category} />
        </div>
      </section>
    </main>
  );
};

export default List;
