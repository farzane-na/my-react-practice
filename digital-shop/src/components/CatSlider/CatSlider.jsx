import React from "react";
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

const catImage = [
  require("./../../asset/category/banner_CircleCategories_togRvq_5e1e5673-e7ac-4bee-8890-8d78f8e72b19.webp"),
  require("./../../asset/category/laptop.webp"),
  require("./../../asset/category/mobile.webp"),
  require("./../../asset/category/old-mobile.webp"),
  require("./../../asset/category/charger.webp"),
  require("./../../asset/category/smart-watch.webp"),
  require("./../../asset/category/controler.webp"),
  require("./../../asset/category/tablet.webp"),
  require("./../../asset/category/headphone.webp"),
  require("./../../asset/category/speaker.webp"),
  require("./../../asset/category/power-bank.webp"),
  require("./../../asset/category/gold.webp"),
  require("./../../asset/category/drail.webp"),
  require("./../../asset/category/machine.webp"),
  require("./../../asset/category/computer.webp"),
  require("./../../asset/category/wifi.webp"),
  require("./../../asset/category/tv.webp"),
];

export default function CatSlider() {
  return (
    <div className="catslider my-13">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        speed={500}
        // spaceBetween={50}
        slidesPerView={7}
        navigation={{
          nextEl: ".next-slider",
          prevEl: ".prev-slider",
        }}
        // pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {catImage.map((img, index) => {
          return (
            <SwiperSlide key={index}>
              <a
                href="#"
                className="flex justify-center items-center w-32 h-32  p-1 rounded-full border border-blue-800 hover:border-2 transition-all"
              >
                <img src={img} alt="" />
              </a>
            </SwiperSlide>
          );
        })}

        {/* <div className="absolute right-10 bottom-6 z-10 flex items-center gap-x-1 md:gap-x-3">
          <button className="prev-slider p-1 md:p-2 bg-slate-300 rounded-full cursor-pointer">
            <MdNavigateNext className="text-blue-800 md:text-2xl" />
          </button>
          <button className="next-slider p-1 md:p-2 bg-slate-300 rounded-full cursor-pointer">
            <GrFormPrevious className="text-blue-800 md:text-2xl" />
          </button>
        </div> */}
      </Swiper>
    </div>
  );
}
