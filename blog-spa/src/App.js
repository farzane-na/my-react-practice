import React from 'react';
import './App.css';
import {Route , Routes} from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/about'
import Contact from './components/contact'
import Product from './components/product'

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/product" element={<Product/>} />
      </Routes>
    </>
  );
}

export default App;
