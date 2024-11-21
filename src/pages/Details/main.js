import React from "react";
import image1 from "../../assets/images/hair3.jpg";
import Imagezoom from "react-image-zooom";
import classes from "./main.module.css";

const Details = () => {
  return (
    <main>
      <section className="max-w-full py-4 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex w-full">
            <div className="w-1/2">
              <div className="w-full h-[480px] rounded-md">
                <Imagezoom
                  className={classes.fullimagezoom}
                  src={image1}
                  alt="A image to apply the ImageZoom plugin"
                  zoom="250"
                />
              </div>
            </div>
            <div className="w-1/2"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Details;
