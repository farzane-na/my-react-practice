import "./Home.css"
import React from 'react'
import Header from "../Header/Header"
import Heading from "../Heading/Heading"
import BlogSection from "../BlogSection/BlogSection"
import Button from "../Button/Button"

export default function Home() {
  return (
    <div className="home">
        <Header />
        <div className="container">
          <Heading>Latest Blogs</Heading>
        </div>
        <BlogSection />
        <Button>Read More</Button>
        <div className="container">
          <Heading>Most Popular Blogs</Heading>
        </div>
    </div>
  )
}
