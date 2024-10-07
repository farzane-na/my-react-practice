import "./Button.css"
import React from 'react'
import {Link} from "react-router-dom"

export default function Button(props) {
  
  return (
    <div className="btn-wrapper">
        <Link to={`${props.link}`} className="btn">{props.children}</Link>
    </div>
  )
}
