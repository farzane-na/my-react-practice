import React, { useEffect, useState } from "react";
import { CiTrash } from "react-icons/ci";
import { LuPlus } from "react-icons/lu";
import { HiMinus } from "react-icons/hi";

export default function ProductInCart({ image, name , price , off }) {
  const [productCount, setProductCount] = useState("1");
  const [finalPrice,setFinalPrice]=useState("")
  useEffect(()=>{
      
      setFinalPrice(off>0 ? off : price)
    },[])
  const addProductCount=()=>{
    setProductCount(prev=>+prev+1)
  }
  return (
    <div className="w-full flex items-center justify-between border border-gray-200 rounded-2xl p-4">
      <div className="flex items-center">
        <div className="w-16 ml-5">
          <img src={image} alt="" className="w-full" />
        </div>
        <div className="flex justify-center items-center ml-5 border border-gray-200 rounded px-1">
          {productCount === "1" ? (
            <CiTrash className="w-4 h-4 text-blue-950 cursor-pointer"  />
          ) : (
            <HiMinus className="w-4 h-4 text-blue-950 cursor-pointer" />
          )}
          <span className="px-2 border-x border-x-gray-200 h-full text-blue-950">
            {productCount}
          </span>
          <LuPlus className="w-4 h-4 text-blue-950 cursor-pointer" onClick={addProductCount} />
        </div>
        <p className="w-[520px] overflow-hidden text-ellipsis text-nowrap">
          {name}
        </p>
      </div>
      <p className="font-shabnamBold text-blue-950">
        {
            `${new Intl.NumberFormat('fa-IR').format((finalPrice * productCount),)} تومان`
        }
      </p>
    </div>
  );
}
