import React from 'react'
import Slider from "./../../components/Slider/Slider"
import CatSlider from "./../../components/CatSlider/CatSlider"
import ProductSlider from '../../components/ProductSlider/ProductSlider'
import { Link } from 'react-router-dom'

import banner1 from "./../../asset/banner/banner-in-home/1.webp"
import banner2 from "./../../asset/banner/banner-in-home/2.webp"
import banner3 from "./../../asset/banner/banner-in-home/3.webp"

import mobile1 from "./../../asset/banner/mobile-picture/1.webp"
import mobile2 from "./../../asset/banner/mobile-picture/2.webp"
import mobile3 from "./../../asset/banner/mobile-picture/3.webp"
import mobile4 from "./../../asset/banner/mobile-picture/4.webp"
import mobile5 from "./../../asset/banner/mobile-picture/5.webp"

import ban from "./../../asset/banner/ban.webp"

const bannerImages=[banner1,banner2,banner3]
const mobileImages=[mobile1,mobile2,mobile3,mobile4,mobile5]

export default function Home() {
  return (
    <div className="home">
        <Slider />
        <div className="wrapper">
            <CatSlider />
            <ProductSlider off={true} category={"offer"} border={true} title={"تخفیفات تکنولایف"} />

            <div className="flex flex-col md:flex-row items-center gap-4 mb-10">
              {
                bannerImages.map((img,index)=>{
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

            <div className="flex flex-col gap-4 mb-10">
              <h2 className='font-shabnamBold text-2xl text-center'>برترین های موبایل</h2>
              <div className="flex flex-col md:flex-row justify-center items-center gap-3">
                {
                  mobileImages.map((img,index)=>{
                    return (
                      <div className="relative" key={index}>
                        <img src={img} alt="" className='w-full h-full'/>
                        <Link href="#" className='absolute w-full h-full top-0 bottom-0 left-0 right-0 z-20'></Link>
                      </div>
                    )
                  })
                }
              </div>
            </div>

            <div className="w-full mb-10 rounded-3xl overflow-hidden">
              <img src={ban} alt="" className='w-full' />
            </div>

            <ProductSlider off={false} category={"laptop"} border={false} title={"لپ‌تاپ‌ها در تکنولایف"} />
        </div>
    </div>
  )
}
