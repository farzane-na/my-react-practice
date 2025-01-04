import React ,{useState,useEffect} from "react";
import StylingNumber from "../../GlobalFunc/StylingNumber";

export default function ProductCart ({id,image,price,off,name}){
    return (
        <div className={"product-cart border border-gray-200 rounded-xl p-3 flex flex-col gap-y-2"}>
            <div className={"w-full "}>
                <img src={image} alt={name} className={"w-full"} />
            </div>
            <p className={"line-clamp-2 text-sm"}>
                {name}
            </p>
            <div className={"w-full flex justify-between items-start"}>
                <button className={"bg-blue-900 rounded-xl text-white text-center px-3 py-2 text-xs"}>افزودن به سبد خرید</button>
                <div className={"flex flex-col gap-2"}>
                    <span className={"text-blue-900 font-black text-sm"}>
                        {StylingNumber(off)} تومان
                    </span>
                    <span className={"total-price-in-off text-gray-500 text-sm"}>
                        {StylingNumber(price)} تومان
                    </span>
                </div>
            </div>
        </div>
    )
}