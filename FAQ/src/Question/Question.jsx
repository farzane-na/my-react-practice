import React from 'react'
import "./Question.css"

function Question() {
  return (
    <div className="question-wrapper">
        <div className="question-box">
            <div className="question-heading">
                <h2 className="question-text"></h2>
                <span className="question-icon"></span>
            </div>
            <div className="answer">
                <p className="anser-text"></p>
            </div>
        </div>
    </div>
  )
}

export default Question