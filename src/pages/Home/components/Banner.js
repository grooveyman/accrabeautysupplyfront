import React from "react";
import Slider from "react-slick";

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
        {/* <div>
          <img src={baseUrl + "/abstract01.jpg"} />
        </div>
        <div>
          <img src={baseUrl + "/abstract02.jpg"} />
        </div>
        <div>
          <img src={baseUrl + "/abstract03.jpg"} />
        </div>
        <div>
          <img src={baseUrl + "/abstract04.jpg"} />
        </div> */}
      </Slider>
      </div>
    </section>
  );
};

export default Banner;
