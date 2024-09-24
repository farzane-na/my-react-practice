import "./Button.css"
import React from 'react'
import {Link} from "react-router-dom"

export default function Button(Children) {
  return (
    <div className="btn-wrapper">
        <Link className="btn">{Children.children}</Link>
    </div>
  )
}
