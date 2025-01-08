import React from "react";
import "./Categories.css";
import image1 from "../../../assets/images/cosmetics2.jpg";
import image2 from "../../../assets/images/naturalhair.jpg";
import image3 from "../../../assets/images/synthetichair.jpg";
import image4 from "../../../assets/images/fabricswomen.webp";
import image5 from "../../../assets/images/fashionnnnn.jpg";
import { NavLink } from "react-router-dom";
// import { CategoriesContext } from "../../../context/CategoriesCtxProvider";

const categories = [
  {
    image: image1,
    title: "Cosmetics",
    description: "Find Your Perfect Shade and Make Every Day Glamorous!",
    path: "/cosmetics"
  },
  {
    image: image2,
    title: "Human Hair",
    description: "Elevate Your Style with Luxurious, Natural Human Hair!",
    path: "/humanhair"
  },
  {
    image: image3,
    title: "Artificial Hair",
    description: "Change Up Your Style with Premium Wigs and Extensions!",
    path: "/artificialhair"
  },
  {
    image: image4,
    title: "Fabrics",
    description: "Wrap Yourself in Elegance with Our Fine Fabrics!",
    path: "/fabrics"
  },
  {
    image: image5,
    title: "Fashion",
    description: "Express Yourself with Our Latest Fashion Finds!",
    path: "/fashion"
  },
];

const Categories = () => {

  // const {categoriesData, isLoading} = useContext(CategoriesContext);
  // const categories = categoriesData?.results;

  return (
    <section className="max-w-full py-4 px-8">
      <div className="max-w-7xl mx-auto">
        <div>
          <h3 className="mb-4 font-bold text-3xl text-slate-950 text-center">
            Explore Our Beauty & Fashion Essentials
          </h3>
        </div>
        <div className="flex flex-wrap justify-between">
          {categories.map((category, index) => (
            <div key={index} className="categorycontainer my-4">
              <div className="catImageContainer rounded">
                <NavLink to={category.path}>
                  <img src={category.image} alt={category.title} loading="lazy" className="rounded-lg shadow-lg filter hover:grayscale grayscale-0 hover:shadow-2xl" />
                </NavLink>
              </div>
              <div className="mt-3">
                <NavLink to={category.path}>
                  <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                    {category.title}
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
