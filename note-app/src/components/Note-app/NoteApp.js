import React from "react";
import "./NoteApp.css"
import { FaTrashCan } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import Color from "../Colors/Color"
import Note from "../Note/Note"

export default class NoteApp extends React.Component{
    constructor(props){
        super(props)

        this.changeInputValue=this.changeInputValue.bind(this)
        this.clearInputValue=this.clearInputValue.bind(this)
        this.submitForm=this.submitForm.bind(this)
        this.createNewNote=this.createNewNote.bind(this)
        this.removeNote=this.removeNote.bind(this)
        this.changeColorHandeler=this.changeColorHandeler.bind(this)

        this.state={
            colors:[
                "#fff",
                "#E57373",
                "#F06292",
                "#BA68C8",
                "#7986CB",
                "#4FC3F7",
                "#81C784",
                "#FFF176",
                "#FFB74D",
            ],
            notes:[],
            note:"",
            selectedColor:""
        }
    }
    changeInputValue(event){
        this.setState({
            note:event.target.value
        })
    }
    clearInputValue(){
        this.setState({
            note:""
        })
    }
    createNewNote(newNote){
        this.setState(prevState=>{
            return {notes:[...prevState.notes , newNote]}
        })
        this.setState({
            selectedColor:"#fff"
        })
        this.clearInputValue()
    }
    submitForm(event){
        event.preventDefault()
        if(this.state.note){
            let newNote={
                id:this.state.notes.length+1,
                noteText:this.state.note,
                color:this.state.selectedColor
            }
            this.createNewNote(newNote)
        }
    }
    removeNote(noteID){
        let filteredNote=this.state.notes.filter(note=>{
            return note.id!==noteID
        })
        this.setState({
            notes:[...filteredNote]
        })
    }
    changeColorHandeler(color){
        this.setState({
            selectedColor:color
        })
    }
    render(){
        return (
            <div className="note-app">
                <h2 className="title">Note App</h2>
                <form action="" className="form" onSubmit={this.submitForm}>
                    <input type="text" placeholder="Write Something ..." value={this.state.note} onChange={this.changeInputValue} style={{backgroundColor:this.state.selectedColor}} />
                    <div className="note-handeler">
                        <div className="colors">
                            {
                                this.state.colors.map(color=>{
                                    return <Color key={color} color={color} onChangeColor={this.changeColorHandeler} />
                                })
                            }
                        </div>
                        <div className="note-bts">
                            <button className="add" type="submit"><IoMdAdd /></button>
                            <button className="delete" onClick={this.clearInputValue} ><FaTrashCan/></button>
                        </div>
                    </div>
                </form>
                <div className="note-wrapper">
                    {
                        this.state.notes.length!==0 && (
                            this.state.notes.map(note=>{
                                return <Note key={note.id} {...note} onRemove={this.removeNote} />
                            })
                        )
                    }
                </div>
            </div>
        )
    }
}