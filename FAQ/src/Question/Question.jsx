import React,{useState} from "react";
import "./Question.css";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import questions from "./../data.js";

function Question() {
  console.log(questions);
  const [isOpenAnswer,setIsOpenAnswer]=useState(null)

  const toggleAnswer=(id)=>{
    setIsOpenAnswer((prevId) => (prevId === id ? null : id));
  }
  return (
    <div className="question-wrapper">
      {questions.map((question) => {
        return (
          <div className="question-box">
            <div className="question-heading">
              <h2 className="question-text">{question.question}</h2>
              <span className="question-icon">
                {
                  isOpenAnswer === question.id ? (

                    <FaMinus onClick={()=>toggleAnswer(question.id)} />
                  ):(

                    <FaPlus onClick={()=>toggleAnswer(question.id)} />
                  )
                }
              </span>
            </div>
            <div className={`answer ${isOpenAnswer === question.id ? "answer-show" : ""}`}>
              <p className="anser-text">{question.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Question;
