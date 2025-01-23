import React from 'react'

const CartModSkeleton = () => {
  return (
    <div className="overflow-y-auto border-b h-[66%] border-gray-300">
    {Array.from({ length: 2 }).map((_, index) => (
      <div key={index} className="flex gap-3 py-3 border-t border-gray-300">
        <div className="h-20 w-20 bg-gray-300 animate-pulse rounded-md"></div>
        <div className="flex-1 flex justify-between lg:flex-row">
          <div className="flex-1 flex flex-col gap-y-2 justify-between">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-sm font-semibold text-gray-300 bg-gray-300 animate-pulse mb-1">productname</h2>
                <h4 className="text-xs text-gray-300 bg-gray-300 animate-pulse">
                  color /size
                </h4>
              </div>
              <div className="w-3 h-3 bg-gray-300 animate-pulse"></div>
            </div>
            <div className="flex justify-between gap-x-1">
              <div className="flex border bg-gray-300 animate-pulse py-1 px-1 w-20 rounded-md">
              </div>
              <p className="bg-gray-300 text-gray-300 mt-3 animate-pulse">$8.0</p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
  )
}

export default CartModSkeleton