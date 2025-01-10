import React ,{useContext,useState,useEffect} from "react";
import "./ProductSlider.css"
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
import ProductsContext from "../../context/ProductContext";
import Countdown from 'react-countdown';


export default function ProductSlider({category,border,title}) {
  const contextData=useContext(ProductsContext)
  const [filteredProducts,setFilteredProducts]=useState([])
  useEffect( ()=>{
    let mainProducts=contextData?.filter(product=>product?.category===category)
    setFilteredProducts(mainProducts)
  },[contextData])
  return (
    <div
      className={`border ${
        border ? "border-blue-500" : "border-gray-500"
      } px-3 py-6 rounded-3xl mb-20`}
    >
      <div className="flex justify-between items-center xs:px-11 mb-5">
        {title && <h3 className="font-shabnamBold xs:text-xl">{title}</h3>}
        <Link
          to={`/product/category/${category}`}
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
      <div className="relative mt-4 px-5">
        {
          filteredProducts.length===0 ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="50"
                   height="50" style={{shapeRendering: "auto", display: "block", background: "rgba(255, 255, 255,0)",margin:"0 auto"}}
              >
                <g>
                  <path stroke="none" fill="#223266" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50">
                    <animateTransform values="0 50 51;360 50 51" keyTimes="0;1" repeatCount="indefinite" dur="1s"
                                      type="rotate" attributeName="transform"></animateTransform>
                  </path>
                  <g></g>
                </g>
              </svg>
          ) :(
              <>
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={20}
                  navigation={{
                    nextEl: ".next-product",
                    prevEl: ".prev-product",
                  }}
                  breakpoints={{
                    340: {
                      slidesPerView: 1,
                      spaceBetween: 5,
                    },
                    496: {
                      slidesPerView: 2,
                      spaceBetween: 5,
                    },
                    // تبلت (بین 640px تا 768px)
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 15,
                    },
                    // دسکتاپ (بیشتر از 1024px)
                    1024: {
                      slidesPerView: 5,
                      spaceBetween: 20,
                    },
                    1220: {
                      slidesPerView: 6,
                      spaceBetween: 20,
                    },
                  }}
                  className="relative"
                >
                  {filteredProducts.map((product) => {
                    return (
                        <SwiperSlide key={product.id}>
                          {
                            product.off>0 ? (
                                <div className="off-slider relative w-full flex justify-between items-center py-0.5 font-shabnamBold text-blue-600 mb-2">
                                  <span className="text-sm">فروش ویژه</span>
                                  <Countdown date={173426999 + Date.now() } />
                                </div>
                            ) : (
                                <div className="h-7 w-full"></div>
                            )
                          }
                          <div className="item-slider flex flex-col gap-y-2 pl-2">
                            <div className="relative flex justify-center items-center">
                              <img src={product?.image} alt="" />
                              <Link to={`/product/${product.id}`} className="absolute top-0 left-0 right-0 bottom-0 w-full h-full"></Link>
                            </div>
                            <Link to={`/product/${product?.id}`} className="text-sm line-clamp-2 leading-6 h-12">{product?.name}</Link>
                            <div className={`flex ${product?.off>0 ? "justify-between" : "justify-end"} items-start`}>
                              {
                                  product?.off>0 && (
                                      <span className="bg-blue-500 px-1 py-0.5 rounded text-sm text-white">
                              {
                                (100-Math.ceil((product?.off*100)/product?.price))===0 ? (
                                    1+" %"
                                ) : (
                                    (100-Math.ceil((product?.off*100)/product?.price))+" %"
                                )
                              }
                            </span>
                                  )
                              }
                            <div className="flex flex-col font-shabnamMedium">
                              {
                                  product.off>0 && (
                                      <span className="flex justify-center items-center gap-0.5">
                                <span>{product?.off.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                                <span className="text-xs">تومان</span>
                                </span>
                                  )
                              }
                              <span className={`flex justify-center items-center gap-0.5 ${product?.off>0 ? "text-gray-500 total-price-in-off" : "text-black"}`}>
                              {
                                product?.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                              }
                                <span className="text-xs">تومان</span>
                            </span>
                            </div>
                          </div>
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
              </>
          )
        }
      </div>
    </div>
  );
}
