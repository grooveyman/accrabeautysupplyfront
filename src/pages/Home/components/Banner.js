import React from "react";
import Slider from "react-slick";
import image1 from "../../../assets/images/artificialhair.jpg";
import image2 from "../../../assets/images/hair3.jpg";

const Banner = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    arrows: false
  };

  const images = [
    { src: image1, alt: "arthair" },
    { src: image2, alt: "hair3" },
  ];

  return (
    <section className="max-w-full py-4 px-4">
      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} style={{width: "100%", height: "500px", overflow: "hidden"}}>
              <img src={image.src} alt={image.alt} style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top"}} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Banner;
