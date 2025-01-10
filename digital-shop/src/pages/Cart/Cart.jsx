import React, {useState, useEffect, useContext} from "react";
import ProductInCart from "../../components/ProductInCart/ProductInCart";
import empty from "./../../asset/cart/static_emptyBasket.webp"
import { Link } from "react-router-dom";
import {CartContext} from "../../context/cartContext";
import StylingNumber from "../../GlobalFunc/StylingNumber.js";
import { AiOutlineClear } from "react-icons/ai";


export default function Cart(){
    const { state, dispatch } = useContext(CartContext);
    // const [productsInCart,setProductsInCart]=useState([])
    const [checkRule,setCheckRule]=useState(false)
    const [totalPrice,setTotalPrice]=useState(0)

    useEffect(() => {
        dispatch({ type: "TOTAL_PRICE", payload: state.cart })
        dispatch({ type: "TOTAL_PRODUCT", payload: state.cart })
    }, [state.cart]);

    useEffect(() => {
        setTotalPrice(state.totalPrice);
    }, [state.totalPrice]);

    const changeStatus=()=>{
        setCheckRule(prev=>!prev)
    }
    const clearCart=()=>{
        dispatch({type:"CLEAR_CART",payload:state.cart})
    }
    return(
        <div className="wrapper">
            <div className="mt-5 mb-6 ">
                <h2>سبد خرید</h2>
                <div className="flex flex-col lg:flex-row items-start gap-3 mt-3">
                    <div
                        className={`cart-wrapper w-full min-h-[540px] flex flex-col ${!state.cart && "justify-center items-center"}  gap-y-5 border border-gray-200 rounded-2xl p-3`}>
                        {
                            state.cart.length ? (
                                state.cart?.map(product => {
                                    return (
                                        <ProductInCart key={product.id} {...product} />
                                    )
                                })) : (
                                <div className="flex flex-col justify-center items-center gap-4">
                                    <img src={empty} className="w-96 "/>
                                    <p>
                                        سبد شما خالی است
                                    </p>
                                    <Link className="py-2 px-5 bg-blue-900 text-white rounded-xl">رفتن به فروشگاه</Link>
                                </div>
                            )
                        }
                        <div className={"flex items-center justify-center w-full mt-4"}>
                            {
                                state.cart.length ? (
                                    <button
                                        className={"text-sm flex justify-center items-center gap-2 rounded-xl px-4 py-2 border-none outline-none cursor-pointer bg-blue-900 text-white"}
                                        onClick={clearCart}
                                    >
                                        <span>پاک سازی سبد خرید</span>
                                        <AiOutlineClear className={"w-5 h-5"}/>
                                    </button>
                                ) : (
                                    ""
                                )
                            }

                        </div>
                    </div>
                    <div className="w-[40%] flex flex-col gap-y-4 border border-gray-200 rounded-2xl p-3">
                        <div className={"flex justify-between items-center border-b border-b-gray-200 pb-3"}>
                            <h2>
                                تعداد کل محصولات
                            </h2>
                            <span className={"text-blue-900 font-bold"}>
                                {StylingNumber(state?.totalProduct)} محصول
                            </span>
                        </div>
                        <div className={"flex justify-between items-center border-b border-b-gray-200 pb-3"}>
                            <h2>
                                مبلغ خرید شما
                            </h2>
                            <span className={"text-blue-900 font-bold"}>
                                {StylingNumber(state.totalPrice)} تومان
                            </span>
                        </div>
                        <div className={"flex justify-between items-center border-b border-b-gray-200 pb-3"}>
                            <h2>
                                هزینه ارسال
                            </h2>
                            <span className={"text-blue-900 font-bold"}>
                                {
                                    state.cart?.length ? (
                                       ` ${StylingNumber(80000)} تومان`
                                    ) : (
                                        "سبد خالی است"
                                    )
                                }
                            </span>
                        </div>
                        <div className={"flex justify-between items-center border-b border-b-gray-200 pb-3"}>
                            <h2>
                                مبلغ نهایی
                            </h2>
                            <span className={"text-blue-900 font-bold"}>
                                {
                                state.cart?.length ? (
                                       ` ${StylingNumber((state?.totalPrice + 80000))} تومان`
                                    ) : (
                                        "سبد خالی است"
                                    )
                                }
                            </span>
                        </div>
                        <form className={"flex items-center gap-2"}>
                            <input
                                type={"checkbox"}
                                onChange={changeStatus}
                            />
                            <span>
                                باشرایط و قوانین تکنولایف موافق هستم.
                            </span>
                        </form>
                        <Link className={`w-full bg-blue-900 text-white rounded-xl border-none outline-none p-3 flex justify-center items-center ${checkRule || "cursor-none"}`}>
                            تسویه حساب
                        </Link>
                    </div>
                </div>


            </div>
        </div>
    )
}