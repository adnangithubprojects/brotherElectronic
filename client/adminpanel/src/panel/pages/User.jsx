import React, { useState } from "react";
import { FaAngleDown, FaTimes } from "react-icons/fa";
import "../style/user.css";
import UserDetail from "./UserDetail";
export default function User() {
  const [show, setShow] = useState(true);

  return (
    <>
      <div className="w-[1060px]  h-[625px] flex flex-col items-end px-1  gap-1 ">
        <div className="pt-6">
          <button
            className="w-28 h-12 rounded transition-all duration-300 hover:bg-blue-900 hover:text-white font-bold bg-white text-black border border-blue-900"
            onClick={() => setShow(!show)}
          >
            Add User
          </button>
        </div>
        <div className="bg-red-500 w-[1024] h-auto overflow-hidden">
          <UserDetail />
        </div>

        <div className={`${!show ? "PopUp" : ""} `}>
          {!show ? <Form show={show} setShow={setShow} /> : ""}
        </div>
      </div>
    </>
  );
}

function Form({ show, setShow }) {
  const [icon, setIcon] = useState(false);
  // const [user, setUser] = useState([]);
  const [note, setNote] = useState({
    name: "",
    username: "",
    email: "",
    number: "",
    password: "",
    confirmpassword: "",
    role: "",
  });
  // InputEvent function or getting value from field

  function InputEvent(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setNote((prevData) => {
      return { ...prevData, [name]: value };
    });
  }
  // function HandleForm(e) {
  //   e.preventDefault();
  //   setUser((prevData) => {
  //     return [...prevData, note];
  //   });
  // }

  const HandleForm = async (e) => {
    e.preventDefault();
    const { name, username, number, email, password, confirmpassword, role } =
      note;
    console.log(note);

    const res = await fetch("http://localhost:9000/userdata/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        username,
        number,
        email,
        password,
        confirmpassword,
        role,
      }),
    });
    const data = await res.json();

    if (!data) {
      window.alert("Invalid Registeration");
    } else {
      window.alert(" User Created Successfully");
      setNote({
        name: "",
        username: "",
        email: "",
        number: "",
        password: "",
        confirmpassword: "",
        role: "",
      });
    }
    setIcon(!icon);
  };

  return (
    <>
      <div className="Container">
        <div className="FormContainer">
          <h2 className="text-white  capitalize text-2xl ">User form</h2>
          <FaTimes
            className="absolute top-5 right-5 text-3xl hover:animate-bounce "
            onClick={() => setShow(!show)}
          />
          <form action="post" method="POST" className="UserForm">
            <div className="child">
              <input
                type="text"
                name="name"
                placeholder="fullname"
                required
                value={note.name}
                onChange={InputEvent}
              />
              <input
                type="text"
                name="username"
                placeholder="username"
                required
                value={note.username}
                onChange={InputEvent}
              />
            </div>
            <div className="child">
              <input
                type="email"
                name="email"
                placeholder="email"
                required
                value={note.email}
                onChange={InputEvent}
              />
              <input
                type="number"
                name="number"
                placeholder="number"
                required
                value={note.number}
                onChange={InputEvent}
              />
            </div>
            <div className="child">
              <input
                type="password"
                name="password"
                placeholder="password"
                required
                value={note.password}
                onChange={InputEvent}
              />
              <input
                type="password"
                name="confirmpassword"
                placeholder="confirm password"
                required="password should be same"
                value={note.confirmpassword}
                onChange={InputEvent}
              />
            </div>
            <div className="child">
              <select
                onClick={() => setIcon(!icon)}
                name="role"
                value={note.role}
                onChange={InputEvent}
              >
                <option className="text-black"></option>
                <option className="text-black">Inquiry Officer</option>
                <option className="text-black">Reinquiry Officer</option>
                <option className="text-black">Audit Officer</option>
              </select>
              <FaAngleDown
                className={`absolute top-3 right-6 text-2xl ${
                  icon && "rotate-180"
                } `}
              />
            </div>
            <button onClick={HandleForm}>Submit</button>
            <div className="text-center py-3 my-2">
              <span className="text-white">
                Already have an Account ? &nbsp;
              </span>
              <span className="text-black font-bold hover:text-white ">
                Cancel
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
