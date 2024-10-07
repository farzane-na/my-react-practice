import "./Nav.css"
import React , {useState} from 'react'
import {Link} from 'react-router-dom'

export default function Nav() {
    let [classOpen,setClassOpen]=useState("")
    let [menuMobile,setMenuMobile]=useState("")
    const openMenuMobile=(event)=>{
        if(classOpen){
            setClassOpen(()=>classOpen="")
            setMenuMobile(()=>menuMobile="")
        }else{
            setClassOpen(()=>classOpen="hamburger-line--active")
            setMenuMobile(()=>menuMobile="nav__menu-mobile--open")
        }
    }
  return (
    <nav className="nav">
        <p className="nav__logo">Dive Into Skills</p>
        <ul className="nav__menu">
            <li className="nav__menu-item"><Link to='/' className="nav__menu-link">Home</Link></li>
            <li className="nav__menu-item"><Link to='/blogs' className="nav__menu-link">Blogs</Link></li>
            <li className="nav__menu-item"><Link to='/Libraries' className="nav__menu-link">Libraries</Link></li>
            <li className="nav__menu-item"><Link to='/about' className="nav__menu-link">About</Link></li>
            <li className="nav__menu-item"><Link to='/contact' className="nav__menu-link">Contact</Link></li>
        </ul>
        <div className="mobile-menu">
            <div className="hamburger-menu" onClick={(event)=>openMenuMobile(event)}>
                <span className={`hamburger-line ${classOpen}`}></span>
            </div>
            <ul className={`nav__menu-mobile ${menuMobile}`}>
            <li className="nav__menu-mobile-item"><Link to='/' className="nav__menu-mobile-link">Home</Link></li>
            <li className="nav__menu-mobile-item"><Link to='/blogs' className="nav__menu-mobile-link">Blogs</Link></li>
            <li className="nav__menu-mobile-item"><Link to='/Libraries' className="nav__menu-mobile-link">Libraries</Link></li>
            <li className="nav__menu-mobile-item"><Link to='/about' className="nav__menu-mobile-link">About</Link></li>
            <li className="nav__menu-mobile-item"><Link to='/contact' className="nav__menu-mobile-link">Contact</Link></li>
        </ul>
        </div>
    </nav>
  )
}
