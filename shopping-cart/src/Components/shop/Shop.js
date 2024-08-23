import React from "react"
import "./Shop.css"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Product from "../Products/Product"
import ShoppingCart from "../ShoppingCart/ShoppingCart"

export default class Shop extends React.Component{
    constructor(props){
        super(props)
        this.state={
            products:[
                {id:1,title:"product 1",price:300,src:"./images/1.jpg"},
                {id:2,title:"product 2",price:52,src:"./images/2.jpg"},
                {id:3,title:"product 3",price:45,src:"./images/3.jpg"},
                {id:4,title:"product 4",price:200,src:"./images/4.jpg"},
                {id:5,title:"product 5",price:89,src:"./images/5.jpg"},
                {id:6,title:"product 6",price:65,src:"./images/6.jpg"},
                {id:7,title:"product 7",price:102,src:"./images/7.jpg"},
                {id:8,title:"product 8",price:20,src:"./images/8.jpg"},
                {id:9,title:"product 9",price:250,src:"./images/9.jpg"},
                {id:10,title:"product 10",price:49,src:"./images/10.jpg"},
                {id:11,title:"product 11",price:50,src:"./images/11.jpg"},
                {id:12,title:"product 12",price:65,src:"./images/12.jpg"},
            ],
            shoppingCart:[],
            totalPrice:0
        }
    }
    addToCart(productID){
        let selectProduct=this.state.products.find(product=>{
            return product.id==productID
        })
        this.changeTotalPrice(selectProduct,true)
        this.setState(prevState=>{
            return {shoppingCart :[...prevState.shoppingCart , selectProduct]}
        })
    }
    removeFromProduct(productID){
        let removeMainProduct=this.state.shoppingCart.findIndex(product=>{
            return product.id==productID
        })
        let mainProduct=this.state.products.find(product=>{
            return product.id==productID
        })
        this.changeTotalPrice(mainProduct,false)
        let newShoppingCart=[...this.state.shoppingCart]
        newShoppingCart.splice(removeMainProduct,1)
        this.setState({
            shoppingCart:newShoppingCart
        })
        
    }
    changeTotalPrice(product,logic){
        if(logic){
            this.setState(prevState=>{
                return {totalPrice:prevState.totalPrice+product.price}
            })
        }else{
            this.setState(prevState=>{
                return {totalPrice:prevState.totalPrice-product.price}
            })
        }
    }
    clearShoppingCart(){
        this.setState({
            shoppingCart:[]
        })
    }
    render(){
        return(
            <div className="shop">
                <Header></Header>
                <div className="container">
                    <div className="products-wrapper">
                        {
                            this.state.products.map(product=>{
                                return <Product key={product.id} {...product} onAdd={this.addToCart.bind(this)} ></Product>
                            })
                        }
                    </div>
                    <h2 className="shopping-cart-header">Shopping Cart</h2>
                    <table className="shopping-cart-table">
                        <thead>
                            <tr>
                                <th>title</th>
                                <th>price</th>
                                <th>remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.shoppingCart.length!==0 && (
                                    this.state.shoppingCart.map(product=>{
                                        return <ShoppingCart key={product.id} {...product} onRemove={this.removeFromProduct.bind(this)} />
                                    })
                                )
                            }
                        </tbody>
                    </table>
                    {
                        this.state.shoppingCart.length!==0 && (
                            <>
                                <span className="total-price">Total Price : {this.state.totalPrice} $</span>
                                <div className="clear-shopping-cart">
                                    <button className="clear-shopping-cart" onClick={this.clearShoppingCart.bind(this)}>Remove All</button>
                                </div>
                            </>
                        )
                    }
                </div>
                <Footer></Footer>
            </div>
        )
    }
}