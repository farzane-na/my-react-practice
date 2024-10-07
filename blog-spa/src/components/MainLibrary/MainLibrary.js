import React , {useState,useEffect} from 'react'
import "./MainLibrary.css"
import { useParams } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import { GoVersions } from "react-icons/go";

export default function MainLibrary() {
    let params=useParams()
    const [mainLibrary,setMainLibrary]=useState([])
    useEffect(()=>{
        async function fetchData() {
          await fetch('http://localhost:3000/data.json')
          .then(res=>res.json())
          .then(data=>{
            let findLibrary=data.library.find(library=>library.id==params.libraryID)
            setMainLibrary(findLibrary)
        })
    }
    fetchData()
    },[])
  return (
    <>
        <Nav />
        <div className='main-library'>
            <div className="container">
                <h2 className="maib-library__title">{mainLibrary.title}</h2>
                <span className='main-library__date'>
                    <GoVersions  />
                    <span>last vesion : {mainLibrary.lastVersion}</span>
                </span>
                <div className="main-library__image">
                    <img src={mainLibrary.img} alt="library" />
                </div>
                <p className="main-library__text">{mainLibrary.text}</p>
            </div>
        </div>
        <Footer />
    </>
  )
}
