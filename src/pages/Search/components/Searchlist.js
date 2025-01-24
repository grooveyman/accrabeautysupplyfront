import React, { useEffect } from "react";
import Searchproduct from "./Searchproduct";
import Noresults from "../../../components/NoResults/noresults";
import Sort from "./Sort";
import {
  useFetchSearchPaginatedData,
  useFetchSortedSearchData,
} from "../../../hooks/useReactQueryHooks";
import { Endpoints } from "../../../services";
import ProductCard from "../../../components/Skeletons/ProductCard";

const Searchlist = ({
  query,
  newest,
  lowprice,
  highprice,
  defaultFn,
  mode,
  totalProducts,
  setTotalProducts,
}) => {
  const limit = 12;
  const searchKey = "searchkey"; //param name

  // Always initialize hooks
  const paginatedSearchHookResponse = useFetchSearchPaginatedData(
    ["productsearch", Endpoints.SEARCH_PRODUCTS, limit, query],
    Endpoints.SEARCH_PRODUCTS,
    limit,
    searchKey,
    query
  );

  const newSortedHookResponse = useFetchSortedSearchData(
    [
      "newestproductsearch",
      Endpoints.SEARCH_PRODUCTS,
      limit,
      "new",
      "desc",
      searchKey,
      query,
    ],
    Endpoints.SEARCH_PRODUCTS,
    limit,
    "new",
    "desc",
    searchKey,
    query
  );

  const lowpriceSortedHookResponse = useFetchSortedSearchData(
    [
      "lowpriceproductsearch",
      Endpoints.SEARCH_PRODUCTS,
      limit,
      "price",
      "asc",
      searchKey,
      query,
    ],
    Endpoints.SEARCH_PRODUCTS,
    limit,
    "price",
    "asc",
    searchKey,
    query
  );

  const highpriceSortedHookResponse = useFetchSortedSearchData(
    [
      "highpriceproductsearch",
      Endpoints.SEARCH_PRODUCTS,
      limit,
      "price",
      "desc",
      searchKey,
      query,
    ],
    Endpoints.SEARCH_PRODUCTS,
    limit,
    "price",
    "desc",
    searchKey,
    query
  );

  let hookResponse;
  switch (mode) {
    case "default":
      hookResponse = paginatedSearchHookResponse;
      break;
    case "newest":
      hookResponse = newSortedHookResponse;
      break;
    case "lowprice":
      hookResponse = lowpriceSortedHookResponse;
      break;
    case "highprice":
      hookResponse = highpriceSortedHookResponse;
      break;
    default:
      hookResponse = paginatedSearchHookResponse;
      break;
  }

  const {
    data = null,
    isLoading = false,
    fetchNextPage,
    hasNextPage = false,
    isFetchingNextPage = false,
  } = hookResponse;

  useEffect(() => {
    if (data) {
      const newLength = data?.pages[0]?.count || 0;
      setTotalProducts((prev) => (prev !== newLength ? newLength : prev));
    }
  }, [data, setTotalProducts]);

  const productsSoFar = data?.pages.reduce(
    (total, page) => total + page.results.length,
    0
  );

  if (query && isLoading) {
    return (
      <div className="mb-3">
        <ProductCard />
      </div>
    );
  }

  if (query && !isLoading && data?.pages[0]?.results?.length === 0) {
    return (
      <Noresults>
        It seems we can't find any results based on your search.
      </Noresults>
    );
  }

  return (
    <div>
      <Sort
        newest={newest}
        lowprice={lowprice}
        highprice={highprice}
        defaultFn={defaultFn}
        mode={mode}
        totalProducts={totalProducts}
      />
      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-6">
        {data?.pages.map((page) =>
          page?.results?.map((product) => (
            <Searchproduct key={product.code} {...product} />
          ))
        )}
      </div>
      {/* Load More Button */}
      <div className="flex justify-center items-center">
        {hasNextPage && (
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="rounded-md bg-slate-950 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 my-4"
          >
            {isFetchingNextPage ? "Loading..." : "Load More"}
          </button>
        )}
      </div>
      {!isLoading && (
        <div className="flex justify-center items-center my-6">
          <p className="text-base/7 text-gray-600">
            You've viewed {productsSoFar} out of {totalProducts}
            {productsSoFar > 1 ? " products" : " product"}.
          </p>
        </div>
      )}
    </div>
  );
};

export default Searchlist;
