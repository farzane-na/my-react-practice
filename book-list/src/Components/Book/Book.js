import "./Book.css"
import React from "react"

export default class Book extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <tr>
                <td>{this.props.title}</td>
                <td>{this.props.author}</td>
                <td>{this.props.year}</td>
            </tr>
        )
    }
}