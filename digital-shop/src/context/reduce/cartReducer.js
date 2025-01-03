import { ADD_TO_CART,REMOVE_FROM_CART,CHANGE_COUNT,TOTAL_PRODUCT,TOTAL_PRICE,CLEAR_CART } from "./actionType";


export const CartReducer=(state , action)=>{
    switch(action.type){
        case ADD_TO_CART :
            const updatedCart = [...state, action.payload];
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
        default:
            return state;

    }
}