import React from 'react'
import Slider from "./../../components/Slider/Slider"
import CatSlider from "./../../components/CatSlider/CatSlider"
import ProductSlider from '../../components/ProductSlider/ProductSlider'
import svgSection from "./../../asset/section/static_technoffHeader_new.svg"

export default function Home() {
  return (
    <div className="home">
        <Slider />
        <div className="wrapper">
            <CatSlider />
            <ProductSlider off={true} category={"offer"} border={true} title={"تخفیفات تکنولایف"} />
        </div>
    </div>
  )
}
