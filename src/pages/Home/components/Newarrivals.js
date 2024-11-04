import React from "react";
import Slider from "react-slick";
import "./Newarrivals.css";
import image from "../../../assets/images/art3.jpg";
import image2 from "../../../assets/images/cosm.png";
import image3 from "../../../assets/images/hairagain.jpg";
import image4 from "../../../assets/images/fabricc.jpg";
import { NavLink } from "react-router-dom";

const products = [
  {
    image: image,
    name: "Product 1",
    price: "$5.00",
  },
  {
    image: image2,
    name: "Product 2",
    price: "$5.00",
  },
  {
    image: image3,
    name: "Product 3",
    price: "$5.00",
  },
  {
    image: image4,
    name: "Product 4",
    price: "$5.00",
  },
];

const Newarrivals = () => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
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
    <section className="max-w-full py-5 px-8 my-3">
      <div className="max-w-7xl mx-auto relative">
        <div>
          <h3 className="mb-4 font-bold text-3xl text-slate-950 text-center">
            New Arrivals
          </h3>
        </div>
        <div className="slider-container w-full">
          <Slider {...settings}>
            {products.map((product, index) => (
              <NavLink to={"#"} key={index}>
                <div className="imageContainer">
                  <div className="newarrival">
                    <img src={product.image} alt={product.name} className="shadow-lg hover:shadow-2xl hover:opacity-70" />
                  </div>
                  <div className="text-center mt-3">{product.name}</div>
                  <div className="text-center">{product.price}</div>
                </div>
              </NavLink>
            ))}
            {/* 
            <div className="imageContainer">
              <div className="newarrival"></div>
            </div>
            <NavLink to={"#"} ></NavLink>
            <div className="imageContainer">
              <div className="newarrival"></div>
            </div>
            <NavLink to={"#"} ></NavLink>
            <div className="imageContainer">
              <div className="newarrival"></div>
            </div>
            <NavLink to={"#"} ></NavLink>
            <div className="imageContainer">
              <div className="newarrival"></div>
            </div>
            <NavLink to={"#"} ></NavLink>
            <div className="imageContainer">
              <div className="newarrival"></div>
            </div> */}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Newarrivals;
