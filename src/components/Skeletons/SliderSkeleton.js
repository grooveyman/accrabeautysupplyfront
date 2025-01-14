import React from "react";

const SliderSkeleton = () => {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-6">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="imageContainer">
          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80 w-full h-60 md:h-[300px] animate-pulse"></div>
          <div className="text-center mt-3 mb-3 text-base/7 font-semibold tracking-tight bg-gray-200 text-gray-200 animate-pulse"></div>
          <div className="text-center text-base/7 bg-gray-200 text-gray-200 animate-pulse">
            $price
          </div>
        </div>
      ))}
    </div>
  );
};

export default SliderSkeleton;
