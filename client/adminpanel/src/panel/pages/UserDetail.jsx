import React, { useEffect, useRef, useState } from "react";
import { FaAngleDown, FaEdit, FaTimes, FaTrashAlt } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
import "../style/user.css";
import axios from "axios";
import DeleteBox from "../component/DeleteBox";
import { base_url } from "../assets/data/config";
export default function UserDetail() {
  const [show, setShow] = useState(true);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const [confirm, setConfirm] = useState(false);

  const [dialog, setDialog] = useState(false);
  const confirmId = useRef();
  const message = "Are you sure you want to Delete User!";
  function onDelete(id) {
    setDialog(true);
    confirmId.current = id;
  }
  async function confirmDelete(choose) {
    if (choose) {
      const res = await axios.delete(
        `${base_url}/userdata/${confirmId.current}`
      );
      // setData(data.filter((it) => it.Sno !== confirmId.current));
      setDialog(!dialog);
      reload();
    } else {
      setDialog(false);
    }
  }

  // function onDelete(Sno) {
  // setData(data.filter((it) => it.Sno !== Sno));
  // }

  const reload = async () => {
    const res = await axios.get(`${base_url}/userdata/get`);
    const req = await res.data.result;
    setData(req);
  };
  console.log(data.length);

  useEffect(() => {
    reload();
  }, []);

  // const onDelete =  (id) => {

  // };

  const selectUser = async (data) => {
    setUser(data);
    console.log("heloo", user);
  };
  return (
    <div className="w-full h-full">
      <div className="scroll1 py-3">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none py-2 rounded mt-1 px-3"
        />
        <h1 className="text-2xl text-white  py-2 ">All User</h1>
        <table className=" border-t-2 border-cyan-200  w-full ">
          <tbody className="text-white text-center">
            <tr className="flex  justify-evenly gap-x-5 bg-cyan-800 py-2 ">
              <td className="text-center w-32 ">S:No</td>
              <td className="text-center w-32  pl-5 ">Name</td>
              <td className="text-right w-32  pr-3 ">username</td>
              <td className="text-right w-32  pr-3 ">email</td>
              <td className="text-right w-32  pr-8 ">cell</td>
              <td className="text-right w-32  pr-6 ">role</td>
              <td className="text-right w-32  pr-9">edit</td>
            </tr>
            {data
              .filter((fil) => {
                if (search === "") {
                  return fil;
                } else if (
                  fil.name
                    .toLocaleLowerCase()
                    .includes(search.toLocaleLowerCase())
                ) {
                  return fil.name;
                }
              })
              .map((data, index) => {
                return (
                  <tr
                    className="flex justify-around bg-cyan-800 cursor-pointer py-2 border-t hover:bg-cyan-700"
                    key={index}
                  >
                    <td className="text-center w-28 "> {index + 1}</td>
                    <td className="text-center w-28 ">{data.name}</td>
                    <td className="text-center w-28 ">{data.username}</td>
                    <td className="text-center w-28 ">{data.email}</td>
                    <td className="text-center w-28 ">{data.number}</td>
                    <td className="text-center w-32 ">{data.role}</td>
                    <td className=" flex gap-2">
                      <span className="p-2 text-sm border rounded-full bg-green-600 hover:text-green-700 hover:bg-white transition-all duration-300">
                        <FaEdit
                          onClick={() => {
                            setShow(!show);
                            selectUser(data);
                          }}
                        />
                      </span>

                      <span className="p-2 text-sm border rounded-full bg-rose-600 hover:text-red-600 hover:bg-white transition-all duration-300">
                        <FaTrashAlt
                          onClick={() => {
                            onDelete(data._id);
                          }}
                        />
                      </span>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      {dialog ? (
        <DeleteBox confirmDelete={confirmDelete} message={message} />
      ) : (
        ""
      )}

      <div className={`${!show ? "PopUp" : ""} `}>
        {!show ? <Form show={show} setShow={setShow} user={user} /> : ""}
      </div>
    </div>
  );
}

function Form({ show, setShow, user }) {
  const [icon, setIcon] = useState(false);
  const [note, setNote] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
    number: "",
    password: "",
    confirmpassword: "",
    role: "",
  });

  useEffect(() => {
    setNote({
      id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
      number: user.number,
      password: user.password,
      confirmpassword: user.password,
      role: user.role,
    });
  }, []);

  // InputEvent function or getting value from field
  function InputEvent(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setNote((prevData) => {
      return { ...prevData, [name]: value };
    });
  }

  const updateUser = async (e) => {
    e.preventDefault();
    const {
      name,
      username,
      number,
      email,
      password,
      confirmpassword,
      role,
      id,
    } = note;
    console.log(note);

    const res = await fetch(`${base_url}/userdata/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
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
      window.alert(" Updated Successfully!");
      setNote({
        name: "",
        username: "",
        email: "",
        number: "",
        password: "",
        confirmpassword: "",
        role: "",
      });
      setIcon(!icon);
    }
  };

  return (
    <>
      <div className="Container">
        <div className="FormContainer">
          <h2 className="text-white  capitalize text-2xl ">User Update Form</h2>
          <FaTimes
            className="absolute top-5 right-5 text-3xl hover:animate-bounce "
            onClick={() => setShow(!show)}
          />
          <form action="post" method="PUT" className="UserForm">
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
            <button onClick={updateUser}>Update</button>
          </form>
        </div>
      </div>
    </>
  );
}
