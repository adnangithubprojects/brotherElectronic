import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Clinetform.css";
export default function Clientform() {
  const [user, setUser] = useState([]);
  const [note, setNote] = useState({
    name: "",
    fname: "",
    email: "",
    username: "",
    password: "",
  });

  function InputEvent(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setNote((prevData) => {
      return { ...prevData, [name]: value };
    });
  }
  function HandleForm() {
    setUser((prevData) => {
      return [...prevData, note];
    });
    setNote("");
  }

  return (
    <div className="clientform__container">
      <div className="clientform__main" id="clientform-form-intro2">
        <div className="form">
          <h2 className="text-white h2 ">clientform</h2>
          <form className="clientform__form">
            <div className="flex gap-2">
              <input
                // pattern="[a-zA-Z]"
                // onKeyDown={function (event) {
                //   if (/\d/g.test(event.key)) event.preventDefault();
                // }}
                placeholder="Name"
                type="text"
                value={note.name}
                onChange={InputEvent}
              />
              <input
                // pattern="[a-zA-Z]"
                // onKeyDown={function (event) {
                //   if (/\d/g.test(event.key)) event.preventDefault();
                // }}
                placeholder="fName"
                type="text"
                value={note.fname}
                onChange={InputEvent}
              />
            </div>

            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                value={note.email}
                onChange={InputEvent}
              />
              <input
                type="text"
                placeholder="Username"
                value={note.username}
                onChange={InputEvent}
              />
            </div>

            <div className="flex flex-col">
              <input
                type="password"
                placeholder="Password"
                value={note.password}
                onChange={InputEvent}
              />
            </div>
            {/* <div className="flex flex-col">
              <input type="password" placeholder="Password again" />
            </div> */}
            <button onClick={HandleForm} className="clientform__btn">
              Submit
            </button>
            <div className="text-center py-3 my-2">
              <span className="text-white">
                Already have an Account ? &nbsp;
              </span>
              {/* <Link to="#" className="text-white"> */}
              Submit
              {/* </Link> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
