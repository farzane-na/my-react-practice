import { ADD_TO_CART,REMOVE_FROM_CART,CHANGE_COUNT,TOTAL_PRODUCT,TOTAL_PRICE,CLEAR_CART } from "./actionType";

const initialState={
    cart:[]
}

export const cartReducer=(state=initialState , action)=>{
    switch(action.type){
        case ADD_TO_CART :
            return {
                cart:[...state.cart.action.payload]
            }
        case REMOVE_FROM_CART:
            return {
                cart:state.cart.filter(item=>item.id!==action.payload.id)
            }
        case CLEAR_CART:
            return{
                cart:[]
            }
        default:
            return state
    }
}