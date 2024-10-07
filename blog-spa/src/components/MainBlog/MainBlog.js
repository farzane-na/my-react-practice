import React , {useState,useEffect} from 'react'
import "./MainBlog.css"
import { useParams  } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import { MdOutlineDateRange } from "react-icons/md";
import data from "./../../data.json"

export default function MainBlog() {
    let params=useParams()
    const [blogData,setBlogData]=useState([])
    const [mainBlog,setMainBlog]=useState([])
    useEffect(()=>{
        async function fetchData() {
          await fetch('http://localhost:3000/data.json')
          .then(res=>res.json())
          .then(data=>{
            console.log(data.blog);
            
            setBlogData(data.blog)
            let findBlog=data.blog.find(blog=>blog.id==params.blogID)
            setMainBlog(findBlog)
        })
    }
    fetchData()
    },[])
    
  return (
    <>
        <Nav />
        <div className='main-blog'>
            <div className="container">
                <h2 className="maib-blog__title">{mainBlog.title}</h2>
                <span className='main-blog__date'>
                    <MdOutlineDateRange />
                    <span>{mainBlog.date}</span>
                </span>
                <div className="main-blog__image">
                    <img src={mainBlog.image} alt="blog" />
                </div>
                <p className="main-blog__text">{mainBlog.text}</p>
            </div>
        </div>
        <Footer />
    </>
  )
}
