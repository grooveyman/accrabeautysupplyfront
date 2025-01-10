import React, { memo, useMemo } from "react";
import Product from "./Product";
import Noresults from "../../../components/NoResults/noresults";
import Spinner from "../../../components/Spinner";
import { returnCategoryCode } from "../../../helpers/Helperfunctions";
import { Endpoints } from "../../../services";
import {
  useFetchPaginatedData,
  useFetchSortedData,
} from "../../../hooks/useReactQueryHooks";

const Productlist = ({ category, allCategories, mode }) => {
  const catcode = useMemo(
    () => returnCategoryCode(category, allCategories),
    [category, allCategories]
  );

  const limit = 12;

  // Always initialize hooks
  const paginatedHookResponse = useFetchPaginatedData(
    ["productscat", catcode, Endpoints.CATEGORY_PRODUCTS(catcode), limit],
    Endpoints.CATEGORY_PRODUCTS(catcode),
    limit
  );

  const newSortedHookResponse = useFetchSortedData(
    [
      "newestproductscat",
      catcode,
      Endpoints.CATEGORY_PRODUCTS(catcode),
      limit,
      "new",
      "desc",
    ],
    Endpoints.CATEGORY_PRODUCTS(catcode),
    limit,
    "new",
    "desc"
  );

  const lowpriceSortedHookResponse = useFetchSortedData(
    [
      "lowpriceproductscat",
      catcode,
      Endpoints.CATEGORY_PRODUCTS(catcode),
      limit,
      "price",
      "asc",
    ],
    Endpoints.CATEGORY_PRODUCTS(catcode),
    limit,
    "price",
    "asc"
  );

  const highpriceSortedHookResponse = useFetchSortedData(
    [
      "highpriceproductscat",
      catcode,
      Endpoints.CATEGORY_PRODUCTS(catcode),
      limit,
      "price",
      "desc",
    ],
    Endpoints.CATEGORY_PRODUCTS(catcode),
    limit,
    "price",
    "desc"
  );

  let hookResponse;
  switch (mode) {
    case "default":
      hookResponse = paginatedHookResponse;
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
      hookResponse = paginatedHookResponse;
      break;
  }

  const {
    data = null,
    isLoading = false,
    fetchNextPage,
    hasNextPage = false,
    isFetchingNextPage = false,
  } = hookResponse;

  if (isLoading) {
    return <Spinner loading={isLoading} />;
  }

  if (!isLoading && data?.pages[0]?.results?.length === 0) {
    return <Noresults />;
  }

  return (
    <div className="mb-3">
      <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
        {data?.pages.map((page) =>
          page?.results?.map((product) => (
            <Product key={product.id} {...product} /> // Render each product
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
    </div>
  );
};

export default memo(Productlist);
