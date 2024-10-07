import React , {useState} from 'react'
import "./MainLibrary.css"
import { useParams } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import { GoVersions } from "react-icons/go";
import data from "./../../data.json"

export default function MainLibrary() {
    let params=useParams()
    const [libraryData,setLibraryData]=useState(data.library)
    let findLibrary=libraryData.find(library=>library.id==params.libraryID)
    
  return (
    <>
        <Nav />
        <div className='main-library'>
            <div className="container">
                <h2 className="maib-library__title">{findLibrary.title}</h2>
                <span className='main-library__date'>
                    <GoVersions  />
                    <span>last vesion : {findLibrary.lastVersion}</span>
                </span>
                <div className="main-library__image">
                    <img src={findLibrary.img} alt="library" />
                </div>
                <p className="main-library__text">{findLibrary.text}</p>
            </div>
        </div>
        <Footer />
    </>
  )
}
