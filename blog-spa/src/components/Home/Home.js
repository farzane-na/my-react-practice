import "./Home.css";
import React from "react";
import Header from "../Header/Header";
import Heading from "../Heading/Heading";
import BlogSection from "../BlogSection/BlogSection";
import Button from "../Button/Button";
import LibrarySection from "../LibrarySection/LibrarySection";
import NewsLetterSection from "../NewsLetterSection/NewsLetterSection";
import Footer from "../Footer/Footer";

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
        <Heading>Most Popular Library</Heading>
        <LibrarySection />
        <Button>Show More</Button>
        <NewsLetterSection />
      </div>
      <Footer />
    </div>
  );
}
