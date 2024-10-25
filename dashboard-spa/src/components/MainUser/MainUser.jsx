import React, { useState, useEffect } from "react";
import "./MainUser.css";
import Users from "../../data/users";
import { useParams } from "react-router-dom";

let MainUserObj = null;

export default function MainUser() {
  const { id } = useParams();

  const [MainUser, setMainUser] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image,setImage]=useState("")

  useEffect(() => {
    MainUserObj = Users.filter((user) => user.id == id);
    setMainUser(MainUserObj[0]);
    setFirstName(MainUserObj[0].firstName);
    setLastName(MainUserObj[0].lastName);
    setAge(MainUserObj[0].age);
    setEmail(MainUserObj[0].email);
    setPhone(MainUserObj[0].phone);
    setImage(MainUserObj[0].image)
  },[]);

  const changeFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const changeLAstName = (event) => {
    setLastName(event.target.value);
  };
  const changeAge = (event) => {
    setAge(event.target.value);
  };
  const changeEmail = (event) => {
    setEmail(event.target.value);
  };
  const changePhone = (event) => {
    setPhone(event.target.value);
  };
  const submitForm = (event) => {
    event.preventDefault();
    setMainUser((prev) => ({
      ...prev,
      firstName,
      lastName,
      age,
      email,
      phone,
    }));
  };
  return (
    <div className="main-user">
      <h2 className="main-user__title">پنل کاربری</h2>
      <div className="main-user__wrapper">
        <div className="main-user__image">
          <img src={image} />
        </div>
        <form
          className="main-user__property"
          onSubmit={(event) => submitForm(event)}
        >
          <input
            type="text"
            className="main-user__firstName"
            value={firstName}
            onChange={(event) => changeFirstName(event)}
          />
          <input
            type="text"
            className="main-lastName"
            value={lastName}
            onChange={(event) => changeLAstName(event)}
          />
          <input
            type="text"
            className="main-age"
            value={age}
            onChange={(event) => changeAge(event)}
          />
          <input
            type="text"
            className="main-email"
            value={email}
            onChange={(event) => changeEmail(event)}
          />
          <input
            type="text"
            className="main-phone"
            value={phone}
            onChange={(event) => changePhone(event)}
          />
          <div className="submit-edit">
            <button>ویرایش</button>
          </div>
        </form>
      </div>
    </div>
  );
}
