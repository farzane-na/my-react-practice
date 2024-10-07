import "./Nav.css"
import React , {useState} from 'react'
import {Link , NavLink} from 'react-router-dom'

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
            <li className="nav__menu-item"><NavLink to='/' className={(link)=>link.isActive ? 'nav__menu-link nav__menu-link--active' : 'nav__menu-link'}>Home</NavLink></li>
            <li className="nav__menu-item"><NavLink to='/blogs' className={(link)=>link.isActive ? 'nav__menu-link nav__menu-link--active' : 'nav__menu-link'}>Blogs</NavLink></li>
            <li className="nav__menu-item"><NavLink to='/Libraries' className={(link)=>link.isActive ? 'nav__menu-link nav__menu-link--active' : 'nav__menu-link'}>Libraries</NavLink></li>
            <li className="nav__menu-item"><NavLink to='/about' className={(link)=>link.isActive ? 'nav__menu-link nav__menu-link--active' : 'nav__menu-link'}>About</NavLink></li>
            <li className="nav__menu-item"><NavLink to='/contact' className={(link)=>link.isActive ? 'nav__menu-link nav__menu-link--active' : 'nav__menu-link'}>Contact</NavLink></li>
        </ul>
        <div className="mobile-menu">
            <div className="hamburger-menu" onClick={(event)=>openMenuMobile(event)}>
                <span className={`hamburger-line ${classOpen}`}></span>
            </div>
            <ul className={`nav__menu-mobile ${menuMobile}`}>
            <li className="nav__menu-mobile-item"><NavLink to='/' className={(link)=>link.isActive ? 'nav__menu-mobile-link nav__menu-mobile-link--active' : 'nav__menu-mobile-link'}>Home</NavLink></li>
            <li className="nav__menu-mobile-item"><NavLink to='/blogs' className={(link)=>link.isActive ? 'nav__menu-mobile-link nav__menu-mobile-link--active' : 'nav__menu-mobile-link'}>Blogs</NavLink></li>
            <li className="nav__menu-mobile-item"><NavLink to='/Libraries' className={(link)=>link.isActive ? 'nav__menu-mobile-link nav__menu-mobile-link--active' : 'nav__menu-mobile-link'}>Libraries</NavLink></li>
            <li className="nav__menu-mobile-item"><NavLink to='/about' className={(link)=>link.isActive ? 'nav__menu-mobile-link nav__menu-mobile-link--active' : 'nav__menu-mobile-link'}>About</NavLink></li>
            <li className="nav__menu-mobile-item"><NavLink to='/contact' className={(link)=>link.isActive ? 'nav__menu-mobile-link nav__menu-mobile-link--active' : 'nav__menu-mobile-link'}>Contact</NavLink></li>
        </ul>
        </div>
    </nav>
  )
}
