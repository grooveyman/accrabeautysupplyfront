import React, { memo, useEffect, useMemo } from "react";
import Product from "./Product";
import Noresults from "../../../components/NoResults/noresults";
import { returnCategoryCode } from "../../../helpers/Helperfunctions";
import { Endpoints } from "../../../services";
import {
  useFetchPaginatedData,
  useFetchSortedData,
} from "../../../hooks/useReactQueryHooks";
import ProductCard from "../../../components/Skeletons/ProductCard";

const Productlist = ({
  category,
  allCategories,
  mode,
  totalProducts,
  setTotalProducts,
}) => {
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

  useEffect(() => {
    if (data) {
      const newLength = data?.pages[0]?.count || 0;
      setTotalProducts((prev) => (prev !== newLength ? newLength : prev));
    }
  }, [data, category, setTotalProducts]);

  const productsSoFar = data?.pages.reduce(
    (total, page) => total + page.results.length,
    0
  );

  if (isLoading) {
    return (
      <div className="mb-3">
        <ProductCard />
      </div>
    );
  }

  if (!isLoading && data?.pages[0]?.results?.length === 0) {
    return <Noresults />;
  }

  return (
    <div className="mb-3">
      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-6">
        {data?.pages.map((page) =>
          page?.results?.map((product) => (
            <Product key={product.code} {...product} /> // Render each product
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
      <div className="flex justify-center items-center my-6">
        <p className="text-base/7 text-gray-600">
          You've viewed {productsSoFar} out of {totalProducts} {productsSoFar > 1 ? "products": "product"}.
        </p>
      </div>
    </div>
  );
};

export default memo(Productlist);
