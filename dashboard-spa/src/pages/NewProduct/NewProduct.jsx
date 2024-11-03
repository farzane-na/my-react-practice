import React from 'react'
import "./NewProduct.css"
import {category} from "./../../data/product"

export default function NewProduct() {
  return (
    <div className="new-product">
        <h2 className="new-product__title">افزودن محصول</h2>
        <form action="" className='new-product__form'>
            <div className="input__wrapper">
            <div className="new-product__box">
                <p>
                <input type="text" className="new-product__input" />
                <label htmlFor="" className="new-product__label">نام محصول</label>
                </p>
            </div>
            <div className="new-product__box">
                <p>

                <input type="text" className="new-product__input" />
                <label htmlFor="" className="new-product__label">قیمت</label>
                </p>
            </div>
            <div className="new-product__box" >
                {/* <label htmlFor="" className="new-product__label"></label>
                <input type="text" className="new-product__input" /> */}
                <select name="" id="" className="new-product__select">
                    <option value="" selected>لطفا یک دسته بندی را انتخاب کنید ...</option>
                    {
                        category.map(cat=>(
                            <option>{cat.title}</option>
                        ))
                    }
                </select>
            </div>
            <div className="new-product__box">
                <p>

                <textarea rows={10} className="new-product__input "> </textarea>
                <label htmlFor="" className="new-product__label">توضیحات محصول</label>
                </p>
            </div>

            </div>
        </form>
    </div>
  )
}
