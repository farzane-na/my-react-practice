import React from 'react'
import "./Footer.css"

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
                    <li><a href="" className='footer-link'>Home</a></li>
                    <li><a href="" className='footer-link'>Blogs</a></li>
                    <li><a href="" className='footer-link'>Librarys</a></li>
                </ul>
                <ul className="footer-list">
                    <li><a href="" className='footer-link'>About</a></li>
                    <li><a href="" className='footer-link'>Contact</a></li>
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
