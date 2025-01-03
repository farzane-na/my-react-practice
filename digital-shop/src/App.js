import "./App.css";
import React ,{useEffect,useState} from "react";
import { useRoutes , useLocation } from "react-router-dom";
import routes from "./routes";
import ProductsContext from "./context/ProductContext";
import productsWithIds from "./data/data"
import CartProvider from "./context/cartContext"

function App() {
  const isCart=localStorage.getItem("cart")
  console.log("cart :",isCart)
  !isCart && localStorage.setItem("cart",JSON.stringify([]))
  const location=useLocation()
  let router=useRoutes(routes)
  const [allProduct,setAllProduct]=useState(productsWithIds)
  useEffect(()=>{
    const currentRoute = routes.find((route) => route.path === location.pathname);
    
    if (currentRoute && currentRoute.title) {
      document.title = currentRoute.title; 
    }
  },[location])
  return (
    <div className="App">
      <CartProvider>
        <ProductsContext.Provider value={allProduct} >
          {router}
        </ProductsContext.Provider>
      </CartProvider>
    </div>
  );
}

export default App;
