import React,{useState,useEffect,useContext} from "react";
import {useParams} from "react-router-dom";
import productContext from "../../context/ProductContext";
import ProductCart from "../../components/ProductCart/ProductCart";
 export default function ProductCategory(){
  const {productCat}=useParams()
  const allProductContext=useContext(productContext)
  const [filterProductByCat,setFilterProductByCat]=useState([])
  useEffect(()=>{
   const filteredProducts=allProductContext.filter(product=>product.category===productCat)
   setFilterProductByCat(filteredProducts)
  },[])
  return (
      <div className={"wrapper my-7"}>
         <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3"}>
          {
           filterProductByCat?.map(product=>{
            return(
                <ProductCart key={product.id} {...product} />
            )
           })
          }
         </div>
      </div>
  )
 }