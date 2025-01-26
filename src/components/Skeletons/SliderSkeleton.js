import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const SliderSkeleton = () => {
  return (
    <Swiper
      spaceBetween={15}
      slidesPerView={2}
      breakpoints={{
        600: {
          slidesPerView: 3,
          // spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          // spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          // spaceBetween: 10,
        },
      }}
    >
      {/* Add Swiper slides */}

      {Array.from({ length: 4 }).map((_, index) => (
        <SwiperSlide key={index}>
          <div key={index} className="imageContainer">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-200 lg:aspect-none hover:opacity-75 w-full h-96 md:h-[470px]"></div>
            <div className="text-center mt-3 mb-3 text-base/7 font-semibold tracking-tight bg-gray-200 text-gray-200 animate-pulse"></div>
            <div className="text-base/7 animate-pulse flex justify-center">
            <p className="bg-gray-200 w-20 h-8 mt-4 text-gray-200"></p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderSkeleton;
