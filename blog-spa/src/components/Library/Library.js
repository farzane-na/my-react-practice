import React from 'react'
import "./Library.css"
import {Link} from 'react-router-dom'

export default function Library(props) {
    let {id,title,img}=props
  return (
    <article className="library">
        <div className="library__image">
            <img src={img} alt="library" />
        </div>
        <Link to={`/library/${id}`} className="library__title">{title}</Link>
    </article>
  )
}
