import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import image1 from "../../../assets/images/artificialhair.jpg";
import image2 from "../../../assets/images/hair3.jpg";
import "./Banner.css";
import { NavLink } from "react-router-dom";

const Banner = () => {
  const images = [
    { src: image1, alt: "arthair" },
    { src: image2, alt: "hair3" },
  ];

  return (
    <section className="max-w-full py-4 px-4">
      <div className="max-w-7xl mx-auto relative flex items-center">
        {/* Overlay Content */}
        <div className="flex absolute z-10 items-center">
          <div className="flex flex-col max-w-96 ml-4 mr-4 md:ml-14">
            <h1 className="mb-2 font-bold text-3xl text-white">
              Unleash Your True Style
            </h1>
            <p className="text-base/7 text-gray-600 mb-3">
              Discover premium hair extensions, wigs, and styling products
              tailored to celebrate every look.
            </p>
            <div>
              <NavLink
                to="#"
                className="rounded-md bg-slate-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
              >
                Shop now
              </NavLink>
            </div>
          </div>
        </div>
        {/* Swiper Slider */}
        <Swiper
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          // loop={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="bannerImage w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Banner;
