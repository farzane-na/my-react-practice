import { ADD_TO_CART,REMOVE_FROM_CART,CHANGE_COUNT,TOTAL_PRODUCT,TOTAL_PRICE,CLEAR_CART } from "./actionType";


export const CartReducer=(state , action)=>{
    switch(action.type){
        case ADD_TO_CART :
            // const updatedCart = [...state, action.payload];
            localStorage.setItem("cart", JSON.stringify(action.payload));
            console.log("hello")
            return true;
        case TOTAL_PRICE :
            // const allProduct=JSON.parse(localStorage.getItem("cart"))
            let totalPrice=0;
            action.payload?.forEach((product)=>{
                product.off > 0 ? totalPrice+=+product.off : totalPrice+=+product.price
            })
            console.log("total",totalPrice)
            console.log(new Intl.NumberFormat("fa-IR").format(totalPrice))
            return new Intl.NumberFormat("fa-IR").format(totalPrice);
        case TOTAL_PRODUCT:
            return action.payload.length
        case CLEAR_CART:
            state=[]
            return  true;
        default:
            return state;

    }
}