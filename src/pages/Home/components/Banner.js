import React from "react";
import Slider from "react-slick";
import image1 from "../../../assets/images/artificialhair.jpg";
import image2 from "../../../assets/images/hair3.jpg";
import "./Banner.css";
import { NavLink } from "react-router-dom";

const Banner = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  const images = [
    { src: image1, alt: "arthair" },
    { src: image2, alt: "hair3" },
  ];

  return (
    <section className="max-w-full py-4 px-8">
      <div className="max-w-7xl mx-auto relative">
        {/* <div className="md:hidden">
        <h1 className="mb-2 font-bold text-3xl text-slate-950">Unleash Your True Style</h1>
        <p className="text-slate-500 mb-3">Discover premium hair extensions, wigs, and styling products tailored to celebrate every look.</p>
        </div> */}
        <div className="flex absolute z-10 h-full w-full items-center">
          <div className="flex flex-col max-w-96 ml-4 mr-4 md:ml-14">
            <h1 className="mb-2 font-bold text-3xl text-white">Unleash Your True Style</h1>
            <p className="text-slate-500 mb-3">Discover premium hair extensions, wigs, and styling products tailored to celebrate every look.</p>
            <div>
            <NavLink to="#" className="rounded-md bg-slate-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900">Shop now</NavLink>
            </div>
          </div>
        </div>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image.src}
                alt={image.alt}
                className="bannerImage"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Banner;
