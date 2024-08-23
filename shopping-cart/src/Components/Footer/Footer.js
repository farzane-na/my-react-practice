import "./Footer.css"
import React from "react"
import Social from "../Social/Social"

export default class Footer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            social:[
                {id:1,name:"instagram",icon:"./images/icons/instagram.png"},
                {id:2,name:"telegram",icon:"./images/icons/telegram.png"},
                {id:3,name:"linkedin",icon:"./images/icons/linkedin.png"},
            ]
        }
    }
    render(){
        return(
            <div className="footer">
                <p className="copy-right">2024. All reserved</p>
                <div className="social">
                    {
                        this.state.social.map(social=>{
                           return <Social key={social.id} {...social}></Social>
                        })
                    }
                </div>
            </div>
        )
    }
}