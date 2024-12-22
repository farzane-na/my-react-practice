import React from 'react';


export default function OptimizingColor({colorName,isSelect,onSelect}){
    const allColors={
        black:"#030712",
        white:"#f9fafb",
        green:"#86efac",
        gold:"#ca8a04",
        silver:"#737373",
        pink:"#f87171",
        blue:"#2563eb",
    }
    const persianNameColor={
        black:"مشکی",
        white:"سفید",
        green:"سبز",
        gold:"طلایی",
        silver:"نقره‌ای",
        pink:"صورتی",
        blue:"آبی",
    }
    return(
        <div 
        className={`colorOption w-16 flex items-center border rounded p-0.5 gap-1 ${isSelect ? "border-blue-900" : "border-gray-300"}`}
        onClick={onSelect}
        >
            <span 
            className='rounded-full w-3 h-3 shadow-sm'
            style={{backgroundColor:allColors[colorName]}}
            ></span>
            <span className='text-sm'>
                {
                    persianNameColor[colorName]
                }
            </span>
        </div>
    )
}