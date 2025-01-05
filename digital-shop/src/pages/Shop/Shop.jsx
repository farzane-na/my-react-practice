import React ,{useState,useEffect,useContext} from 'react'
import ProductsContext from "../../context/ProductContext";
import ProductCart from "../../components/ProductCart/ProductCart";
export default function Shop(){
    const allProducts=useContext(ProductsContext)
    return (
        <div className={"wrapper"}>
            <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3"}>
                {
                    allProducts.map(product => (
                        <ProductCart key={product.id} {...product} />
                    ))
                }
            </div>

        </div>
    )
}