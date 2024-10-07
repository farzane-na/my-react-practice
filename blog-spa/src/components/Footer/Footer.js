import React from 'react'
import "./Footer.css"
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
        <h2 className="footer-title">Dive Into Skills</h2>
        <div className="footer-access">
            <p className="footer-caption">
            The latest articles and courses to help you upgrade your skills and learn the latest trends. Master web Development with these amazing resources that are available for free!
            </p>
            <div className="footer-lists">
                <ul className="footer-list">
                    <li><Link to='/' className='footer-link'>Home</Link></li>
                    <li><Link to='/blogs' className='footer-link'>Blogs</Link></li>
                    <li><Link to='/libraries' className='footer-link'>Librarys</Link></li>
                </ul>
                <ul className="footer-list">
                    <li><Link to='/about' className='footer-link'>About</Link></li>
                    <li><Link to='/contact' className='footer-link'>Contact</Link></li>
                </ul>
            </div>
        </div>
        <div className="footer-social"></div>
        <div className="footer-copy-right">
            <p className="copy-right">COPYRIGHT @ 2024 Dive Into Skills</p>
            <a href='https://farzanenazmabadi.liara.run' className="author">Farzane Nazmabadi</a>
        </div>
    </footer>
  )
}
