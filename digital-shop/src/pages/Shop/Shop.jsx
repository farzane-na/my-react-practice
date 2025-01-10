import React, {useState, useEffect, useContext, useMemo} from 'react'
import ProductsContext from "../../context/ProductContext";
import ProductCart from "../../components/ProductCart/ProductCart";
import {CiFilter} from "react-icons/ci";
import StylingNumber from "../../GlobalFunc/StylingNumber";
export default function Shop(){
    const allProducts=useContext(ProductsContext)
    const [allData,setAllData]=useState([])
    const [filterPrice,setFillterPrice]=useState(200_000_000)

    useEffect(()=>{
        setAllData(allProducts)
    },[allProducts])

    const filteredProducts = useMemo(() => {
        const filter=allData.filter(product => +product.price <= +filterPrice);
        return filter
    }, [filterPrice,allData]);
    return (
        <div className={"wrapper"}>

            <div className={"grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-start gap-4 my-4 "}>

                <div className={"col-span-1 rounded-xl border border-gray-200 p-2 text-sm text-gray-600 sticky top-4"}>
                    <div className={"flex items-center gap-1 border-b border-b-gray-200 pb-2"}>
                        <CiFilter className={"w-6 h-6"}/>
                        <span>فیلتر ها</span>
                    </div>
                    <p className={"my-2"}>فیلتر بر اساس قیمت</p>
                    <div className={"flex flex-col items-end"}>
                        <p className={"inline mb-2 bg-blue-900 rounded py-1 px-2 text-white text-xs"}>
                            {StylingNumber(filterPrice)} تومان
                        </p>
                        <input type={"range"}
                               value={filterPrice}
                               max={200000000}
                               min={100000}
                               onChange={(event) => setFillterPrice(event.target.value)}
                               className={"range-input w-full"}
                        />
                    </div>

                </div>

                {
                    !filteredProducts?.length ? (
                        <div className={"col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-4 flex justify-center items-center min-h-screen"}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"
                                 width="50"
                                 height="50" style={{
                                shapeRendering: "auto",
                                display: "block",
                                background: "rgba(255, 255, 255,0)",
                                margin: "0 auto"
                            }}
                            >
                                <g>
                                    <path stroke="none" fill="#223266" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50">
                                        <animateTransform values="0 50 51;360 50 51" keyTimes="0;1"
                                                          repeatCount="indefinite"
                                                          dur="1s"
                                                          type="rotate" attributeName="transform"></animateTransform>
                                    </path>
                                    <g></g>
                                </g>
                            </svg>
                        </div>
                    ) : (
                        <div
                            className={"col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3"}>
                            {
                                filteredProducts?.map(product => (
                                    <ProductCart key={product.id} {...product} />
                                ))
                            }
                        </div>
                    )
                }


            </div>


        </div>
    )
}