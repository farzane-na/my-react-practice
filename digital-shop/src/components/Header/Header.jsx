import React from "react";
import NavBar from "../NavBar/NavBar";
import Slider from "../Slider/Slider";

export default function Header() {
  return (
    <header>
      <div className="wrapper">
        <NavBar />
      </div>
      <Slider />
    </header>
  );
}
