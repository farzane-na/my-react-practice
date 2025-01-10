import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../asset/logo/static_white_logo_techno.svg";
import instagram from "./../../asset/social/static_instagram.svg";
import telegram from "./../../asset/social/static_telegram.svg";
import aparat from "./../../asset/social/static_aparat.svg";
import youtube from "./../../asset/social/static_youtube.svg";
import pay from "./../../asset/logo/technoPayFooter_new.svg";
import gold from "./../../asset/logo/technoGoldFooter_new.svg";
import bus from "./../../asset/logo/technoBusinessFooter.svg";

import lic1 from "./../../asset/licence/c5.webp";
import lic2 from "./../../asset/licence/c4.webp";
import lic3 from "./../../asset/licence/download.svg";
import lic4 from "./../../asset/licence/logo.png";

export default function Footer() {
  return (
    <footer className="p-8 bg-gradient-to-tl from-blue-950 to-blue-500 rounded-tr-xl rounded-tl-xl">
      <div className="flex flex-col gap-5 sm:flex-row justify-between items-center pt-10 pb-11 border-b border-b-white/50">
        <Link to={"/"}><img src={logo} alt="" className="w-44" /></Link>
        <a
          href="#"
          className="w-44 flex justify-between items-center gap-3 bg-white py-2 px-4 rounded-xl font-shabnamMedium"
        >
          <span>برگشت به بالا</span>
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
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        </a>
      </div>
      <div className="flex flex-col lg:flex-row items-start gap-x-20 2xl:gap-x-44 gap-y-20 pt-14">
        <div className="flex flex-row flex-wrap lg:flex-col justify-start items-start gap-10">
          <div className="flex flex-col gap-5 text-white">
            <span>تلفن : 021-47708000-021-91077500</span>
            <span>ایمیل : info@technolife.ir</span>
          </div>
          <div className="w-56 flexflex-col gap-3 p-4 rounded-xl bg-white">
            <p>شبکه‌های اجتماعی</p>
            <div className="flex justify-between items-center">
              <a href="" className="w-[30px] h-[30px]">
                <img src={instagram} alt="" className="w-full h-full" />
              </a>
              <a href="" className="w-[30px] h-[30px]">
                <img src={aparat} alt="" className="w-full h-full" />
              </a>
              <a href="" className="w-[30px] h-[30px]">
                <img src={telegram} alt="" className="w-full h-full" />
              </a>
              <a href="" className="w-[30px] h-[30px]">
                <img src={youtube} alt="" className="w-full h-full" />
              </a>
            </div>
          </div>
          <div className="flex  flex-row flex-wrap lg:flex-col gap-10">
            <img src={pay} alt="" className="w-40 h-14" />
            <img src={gold} alt="" className="w-40 h-14" />
            <img src={bus} alt="" className="w-40 h-14" />
          </div>
        </div>
        <div className="flex flex-col flex-grow gap-5">
          <div className="flex flex-wrap flex-col lg:flex-row items-start gap-y-8">
            <div className="flex flex-col sm:flex-row items-start gap-8">
              <ul className="w-32 2xl:w-52 flex flex-col gap-4 text-white">
                <h4 className="font-shabnamMedium text-base mb-2">
                  دسترسی سریع
                </h4>
                <li className="text-xs">
                  <Link to={"/blog"}>بلاگ</Link>
                </li>
                <li className="text-xs">
                  <Link to={"/shop"}>خرید گوشی</Link>
                </li>
                <li className="text-xs">
                  <Link to={"/shop"}>گوشی سامسونگ</Link>
                </li>
                <li className="text-xs">
                  <Link to={"/shop"} href="#">گوشی آیفون</Link>
                </li>
                <li className="text-xs">
                  <Link to={"/shop"} >گوشی شیائومی</Link>
                </li>
                <li className="text-xs">
                  <Link to={"/shop"}>گوشی پوکو</Link>
                </li>
                <li className="text-xs">
                  <Link to={"/shop"}>مقایسه گوشی</Link>
                </li>
                <li className="text-xs">
                  <Link to={"/shop"}>قیمت لپتاپ</Link>
                </li>
                <li className="text-xs">
                  <Link to={"/shop"}>هندزفری بلوتوثی گوشی</Link>
                </li>
                <li className="text-xs">
                  <Link to={"/shop"}>بلک فرایدی</Link>
                </li>
              </ul>
              <ul className="w-32 2xl:w-52  flex flex-col gap-4 text-white">
                <h4 className="font-shabnamMedium text-base mb-2">
                  پرفروش ترین محصولات
                </h4>
                <li className="text-xs">
                  <a href="#">گوشی s24 fe</a>
                </li>
                <li className="text-xs">
                  <a href="#">آیفون13</a>
                </li>
                <li className="text-xs">
                  <a href="#">گوشی 14t</a>
                </li>
                <li className="text-xs">
                  <a href="#">گوشی 14t pro</a>
                </li>
                <li className="text-xs">
                  <a href="#">گوشی های ارزان شیائومی</a>
                </li>
                <li className="text-xs">
                  <a href="#">گوشی ارزان سامسونگ</a>
                </li>
                <li className="text-xs">
                  <a href="#">ساعت هوشمند</a>
                </li>
                <li className="text-xs">
                  <a href="#">پرینتر</a>
                </li>
                <li className="text-xs">
                  <a href="#">هارد اکسترنال</a>
                </li>
                <li className="text-xs">
                  <a href="#">لوازم خانگی</a>
                </li>
              </ul>
              <ul className="w-32 2xl:w-52  flex flex-col gap-4 text-white">
                <h4 className="font-shabnamMedium text-base mb-2">درباره ما</h4>
                <li className="text-xs">
                  <a href="#">تکنولایف در یک نگاه</a>
                </li>
                <li className="text-xs">
                  <a href="#">خرید گوشی</a>
                </li>
                <li className="text-xs">
                  <a href="#">اهدا و تعهد های ما</a>
                </li>
                <li className="text-xs">
                  <a href="#">سرگذشت تکنولایف</a>
                </li>
                <li className="text-xs">
                  <a href="#">سوالات متداول</a>
                </li>
                <li className="text-xs">
                  <a href="#">فروشگاه های حضوری</a>
                </li>
                <li className="text-xs">
                  <a href="#">تماس با ما</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-8">
              <ul className="w-32 2xl:w-52  flex flex-col gap-4 text-white">
                <h4 className="font-shabnamMedium text-base mb-2">
                  پیش از خرید
                </h4>
                <li className="text-xs">
                  <a href="#">راهنمای خرید اقساطی</a>
                </li>
                <li className="text-xs">
                  <a href="#">خرید سازمانی</a>
                </li>
                <li className="text-xs">
                  <a href="#">راهنما خرید از تکنولایف</a>
                </li>
                <li className="text-xs">
                  <a href="#">رو های خرید از تکنولایف</a>
                </li>
                <li className="text-xs">
                  <a href="#">ضمانت هفت روزه تکنولایف</a>
                </li>
                <li className="text-xs">
                  <a href="#">شیوه ها و هزینه ارسال </a>
                </li>
              </ul>
              <ul className="w-32 2xl:w-36  flex flex-col gap-4 text-white">
                <h4 className="font-shabnamMedium text-base mb-2">
                  پس از خرید
                </h4>
                <li className="text-xs">
                  <a href="#">تضمین رجیستری</a>
                </li>
                <li className="text-xs">
                  <a href="#">رویه های بازگرداندن کالا</a>
                </li>
                <li className="text-xs">
                  <a href="#">سوالات متداول رجیستری</a>
                </li>
                <li className="text-xs">
                  <a href="#">رهگیری سفارش ها</a>
                </li>
              </ul>
              <ul className="w-32 2xl:w-36  flex flex-col gap-4 text-white">
                <h4 className="font-shabnamMedium text-base mb-2">
                  قوانین و مقررات
                </h4>
                <li className="text-xs">
                  <a href="#">قوانین و مقررات</a>
                </li>
                <li className="text-xs">
                  <a href="#">حریم خصوصی کاربران</a>
                </li>
                <li className="text-xs">
                  <a href="#">از زبان مشتریان تکنولایف</a>
                </li>
                <li className="text-xs">
                  <a href="#">چرا تکنولایف؟</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:ml-auto sm:mr-0 lg:mr-auto lg:ml-0 sm:flex-row-reverse gap-9">
            <div className="flex gap-9 flex-row-reverse">
              <a
                href=""
                className="flex justify-center items-center w-20 px-2 bg-white rounded-xl p-1"
              >
                <img src={lic1} alt="" className="w-full" />
              </a>
              <a
                href=""
                className="flex justify-center items-center w-20 px-2 bg-white rounded-xl p-1"
              >
                <img src={lic2} alt="" className="w-full" />
              </a>
            </div>
            <div className="flex gap-9 flex-row-reverse ">
              <a
                href=""
                className="flex justify-center items-center w-20 px-2 bg-white rounded-xl p-1"
              >
                <img src={lic3} alt="" className="w-full" />
              </a>
              <a
                href=""
                className="flex justify-center items-center w-20 px-2 bg-white rounded-xl p-1"
              >
                <img src={lic4} alt="" className="w-full" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-14 px-8 text-white text-xs text-center">
        ۱۴۰۳-1391 تمامی حقوق مادی و معنوی این سایت متعلق به تکنولایف می‌باشد.
      </p>
    </footer>
  );
}
