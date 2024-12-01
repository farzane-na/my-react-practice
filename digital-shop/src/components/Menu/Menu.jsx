import React from "react";
import {
  CiMenuBurger,
  CiShoppingBasket,
  CiGift,
  CiWallet,
} from "react-icons/ci";
import { PiCoins } from "react-icons/pi";

export default function Menu() {
  return (
    <ul className="flex items-center gap-x-10">
      <li>
        <a href="" className="flex items-center gap-x-2 text-slate-950">
          <CiMenuBurger className="w-6 h-6 text-slate-950" />
          <span>دسته بندی محصولات</span>
        </a>
      </li>
      <li>
        <a href="" className="flex items-center gap-x-2 text-slate-950">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-slate-950"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.99 14.993 6-6m6 3.001c0 1.268-.63 2.39-1.593 3.069a3.746 3.746 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043 3.745 3.745 0 0 1-3.068 1.593c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 0 1-3.296-1.043 3.746 3.746 0 0 1-1.043-3.297 3.746 3.746 0 0 1-1.593-3.068c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 0 1 1.043-3.297 3.745 3.745 0 0 1 3.296-1.042 3.745 3.745 0 0 1 3.068-1.594c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.297 3.746 3.746 0 0 1 1.593 3.068ZM9.74 9.743h.008v.007H9.74v-.007Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          <span>تکنوآف</span>
        </a>
      </li>
      <li>
        <a href="" className="flex items-center gap-x-2 text-slate-950">
          <CiShoppingBasket className="w-6 h-6 text-slate-950" />
          <span>خرید سازمانی</span>
        </a>
      </li>
      <li>
        <a href="" className="flex items-center gap-x-2 text-slate-950">
          <CiGift className="w-6 h-6 text-slate-950" />
          <span>کارت هدیه</span>
        </a>
      </li>
      <li>
        <a href="" className="flex items-center gap-x-2 text-slate-950">
          <CiWallet className="w-6 h-6 text-slate-950" />
          <span>خرید قسطی</span>
        </a>
      </li>
      <li>
        <a href="" className="flex items-center gap-x-2 text-slate-950">
          <PiCoins className="w-6 h-6 text-slate-950" />
          <span>خرید طلای دیجیتال</span>
          <span className="bg-red-100 text-red-500 rounded-lg p-1 text-xs">جدید</span>
        </a>
      </li>
      <li>
        <a href="" className="flex items-center gap-x-2 text-blue-950">
          <span>فروشنده شو</span>
        </a>
      </li>
    </ul>
  );
}
