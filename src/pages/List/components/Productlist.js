import React, { memo, useMemo } from "react";
import Product from "./Product";
import Noresults from "../../../components/NoResults/noresults";
import Spinner from "../../../components/Spinner";
import { returnCategoryCode } from "../../../helpers/Helperfunctions";
import { Endpoints } from "../../../services";
import { useFetchPaginatedData } from "../../../hooks/useReactQueryHooks";

const Productlist = ({ category, allCategories }) => {
  const catcode = useMemo(
    () => returnCategoryCode(category, allCategories),
    [category, allCategories]
  );

  const limit = 12;
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useFetchPaginatedData(
      ["productscat", catcode, Endpoints.CATEGORY_PRODUCTS(catcode), limit],
      Endpoints.CATEGORY_PRODUCTS(catcode),
      limit
    );

  if (isLoading) {
    return <Spinner loading={isLoading} />;
  }

  if (!isLoading && data?.pages[0].results.length === 0) {
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
