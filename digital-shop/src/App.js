import "./App.css";
import React ,{useEffect,useState} from "react";
import { useRoutes , useLocation } from "react-router-dom";
import routes from "./routes";
import ProductsContext from "./context/ProductContext";
import productsWithIds from "./data/data"
import CartProvider from "./context/cartContext"
import BlogContext from "./context/BlogContext";
import blog from "./data/blog";
import {ProductDataFromApi} from "./data/data";

function App() {
  const isCart=localStorage.getItem("cart")
  !isCart && localStorage.setItem("cart",JSON.stringify([]))
  const location=useLocation()
  let router=useRoutes(routes)
  const [allProduct,setAllProduct]=useState([])
  useEffect(()=>{
    fetch("https://677aeda320824100c0786d73.mockapi.io/api/product/products")
        .then(res=>res.json())
        .then(data=>{
          setAllProduct(data)
        })
  },[])
    useEffect(()=>{
    },[allProduct])
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
          <BlogContext.Provider value={blog}>
            {router}
          </BlogContext.Provider>
        </ProductsContext.Provider>
      </CartProvider>
    </div>
  );
}

export default App;
