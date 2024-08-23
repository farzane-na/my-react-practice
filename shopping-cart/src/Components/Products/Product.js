import "./Product.css"
import React from "react"

export default class Product extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    addProduct(id){
        this.props.onAdd(id)
    }
    render(){
        return(
            <div className="product">
                <div className="product__image">
                    <img src={this.props.src} alt={this.props.title} />
                </div>
                <h2 className="product__title">{this.props.title}</h2>
                <div className="product__property">
                    <div className="product__price">{this.props.price} $</div>
                    <button className="product__btn" onClick={this.addProduct.bind(this,this.props.id)} >Add To Cart</button>
                </div>
            </div>
        )
    }
}