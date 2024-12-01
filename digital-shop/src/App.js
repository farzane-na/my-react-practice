import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";

function App() {
  const [firstCount, setFirstCount] = useState(0);
  
  
  return (
    <div className="App pt-2 sm:pt-4 lg:pt-5">
      <div className="wrapper mx-auto px-3 sm:px-5 lg:px-8 w-full">
        <Header />
      </div>
    </div>
  );
}

export default App;
