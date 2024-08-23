import "./Header.css"
import React from "react"
import NavBar from "../NavBar/NavBar"

export default class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="header">
                <NavBar></NavBar>
                <div className="logo">
                    <img src="./images/logo.png" alt="logo" />
                </div>
            </div>
        )
    }
}