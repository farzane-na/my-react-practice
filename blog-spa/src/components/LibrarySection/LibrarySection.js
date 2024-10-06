import React from 'react'
import data from "./../../data.json"
import Library from '../Library/Library'
import "./LibrarySection.css"

export default function LibrarySection() {
    const libraryData=data.library
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
