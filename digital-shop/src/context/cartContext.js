import React ,{useReducer,createContext} from "react";
import { CartReducer } from "./reduce/cartReducer";
import {initState} from "./reduce/cartReducer";

export const CartContext=createContext()

const CartProvider=({children})=>{
    const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

    const [state,dispatch]=useReducer(CartReducer,initState)

    return (
        <CartContext.Provider value={{state,dispatch}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider