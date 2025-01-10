import React,{useState} from 'react'
import BannersSection from '../../components/BannersSection/BannersSection'
import Slider from "./../../components/Slider/Slider"
import CatSlider from "./../../components/CatSlider/CatSlider"
import ProductSlider from '../../components/ProductSlider/ProductSlider'

import BannerContext from '../../context/BannerContext'
import banners from '../../data/banner'
import BlogSection from "./../../components/BlogSection/BlogSection"

export default function Home() {
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

            <BannersSection category={"fifth-section"} center={false} rounded={true} />

            <BannersSection category={"sixth-section"} title={"برترین های هندزفری"} center={true} rounded={false} />

            <BannersSection category={"seventh-section"} center={false} rounded={true} />

            <ProductSlider category={"comp"} border={false} title={"کامپیوتر و تجهیزات"} />

            <BannersSection category={"eight-section"} center={false} rounded={true} />

            <ProductSlider category={"fer"} border={false} title={"لوازم خانگی تکنولایف"} />

            <BlogSection />
        </div>
        </BannerContext.Provider>
    </div>
  )
}
