import React, { useState } from "react";
// import image1 from "../../assets/images/hair3.jpg";
import Imagezoom from "react-image-zooom";
import classes from "./main.module.css";
import CustomizedBreadcrumbs from "./components/Breadcrumbs";
import image from "../../assets/images/art3.jpg";
import image2 from "../../assets/images/cosm.png";
import image3 from "../../assets/images/hairagain.jpg";
import image4 from "../../assets/images/darkxlovely.jpg";
import Slider from "react-slick";
import Thumbnail from "./components/Thumbnail";
import Description from "./components/Description";
import Sizes from "./components/Sizes";
import CustomSlider from "../../components/Slider";

const thumbnails = [
  {
    id: 1,
    image: image,
    name: "Product 1",
    price: "5.00",
  },
  {
    id: 2,
    image: image2,
    name: "Product 2",
    price: "5.00",
  },
  {
    id: 3,
    image: image3,
    name: "Product 3",
    price: "5.00",
  },
  {
    id: 4,
    image: image4,
    name: "Product 4",
    price: "5.00",
  },
];

const options = [
  { id: "XXS", label: "XXS", inStock: false },
  { id: "XS", label: "XS", inStock: true },
  { id: "S", label: "S", inStock: true },
  { id: "M", label: "M", inStock: true },
  { id: "L", label: "L", inStock: true },
  { id: "XL", label: "XL", inStock: true },
  { id: "2XL", label: "2XL", inStock: true },
  { id: "3XL", label: "3XL", inStock: true },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 0,
  slidesToShow: 1,
  slidesToScroll: 1,
  waitForAnimate: false,
  arrows: true,
};

const Details = () => {
  const [activeImg, setActiveImg] = useState(thumbnails[0].image);
  const [selected, setSelected] = useState("");

  const handleSelect = (id) => {
    setSelected(id);
  };

  return (
    <main>
      <section className="max-w-full py-4 px-8">
        <div className="max-w-7xl mx-auto">
          <CustomizedBreadcrumbs />
          <div className="flex w-full flex-col md:flex-row mt-4 mb-16 gap-y-10 md:gap-y-0 md:gap-x-12">
            <div className="md:w-[43%] w-full">
              <div className="w-full hidden md:block md:h-[450px] rounded-md overflow-hidden relative mb-3 p-5 md:p-0">
                <Imagezoom
                  className={classes.fullimagezoom}
                  src={activeImg}
                  alt="A image to apply the ImageZoom plugin"
                  zoom="250"
                />
              </div>
              <div className="thumbnailsContainer hidden md:grid grid-cols-4 gap-x-2">
                {thumbnails.map((thumbnail) => (
                  <Thumbnail
                    key={thumbnail.id}
                    image={thumbnail.image}
                    activeImage={activeImg}
                    onPress={() => setActiveImg(thumbnail.image)}
                  />
                ))}
              </div>

              <div className="md:hidden">
                <Slider {...settings}>
                  {thumbnails.map((image, index) => (
                    <div key={index}>
                      <img
                        src={image.image}
                        alt={image.name}
                        loading="lazy"
                        className="w-full h-[520px] sm:h-[710px] object-cover object-center"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="md:w-[57%] w-full">
              <div className="mb-4">
                <h3 className="font-bold text-3xl text-slate-950">
                  Beautiful Product
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-2xl text-slate-950">$75.00</p>
              </div>
              <div className="mb-4">
                <Description />
              </div>
              <div className="mb-3">
                <p className="text-base text-slate-950">Size</p>
              </div>
              <div className="grid grid-cols-4 gap-4 w-full md:max-w-80">
                {options.map((option) => (
                  <Sizes key={option.id} {...option} selected={selected} selecthandler={handleSelect} />
                ))}
              </div>
              <div className="w-full md:max-w-80">
                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-slate-950 px-8 py-3 text-base font-medium text-white transition duration-300 ease-in-out transform md:hover:scale-105 md:hover:bg-slate-800 md:hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2"
                >
                  Add to bag
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-4">
              <h2 className="font-bold text-2xl md:text-3xl text-slate-950 text-center md:text-left">
                Recommended for you
              </h2>
            </div>
            <CustomSlider data={thumbnails} link='#' />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Details;
