import React , {useState,useContext,useEffect} from "react";
import ProductsContext from "../../context/ProductContext";
import ProductCart from "../../components/ProductCart/ProductCart";

export default function OffPage(){
    const productsContext=useContext(ProductsContext)
    const [offerProducts,setOfferProducts]=useState([])

    useEffect(() => {
        const filterOffProducts=productsContext.filter(product=>{
            return product.off>0
        })
        setOfferProducts(filterOffProducts)
    }, []);
    return (
        <div className={"off-page my-7"}>
            <div className={"wrapper"}>
                <h2 className={"text-blue-900 font-bold mb-5"}>محصولات دارای تخفیف</h2>
                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-3"}>
                    {
                        offerProducts.map(product=>{
                            return(
                                <ProductCart key={product.id} {...product} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}