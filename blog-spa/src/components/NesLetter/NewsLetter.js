import "./NewsLetter.css"
import React from 'react'

export default function NewsLetter() {
  return (
    <div className="newsletter">
        <form action="" className="news-letter-form">
            <div className="input-wrapper">
                <input type="text" placeholder="Email Address" />
                <button>Subscribe</button>
            </div>
        </form>
    </div>
  )
}
