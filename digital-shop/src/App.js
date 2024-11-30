import "./App.css";
import React, { useState } from "react";

function App() {
  const [firstCount, setFirstCount] = useState(0);
  
  
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  );
}

export default App;
