import React, { useState, useEffect, useContext, useRef } from "react";
import { useParams } from "react-router-dom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import InnerImageZoom from "react-inner-image-zoom";
import { IoShareSocialOutline } from "react-icons/io5";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { GoGitCompare } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { TbBellRinging } from "react-icons/tb";
import ProductsContext from "../../context/ProductContext";
import img from "./../../asset/product/mobile/mobile1_big.webp";

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
      <div className="flex flex-col md:flex-row mt-10 mb-12">
        <div className="flex">
          <div className="right-side flex flex-col gap-36 md:flex-row items-start border border-gray-300 rounded-2xl p-11">
            <div className="right-right-side flex flex-col">
              <h2>{mainData.name}</h2>
              <p className="pb-4 border-b border-b-gray-200">comment</p>
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
            <div className="left-right-side">
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
              <div className="relative overflow-hidden w-80 flex justify-center items-center">
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
          <div className="left-side"></div>
        </div>
      </div>
    </div>
  );
}
