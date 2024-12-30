import React ,{useReducer,createContext} from "react";
import { CartReducer } from "./reduce/CartReducer";

const CartContext=createContext()

const CartProvider=({children})=>{
    const [state,dispatch]=useReducer(CartReducer,{cart:[]})

    return (
        <CartContext.Provider value={{state,dispatch}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider