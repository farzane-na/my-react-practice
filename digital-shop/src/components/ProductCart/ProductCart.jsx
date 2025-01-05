import React ,{useState,useEffect} from "react";
import StylingNumber from "../../GlobalFunc/StylingNumber";
import {Link} from 'react-router-dom'

const allColors={
    black:"#030712",
    white:"#f9fafb",
    green:"#86efac",
    gold:"#ca8a04",
    silver:"#737373",
    pink:"#f87171",
    blue:"#2563eb",
}

export default function ProductCart ({id,image,price,off,name,colors}){
    return (
        <div className={"product-cart relative border border-gray-200 rounded-xl p-3 flex flex-col gap-y-2 overflow-hidden"}>
            <Link to={`/product/${id}`} className={"absolute z-10 w-full h-full to-0 bottom-0 left-0 right-0 rounded-xl"}></Link>
            <div className={"relative w-full "}>
                <img src={image} alt={name} className={"w-full"} />
                <div className={"absolute flex flex-col gap-1 top-0 right-0"}>
                    {
                        colors.map((color,index)=>{
                           return <span key={index} className={"w-2 h-2 rounded-full shadow border border-gray-400"} style={{backgroundColor:`${allColors[color]}`}}></span>
                        })
                    }
                </div>
            </div>
            <p className={"line-clamp-2 text-sm"}>
                {name}
            </p>
            <div className={`w-full flex ${off>0 ? "justify-between" : "justify-end"} items-start`}>
                {
                    off>0 && (
                        <span className={"bg-blue-600 rounded text-white text-center px-3 py-1 text-xs"}>
                            {Math.ceil((price - off) * 100 / price)}%
                        </span>
                    )
                }

                <div className={"flex flex-col gap-2"}>
                    {
                        off > 0 ? (
                            <>
                                <span className={"text-blue-900 font-black text-sm"}>
                                    {StylingNumber(off)} تومان
                                </span>
                                <span className={"total-price-in-off text-gray-500 text-sm"}>
                                    {StylingNumber(price)} تومان
                                </span>
                            </>
                        ) : (
                                <span className={"text-blue-900 font-black text-sm"}>
                                    {StylingNumber(price)} تومان
                                </span>
                         )
                    }

            </div>
            </div>
        </div>
    )
}