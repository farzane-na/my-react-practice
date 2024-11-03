import React from 'react'
import "./NewProduct.css"


export default function NewProduct() {
  return (
    <div className="new-product">
        <h2 className="new-product__title">افزودن محصول</h2>
        <form action="" className='new-product__form'>
            <div className="input__wrapper">
            <div className="new-product__box">
                <label htmlFor="" className="new-product__label">نام محصول</label>
                <input type="text" className="new-product__input" />
            </div>
            <div className="new-product__box">
                <label htmlFor="" className="new-product__label"></label>
                <input type="text" className="new-product__input" />
            </div>
            <div className="new-product__box">
                <label htmlFor="" className="new-product__label"></label>
                <input type="text" className="new-product__input" />
            </div>
            <div className="new-product__box">
                <label htmlFor="" className="new-product__label"></label>
                <input type="text" className="new-product__input" />
            </div>

            </div>
        </form>
    </div>
  )
}
