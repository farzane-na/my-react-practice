import "./FormTable.css"
import React from "react"
import Book from "../Book/Book"

export default class FormTable extends React.Component{
    constructor(prop){
        super(prop)
        this.changeTitle=this.changeTitle.bind(this)
        this.changeAuthor=this.changeAuthor.bind(this)
        this.changeYear=this.changeYear.bind(this)
        this.submitForm=this.submitForm.bind(this)


        this.state={
            title:"",
            author:"",
            year:"",
            addedBooks:[]
        }


    }
    changeTitle(event){
        this.setState({
            title:event.target.value
        })
    }
    changeAuthor(event){
        this.setState({
            author:event.target.value
        })
    }
    changeYear(event){
        this.setState({
            year:event.target.value
        })
    }
    clearInputs(){
        this.setState({
            title:"",
            author:"",
            year:""
        })
    }
    pushhNewBook(newBook){
        let newBookArray=[...this.state.addedBooks]
        newBookArray.push(newBook)
        this.setState({
            addedBooks:newBookArray
        })
        this.clearInputs()
    }
    submitForm(event){
        event.preventDefault()
        if(this.state.title!=="" && this.state.author!=="" && this.state.year!==""){
            let newBook={
                id:this.state.addedBooks.length+1,
                title:this.state.title,
                author:this.state.author,
                year:this.state.year
            }
            this.pushhNewBook(newBook)
        }
    }
    render(){
        return (
            <>
                <form action="" className="form" onSubmit={this.submitForm}>
                    <input type="text" value={this.state.title} className="title input" placeholder="book title" onChange={this.changeTitle} />
                    <input type="text" value={this.state.author} className="author input" placeholder="book author" onChange={this.changeAuthor} />
                    <input type="text" value={this.state.year} className="year input" placeholder="book year" onChange={this.changeYear} />
                    <button type="submit" className="submit">add book</button>
                </form>
                <table className="table">
                    <thead>
                        <tr className="heading">
                            <th className="table__title">Title</th>
                            <th className="table__author">Author</th>
                            <th className="table__year">Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.addedBooks.length!==0 && (
                                this.state.addedBooks.map(book=>{
                                    return <Book key={book.id} {...book}></Book>
                                })
                            )
                        }
                    </tbody>
                    {/* <Book /> */}
                </table>
            </>
        )
    }
}