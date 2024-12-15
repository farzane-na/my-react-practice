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
  useEffect(()=>{
    let mainProducts=contextData.filter(product=>product.category===category)
    setFilteredProducts(mainProducts)
  },[])
  return (
    <div
      className={`border ${
        border ? "border-blue-500" : "border-gray-500"
      } px-3 py-6 rounded-3xl mb-20`}
    >
      <div className="flex justify-between items-center px-11 mb-5">
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
                {filteredProducts.map((product) => {
                  return (
                    <SwiperSlide key={product.id}>
                      {
                        product.off>0 ? (
                          <div className="off-slider relative w-full flex justify-between items-center py-0.5 font-shabnamBold text-blue-600 mb-2">
                            <span className="text-sm">فروش ویژه</span>
                            <Countdown date={1734269834600 + product.time } />
                          </div>
                        ) : (
                          <div className="h-7 w-full"></div>
                        )
                      }
                      <div className="item-slider flex flex-col gap-y-2 pl-2">
                        <div className="flex justify-center items-center">
                          <img src={product.image} alt="" />
                        </div>
                        <h4 className="text-sm line-clamp-2 leading-6 h-12">{product.name}</h4>
                        <div className={`flex ${product.off>0 ? "justify-between" : "justify-end"} items-start`}>
                          {
                            product.off>0 && (
                              <span className="bg-blue-500 px-1 py-0.5 rounded text-sm text-white">
                            {
                              (100-Math.ceil((product.off*100)/product.price))===0 ? (
                                1+" %"
                              ) : (
                                (100-Math.ceil((product.off*100)/product.price))+" %"
                              )
                            }
                          </span>
                            )
                          }
                          
                          <div className="flex flex-col font-shabnamMedium">
                            {
                              product.off>0 && (
                                <span className="flex justify-center items-center gap-0.5">
                                <span>{product.off.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                                <span className="text-xs">تومان</span>
                                </span>
                              )
                            }
                            <span className={`flex justify-center items-center gap-0.5 ${product.off>0 ? "text-gray-500 total-price-in-off" : "text-black"}`}>
                              {
                                product.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
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
      </div>
    </div>
  );
}
