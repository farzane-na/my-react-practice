import React , {useState,useEffect} from 'react'
import "./BlogPage.css"
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import MainBlog from '../MainBlog/MainBlog'
import Blog from '../Blog/Blog'

export default function BlogPage() {
  const [blogData , setBlogData]=useState([])
  useEffect(()=>{
    async function fetchData() {
      await fetch('http://localhost:3000/data.json')
      .then(res=>res.json())
      .then(data=>{
        console.log("in fetch : ",data);
        setBlogData(data.blog)
      })
    }
    fetchData()
  },[])
  return (
    <>
      <Nav />
      <div className='blog-page'>
          <div className="container">
            <h2 className="blog-page__title">Blogs</h2>
            <p className="blog-page__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio laudantium nisi maxime deserunt minus labore impedit, in totam ullam laboriosam eaque quisquam optio reiciendis laborum accusamus vitae vero! Corrupti at nesciunt error corporis dolore laboriosam maxime minus debitis, explicabo dolorum? Eius facere unde neque pariatur amet! Mollitia minima architecto dolorum!
            </p>
            <div className="blogs-wrapper">
                {
                  blogData.map(blog=>(
                    <Blog key={blog.id} {...blog} />
                  ))
                }
            </div>
          </div>
      </div>
      <Footer/>
    </>
  )
}
