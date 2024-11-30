import React from "react";
import { Link } from "react-router-dom";
import classes from './Product.module.css'

const Product = ({ image, id, name, price }) => {
  return (
    <div className="group relative">
      <div className={`aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 ${classes.productimages}`}>
        {/* <Link to={"/"}> */}
        <img
          src={image}
          alt="Front of men's Basic Tee in black."
          className="h-full w-full object-cover object-center"
        />
        {/* </Link> */}
      </div>
      <div className="mt-4 flex flex-col">
        <div>
          <h3 className="text-sm text-gray-700 text-center">
            <Link to={`/productdetail/${id}`}>
              <span aria-hidden="true" className="absolute inset-0"></span>
              Basic Tee
            </Link>
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900 text-center">$35</p>
      </div>
    </div>
  );
};

export default Product;
