import "./App.css";
import React ,{useEffect,useState} from "react";
import { useRoutes , useLocation } from "react-router-dom";
import routes from "./routes";
import ProductsContext from "./context/ProductContext";
import productsWithIds from "./data/data"
import CartContext from "./context/CartContext"

function App() {
  const location=useLocation()
  let router=useRoutes(routes)
  const [allProduct,setAllProduct]=useState(productsWithIds)
  useEffect(()=>{
    const currentRoute = routes.find((route) => route.path === location.pathname);
    console.log(location);
    console.log(currentRoute);
    console.log(routes);
    
    if (currentRoute && currentRoute.title) {
      document.title = currentRoute.title; 
    }
  },[location])
  return (
    <div className="App">
      <CartContext>
        <ProductsContext.Provider value={allProduct} >
          {router}
        </ProductsContext.Provider>
      </CartContext>
    </div>
  );
}

export default App;
