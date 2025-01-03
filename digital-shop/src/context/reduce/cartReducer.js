import { ADD_TO_CART,REMOVE_FROM_CART,CHANGE_COUNT,TOTAL_PRODUCT,TOTAL_PRICE,CLEAR_CART } from "./actionType";

const initState={
    cart:[],
    totalPrice:0,
    totalProduct:0
}

export const CartReducer=(state=initState , action)=>{
    switch(action.type){
        case ADD_TO_CART :
            localStorage.setItem("cart", JSON.stringify(action.payload));
            console.log("hello")
            return {
                ...state,
                cart:[...state.cart,action.payload]
            };
        case TOTAL_PRICE :
            let totalPrice=0;
            action.payload?.forEach((product)=>{
                product.off > 0 ? totalPrice+=+product.off : totalPrice+=+product.price
            })
            // return new Intl.NumberFormat("fa-IR").format(totalPrice);
            return {
                ...state,
                totalPrice: totalPrice
            }
        case TOTAL_PRODUCT:
            // console.log(action.pay)
            return {
                    ...state,
                totalProduct:action.payload.length
            }
        case CLEAR_CART:
            localStorage.setItem("cart",JSON.stringify([]))
            return  {
                cart:[],
                totalProduct: 0,
                totalPrice: 0
            };
        default:
            return {...state};

    }
}