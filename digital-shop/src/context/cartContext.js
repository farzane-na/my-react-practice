import React ,{useReducer,createContext, Children} from "react";
import { cartReducer } from "./reduce/cartReducer";

const cartContext=createContext()

const cartProvider=({children})=>{
    const [state,dispatch]=useReducer(cartReducer,{cart:[]})

    return (
        <cartContext.Provider value={{state,dispatch}}>
            {children}
        </cartContext.Provider>
    )
}