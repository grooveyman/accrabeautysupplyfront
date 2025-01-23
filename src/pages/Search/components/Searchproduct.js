import React, { useState } from "react";
import { Link } from "react-router-dom";
import { backendURL } from "../../../services";

const Searchproduct = ({ preview, code, name, price, prodimages }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 productimages">
        <img
          src={
            isHovered
              ? backendURL + prodimages[0].imageurl
              : backendURL + preview
          }
          alt={name}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex flex-col">
        <div>
          <h3 className="text-sm text-gray-700 text-center">
            <Link to={`/productdetail/${code}`}>
              <span aria-hidden="true" className="absolute inset-0"></span>
              {name}
            </Link>
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900 text-center">${price}</p>
      </div>
    </div>
  );
};

export default Searchproduct;
