import "./Social.css"
import React from "react"

export default class Social extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <span className="icon">
                <img src={this.props.icon} alt={this.props.name} />
            </span>
        )
    }
}