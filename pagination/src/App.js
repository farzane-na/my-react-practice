import "./App.css";
import React, { useState, useEffect } from "react";
import Todo from "./components/Todo/Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [pageNumber, setPageNumber] = useState([]);
  const [countPage, setCountPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredTodo, setFilteredTodo] = useState([]);
  let row = 12;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setIsPending((prev) => !prev);
        console.log("fetch");
      });
  }, []);

  useEffect(() => {
    setCountPage(Math.ceil(todos.length / row));
  }, [todos]);

  useEffect(() => {
    setPageNumber(Array.from(Array(countPage).keys()));
  }, [countPage]);

  useEffect(() => {
    let startIndex = currentPage * row - row;
    let endIndex = currentPage * row - 1;
    setFilteredTodo(todos.slice(startIndex, endIndex + 1));
  }, [countPage, currentPage]);
  const nextPage=()=>{
    
  }
  return (
    <div className="App">
      <h1 className="app-title">My Todos</h1>
      <div className={`wrapper ${!isPending ? "pending" : ""}`}>
        {!isPending ? (
          <div className="loading">
            <svg
              fill="#000000"
              height="800px"
              width="800px"
              version="1.1"
              id="Capa_1"
              viewBox="0 0 489.533 489.533"
            >
              <g>
                <path
                  d="M268.175,488.161c98.2-11,176.9-89.5,188.1-187.7c14.7-128.4-85.1-237.7-210.2-239.1v-57.6c0-3.2-4-4.9-6.7-2.9
		              l-118.6,87.1c-2,1.5-2,4.4,0,5.9l118.6,87.1c2.7,2,6.7,0.2,6.7-2.9v-57.5c87.9,1.4,158.3,76.2,152.3,165.6
		              c-5.1,76.9-67.8,139.3-144.7,144.2c-81.5,5.2-150.8-53-163.2-130c-2.3-14.3-14.8-24.7-29.2-24.7c-17.9,0-31.9,15.9-29.1,33.6
		              C49.575,418.961,150.875,501.261,268.175,488.161z"
                />
              </g>
            </svg>
          </div>
        ) : (
          filteredTodo.map((todo) => {
            return <Todo key={todo.id} {...todo} />;
          })
        )}
      </div>
      <div className="number-box">
        <span className="number">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <ul className="number-wrapper">
          {isPending
            ? pageNumber.map((number) => {
                return (
                  <li
                    className={`number ${
                      currentPage === number + 1 ? "active-number" : ""
                    }`}
                    key={number + 1}
                    onClick={() => setCurrentPage(number + 1)}
                  >
                    {number + 1}
                  </li>
                );
              })
            : "loading ..."}
        </ul>
        <span className="number" onClick={nextPage}>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default App;
