import React from "react";
import classes from "./Productcard.module.css";

const ProductCard = () => {
  return (
    <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-6">
      {Array.from({ length: 12 }).map((_, index) => (
        <div className="group relative animate-pulse" key={index}>
          {/* {image} */}
          <div
            className={`aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 ${classes.productimages}`}
          ></div>
          <div className="mt-4 flex flex-col">
            <div className="bg-gray-200">
              <h3 className="text-sm text-gray-200 text-center">
                <span aria-hidden="true" className="absolute inset-0"></span>
                name
              </h3>
            </div>
            <p className="text-sm font-medium text-gray-200 text-center bg-gray-200">
              $price
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
