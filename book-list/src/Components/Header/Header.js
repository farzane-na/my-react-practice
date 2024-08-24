import "./Header.css"
import React from "react"
import { FaBookOpen } from "react-icons/fa";

export default class Header extends React.Component{
    render(){
        return (
            <header className="header">
                <h1>
                <FaBookOpen /> SabzLearn <span>Book List</span>
                </h1>
            </header>
        )
    }
}