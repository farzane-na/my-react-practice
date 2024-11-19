import React from "react";
import "./QuestionBox.css"
import HOC from "../HOC/HOC";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";

function QuestionBox({id,question,answer,isOpen,toggling}) {
  return (
    <div className="question-box">
      <div className="question-heading">
        <h2 className="question-text">{question}</h2>
        <span className="question-icon">
          {isOpen ? (
            <FaMinus onClick={toggling} />
          ) : (
            <FaPlus onClick={toggling} />
          )}
        </span>
      </div>
      <div className={`answer ${isOpen ? "answer-show" : ""}`}>
        <p className="anser-text">{answer}</p>
      </div>
    </div>
  );
}

export default HOC(QuestionBox);
