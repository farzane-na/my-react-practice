import React, { useEffect, useState , useContext , useMemo} from "react";
import { CiTrash } from "react-icons/ci";
import { LuPlus } from "react-icons/lu";
import { HiMinus } from "react-icons/hi";
import OptimizingColor from "../OptimizingColor/OptimizingColor";
import {CartContext} from "../../context/cartContext";

export default function ProductInCart({
  id,
  image,
  name,
  price,
  off,
  count,
  color,
  onLoading
}) {
  const [productCount, setProductCount] = useState(count);
  const [finalPrice, setFinalPrice] = useState("");
  const {state,dispatch}=useContext(CartContext)

  useEffect(() => {
    setFinalPrice(off > 0 ? off : price);
  }, []);

  const addProductCount = () => {
    setProductCount((prev) => +prev + 1);
  };

  const minusProduct = () => {
    setProductCount((prev) => prev - 1);
  };

  const removeProductFromCart=(productID)=>{
    dispatch({type:"REMOVE_FROM_CART",payload:productID})
  }


  useEffect(() => {
    const newPayload={productID:id,count:productCount}
    dispatch({type:"CHANGE_COUNT",payload:newPayload})
  }, [productCount]);

  // const  = useMemo(() => {
  //
  // }, []);

  return (
    <div className="w-full flex items-center justify-between border border-gray-200 rounded-2xl p-4">
      <div className="flex items-center">
        <div className="w-16 ml-5">
          <img src={image} alt="" className="w-full" />
        </div>
        <div className="flex justify-center items-center ml-5 border border-gray-200 rounded px-1">
          {productCount == 1 ? (
            <CiTrash
              className="w-4 h-4 text-blue-950 cursor-pointer"
              onClick={() => removeProductFromCart(id)}
            />
          ) : (
            <HiMinus
              className="w-4 h-4 text-blue-950 cursor-pointer"
              onClick={minusProduct}
            />
          )}
          <span className="px-2 border-x border-x-gray-200 h-full text-blue-950">
            {productCount}
          </span>
          <LuPlus
            className="w-4 h-4 text-blue-950 cursor-pointer"
            onClick={addProductCount}
          />
        </div>
        <p className="w-[520px] overflow-hidden text-ellipsis text-nowrap ml-5">
          {name}
        </p>
        <div>
          <OptimizingColor colorName={color} isSelect={true} />
        </div>
      </div>
      <p className="font-shabnamBold text-blue-950">
        {`${new Intl.NumberFormat("fa-IR").format(
          finalPrice * productCount
        )} تومان`}
      </p>
    </div>
  );
}
