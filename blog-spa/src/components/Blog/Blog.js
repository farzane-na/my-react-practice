import "./Blog.css"
import React from 'react'
import { MdOutlineDateRange } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import {Link} from 'react-router-dom'

export default function Blog(props) {
    let {id,title,image,author,date,sumary}=props
  return (
    <article className="blog">
        <div className="blog__image">
            <img src={image} alt="blog" />
        </div>
        <Link to={`/post/${id}`} className="blog__title">{title}</Link>
        <p className="blog__sumary">{sumary}</p>
        <div className="blog__pproperty">
            <div className="blog__date">
                <MdOutlineDateRange />
                <span className="blog__date-date">{date}</span>
            </div>
            <div className="blog__author">
                <IoPersonSharp />
                <span className="blog__author-author">{author}</span>
                </div>
        </div>
    </article>
  )
}
