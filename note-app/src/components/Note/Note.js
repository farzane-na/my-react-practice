import React from "react";
import "./Note.css"

export default class Note extends React.Component{
    constructor(props){
        super(props)
    }
    removeNoteHandeler(id){
        this.props.onRemove(id)
    }
    render(){
        return(
            <p className="note" onClick={this.removeNoteHandeler.bind(this,this.props.id)} style={{backgroundColor:this.props.color}}>{this.props.noteText}</p>
        )
    }
}