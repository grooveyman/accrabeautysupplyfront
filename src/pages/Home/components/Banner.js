import React from "react";
import Slider from "react-slick";
import image1 from '../../../assets/images/artificialhair.jpg'
import image2 from '../../../assets/images/hair2.jpg'

const Banner = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };

  return (
    <section className="max-w-full py-4 px-4">
      <div className="max-w-7xl">
      <Slider {...settings}>
        <div>
          <img src={image1} alt="arthair" />
        </div>
        <div>
          <img src={image2} alt="hair2"/>
        </div>
      </Slider>
      </div>
    </section>
  );
};

export default Banner;
