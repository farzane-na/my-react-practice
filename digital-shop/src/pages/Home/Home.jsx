import React from 'react'
import Slider from "./../../components/Slider/Slider"
import CatSlider from "./../../components/CatSlider/CatSlider"
import ProductSlider from '../../components/ProductSlider/ProductSlider'
import { Link } from 'react-router-dom'

import banner1 from "./../../asset/banner/banner-in-home/1.webp"
import banner2 from "./../../asset/banner/banner-in-home/2.webp"
import banner3 from "./../../asset/banner/banner-in-home/3.webp"

const images=[banner1,banner2,banner3]

export default function Home() {
  return (
    <div className="home">
        <Slider />
        <div className="wrapper">
            <CatSlider />
            <ProductSlider off={true} category={"offer"} border={true} title={"تخفیفات تکنولایف"} />

            <div className="flex flex-col md:flex-row items-center gap-4 mb-10">
              {
                images.map((img,index)=>{
                  return (
                    <div className="relative rounded-xl overflow-hidden" key={index}>
                      <img src={img} alt="" className='w-full h-full'/>
                      <Link href="#" className='absolute w-full h-full top-0 bottom-0 left-0 right-0 z-20'></Link>
                  </div>
                  )
                })
              }
            </div>

            <ProductSlider off={false} category={"mobile"} border={false} title={"پرچمداران هوشمند"} />
        </div>
    </div>
  )
}
