import "./Nav.css"
import React , {useState} from 'react'

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
            <li className="nav__menu-item"><a href="" className="nav__menu-link">Home</a></li>
            <li className="nav__menu-item"><a href="" className="nav__menu-link">Blogs</a></li>
            <li className="nav__menu-item"><a href="" className="nav__menu-link">Courses</a></li>
            <li className="nav__menu-item"><a href="" className="nav__menu-link">About</a></li>
            <li className="nav__menu-item"><a href="" className="nav__menu-link">Contact</a></li>
        </ul>
        <div className="mobile-menu">
            <div className="hamburger-menu" onClick={(event)=>openMenuMobile(event)}>
                <span className={`hamburger-line ${classOpen}`}></span>
            </div>
            <ul className={`nav__menu-mobile ${menuMobile}`}>
            <li className="nav__menu-mobile-item"><a href="" className="nav__menu-mobile-link">Home</a></li>
            <li className="nav__menu-mobile-item"><a href="" className="nav__menu-mobile-link">Blogs</a></li>
            <li className="nav__menu-mobile-item"><a href="" className="nav__menu-mobile-link">Courses</a></li>
            <li className="nav__menu-mobile-item"><a href="" className="nav__menu-mobile-link">About</a></li>
            <li className="nav__menu-mobile-item"><a href="" className="nav__menu-mobile-link">Contact</a></li>
        </ul>
        </div>
    </nav>
  )
}
