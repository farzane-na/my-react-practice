import React, { useState } from "react";
import logo from "./../../asset/logo/static_logo_techno_new.svg";
import { CiShoppingCart, CiSearch, CiMenuBurger } from "react-icons/ci";
import Menu from "../Menu/Menu";
import { Link } from "react-router";

export default function NavBar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const togglingMenu = () => {
    setIsOpenMenu((prev) => !prev);
  };
  return (
    <>
      <nav className="navbar hidden lg:flex flex-col gap-y-5">
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-x-8">
            <Link to={"/"} className="logo flex justify-center items-center">
              <img src={logo} alt="تکنولایف" />
            </Link>
            <div className="searchbar flex items-center gap-x-5 p-4 bg-slate-100 rounded-md w-[450px]">
              <CiSearch className="text-slate-500 cursor-pointer w-6 h-6" />
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
                <Link to="/login" >ورود</Link>
              </div>
              <div className="px-5">
                <Link to="/login">ثبت نام</Link>
              </div>
            </div>
            <div className="cart border border-slate-100 rounded-md p-2">
              <Link to={"/cart"}>
                <CiShoppingCart className="text-slate-950 w-6 h-6 cursor-pointer" /> 
              </Link>
            </div>
          </div>
        </div>
        <Menu mobile={false} />
      </nav>
      <nav className="navbar-mobile flex lg:hidden flex-col gap-y-7">
        <div className="topbar flex justify-between items-center">
          <CiMenuBurger
            className="text-slate-950 w-6 h-6 cursor-pointer"
            onClick={togglingMenu}
          />
          <div
            className={`fixed top-0 ${
              isOpenMenu ? "right-0 shadow-lg shadow-blue-800/50" : "-right-80"
            }  bottom-0 bg-white p-4 z-50 transition-all ease-linear duration-200`}
          >
            <Menu mobile={true} onToggle={togglingMenu} />
          </div>
          <div className="logo flex justify-center items-center">
            <img src={logo} alt="تکنولایف" />
          </div>
          <div className="login flex items-center gap-x-2 text-slate-950">
            <a to={"/login"}>ورود</a>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="rotate-180 text-slate-950 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="searchbar flex items-center gap-x-5 p-4 bg-slate-100 rounded-md w-[85%]">
            <CiSearch className="text-slate-500 cursor-pointer w-6 h-6" />
            <input
              type="text"
              className="bg-transparent border-none outline-none text-slate-500 w-full"
              placeholder="محصول، برند یا دسته مورد نظرتان را جستجو کنید"
            />
          </div>
          <div className="cart p-2">
            <CiShoppingCart className="text-slate-950 w-6 h-6 cursor-pointer" />
          </div>
        </div>
        {isOpenMenu && (
          <div
            className="overlay fixed top-0 left-0 right-0 bottom-0 bg-black/20 z-40"
            onClick={togglingMenu}
          ></div>
        )}
      </nav>
    </>
  );
}
