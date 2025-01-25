import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { backendURL } from "../../../services";

export default function ImageSlider({ images, name }) {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {images?.map((image) => (
        <SwiperSlide key={image.code}>
          <div>
            <img
              src={backendURL + image.imageurl}
              alt={name}
              loading="lazy"
              className="w-full h-[800px] sm:h-[1080px] object-cover object-center"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
