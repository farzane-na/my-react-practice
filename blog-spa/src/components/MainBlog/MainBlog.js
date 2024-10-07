import React , {useState} from 'react'
import "./MainBlog.css"
import { useParams } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import { MdOutlineDateRange } from "react-icons/md";
import data from "./../../data.json"

export default function MainBlog() {
    let params=useParams()
    const [blogData,setBlogData]=useState(data.blog)
    let findBlog=blogData.find(blog=>blog.id==params.blogID)
    
  return (
    <>
        <Nav />
        <div className='main-blog'>
            <div className="container">
                <h2 className="maib-blog__title">{findBlog.title}</h2>
                <span className='main-blog__date'>
                    <MdOutlineDateRange />
                    <span>{findBlog.date}</span>
                </span>
                <div className="main-blog__image">
                    <img src={findBlog.image} alt="blog" />
                </div>
                <p className="main-blog__text">{findBlog.text}</p>
            </div>
        </div>
        <Footer />
    </>
  )
}
