import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Signup.css";
import { base_url } from "../assets/data/config";
export default function Signup() {
  const refer = useNavigate();
  // form validation
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // storing data
  const [errorAlert, setErrorAlert] = useState("");
  const [note, setNote] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const token = localStorage.getItem("token");
  //data getting function from field
  function InputEvent(event) {
    const { name, value } = event.target;
    setNote((prevData) => {
      return { ...prevData, [name]: value };
    });
    // if (note.password !== note.confirmpassword) {
    //   setErrorAlert("password should be same");
    // } else {
    //   setErrorAlert("");
    // }
  }

  //sending data to database functionality
  const createUser = async (e) => {
    // e.preventDefault();
    const { name, email, password, confirmpassword } = note;
    // if (
    //   name !== "" &&
    //   email !== "" &&
    //   password !== "" &&
    //   confirmpassword !== ""
    // ) {
    if (password === confirmpassword) {
      {
        const res = await fetch(`${base_url}/user/post`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token: token,
          },
          body: JSON.stringify({
            name,
            email,
            password,
            confirmpassword,
          }),
        });
        const data = await res.json();
        console.log("error ", data);
        if (!data) {
          window.alert("Invalid Registeration");
        } else {
          window.alert(" Registration Successfull");
          setNote({
            name: "",
            email: "",
            password: "",
            confirmpassword: "",
          });
          refer("/");
        }
      }
    } else {
      setErrorAlert("Password should be same!");
    }
    // } else window.alert("all field must be filled");
  };
  // console.log(data);
  // console.log(note, "hallo");

  return (
    <div className="signup__container">
      <div className="signup__main" id="signup-form-intro2">
        <div className="form">
          <h2 className="text-white h2 flex ">Super User</h2>
          <form method="POST" className="signup__form">
            <div className="flex flex-col">
              <input
                {...register("name", {
                  required: "Name field should be filled",
                  minLength: {
                    value: 3,
                    message: "Name should be greater than 3 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "Name should be less than 20 characters",
                  },
                })}
                type="text"
                name="name"
                placeholder="Name"
                value={note.name}
                onChange={InputEvent}
              />
              <span className="text-sm text-red-500 font-bold">
                {errors.name?.message}
              </span>
            </div>

            <div className="flex flex-col">
              <input
                {...register("email", {
                  required: "email field should be filled",
                })}
                type="email"
                name="email"
                placeholder="Email or UserName"
                value={note.email}
                onChange={InputEvent}
              />
              <span className="text-sm text-red-500 font-bold">
                {errors.email?.message}
              </span>
            </div>
            <div className="flex flex-col">
              <input
                {...register("password", {
                  required: "password field should be filled",
                })}
                type="password"
                name="password"
                placeholder="Password"
                onChange={InputEvent}
                value={note.password}
              />
              <span className="text-sm text-red-500 font-bold">
                {errors.password?.message}
              </span>
            </div>

            <div className="flex flex-col">
              <input
                type="password"
                name="confirmpassword"
                placeholder="Confirm Password"
                onChange={InputEvent}
                value={note.confirmpassword}
              />
              <span className=" text-red-500 font-bold">{errorAlert}</span>
            </div>
            <button onClick={handleSubmit(createUser)} className="signup__btn">
              Submit
            </button>
            <div className="text-center py-2 my-1">
              <span className="text-white">
                Already have an Account ? &nbsp;
              </span>
              <Link to="/" className="text-white font-bold">
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
