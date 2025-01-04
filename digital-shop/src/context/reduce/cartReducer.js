import { ADD_TO_CART,REMOVE_FROM_CART,CHANGE_COUNT,TOTAL_PRODUCT,TOTAL_PRICE,CLEAR_CART } from "./actionType";

export const initState={
    cart:JSON.parse(localStorage.getItem("cart")) || [],
    totalPrice:0,
    totalProduct:0
}

export const CartReducer=(state=initState , action)=>{
    switch(action.type){
        case ADD_TO_CART :
            localStorage.setItem("cart", JSON.stringify([...state.cart,action.payload]));
            console.log("hello",{
                ...state,
                cart:[...state.cart,action.payload]
            })
            return {
                ...state,
                cart:[...state.cart,action.payload]
            };
        case TOTAL_PRICE :
            let totalPrice=0;
            action?.payload?.forEach((product)=>{
                product.off > 0 ? totalPrice+=(+product.off * product.count) : totalPrice+=(+product.price * product.count)
            })
            return {
                ...state,
                totalPrice: totalPrice
            }
        case TOTAL_PRODUCT:
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
            console.log("in rem state: ",state)
            console.log("get action payload : ",action.payload)
            console.log("type action payload : ",typeof action.payload)
            let filterProducts=[]
            state.cart.forEach(product=>{
                if(product.id!==action.payload){
                    filterProducts=[...filterProducts,product]
                }
            })
            console.log("filter product array => ",filterProducts)
            console.log("cart in satet => ",state.cart)
            localStorage.setItem("cart",JSON.stringify(filterProducts))
            return {
                ...state,
                cart:filterProducts
            }
        case CHANGE_COUNT:
            const updatedProducts = state.cart?.map((product) => (product?.id === action.payload.productID ? {...product , count :action.payload.count } : {...product}));
            console.log("change count => ",updatedProducts)
            localStorage.setItem("cart",JSON.stringify(updatedProducts))
            return {
                ...state,
                cart:updatedProducts
            }
        default:
            return {...state};

    }
}