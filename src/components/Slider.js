import React from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import { backendURL } from "../services";

const CustomSlider = ({ data }) => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
    // afterChange: function (index) {
    //   console.log(
    //     `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    //   );
    // },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="slider-container w-full">
      <Slider {...settings}>
        {data?.map((product) => (
          <NavLink to={`/productdetail/${product.id}`} key={product.id}>
            <div className="imageContainer">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-200 lg:aspect-none hover:opacity-75 lg:h-80 w-[97%] h-60 md:h-[300px]">
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
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
