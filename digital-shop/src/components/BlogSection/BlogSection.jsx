import React ,{useContext,useState,useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import BlogContext from "../../context/BlogContext";
import blog from "../../data/blog";


export default function ProductSlider() {
    const [allBlog,setAllBlog]=useState(blog)
  return (
    <BlogContext.Provider value={allBlog} >
    <div
      className="border border-gray-500 px-3 py-6 rounded-3xl mb-20"
    >
      <div className="flex justify-between items-center px-11 mb-5">
        <h3 className="font-shabnamBold text-xl">از وبلاگ تکنولایف</h3>
        <Link
          href="#"
          className="cursor-pointer flex justify-center items-center gap-1 text-blue-900 font-shabnamMedium"
        >
          <span> نمایش بیشتر در بلاگ</span>
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
      <div className="relative mt-4 px-5">
        <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={6}
                navigation={{
                  nextEl: ".next-product",
                  prevEl: ".prev-product",
                }}
                className="relative"
              >
                {allBlog.map((blog) => {
                  return (
                    <SwiperSlide key={blog.id}>
                      <div className="relative rounded-xl bg-gray-700 pb-2">
                        <div className="w-full rounded-lg">
                            <img src={blog.image} alt={blog.title} />
                        </div>
                        <p className="w-full h-10 text-white font-shabnamThin text-xs line-clamp-2 px-2 py-0.5 leading-[18px]">
                            {blog.title}
                        </p>
                        <Link className="absolute top-0 right-0 bottom-0 left-0 w-full h-full"></Link>
                      </div>
                    </SwiperSlide>
                  );
                })}
        
              </Swiper>
                  <button className="prev-product absolute -right-5 bottom-0 top-0 m-auto w-10 h-10 p-1 md:p-2 z-10 cursor-pointer">
                    <MdNavigateNext className="text-blue-800 md:text-2xl" />
                  </button>
                  <button className="next-product absolute -left-5 bottom-0 top-0 m-auto w-10 h-10 p-1 md:p-2 z-10 cursor-pointer">
                    <GrFormPrevious className="text-blue-800 md:text-2xl" />
                  </button>
      </div>
    </div>
    </BlogContext.Provider>
  );
}
