import React,{useState} from "react";
import "./Question.css";
import questions from "./../data.js";
import HOC from "../HOC/HOC.jsx";
import QuestionBox from "./../QuestionBox/QuestionBox.jsx"

function Question({toggling,isOpen}) {
  return (
    <div className="question-wrapper">
      {questions.map((question) => {
        return (
          <QuestionBox key={question.id} {...question} />
        );
      })}
    </div>
  );
}

export default  HOC(Question);
