import React from "react";

const Sizes = ({ id, label, inStock, selected, selecthandler }) => {
  return (
    <div className="relative h-12 sm:h-16 md:h-12">
      <input
        id={id}
        type="radio"
        name="radio"
        value={id}
        checked={selected === id}
        onChange={() => selecthandler(id)}
        className={`absolute inset-0 w-full h-full opacity-0 z-10 ${
          inStock ? "cursor-pointer" : "cursor-not-allowed"
        }`}
        disabled={!inStock}
      />

      <div
        className={`flex flex-col items-center justify-center h-full border-2 rounded-lg transition-all duration-300 ${
          inStock
            ? selected === id
              ? "bg-slate-950 shadow-lg scale-110 border-slate-950 hover:shadow-xl"
              : "border-slate-950 hover:shadow-md"
            : "border-gray-300 text-gray-300 cursor-not-allowed pointer-events-none"
        }`}
      >
        <label
          htmlFor={id}
          className={`text-sm font-semibold tracking-wider uppercase ${
            inStock
              ? selected === id
                ? "text-white"
                : "text-slate-950"
              : "text-gray-300"
          }`}
        >
          {label}
        </label>
      </div>
    </div>
  );
};

export default Sizes;
