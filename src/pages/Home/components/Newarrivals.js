import React from "react";
// import image from "../../../assets/images/art3.jpg";
// import image2 from "../../../assets/images/cosm.png";
// import image3 from "../../../assets/images/hairagain.jpg";
// import image4 from "../../../assets/images/fabricc.jpg";
import CustomSlider from "../../../components/Slider";
import { useFetch } from "../../../hooks/useReactQueryHooks";
import { Endpoints } from "../../../services";
import SliderSkeleton from "../../../components/Skeletons/SliderSkeleton";
// import Spinner from "../../../components/Spinner";

// const products = [
//   {
//     image: image,
//     name: "Product 1",
//     price: "5.00",
//   },
//   {
//     image: image2,
//     name: "Product 2",
//     price: "5.00",
//   },
//   {
//     image: image3,
//     name: "Product 3",
//     price: "5.00",
//   },
//   {
//     image: image4,
//     name: "Product 4",
//     price: "5.00",
//   },
// ];

const Newarrivals = () => {
  const { isLoading, data } = useFetch(
    ["newarrivals"],
    Endpoints.PRODUCTS(8, 0, "new", "desc")
  );
  const products = data?.results || {};

  // if (isLoading) {
  //   return <Spinner />;
  // }

  return (
    <section className="max-w-full py-4 px-4 my-3">
      <div className="max-w-7xl mx-auto relative">
        <div className="mb-4">
          <h3 className="font-bold text-3xl text-slate-950 text-center">
            New Arrivals
          </h3>
        </div>
        {(!isLoading && products?.length > 0) ? (
          <CustomSlider data={products} />
        ): isLoading ? <SliderSkeleton /> : ""}
      </div>
    </section>
  );
};

export default Newarrivals;
