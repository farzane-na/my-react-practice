import React,{useState} from 'react'
import BannersSection from '../../components/BannersSection/BannersSection'
import Slider from "./../../components/Slider/Slider"
import CatSlider from "./../../components/CatSlider/CatSlider"
import ProductSlider from '../../components/ProductSlider/ProductSlider'

import BannerContext from '../../context/BannerContext'
import banners from '../../data/banner'

export default function Home() {
  console.log("time : ",Date.now());
  const [allBanner,setAllBanner]=useState(banners)
  return (
    <div className="home">
      <BannerContext.Provider value={allBanner}>
        <Slider />
        <div className="wrapper">
            <CatSlider />
            <ProductSlider category={"offer"} border={true} title={"تخفیفات تکنولایف"} />

            <BannersSection center={false} rounded={true} category={"first-section"} />

            <ProductSlider category={"mobile"} border={false} title={"پرچمداران هوشمند"} />

            <BannersSection center={true} title={"برترین های موبایل"} rounded={false} category={"second-section"} />

            <BannersSection center={false} category={"third-section"} rounded={true}  />

            <ProductSlider category={"laptop"} border={false} title={"لپ‌تاپ‌ها در تکنولایف"} />

            <BannersSection category={"forth-section"} center={true} rounded={false} title={"برترین های لپتاپ"} />
        </div>
        </BannerContext.Provider>
    </div>
  )
}
