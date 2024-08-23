import "./ShoppingCart.css"
import React from "react"

export default class ShoppingCart extends React.Component{
    constructor(props){
        super(props)
    }
    removeProduct(id){
        this.props.onRemove(id)
    }
    render(){
        return(
            <tr>
                <td className="product-title">
                    <img src={this.props.src} alt={this.props.title} />
                    <span>{this.props.title}</span>
                </td>
                <td>{this.props.price} $</td>
                <td className="product-btn">
                    <button onClick={this.removeProduct.bind(this,this.props.id)}>remove</button>
                </td>
            </tr>
        )
    }
}