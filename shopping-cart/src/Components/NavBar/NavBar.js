import "./NavBar.css"
import React from "react"

export default class NavBar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <nav className="navbar">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Shop</a></li>
                </ul>
            </nav>
        )
    }
}