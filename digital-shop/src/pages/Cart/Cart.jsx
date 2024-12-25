import React , { useState , useEffect } from "react";
import ProductInCart from "../../components/ProductInCart/ProductInCart";

export default function Cart(){
    const [productsInCart,setProductsInCart]=useState([])
    useEffect(()=>{
        setProductsInCart(JSON.parse(localStorage.getItem("cart")))
    },[])
    return(
        <div className="wrapper">
            <div className="mt-5 mb-6 ">
                <h2>سبد خرید</h2>
                <div className="cart-wrapper w-full min-h-[540px] flex flex-col gap-y-5 border border-gray-200 rounded-2xl p-3 mt-3">
                    {
                        productsInCart.map(product=>{
                            return (
                                <ProductInCart  key={product.id} {...product} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}