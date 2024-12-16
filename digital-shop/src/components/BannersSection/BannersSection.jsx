import React, { useContext, useEffect, useState } from "react";
import BannerContext from "../../context/BannerContext";
import { Link } from "react-router-dom";

export default function BannersSection({ category, center, rounded, title }) {
  const allContext = useContext(BannerContext);
  const [filteredBanner, setFilteredBanner] = useState([]);
  useEffect(() => {
    let mainBanners = allContext.filter(
      (banner) => banner.category === category
    );
    setFilteredBanner(mainBanners);
  }, []);
  return (
    <div className="w-full flex flex-col gap-4 mb-10">
        {
            title && (
                <h2 className='font-shabnamBold text-2xl text-center'>{title}</h2>
            )
        }
      <div
        className={`flex flex-col md:flex-row items-center ${
          center && "justify-center"
        } gap-4 mb-10`}
      >
        {filteredBanner.map((img, index) => {
          return (
            <div
              className={`relative ${rounded && "overflow-hidden rounded-xl"} ${title ? "w-40" : "w-full"}`}
              key={index}
            >
              <img src={img.image} alt="" className="w-full h-full" />
              {
                img.name && (
                    <p className="text-sm font-shabnamBold text-center">{img.name}</p>
                )
              }
              <Link
                href="#"
                className="absolute w-full h-full top-0 bottom-0 left-0 right-0 z-20"
              ></Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
