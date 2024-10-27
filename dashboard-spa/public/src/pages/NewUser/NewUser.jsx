import React ,{useState} from 'react'
import "./NewUser.css"
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import createUser from "./../../asset/lottie/createUser.json"
import Lottie from 'react-lottie';

export default function NewUser() {
  const [showPss,setShowPass]=useState(false)
  const [passType,setPassType]=useState("password")
  const showPassword=()=>{
    setShowPass((prev)=>!prev)
    setPassType((prev)=>{
      if(prev==="text"){
        return "password"
      }else{
        return "text"
      }
    })
  }
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: createUser,
    rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
    }
  }
  return (
    <div className='newuser'>
      <h2 className="newuser__title">افزودن کاربر جدید</h2>
      <div className="newuser-wrapper">
      <form action="" className="newuser__form">
        <div className="form-wrapper">
          <label htmlFor="" className="form-label">نام</label>
          <input type="text" />
        </div>
        <div className="form-wrapper">
          <label htmlFor="" className="form-label">نام خانوادگی</label>
          <input type="text" />
        </div>
        <div className="form-wrapper">
          <label htmlFor="" className="form-label">ایمیل</label>
          <input type="text" />
        </div>
        <div className="form-wrapper">
          <label htmlFor="" className="form-label">شماره تلفن</label>
          <input type="text" />
        </div>
        <div className="form-wrapper">
          <label htmlFor="" className="form-label">رمز عبور</label>
          <div className="newuser-pass">
          {
            showPss ? ( 
              <RemoveRedEyeOutlinedIcon onClick={()=>showPassword()} />
            ):(
              <VisibilityOffOutlinedIcon onClick={()=>showPassword()} />
            )
          }
          <input type={passType} className='password' />
          </div>
        </div>
        <button className="submit-form">افزودن</button>
      </form>
          <div className="lottie">
          <Lottie options={defaultOptions}  />
          </div>
      </div>
    </div>
  )
}
