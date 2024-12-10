import "./App.css";
import React ,{useEffect} from "react";
import { useRoutes , useLocation } from "react-router-dom";
import routes from "./routes";

function App() {
  const location=useLocation()
  let router=useRoutes(routes)
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
    <div className="App pt-2 sm:pt-4 lg:pt-5">
        {router}
    </div>
  );
}

export default App;
