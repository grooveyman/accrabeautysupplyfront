import React from "react";
import Product from "./Product";
import Noresults from "../../../components/NoResults/noresults";
// import Spinner from "../../../components/Spinner";
import image from "../../../assets/images/art3.jpg";
import image2 from "../../../assets/images/cosm.png";
import image3 from "../../../assets/images/hairagain.jpg";
import image4 from "../../../assets/images/fabricc.jpg";
import { returnCategoryCode } from "../../../helpers/Helperfunctions";

const products = [
  {
    id: 1,
    image: image,
    name: "Product 1",
    price: "$5.00",
  },
  {
    id: 2,
    image: image2,
    name: "Product 2",
    price: "$5.00",
  },
  {
    id: 3,
    image: image3,
    name: "Product 3",
    price: "$5.00",
  },
  {
    id: 4,
    image: image4,
    name: "Product 4",
    price: "$5.00",
  },
  {
    id: 5,
    image: image,
    name: "Product 1",
    price: "$5.00",
  },
  {
    id: 6,
    image: image2,
    name: "Product 2",
    price: "$5.00",
  },
  {
    id: 7,
    image: image3,
    name: "Product 3",
    price: "$5.00",
  },
  {
    id: 8,
    image: image4,
    name: "Product 4",
    price: "$5.00",
  },
  {
    id: 9,
    image: image,
    name: "Product 1",
    price: "$5.00",
  },
  {
    id: 10,
    image: image2,
    name: "Product 2",
    price: "$5.00",
  },
  {
    id: 11,
    image: image3,
    name: "Product 3",
    price: "$5.00",
  },
  {
    id: 12,
    image: image4,
    name: "Product 4",
    price: "$5.00",
  },
];

const Productlist = ({ category, allCategories }) => {
  const catcode = returnCategoryCode(category, allCategories);
  console.log(catcode);

  //   if (loading) {
  //     return <Spinner loading={loading} />;
  //   }

  if (products.length === 0) {
    return <Noresults />;
  }

  return (
    <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
      {products.map((product, index) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Productlist;
