import React ,{useState , useEffect} from 'react'
import data from "./../../data.json"
import Library from '../Library/Library'
import "./LibrarySection.css"

export default function LibrarySection() {
    const [libraryData,setLibraryData]=useState([])
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
    <section className="library-sec">
        <div className="container">
            <div className="library-wrapper">
                {
                    libraryData.splice(-5).map(lib=>(
                        <Library key={lib.id} {...lib} />
                    ))
                }
            </div>
        </div>
    </section>
  )
}
