import "./Blog.css"
import React from 'react'
import { IoMdEye } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";

export default function Blog({title,views,reactions}) {
    let blogsImag=["./images/blog/1.jpg","./images/blog/2.jpg","./images/blog/3.jpg","./images/blog/4.jpg","./images/blog/5.jpg","./images/blog/6.jpg","./images/blog/7.jpg","./images/blog/8.jpg","./images/blog/9.jpg","./images/blog/10.jpg","./images/blog/11.jpg","./images/blog/12.jpg","./images/blog/13.jpg","./images/blog/14.jpg","./images/blog/15.jpg"]
  return (
    <div className="blog">
        <div className="blog__image">
            <img src={blogsImag[8]} alt="blog" />
        </div>
        <div className="blog__title">{title}</div>
        <div className="blog__pproperty">
            <div className="blog__view">
                <IoMdEye />
                <span className="blog__view-number">{views}</span>
            </div>
            <div className="blog__like">
                <FaRegHeart />
                <span className="blog__like-number">{reactions.likes}</span>
                </div>
        </div>
    </div>
  )
}
