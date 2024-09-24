import {Link} from 'react-router-dom'
import React from 'react'

export default function home(){
    return(
        <div className="nav">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/product">Product</Link>
                </li>
            </ul>
        </div>
    )
}