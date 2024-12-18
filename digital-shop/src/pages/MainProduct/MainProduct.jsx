import React, { useState, useEffect, useContext, useRef } from "react";
import { useParams } from "react-router-dom";
import Countdown from "react-countdown";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import InnerImageZoom from "react-inner-image-zoom";
import { IoShareSocialOutline } from "react-icons/io5";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { GoGitCompare } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { TbBellRinging } from "react-icons/tb";
import { BsShop } from "react-icons/bs";
import { BsBoxSeam } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { BsPatchCheck } from "react-icons/bs";
import { RiShoppingCartLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import ProductsContext from "../../context/ProductContext";

export default function MainProduct() {
  const { productID } = useParams();
  const [mainData, setMainData] = useState([]);
  const contextData = useContext(ProductsContext);
  useEffect(() => {
    let filterMainProduct = contextData.filter(
      (product) => product?.id === productID
    );
    setMainData(filterMainProduct[0]);
  }, []);
  useEffect(() => {
    console.log("dara", mainData);

    const dataName = mainData?.name;
    const cutName = dataName?.slice(0, 30);
    document.title = `خرید ${cutName} ...`;
  }, [mainData]);

  return (
    <div className="wrapper">
      <div className="flex flex-col md:flex-row gap-10 mt-10 mb-12">
        <div className="right-side flex w-full md:w-[70%] flex-col-reverse md:flex-row items-start justify-between border border-gray-300 rounded-2xl p-11">
          <div className="right-right-side w-full md:w-[600px] flex flex-col gap-10">
            <h2 className="leading-7 text-base md:text-xl font-shabnamMedium">
              {mainData.name}
            </h2>
            <p className="w-[30%] pb-4 border-b border-b-gray-200">
              <span>نظرات کاربران &nbsp; </span>
              <span className="text-blue-700">0 نظر</span>
            </p>
            <div className="flex-flex-col">
              <p className="color pb-4 border-b border-b-gray-200"></p>
              <div className="colors"></div>
            </div>
            <div className="flex flex-col">
              <h3>property</h3>
              <div className="border border-gray-200 rounded-xl py-4 px-5">
                <p>
                  <span></span>
                  <span></span>
                </p>
                <p>
                  <span></span>
                  <span></span>
                </p>
              </div>
            </div>
          </div>
          <div className="left-right-side w-full md:w-auto">
            <div className="flex justify-between items-center gap-5 mb-5">
              <span className="flex justify-center items-center w-8 h-8 rounded-lg bg-white shadow-[2px_2px_10px_rgba(0,0,0,0.2)] p-1 cursor-pointer">
                <IoShareSocialOutline className="w-5 h-5 text-blue-950" />
              </span>
              <span className="flex justify-center items-center w-8 h-8 rounded-lg bg-white shadow-[2px_2px_10px_rgba(0,0,0,0.2)] p-1 cursor-pointer">
                <HiOutlineChatBubbleOvalLeftEllipsis className="w-5 h-5 text-blue-950" />
              </span>
              <span className="flex justify-center items-center w-8 h-8 rounded-lg bg-white shadow-[2px_2px_10px_rgba(0,0,0,0.2)] p-1 cursor-pointer">
                <GoGitCompare className="w-5 h-5 text-blue-950" />
              </span>
              <span className="flex justify-center items-center w-8 h-8 rounded-lg bg-white shadow-[2px_2px_10px_rgba(0,0,0,0.2)] p-1 cursor-pointer">
                <TbBellRinging className="w-5 h-5 text-blue-950" />
              </span>
              <span className="flex justify-center items-center w-8 h-8 rounded-lg bg-white shadow-[2px_2px_10px_rgba(0,0,0,0.2)] p-1 cursor-pointer">
                <IoMdHeartEmpty className="w-5 h-5 text-blue-950" />
              </span>
            </div>
            <div className="relative overflow-hidden w-full md:w-80 flex justify-center items-center">
              {/* <img src={mainData.image} alt="" /> */}
              <InnerImageZoom
                src={mainData.image}
                zoomSrc={mainData.image}
                zoomType="hover"
                zoomPreload={true}
              />
            </div>
          </div>
        </div>
        <div className="left-side flex flex-col flex-grow gap-6 text-sm p-3 border shadow-[2px_2px_10px_rgba(0,0,0,0.1)]  rounded-2xl">
          {mainData.off > 0 && (
            <div className="off-slider relative w-full flex justify-between items-center py-0.5 font-shabnamBold text-blue-600">
              <span className="text-sm">فروش ویژه</span>
              <Countdown date={1734269834600 + mainData.time} />
            </div>
          )}
          <div className="p-2 flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-5 text-sm">
                <BsShop className="w-5 h-5 text-blue-950" />
                <span>تکنولایف</span>
              </div>
              <span className="flex items-center gap-2 text-blue-700 text-xs">
                <span>همه فروشندگان (3)</span>
                <IoIosArrowDown className="w-5 h-5" />
              </span>
            </div>
            <div className="flex items-center gap-5 text-gray-600">
              <BsBoxSeam className="w-4 h-4 text-blue-950" />
              <span className="text-xs">موجود در انبار تکنولایف</span>
            </div>
          </div>
          <div className="p-2 flex gap-5 text-sm">
            <IoSettingsOutline className="w-5 h-5 text-blue-950" />
            <span>ارزیابی عملکرد :</span>
            <span className="text-blue-950">عالی</span>
          </div>
          <div className="p-2 flex gap-5 text-sm">
            <BsPatchCheck className="w-5 h-5 text-blue-950" />
            <span>10 سال گارانتی </span>
          </div>
          <div className="p-2 border border-dashed border-blue-800 rounded-xl ">
            <div className="flex justify-between text-blue-800 cursor-pointer mb-2">
              <div className="flex items-center gap-5 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                  />
                </svg>
                <span>مشاهده فروشندگان اقساطی</span>
              </div>
              <IoIosArrowDown className="w-5 h-5 rotate-90" />
            </div>
            <p className="text-orange-500 font-shabnamMedium">خرید قسطی فقط از میان فروشندگان اقساطی امکان پذیر است.</p>
          </div>
          <div className="flex flex-col items-end gap-5">
            {
              mainData.off>0 && (
                <span className="p-1 bg-blue-500 text-white text-sm rounded-xl">
                  {`${mainData.price-mainData.off} تومان تخفیف`}
                </span>
              )
            }
            <div className="flex items-center flex-row-reverse gap-2 font-shabnamMedium">
              <span>
                {mainData.off?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                تومان
              </span>
              {
                mainData.off>0 && (
                  <span className="text-gray-500 total-price-in-off">
                    {mainData.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </span>
                )
              }
              
            </div>
            <button className="fixed bottom-0 left-0 right-0 md:relative w-full py-3 bg-blue-800 md:rounded-xl text-white cursor-pointer">
              افزودن به سبد خرید
              <RiShoppingCartLine className="absolute top-0 bottom-0 m-auto left-6 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}