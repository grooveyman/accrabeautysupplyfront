import React from "react";

const CartSkeleton = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 mb-4">
      <div className="flex-1">
      {Array.from({ length: 2 }).map((_, index) => (
          <div
            key={index}
            className="flex gap-4 py-4 md:py-8 border-y"
          >
            <div className="h-32 w-20 md:w-44 md:h-64 bg-gray-200 animate-pulse rounded-md"> </div>
            <div className="flex-1 flex flex-col justify-between lg:flex-row">
              <div className="flex-1">
                <h2 className="text-lg font-semibold bg-gray-200 text-gray-200 animate-pulse mb-2">hesasasassasas</h2>
                <p className="text-sm bg-gray-200 text-gray-200 animate-pulse mb-2">xaxxaxx</p>
                <p className=" bg-gray-200 text-gray-200 animate-pulse mb-2">ssss</p>
              </div>
              <div className="flex lg:justify-center mt-6 md:mt-0 space-x-4 lg:flex-1">
                {/* Decrement Button */}
                <button
                  className="flex items-center justify-center w-8 h-8 border rounded-full bg-gray-200 animate-pulse hover:bg-gray-100"
                  type="button"
                  title="decrease"
                >

                </button>
                <div className="w-5 h-8 bg-gray-200 animate-pulse">
                </div>
                {/* Increment Button */}
                <button
                  className="flex items-center justify-center w-8 h-8 border rounded-full bg-gray-200 animate-pulse"
                  type="button"
                  title="increase"
                >
                </button>
              </div>
            </div>
            <div className="text-right">
              {/* <button
                className="text-gray-500 hover:text-red-600"
                title="remove"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-5"
                >
                  <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                </svg>
              </button> */}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full md:sticky top-24 md:w-5/12 lg:w-1/3 p-6 border rounded-lg bg-gray-200 animate-pulse h-96 mb-3">
        {/* <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        <div className="flex justify-between border-b mb-2 py-2">
          <span className="text-base/7 text-gray-600">Subtotal</span>
          <span>
            {isLoggedIn && isPending ? (
              <i className="fa fa-circle-o-notch fa-spin"></i>
            ) : (
              "$" + totalSum
            )}
          </span>
        </div>
        <div className="flex justify-between border-b mb-2 py-2">
          <span className="text-base/7 text-gray-600">
            Shipping estimate
          </span>
          <span>-</span>
        </div>
        <div className="flex justify-between border-b mb-2 py-2">
          <span className="text-base/7 text-gray-600">
            Tax estimate
          </span>
          <span>-</span>
        </div>
        <div className="flex justify-between font-bold text-lg mb-6">
          <span>Order total</span>
          <span>
            {isLoggedIn && isPending ? (
              <i className="fa fa-circle-o-notch fa-spin"></i>
            ) : (
              "$" + totalSum
            )}
          </span>
        </div>
        <button className="w-full bg-slate-950 text-white py-3 rounded-lg hover:bg-slate-900 transition">
          Checkout
        </button> */}
      </div>
    </div>
  );
};

export default CartSkeleton;
