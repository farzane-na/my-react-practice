import "./PopularBlog.css"
import React from 'react'
import Blog from '../Blog/Blog'

export default function PopularBlog() {
    let [popularPosts,setPopularPosts]=useState([])
    useEffect(()=>{
        fetch("https://dummyjson.com/posts")
        .then(res=>res.json())
        .then(data=>{
            setPopularPosts(()=>popularPosts=data.posts)
        },[])
    })
    let filteredPost=popularPosts.filter(post=>{
        return post.reactions.like>1200
    })
  return (
    <section className="popular-blog">
        <div className="container">
            <div className="popular-wrapper">
                {
                    filteredPost.splice(-5).map(post=>{
                        return <Blog key={post.id} {...post}/>
                    })
                }
            </div>
        </div>
    </section>
  )
}
