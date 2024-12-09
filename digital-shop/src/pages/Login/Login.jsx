import React from 'react'
import logo from "./../../asset/logo/static_logo_techno_new.svg"

export default function Login() {
  return (
    <div className="login flex">
        <div className="flex flex-col items-center">
            <div>
                <img src={logo} alt="" />
            </div>
            <div className="flex">
                <span>ورود</span>
                <span>ثبت نام</span>
            </div>
            <p>خوش اومدی :)</p>
            <input type="text" />
            <button>ادامه</button>
            <p>ورود | ثبت نام شما به معنای پذیرش  قوانین و مقررات  و  حریم خصوصی کاربران  تکنولایف است.</p>
        </div>
    </div>
  )
}
