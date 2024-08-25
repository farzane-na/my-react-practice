import "./Todo.css"
import React from "react"
import { FaRegTrashAlt } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import { MdDoneAll } from "react-icons/md";

export default class Todo extends React.Component{
    constructor(props){
        super(props)
    }
    completeTodo(id){
        this.props.onComplete(id)
    }
    removeTodo(id){
        this.props.onRemove(id)
    }
    render(){
        return(
            <div className="todo">
                {
                    this.props.completed ? <span className="todo-title completed">{this.props.todoName}</span> : <span className="todo-title">{this.props.todoName}</span>
                }
                
                <div className="todo-btns">
                    <button className="complete-todo" onClick={this.completeTodo.bind(this,this.props.id)}>
                        {this.props.completed ? <MdDoneAll /> : <MdDone />}
                    </button>
                    <button className="delete-todo" onClick={this.removeTodo.bind(this,this.props.id)}><FaRegTrashAlt /></button>
                </div>
            </div>
        )
    }
}