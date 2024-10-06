import "./BlogSection.css"
import React , {useState,useEffect} from 'react'
import Blog from "../Blog/Blog"
import data from "./../../data.json"

export default function BlogSection() {
    const blogData=data.blog
    console.log(blogData)
    let [posts,setPosts]=useState([])
    // useEffect(()=>{
    //     fetch("https://dummyjson.com/posts")
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setPosts(()=>posts=data.posts)
    //     },[])
    // })
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
