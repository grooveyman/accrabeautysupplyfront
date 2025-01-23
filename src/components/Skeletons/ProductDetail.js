import React from "react";

const ProductDetail = () => {
  return (
    <div className="flex w-full flex-col md:flex-row mt-4 mb-16 gap-y-10 md:gap-y-0 md:gap-x-12">
      <div className="md:w-[44%] w-full">
        <div className="w-full hidden md:block bg-gray-200 animate-pulse md:h-[540px] rounded-md overflow-hidden relative mb-6 p-5 md:p-0"></div>

        <div className="thumbnailsContainer hidden md:grid grid-cols-4 gap-x-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index}
              className={`aspect-h-1 aspect-w-1 overflow-hidden rounded-md lg:aspect-none cursor-pointer h-40 bg-gray-200 animate-pulse`}
            ></div>
          ))}
        </div>

        <div className="md:hidden">
          <div className="w-full h-[520px] bg-gray-200 animate-pulse sm:h-[710px]"></div>
        </div>
      </div>

      <div className="md:w-[56%] w-full">
        <div className="mb-6 bg-gray-200 animate-pulse">
          <h3 className="text-3xl text-gray-200">
            Lorem ipsum dsffref
          </h3>
        </div>
        <div className="mb-8 bg-gray-200 animate-pulse w-1/5">
          <p className="text-2xl text-gray-200">$233</p>
        </div>
        <div className="mb-6 mt-3 bg-gray-200 animate-pulse">
          <p className="text-base/7 text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nibh
            mi, sagittis ut felis id, congue convallis augue. Aliquam molestie
            orci laoreet nisl bibendum facilisis eget a justo. Etiam dictum
            lacus at faucibus porta. Donec scelerisque felis eu libero accumsan,
            vel semper augue scelerisque.
          </p>
        </div>
        <div className="mb-3 mt-3 bg-gray-200 animate-pulse w-1/4">
          <p className="text-base text-gray-200">Color</p>
        </div>
        <div className="flex items-center gap-x-3 mb-4 w-full md:max-w-80">
          {Array.from({ length: 2 }).map((_, index) => (
            <span key={index}
              aria-hidden="true"
              className={`size-8 rounded-full bg-gray-200 animate-pulse`}
              style={{
                display: "block",
                width: "4rem",
                height: "4rem",
                borderRadius: "50%",
              }}
            ></span>
          ))}
        </div>
        <div className="mb-3 bg-gray-200 animate-pulse w-1/4">
          <p className="text-base text-gray-200">Size</p>
        </div>
        <div className="grid grid-cols-4 w-full md:max-w-80">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="relative mr-3 h-12 sm:h-16 md:h-12 bg-gray-200 animate-pulse"></div>
          ))}
        </div>
        <div className="w-full md:max-w-[28.125rem] flex items-center mt-8">
          <div className="flex flex-1 w-full rounded-md bg-gray-200 text-gray-200 animate-pulse">
          </div>
          <div
            className="flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium transition duration-300 ease-in-out bg-gray-200 text-gray-200 animate-pulse">
            Add to bag
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
