import React, { useEffect, useState } from "react";
import logo from "./../../asset/logo/static_logo_techno_new.svg";
import loginImage from "./../../asset/banner/login.webp";
import { useNavigate  } from "react-router-dom";

export default function Login() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [minute, setMinute] = useState(1);
  const [second, setSecond] = useState(30);
  const [showTimer, setShowTimer] = useState(false);
  const [finishTime, setFinishTime] = useState(false);
  const [veifyCode,setVerifyCode]=useState("")
  const navigate = useNavigate();

  useEffect(()=>{
    setShowTimer(true)
  },[])
  const checkVerifyCode = () => {
    const codeRegex = /^[1-9]\d{4}$/;
    return codeRegex.test(veifyCode);
  };
  const goToHome = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/")
    }, 3000);
  };
  const submitForm = (event) => {
    event.preventDefault();
    console.log("helo");
    setIsSubmit(true);
    if (checkVerifyCode()) {
      goToHome();
    }
  };
  useEffect(() => {
    if (showTimer) {
      const timer = setInterval(() => {
        setSecond((prevSecond) => {
          if (prevSecond > 0) {
            return prevSecond - 1;
          }
          if (prevSecond === 0 && minute > 0) {
            setMinute((prevMinute) => prevMinute - 1);
            return 59;
          }
          if (prevSecond === 0 && minute === 0) {
            setFinishTime(true);
          }
          return prevSecond;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [showTimer, minute]);
  const resendCode = () => {
    setFinishTime(false);
    setMinute(1);
    setSecond(30);
  };
  return (
    <div className="login flex w-screen h-screen">
      <div className="w-[30%] p-11 flex flex-col items-center justify-between">
        <div className="w-full flex flex-col justify-center items-center gap-20">
          <a className="flex w-44">
            <img src={logo} alt="" className="w-full" />
          </a>

          <div className="flex flex-col items-center gap-4 xs:gap-[42px] ">
            <div className="flex items-center justify-center gap-2 text-2xl">
              
                <span>کد اعتباری</span>
              
            </div>
            <p className="text-lg font-bold">خوش اومدی :)</p>
          </div>
          <form
            action=""
            className="w-full flex flex-col justify-center items-center"
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
                onChange={(event) => setVerifyCode(event.target.value)}
                value={veifyCode}
              />
              <span
                className={`flex text-gray-400 absolute top-[50%] -translate-y-[50%] cursor-text transition-all duration-200 ease-in-out ${
                    veifyCode
                    ? "!-top-5 right-0"
                    : "right-6 peer-focus:-top-5 peer-focus:right-0"
                }  peer-focus:text-blue-600`}
              >
                  کد خود را وارد کنید
              </span>
            </label>
            <div className="w-full h-16 flex justify-between items-start flex-row-reverse">
              {showTimer ? (
                <div className="flex flex-col justify-start items-end">
                  <span className="text-blue-900 font-bold">
                    <span className="minute">
                      {String(minute).padStart(2, "0")}
                    </span>
                    <span>:</span>
                    <span className="second">
                      {String(second).padStart(2, "0")}
                    </span>
                  </span>
                  {finishTime && (
                    <span
                      className="flex items-center cursor-pointer gap-x-2 text-blue-700"
                      onClick={resendCode}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                        />
                      </svg>
                      <span className="text-xs">ارسال مجدد کد</span>
                    </span>
                  )}
                </div>
              ) : (
                ""
              )}
              {isSubmit && !checkVerifyCode() && veifyCode && (
                <span className="ml-auto mr-0 text-blue-900 font-bold">
                  لطفا کد را به درستی وارد کنید
                </span>
              )}
            </div>
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
          &nbsp; تکنولایف است.
        </p>
      </div>
      <div className="w-[70%] h-full">
        <img src={loginImage} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
