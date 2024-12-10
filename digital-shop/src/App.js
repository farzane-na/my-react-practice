import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

function App() {
  let router=useRoutes(routes)
  return (
    <div className="App pt-2 sm:pt-4 lg:pt-5">
        {router}
    </div>
  );
}

export default App;
