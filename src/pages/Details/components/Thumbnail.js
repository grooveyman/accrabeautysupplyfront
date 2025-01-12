import React from "react";

const Thumbnail = ({ image, activeImage, name, onPress }) => {
  return (
    <div
      className={`aspect-h-1 aspect-w-1 overflow-hidden rounded-md ${
        activeImage === image ? "border-2 border-slate-950 opacity-75" : ""
      } bg-gray-200 lg:aspect-none hover:opacity-75 cursor-pointer`} onClick={onPress}
    >
      <img
        src={image}
        alt={name}
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
};

export default Thumbnail;
