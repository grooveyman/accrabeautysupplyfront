import React from "react";

const Searchinput = ({ query, setSearchterm }) => {
  return (
    <div className="border-b border-gray-300">
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setSearchterm(e.target.value)}
        className="w-full text-2xl md:text-3xl lg:text-4xl font-normal not-italic leading-10 text-gray-800 border-0 focus:ring-0 focus:outline-none bg-transparent font-playfair"
      />
    </div>
  );
};

export default Searchinput;
