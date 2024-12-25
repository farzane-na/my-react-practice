import React , { useState , useEffect } from "react";
import ProductInCart from "../../components/ProductInCart/ProductInCart";
import empty from "./../../asset/cart/static_emptyBasket.webp"
import { Link } from "react-router-dom";

export default function Cart(){
    const [productsInCart,setProductsInCart]=useState([])
    useEffect(()=>{
        const storedCart = localStorage.getItem("cart");
        setProductsInCart(storedCart ? JSON.parse(storedCart) : []);
    },[])
    const removeFromCartList=(productID)=>{
        let filteredProduct=productsInCart.filter(product=>product.id!==productID)
        console.log(filteredProduct);
        
        localStorage.setItem("cart",JSON.stringify(filteredProduct))
    }
    
    return(
        <div className="wrapper">
            <div className="mt-5 mb-6 ">
                <h2>سبد خرید</h2>
                <div className={`cart-wrapper w-full min-h-[540px] flex flex-col ${!productsInCart && "justify-center items-center"}  gap-y-5 border border-gray-200 rounded-2xl p-3 mt-3`}>
                    {
                        productsInCart.length ? (
                        productsInCart?.map(product=>{
                            console.log(product);
                            
                            return (
                                <ProductInCart  key={product.id} onRemove={removeFromCartList}  {...product} />
                            )
                        })) : (
                            <div className="flex flex-col justify-center items-center gap-4">
                                <img src={empty} className="w-96 " />
                                <p>
                                    سبد شما خالی است
                                </p>
                                <Link className="py-2 px-5 bg-blue-900 text-white rounded-xl">رفتن به فروشگاه</Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}