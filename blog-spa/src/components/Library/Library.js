import React from 'react'
import "./Library.css"

export default function Library(props) {
    let {title,img}=props
  return (
    <article className="library">
        <div className="library__image">
            <img src={img} alt="library" />
        </div>
        <div className="library__title">{title}</div>
    </article>
  )
}
