import React from 'react'
import Slider from "./../../components/Slider/Slider"
import CatSlider from "./../../components/CatSlider/CatSlider"

export default function Home() {
  return (
    <div className="home">
        <Slider />
        <div className="wrapper">
            <CatSlider />
        </div>
    </div>
  )
}
