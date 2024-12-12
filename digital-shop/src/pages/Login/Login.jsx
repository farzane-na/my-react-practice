import React, { useEffect, useState } from "react";
import logo from "./../../asset/logo/static_logo_techno_new.svg";
import loginImage from "./../../asset/banner/login.webp";

export default function Login() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [phoneNumber,setPhoneNumber]=useState(null)
  const [isCorrectPhoneNumber,setIsCorrectPhoneNumber]=useState(false)
  const [minute,setMinute]=useState(1)
  const [second,setSecond]=useState(30)
  const [showTimer,setShowTimer]=useState(false)

  const checkPhoneNumber=()=>{
    const phoneRegex = /^09[0-9]{9}$/;
    return phoneRegex.test(phoneNumber);
  }
  const goingToWriteCode=()=>{
    setIsSubmit(true);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsCorrectPhoneNumber(true)
      setPhoneNumber("")
      setShowTimer(true)
    },2000);
  }
  const submitForm = (event) => {
    event.preventDefault();
    console.log("helo");
    console.log(checkPhoneNumber());
    if (checkPhoneNumber()){
      goingToWriteCode()
    }
  };
  const CountDown=()=>{
    setInterval(()=>{
      if(second>0){
        setSecond(prev=>prev-1)
      } else if(second<0 ){
        setSecond(59)
        setMinute(prev=>prev-1)
      }

    },1000)
    setTimeout(()=>{
      setSecond(30)
      setMinute(1)
    },90000)
  }
  useEffect(()=>{
    CountDown()
  },[showTimer])
  return (
    <div className="login flex w-screen h-screen">
      <div className="w-[30%] p-11 flex flex-col items-center justify-between">
        <div className="w-full flex flex-col justify-center items-center gap-20">
          <a className="flex w-44">
            <img src={logo} alt="" className="w-full" />
          </a>

          <div className="flex flex-col items-center gap-4 xs:gap-[42px] ">
            <div className="flex items-center justify-center gap-2 text-2xl">
              {
                isCorrectPhoneNumber ? (
                  <span>کد اعتباری</span>
                ) : (
                  <>
                  <span>ورود</span>
                  <span>|</span>
                  <span>ثبت نام</span>
                  </>
                )
              }
              
            </div>
            <p className="text-lg font-bold">خوش اومدی :)</p>
          </div>
          <form
            action=""
            className="w-full flex flex-col justify-center items-center gap-10 md:gap-14"
            onSubmit={(event) => submitForm(event)}
          >
            <label
              htmlFor="#phone-number"
              className="w-full relative rounded-lg border border-gray-300 focus-within:border-blue-600 "
            >
              <input
                type="text"
                className="peer w-full h-12 outline-none px-6 py-1 rounded-lg relative z-10 bg-transparent"
                id="phone-number"
                onChange={(event)=>setPhoneNumber(event.target.value)}
                value={phoneNumber}
              />
              <span className={`flex  text-gray-400 absolute top-[50%] -translate-y-[50%] cursor-text  transition-all duration-200 ease-in-out ${phoneNumber ? "-top-5 right-0" : "right-6 peer-focus:-top-5 peer-focus:right-0"}  peer-focus:text-blue-600`}>
                {
                  isCorrectPhoneNumber ? (
                      "کد خود را وارد کنید"
                  ) : (
                    "شماره خود را وارد کنید"
                  )
                }
                
              </span>
              {
                showTimer && (
                  <span className="absolute translate-y-7 bottom-0 left-0 text-blue-900 font-bold">
                <span>{minute}</span>
                <span>:</span>
                <span>{second}</span>
              </span>
                )
              }
            </label>
            <button
              type="submit"
              className="w-full flex justify-center items-center text-white cursor-pointer bg-blue-900 rounded-xl h-12"
            >
              {isLoading ? (
                <svg
                  version="1.1"
                  id="L4"
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                  enableBackground="new 0 0 0 0" 
                  className="w-10 "
                >
                  <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
                    <animate
                      attributeName="opacity"
                      dur="1s"
                      values="0;1;0"
                      repeatCount="indefinite"
                      begin="0.1"
                    />
                  </circle>
                  <circle fill="#fff" stroke="none" cx="26" cy="50" r="6">
                    <animate
                      attributeName="opacity"
                      dur="1s"
                      values="0;1;0"
                      repeatCount="indefinite"
                      begin="0.2"
                    />
                  </circle>
                  <circle fill="#fff" stroke="none" cx="46" cy="50" r="6">
                    <animate
                      attributeName="opacity"
                      dur="1s"
                      values="0;1;0"
                      repeatCount="indefinite"
                      begin="0.3"
                    />
                  </circle>
                </svg>
              ) : (
                "ادامه"
              )}
            </button>
          </form>
        </div>
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
