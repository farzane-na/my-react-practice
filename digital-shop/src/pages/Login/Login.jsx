import React from "react";
import logo from "./../../asset/logo/static_logo_techno_new.svg";
import loginImage from "./../../asset/banner/login.webp";

export default function Login() {
  const submitForm=event=>{
    event.preventDefault()
  }
  return (
    <div className="login flex w-screen h-screen">
      <div className="w-[30%] p-11 flex flex-col items-center justify-between">
        <a className="flex w-44">
          <img src={logo} alt="" className="w-full" />
        </a>
        <div className="flex flex-col items-center gap-4 xs:gap-[42px] tall:mb-[50px] mt-8 mb-14">
          <div className="flex items-center justify-center gap-2 text-2xl">
            <span>ورود</span>
            <span>|</span>
            <span>ثبت نام</span>
          </div>
          <p className="text-lg font-bold">خوش اومدی :)</p>
        </div>
        <form action="" onSubmit={(event)=>submitForm(event)}>
          <label
            htmlFor="#phone-number"
            className="w-full relative rounded-lg border border-gray-300 focus-within:border-blue-600 "
          >
            <input
              type="text"
              className="peer w-full h-12 outline-none px-6 py-1 rounded-lg"
              id="phone-number"
            />
            <span className="flex text-gray-400 absolute top-[50%] -translate-y-[50%] cursor-text right-6 transition-all duration-200 ease-in-out peer-focus:-top-5 peer-focus:right-0 peer-focus:text-blue-600">
              شماره خود را وارد کنید
            </span>
          </label>
          <button type="submit" className="w-full text-white cursor-pointer bg-blue-900 rounded-xl py-5">
            ادامه
          </button>
        </form>
        <p>
          ورود | ثبت نام شما به معنای پذیرش{" "}
          <a
            className="text-blue-600"
            href="https://www.technolife.ir/staticpage/page-14/%20%D9%82%D9%88%D8%A7%D9%86%DB%8C%D9%86%20%D9%88%20%D9%85%D9%82%D8%B1%D8%B1%D8%A7%D8%AA"
          >
            قوانین و مقررات
          </a>{" "}
          و{" "}
          <a
            className="text-blue-600"
            href="https://www.technolife.ir/staticpage/page-15/%20%D8%AD%D8%B1%DB%8C%D9%85%20%D8%AE%D8%B5%D9%88%D8%B5%DB%8C%20%DA%A9%D8%A7%D8%B1%D8%A8%D8%B1%D8%A7%D9%86"
          >
            حریم خصوصی کاربران
          </a>
          تکنولایف است.
        </p>
      </div>
      <div className="w-[70%]">
        <img src={loginImage} alt="" className="w-full h-full" />
      </div>
    </div>
  );
}
