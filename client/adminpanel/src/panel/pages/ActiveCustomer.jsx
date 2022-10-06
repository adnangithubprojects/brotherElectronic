import React, { useState } from "react";
import { FaAngleDown, FaTimes } from "react-icons/fa";
import "../style/user.css";
import ActiveDetail from "./ActiveDetail";
export default function ActiveCustomer() {
  // const [show, setShow] = useState(false);

  return (
    <>
      <div className="w-[1060px]  h-[625px]  flex flex-col items-end px-1 py-4 gap-1 ">
        {/* <div className="pt-6 pr-5">
          <button
            className="w-32 h-12 rounded transition-all duration-300 hover:bg-blue-900 hover:text-white font-bold bg-white text-black border border-blue-900"
            onClick={() => setShow(!show)}
          >
            Add Customer
          </button>
        </div> */}
        <div className="bg-cyan-800 w-[1024px] py-3 h-auto overflow-hidden">
          <ActiveDetail />
        </div>

        {/* <div className={`${!show ? "PopUp" : ""} `}>
          {show ? <CustomerForm show={show} setShow={setShow} /> : ""}
        </div> */}
      </div>
    </>
  );
}

function Form({ show, setShow }) {
  const [icon, setIcon] = useState(false);
  const [user, setUser] = useState([]);
  const [note, setNote] = useState({
    fullname: "dsf",
    username: "",
    email: "",
    number: "",
    password: "",
    repassword: "",
    selective: "",
  });
  // InputEvent function or getting value from field

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
  console.log(user);
  return (
    <>
      <div className="Container">
        <div className="FormContainer">
          <h2 className="text-white  capitalize text-2xl ">User form</h2>
          <FaTimes
            className="absolute top-5 right-5 text-3xl hover:animate-bounce "
            onClick={() => setShow(!show)}
          />
          <form action="post" className="UserForm">
            <div className="child">
              <input
                type="text"
                name="fullname"
                placeholder="fullname"
                required
                value={note.fullname}
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
                type="repassword"
                name="repassword"
                placeholder="confirm password"
                required
                value={note.repassword}
                onChange={InputEvent}
              />
            </div>
            <div className="child">
              <select onClick={() => setIcon(!icon)}>
                <option value="InquiryOfficer" className="text-black">
                  Inquiry Officer
                </option>
                <option value="ReinquiryOfficer" className="text-black">
                  Reinquiry Officer
                </option>
                <option value="AuditOfficer" className="text-black">
                  Audit Officer
                </option>
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
                Cancel.
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
