import { ADD_TO_CART,REMOVE_FROM_CART,CHANGE_COUNT,TOTAL_PRODUCT,TOTAL_PRICE,CLEAR_CART } from "./actionType";

export const initState={
    cart:[],
    totalPrice:0,
    totalProduct:0
}

export const CartReducer=(state=initState , action)=>{
    switch(action.type){
        case ADD_TO_CART :
            localStorage.setItem("cart", JSON.stringify([...state.cart,action.payload]));
            console.log("hello")
            return {
                ...state,
                cart:[...state.cart,action.payload]
            };
        case TOTAL_PRICE :
            let totalPrice=0;
            console.log("act :",action.payload)
            action?.payload?.forEach((product)=>{
                product.off > 0 ? totalPrice+=+product.off : totalPrice+=+product.price
            })
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
        case REMOVE_FROM_CART:
            console.log("hello in remove")
            console.log("in rem : ",state)
            console.log("payload : ",action.payload)
            let filterProduct=state.cart?.filter(product=>product.id!==action.payload);
            console.log("fil pro : ",filterProduct)
            localStorage.setItem("cart",JSON.stringify(filterProduct))
            return {
                ...state,
                cart:filterProduct
            }
        default:
            return {...state};

    }
}