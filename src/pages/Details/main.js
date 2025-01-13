import React, { useEffect, useRef, useState } from "react";
import Imagezoom from "react-image-zooom";
import classes from "./main.module.css";
import CustomizedBreadcrumbs from "./components/Breadcrumbs";
import Thumbnail from "./components/Thumbnail";
import Description from "./components/Description";
import Sizes from "./components/Sizes";
import CustomSlider from "../../components/Slider";
import { useContext } from "react";
import { ModalContext } from "../../context";
import ProductColors from "./components/ProductColors";
import { useFetch } from "../../hooks";
import { useParams } from "react-router-dom";
import { backendURL, Endpoints } from "../../services";
import Spinner from "../../components/Spinner";
import "./components/Input.css";
import {
  extractUniqueValues,
  getSizesForColor,
} from "../../helpers/Helperfunctions";
import Decrementbtn from "../../components/Decrementbtn";
import Incrementbtn from "../../components/Incrementbtn";
import ImageSlider from "./components/ImageSlider";

const Details = () => {
  const [selected, setSelected] = useState("");
  const { openCart } = useContext(ModalContext);
  const [activeImg, setActiveImg] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const { productCode } = useParams();
  const inputref = useRef(null);

  const { data, isLoading } = useFetch(
    ["prdouctdetail", productCode],
    Endpoints.PRODUCT(productCode)
  );

  const product = data?.results || {};
  const category = product.catcode;
  const prodname = product.name;
  const mainImage = product.preview ? backendURL + product?.preview : null;
  const mainImageObj = { code: productCode, imageurl: product.preview };
  const prodPrice = product.price;
  const prodDescription = product.description;
  const otherImages = product.prodimages;
  const prodvariations = product.prodvariations;
  const { data: recommendedData, isLoading: isFetching } = useFetch(
    ["recommended", productCode, category],
    Endpoints.RECOMMENDED(category, 8, 0)
  );
  const filteredRecommended = recommendedData?.results?.filter(
    (dataObj) => dataObj.code !== productCode
  );

  console.log(product);

  const handleSelect = (size) => {
    setSelected(size);
  };

  const handleSelectedColor = (color) => {
    setSelectedColor(color);
  };

  const increaseAmt = () => {
    const amount = inputref.current.value;

    if (parseInt(amount) === 10) {
      //error handle
      console.log("hiii");
      return;
    }

    const newamount = parseInt(amount) + 1;
    inputref.current.value = newamount;
  };

  const decreaseAmt = () => {
    const amount = inputref.current.value;

    if (parseInt(amount) === 1) {
      return;
    }
    const newamount = parseInt(amount) - 1;
    inputref.current.value = newamount;
  };

  useEffect(() => {
    if (!isLoading) {
      setActiveImg(mainImage);
    }
  }, [mainImage, isLoading]);

  if (isLoading) {
    return <Spinner loading={isLoading} />;
  }

  const allImages = [mainImageObj, ...otherImages];
  const availableVariations = extractUniqueValues(
    prodvariations,
    "color",
    "value",
    "size"
  );
  console.log(availableVariations);

  const sizesForColor = getSizesForColor(prodvariations, selectedColor);
  // console.log('this is details page')

  console.log(selectedColor);

  return (
    <main>
      <section className="max-w-full py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <CustomizedBreadcrumbs
            category={category}
            name={prodname}
            productCode={productCode}
          />
          <div className="flex w-full flex-col md:flex-row mt-4 mb-16 gap-y-10 md:gap-y-0 md:gap-x-12">
            <div className="md:w-[44%] w-full">
              {activeImg ? (
                <div className="w-full hidden md:block md:h-[500px] rounded-md overflow-hidden relative mb-3 p-5 md:p-0">
                  <Imagezoom
                    className={classes.fullimagezoom}
                    src={activeImg}
                    alt={prodname}
                    zoom="250"
                  />
                </div>
              ) : (
                <Spinner />
              )}

              <div className="thumbnailsContainer hidden md:grid grid-cols-4 gap-x-2">
                {allImages?.map((image) => (
                  <Thumbnail
                    key={image.code}
                    image={backendURL + image.imageurl}
                    name={prodname}
                    activeImage={activeImg}
                    onPress={() => setActiveImg(backendURL + image.imageurl)}
                  />
                ))}
              </div>

              <div className="md:hidden">
                  <ImageSlider images={allImages} name={prodname} />
              </div>
            </div>
            <div className="md:w-[56%] w-full">
              <div className="mb-4">
                <h3 className="font-bold text-3xl text-slate-950">
                  {prodname}
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-2xl text-slate-950">${prodPrice}</p>
              </div>
              <div className="mb-4">
                <Description description={prodDescription} />
              </div>
              <div className="mb-3">
                <p className="text-base text-slate-950">Color</p>
              </div>
              <div className="flex items-center gap-x-3 mb-4 w-full md:max-w-80">
                {availableVariations.uniqueKey1Values?.map((color) => (
                  <ProductColors
                    key={color}
                    color={color}
                    selected={selectedColor}
                    selecthandler={handleSelectedColor}
                  />
                ))}
              </div>
              <div className="mb-3">
                <p className="text-base text-slate-950">Size</p>
              </div>
              <div className="grid grid-cols-4 gap-4 w-full md:max-w-80">
                {availableVariations.uniqueKey2Values?.map((size) => (
                  <Sizes
                    key={size}
                    size={size}
                    selected={selected}
                    selecthandler={handleSelect}
                    sizesForColor={sizesForColor}
                  />
                ))}
              </div>
              <div className="w-full md:max-w-[28.125rem] flex gap-x-2 sm:gap-x-3 items-center mt-8">
                <div className="flex flex-1 border border-gray-600 w-full rounded-md">
                  <button
                    type="button"
                    onClick={decreaseAmt}
                    className="py-3 px-1 sm:px-2"
                  >
                    <Decrementbtn />
                  </button>
                  <input
                    id="amount"
                    type="number"
                    min="1"
                    max="5"
                    step="1"
                    defaultValue="1"
                    ref={inputref}
                    className="text-black border-none outline-none appearance-none py-3 px-2 sm:px-3 text-center"
                  />
                  <button
                    type="button"
                    onClick={increaseAmt}
                    className="py-3 px-1 sm:px-2"
                  >
                    <Incrementbtn />
                  </button>
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md border border-transparent hover:border-gray-600 bg-slate-950 px-8 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:text-black md:hover:bg-transparent md:hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2"
                  onClick={openCart}
                  // disabled={selectedColor === "" ? false : true}
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
            {isFetching ? (
              <Spinner />
            ) : (
              <CustomSlider data={filteredRecommended} link="#" />
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Details;
