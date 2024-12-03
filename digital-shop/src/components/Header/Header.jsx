import React from "react";
import NavBar from "../NavBar/NavBar";
import Slider from "../Slider/Slider";
import CatSlider from "../CatSlider/CatSlider";

export default function Header() {
  return (
    <header>
      <div className="wrapper">
        <NavBar />
      </div>
      <Slider />
      <div className="wrapper">
        <CatSlider />
      </div>
    </header>
  );
}
