import React ,{useState,useEffect} from 'react'
import "./MainEmail.css"
import { useParams } from 'react-router-dom'
import Users from '../../data/users'
import email from '../../data/email'

export default function MainEmail() {
    let {id}=useParams()
    const [mainUSer,setMainUser]=useState({})
    const [mainEmail,setMainEmail]=useState({})
    let findUser=null
    useEffect(()=>{
        setMainEmail(()=>{
            return email.find(item=>item.id === +id)
        })
    },[])
    useEffect(()=>{
        findUser=Users.find(user=>user.id===mainEmail.userID)
        setMainUser(findUser)
    },[mainEmail])
  return (
    <div className="main-email">
        <h2 className="main-email__title">محتوای ایمیل</h2>
    </div>
  )
}
