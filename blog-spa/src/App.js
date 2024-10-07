import React from 'react';
import './App.css';
import {Route , Routes} from 'react-router-dom'
import Home from './components/Home/Home'
import BlogPage from './components/BlogPage/BlogPage';
import About from './components/About/About';
import LibrariesPage from './components/LibrariesPage/LibrariesPage';
import Contact from './components/Contact/Contact';
import MainBlog from './components/MainBlog/MainBlog'
import MainLibrary from './components/MainLibrary/MainLibrary'

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/blogs' element={<BlogPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/Libraries' element={<LibrariesPage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog/:blogID' element={<MainBlog />} />
          <Route path='/library/:libraryID' element={<MainLibrary />} />
      </Routes>
    </>
  );
}

export default App;
