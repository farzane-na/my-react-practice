import "./BlogSection.css"
import React , {useState,useEffect} from 'react'
import Blog from "../Blog/Blog"
import data from "./../../data.json"

export default function BlogSection() {
    const [blogData,setBlogData]=useState([])
    useEffect(()=>{
        async function fetchData() {
          await fetch('http://localhost:3000/data.json')
          .then(res=>res.json())
          .then(data=>{
            setBlogData(data.blog)
        })
    }
    fetchData()
    },[])
  return (
    <section className="blog-section">
        <div className="container">
            <div className="blog-wrapper">
                {
                    blogData.splice(-5).map(blog=>{
                       return <Blog key={blog.id} {...blog} />
                    })
                }
            </div>
        </div>
    </section>
  )
}
