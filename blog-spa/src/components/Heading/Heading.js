import "./Heading.css"
import React  from 'react'

export default function Heading(Children) {
  return (
    <p className="heading">
        {Children.children}
    </p>
  )
}
