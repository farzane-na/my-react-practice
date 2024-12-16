import React from "react";
import logo from "./../../asset/logo/static_white_logo_techno.svg"
import instagram from "./../../asset/social/static_instagram.svg"
import telegram from "./../../asset/social/static_telegram.svg"
import aparat from "./../../asset/social/static_aparat.svg"
import youtube from "./../../asset/social/static_youtube.svg"
import pay from "./../../asset/logo/technoPayFooter_new.svg"
import gold from "./../../asset/logo/technoGoldFooter_new.svg"
import bus from "./../../asset/logo/technoBusinessFooter.svg"

export default function Footer(){
    return (
        <footer className="p-8 bg-gradient-to-tl from-blue-950 to-blue-500 rounded-tr-xl rounded-tl-xl">
            <div className="flex justify-between items-center pt-10 pb-11 border-b border-b-white/50">
                <img src={logo} alt="" className="w-44" />
                <a href="#" className="flex justify-between items-center gap-3 bg-white py-2 px-4 rounded-xl font-shabnamMedium">
                    <span>برگشت به بالا</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>
                </a>
            </div>
            <div className="flex justify-between items-start pt-14">
                <div className="flex flex-col gap-5 text-white">
                    <span>تلفن : 021-47708000-021-91077500</span>
                    <span>ایمیل : info@technolife.ir</span>
                </div>
                <div className="w-56 flex flex-col gap-3 p-4 rounded-xl bg-white">
                    <p>شبکه‌های اجتماعی</p>
                    <div className="flex justify-between items-center">
                        <a href="" className="w-[30px] h-[30px]">
                            <img src={instagram} alt=""  className="w-full h-full"/>
                        </a>
                        <a href="" className="w-[30px] h-[30px]">
                            <img src={aparat} alt=""  className="w-full h-full"/>
                        </a>
                        <a href="" className="w-[30px] h-[30px]">
                            <img src={telegram} alt=""  className="w-full h-full"/>
                        </a>
                        <a href="" className="w-[30px] h-[30px]">
                            <img src={youtube} alt=""  className="w-full h-full"/>
                        </a>
                    </div>
                </div>
                <div className="flex">
                    <img src={pay} alt="" className="w-40 h-14" />
                    <img src={gold} alt="" className="w-40 h-14" />
                    <img src={bus} alt="" className="w-40 h-14" />
                </div>
            </div>
            <div className="flex pt-12"></div>
        </footer>
    )
}