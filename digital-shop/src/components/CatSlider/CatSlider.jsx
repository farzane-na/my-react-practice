import React from "react";
import "./CatSlider.css"
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
    <div className="catslider">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        speed={500}
        navigation={{
          nextEl: ".next-slider",
          prevEl: ".prev-slider",
        }}
        breakpoints={{
          340: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          // تبلت (بین 640px تا 768px)
          768: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          // دسکتاپ (بیشتر از 1024px)
          1024: {
            slidesPerView: 7,
            spaceBetween: 20,
          },
        }}
        // pagination={{ clickable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        className="relative"
      >
        {catImage.map((img, index) => {
          return (
            <SwiperSlide key={index}>
              <a
                href="#"
                className="flex justify-center items-center w-32 h-32  p-1 rounded-full border borde border-blue-800 hover:border-4 hover:border-blue-800 transition-all group duration-100"
              >
                <img src={img} alt="" />
              </a>
            </SwiperSlide>
          );
        })}

          <button className="prev-slider absolute right-0 bottom-0 top-0 m-auto w-10 h-10 p-1 md:p-2 hover:bg-slate-300 rounded-full cursor-pointer transition-all">
            <MdNavigateNext className="text-blue-800 md:text-2xl" />
          </button>
          <button className="next-slider absolute left-0 bottom-0 top-0 m-auto w-10 h-10 p-1 md:p-2 hover:bg-slate-300 rounded-full cursor-pointer transition-all">
            <GrFormPrevious className="text-blue-800 md:text-2xl" />
          </button>
      </Swiper>
    </div>
  );
}
