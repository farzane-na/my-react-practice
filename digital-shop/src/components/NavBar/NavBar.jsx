import React from "react";
import logo from "./../../asset/logo/static_logo_techno_new.svg";
import { CiShoppingCart, CiSearch } from "react-icons/ci";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-x-8">
          <div className="logo flex justify-center items-center">
            <img src={logo} alt="تکنولایف" />
          </div>
          <div className="searchbar flex items-center gap-x-5 p-4 bg-slate-200 rounded-md w-[450px]">
            <CiSearch
              className="text-slate-500 cursor-pointer w-6 h-6"
            />
            <input
              type="text"
              className="bg-transparent border-none outline-none text-slate-500 w-full"
              placeholder="محصول، برند یا دسته مورد نظرتان را جستجو کنید"
            />
          </div>
        </div>
        <div className="flex items-center gap-x-10">
          <div className="login-btn rounded-md border border-slate-950  py-2 flex items-center">
            <div className="border-l border-slate-950 px-5">
              <a href="#">ورود</a>
            </div>
            <div className="px-5">
              <a href="#">ثبت نام</a>
            </div>
          </div>
          <div className="cart border border-slate-300 rounded-md p-2">
            <CiShoppingCart className="text-slate-950 w-6 h-6 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
