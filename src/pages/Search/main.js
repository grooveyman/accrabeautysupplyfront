import React, { useState, useEffect } from "react";
import Searchinput from "./components/Searchinput";
import Searchlist from "./components/Searchlist";
import Initialsearchmsg from "./components/Initialsearchmsg";

const Search = () => {
  // console.log('this is search')
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
    const [mode, setMode] = useState("default");
    const [totalProducts, setTotalProducts] = useState(0);

  // Debounce effect to delay search input handling
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300); // Delay in milliseconds

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  const newest = () => {
    setMode("newest");
  }
  
  const lowprice = () => {
    setMode("lowprice");
  }
  
  const highprice = () => {
    setMode("highprice");
  }
  
  const defaultFn = () => {
    setMode("default");
  }

  return (
    <main>
      <section className="max-w-full py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <Searchinput query={debouncedQuery} setSearchterm={setSearchQuery} />
          {debouncedQuery ? <Searchlist query={debouncedQuery} newest={newest} lowprice={lowprice} highprice={highprice} defaultFn={defaultFn} mode={mode} totalProducts={totalProducts} setTotalProducts={setTotalProducts} /> : <Initialsearchmsg />}
        </div>
      </section>
    </main>
  );
};

export default Search;
