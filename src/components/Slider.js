import React from "react";
import { NavLink } from "react-router-dom";
import { backendURL } from "../services";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const CustomSlider = ({ data, loading }) => {

  return (
    <Swiper
      modules={[Navigation]} // Add modules as needed
      navigation={{
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
        disabledClass: "disabled-button",
      }}
      loop={data.length >= 7 ? true : false}
      spaceBetween={10}
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

      {data?.map((product) => (
        <SwiperSlide key={product.id}>
          <NavLink to={`/productdetail/${product.code}`}>
            <div className="imageContainer">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-200 lg:aspect-none hover:opacity-75 lg:h-80 w-full h-60 md:h-[300px]">
                <img
                  src={backendURL + product.preview}
                  alt={product.name}
                  loading="lazy"
                  className="shadow-lg hover:shadow-2xl h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="text-center mt-3 text-base/7 font-semibold tracking-tight text-gray-900">
                {product.name}
              </div>
              <div className="text-center text-base/7 text-gray-600">
                ${product.price}
              </div>
            </div>
          </NavLink>
        </SwiperSlide>
      ))}

      <button className="custom-prev">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6 custom-size"
        >
          <path
            fillRule="evenodd"
            d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button className="custom-next">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6 custom-size"
        >
          <path
            fillRule="evenodd"
            d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </Swiper>
  );
};

export default CustomSlider;
