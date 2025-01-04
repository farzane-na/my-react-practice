import React , {useState,useContext,useEffect,useMemo} from "react";
import "./OffPage.css"
import ProductsContext from "../../context/ProductContext";
import ProductCart from "../../components/ProductCart/ProductCart";
import { CiFilter } from "react-icons/ci";
import StylingNumber from "../../GlobalFunc/StylingNumber";


export default function OffPage(){
    const productsContext=useContext(ProductsContext)
    const [offerProducts,setOfferProducts]=useState([])
    const [filterPrice,setFillterPrice]=useState(50_000_000)

    useEffect(() => {
        const filterOffProducts=productsContext.filter(product=>{
            return +product.off>0
        })
        setOfferProducts(filterOffProducts)
    }, []);

    const filteredProducts = useMemo(() => {
        return offerProducts.filter(product => +product.price <= filterPrice);
    }, [offerProducts, filterPrice]);

    return (
        <div className={"off-page my-7"}>
            <div className={"wrapper"}>
                <h2 className={"text-blue-900 font-bold mb-5"}>محصولات دارای تخفیف</h2>
                <div className={"flex items-start gap-3 flex-col lg:flex-row"}>
                    <div className={"w-[25%] rounded-xl border border-gray-200 p-2 text-sm text-gray-600"}>
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
                                   max={50000000}
                                   min={100000}
                                   onChange={(event)=>setFillterPrice(event.target.value)}
                                   className={"range-input w-full"}
                            />
                        </div>

                    </div>
                    <div className={"w-[74%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"}>
                        {
                            filteredProducts?.map(product => {
                                return (
                                    <ProductCart key={product.id} {...product} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}