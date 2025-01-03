import React, {useState, useEffect, useContext} from "react";
import ProductInCart from "../../components/ProductInCart/ProductInCart";
import empty from "./../../asset/cart/static_emptyBasket.webp"
import { Link } from "react-router-dom";
import {CartContext} from "../../context/cartContext";
import StylingNumber from "../../GlobalFunc/StylingNumber";
import stylingNumber from "../../GlobalFunc/StylingNumber";

export default function Cart(){
    const { state, dispatch } = useContext(CartContext);
    const [productsInCart,setProductsInCart]=useState([])
    const [checkRule,setCheckRule]=useState(false)
    const [totalPrice,setTotalPrice]=useState(0)
    useEffect(()=>{
        const storedCart = localStorage.getItem("cart");
        setProductsInCart(storedCart ? JSON.parse(storedCart) : []);
    },[])
    useEffect(() => {
        console.log("hello")
        console.log("state ",state)
        dispatch({ type: "TOTAL_PRICE", payload: productsInCart })
        dispatch({ type: "TOTAL_PRODUCT", payload: productsInCart })
        setTotalPrice(state.totalPrice)
        console.log("in cart :",totalPrice)
    }, [productsInCart]);
    const removeFromCartList=(productID)=>{
        let filteredProduct=productsInCart.filter(product=>product.id!==productID)
        console.log(filteredProduct);
        
        localStorage.setItem("cart",JSON.stringify(filteredProduct))
    }
    const changeStatus=()=>{
        setCheckRule(prev=>!prev)
    }
    return(
        <div className="wrapper">
            <div className="mt-5 mb-6 ">
                <h2>سبد خرید</h2>
                <div className="flex flex-col lg:flex-row items-start gap-3 mt-3">
                    <div
                        className={`cart-wrapper w-full min-h-[540px] flex flex-col ${!productsInCart && "justify-center items-center"}  gap-y-5 border border-gray-200 rounded-2xl p-3`}>
                        {
                            productsInCart.length ? (
                                productsInCart?.map(product => {
                                    console.log(product);

                                    return (
                                        <ProductInCart key={product.id} onRemove={removeFromCartList}  {...product} />
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
                                    productsInCart.length ? (
                                       ` ${stylingNumber(80000)} تومان`
                                    ) : (
                                        0
                                    )
                                }
                            </span>
                        </div>
                        <div className={"flex justify-between items-center border-b border-b-gray-200 pb-3"}>
                            <h2>
                                مبلغ نهایی
                            </h2>
                            <span className={"text-blue-900 font-bold"}>
                                {StylingNumber((state?.totalPrice + 80000))} تومان
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