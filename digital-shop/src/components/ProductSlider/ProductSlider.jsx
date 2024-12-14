import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
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

export default function ProductSlider({
  off,
  category,
  border,
  heading,
  title,
}) {
  console.log(heading);

  return (
    <div
      className={`border ${
        border ? "border-blue-500" : "border-gray-500"
      } p-3 pb-6 rounded-3xl mb-20`}
    >
      <div className="flex justify-between items-center px-11">
        {title && <h3 className="font-shabnamBold text-xl">{title}</h3>}
        <Link
          href="#"
          className="cursor-pointer flex justify-center items-center gap-1 text-blue-900 font-shabnamMedium"
        >
          <span> نمایش همه</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </Link>
      </div>
      <div className="mt-4">
        <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
                }}
                speed={500}
                slidesPerView={7}
                navigation={{
                  nextEl: ".next-slider",
                  prevEl: ".prev-slider",
                }}
                // pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                className="relative"
              >
                {/* {catImage.map((img, index) => {
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
                })} */}
        
                  <button className="prev-slider absolute right-0 bottom-0 top-0 m-auto w-10 h-10 p-1 md:p-2 hover:bg-slate-300 rounded-full cursor-pointer transition-all">
                    <MdNavigateNext className="text-blue-800 md:text-2xl" />
                  </button>
                  <button className="next-slider absolute left-0 bottom-0 top-0 m-auto w-10 h-10 p-1 md:p-2 hover:bg-slate-300 rounded-full cursor-pointer transition-all">
                    <GrFormPrevious className="text-blue-800 md:text-2xl" />
                  </button>
              </Swiper>
      </div>
    </div>
  );
}
