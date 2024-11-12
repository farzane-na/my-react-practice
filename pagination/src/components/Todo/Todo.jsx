import React from 'react'
import "./Todo.css"

export default function Todo({ id, title, completed, userId }) {
  return (
    <div className='todo'>
        <h3 className="todo-id">{id}</h3>
        <div className="todo-heading">
            <span>{title}</span>
            <span>
                {
                    completed ? (
                        "✅"
                    ): (
                        "❌"
                    )
                }
            </span>
        </div>
        <div className="todo-user">userId : {userId}</div>
    </div>
  )
}
