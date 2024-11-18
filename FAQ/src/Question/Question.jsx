import React,{useState} from "react";
import "./Question.css";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import questions from "./../data.js";
import HOC from "../HOC/HOC.jsx";

function Question({toggling,isOpen}) {
  return (
    <div className="question-wrapper">
      {questions.map((question) => {
        return (
          <div className="question-box">
            <div className="question-heading">
              <h2 className="question-text">{question.question}</h2>
              <span className="question-icon">
                {
                  isOpen === question.id ? (

                    <FaMinus onClick={()=>toggling(question.id)} />
                  ):(

                    <FaPlus onClick={()=>toggling(question.id)} />
                  )
                }
              </span>
            </div>
            <div className={`answer ${isOpen === question.id ? "answer-show" : ""}`}>
              <p className="anser-text">{question.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default  HOC(Question);
