import "./TodoForm.css"
import React from "react"
import Todo from "../Todo/Todo"


export default class TodoForm extends React.Component{
    constructor(props){
        super(props)

        this.changeTodoInput=this.changeTodoInput.bind(this)
        this.submitTodoForm=this.submitTodoForm.bind(this)
        this.clearInput=this.clearInput.bind(this)
        this.completeMainTodo=this.completeMainTodo.bind(this)
        this.removeTodoFromList=this.removeTodoFromList.bind(this)
        this.changeSelectBox=this.changeSelectBox.bind(this)

        this.state={
            allTodo:[],
            todo:"",
            filterOption:"all"
        }

    }

    changeTodoInput(event){
        this.setState({
            todo:event.target.value
        })
    }

    clearInput(){
        this.setState({
            todo:""
        })
    }

    createNewTodo(){
        let newTodo={
            id:this.state.allTodo.length+1,
            todoName:this.state.todo,
            completed:false
        }
        this.setState(prevState=>{
            return {allTodo:[...prevState.allTodo , newTodo]}
        })
        this.clearInput()
    }

    submitTodoForm(event){
        event.preventDefault()
        if(this.state.todo){
            this.createNewTodo()
        }
    }

    completeMainTodo(todoID){
        let newTodos=[...this.state.allTodo]
        newTodos.forEach(todo=>{
            if(todo.id===todoID){
                todo.completed=!todo.completed
            }
        })
        this.setState({
            allTodo:newTodos
        })
    }

    removeTodoFromList(todoID){
        let filteredTodo=this.state.allTodo.filter(todo=>{
            return todo.id!==todoID
        })
        this.setState({
            allTodo:[...filteredTodo]
        })
    }

    changeSelectBox(event){
        console.log(event.target.value);
        this.setState({
            filterOption:event.target.value
        })
    }

    render(){
        return(
            <div className="todo-form">
                <h2 className="title">TODO LIST</h2>
                <form action="" className="form" onSubmit={this.submitTodoForm} >
                    <input type="text" className="add-input" value={this.state.todo} placeholder="Write Todo..." onChange={this.changeTodoInput} />
                    <button className="add-btn">Add</button>
                    <select className="todo-filter" onChange={this.changeSelectBox}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </form>
                <div className="todo-wrapper">
                    {
                        this.state.allTodo.length!==0 && (
                            this.state.filterOption==="all" && (
                                this.state.allTodo.map(todo=>{
                                    return <Todo key={todo.id} {...todo} onComplete={this.completeMainTodo} onRemove={this.removeTodoFromList} />
                                })
                            )
                        )
                    }
                    {
                        this.state.allTodo.length!==0 && (
                            this.state.filterOption==="completed" && (
                                this.state.allTodo.filter(todo=>todo.completed).map(todo=>{
                                    return <Todo key={todo.id} {...todo} onComplete={this.completeMainTodo} onRemove={this.removeTodoFromList} />
                                })
                            )
                        )
                    }
                    {
                        this.state.allTodo.length!==0 && (
                            this.state.filterOption==="uncompleted" && (
                                this.state.allTodo.filter(todo=>!todo.completed).map(todo=>{
                                    return <Todo key={todo.id} {...todo} onComplete={this.completeMainTodo} onRemove={this.removeTodoFromList} />
                                })
                            )
                        )
                    }
                </div>
            </div>
        )
    }
}
