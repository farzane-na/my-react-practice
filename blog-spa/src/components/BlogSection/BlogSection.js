import "./BlogSection.css"
import React , {useState,useEffect} from 'react'
import Blog from "../Blog/Blog"

export default function BlogSection() {
    let [posts,setPosts]=useState([])
    useEffect(()=>{
        fetch("https://dummyjson.com/posts")
        .then(res=>res.json())
        .then(data=>{
            setPosts(()=>posts=data.posts)
        },[])
    })
  return (
    <section className="blog-section">
        <div className="container">
            <div className="blog-wrapper">
                {
                    posts.splice(-5).map(post=>{
                       return <Blog key={post.id} {...post} />
                    })
                }
            </div>
        </div>
    </section>
  )
}
