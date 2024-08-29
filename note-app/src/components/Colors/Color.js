import React from "react";
import "./Color.css"

export default class Color extends React.Component{
    constructor(props){
        super(props)
    }
    changeColor(color){
        this.props.onChangeColor(color)
    }
    render(){
        return (
            <div className="color" style={{backgroundColor:this.props.color}} onClick={this.changeColor.bind(this,this.props.color)}>
                
            </div>
        )
    }
}