import React, { useState, useEffect } from "react";
import Searchinput from "./components/Searchinput";
import Searchlist from "./components/Searchlist";

const Search = () => {
  // console.log('this is search')
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // Debounce effect to delay search input handling
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300); // Delay in milliseconds

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  return (
    <main>
      <section className="max-w-full py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <Searchinput query={debouncedQuery} setSearchterm={setSearchQuery} />
          <Searchlist query={debouncedQuery} />
        </div>
      </section>
    </main>
  );
};

export default Search;
