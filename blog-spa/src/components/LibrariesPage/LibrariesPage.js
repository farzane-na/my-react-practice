import React , {useState,useEffect} from 'react'
import "./LibrariesPage.css"
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import Library from '../Library/Library'

export default function LibrariesPage() {
  const [libraryData , setLibraryData]=useState([])
  useEffect(()=>{
    async function fetchData() {
      await fetch('http://localhost:3000/data.json')
      .then(res=>res.json())
      .then(data=>{
        setLibraryData(data.library)
      })
    }
    fetchData()
  },[])
  return (
    <>
      <Nav />
      <div className='library-page'>
          <div className="container">
            <h2 className="library-page__title">Libraries</h2>
            <p className="library-page__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio laudantium nisi maxime deserunt minus labore impedit, in totam ullam laboriosam eaque quisquam optio reiciendis laborum accusamus vitae vero! Corrupti at nesciunt error corporis dolore laboriosam maxime minus debitis, explicabo dolorum? Eius facere unde neque pariatur amet! Mollitia minima architecto dolorum!
            </p>
            <div className="library-wrapper">
                {
                  libraryData.map(library=>(
                    <Library key={library.id} {...library} />
                  ))
                }
            </div>
          </div>
      </div>
      <Footer/>
    </>
  )
}
