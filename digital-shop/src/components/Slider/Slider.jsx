import React from "react";
import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const imageGetter = [
  require("./../../asset/banner/1.webp"),
  require("./../../asset/banner/2.webp"),
  require("./../../asset/banner/3.webp"),
  require("./../../asset/banner/4.webp"),
  require("./../../asset/banner/5.webp"),
  require("./../../asset/banner/6.webp"),
  require("./../../asset/banner/7.webp"),
  require("./../../asset/banner/8.webp"),
  require("./../../asset/banner/9.webp"),
  require("./../../asset/banner/10.webp"),
  require("./../../asset/banner/11.webp"),
];
export default function Slider() {
  return (
    <div className="mt-7 relative">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1000}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: ".next-slider",
          prevEl: ".prev-slider",
        }}
        pagination={{ clickable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {imageGetter.map((img, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={img} alt=""  className="w-full"/>
            </SwiperSlide>
          );
        })}

        <div className="absolute right-10 bottom-6 z-10 flex items-center gap-x-1 md:gap-x-3">
          <button className="prev-slider p-1 md:p-2 bg-slate-300 rounded-full cursor-pointer">
            <MdNavigateNext className="text-blue-800 md:text-2xl" />
          </button>
          <button className="next-slider p-1 md:p-2 bg-slate-300 rounded-full cursor-pointer">
            <GrFormPrevious className="text-blue-800 md:text-2xl" />
          </button>
        </div>
      </Swiper>
    </div>
  );
}
