import React from "react";

const Sizes = ({ size, selected, selecthandler, sizesForColor }) => {
  
  const inStock = sizesForColor.includes(size);

  return (
    <div className="relative h-12 sm:h-16 md:h-12">
      <input
        id={size}
        type="radio"
        name="radio"
        value={size}
        checked={selected === size}
        onChange={() => selecthandler(size)}
        className={`absolute inset-0 w-full h-full opacity-0 z-10 ${
          inStock ? "cursor-pointer" : "cursor-not-allowed"
        }`}
        disabled={!inStock}
      />

      <div
        className={`flex flex-col items-center justify-center h-full border-2 rounded-lg transition-all duration-300 ${
          inStock
            ? selected === size
              ? "bg-slate-950 shadow-lg scale-110 border-slate-950 hover:shadow-xl"
              : "border-slate-950 hover:shadow-md"
            : "border-gray-300 text-gray-300 cursor-not-allowed pointer-events-none"
        }`}
      >
        <label
          htmlFor={size}
          className={`text-sm font-semibold tracking-wider ${
            inStock
              ? selected === size
                ? "text-white"
                : "text-slate-950"
              : "text-gray-300"
          }`}
        >
          {size}
        </label>
      </div>
    </div>
  );
};

export default Sizes;
