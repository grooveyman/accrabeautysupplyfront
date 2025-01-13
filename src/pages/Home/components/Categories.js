import React, { useContext } from "react";
import "./Categories.css";
import { NavLink } from "react-router-dom";
import { CategoriesContext } from "../../../context/CategoriesCtxProvider";
import { backendURL } from "../../../services";
import { formatText } from "../../../helpers/Helperfunctions";

const Categories = () => {
  const { categoriesData, isLoading } = useContext(CategoriesContext);
  const categories = categoriesData?.results || {};

  return (
    <section className="max-w-full py-4 px-4">
      <div className="max-w-7xl mx-auto">
        <div>
          <h3 className="mb-4 font-bold text-3xl text-slate-950 text-center">
            Explore Our Beauty & Fashion Essentials
          </h3>
        </div>
        <div className="flex flex-wrap justify-between">
          {!isLoading &&
            categories.map((category) => (
              <div key={category.code} className="categorycontainer my-4">
                <div className="catImageContainer rounded">
                  <NavLink to={formatText(category.name)}>
                    <img
                      src={backendURL + category.previewimage}
                      alt={category.name}
                      loading="lazy"
                      className="rounded-lg shadow-lg filter hover:grayscale grayscale-0 hover:shadow-2xl"
                    />
                  </NavLink>
                </div>
                <div className="mt-3">
                  <NavLink to={formatText(category.name)}>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                      {category.name}
                    </h3>
                  </NavLink>
                </div>
                <div>
                  <p className="text-base/7 text-gray-600">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
