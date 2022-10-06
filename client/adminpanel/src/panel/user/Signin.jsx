import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signin.css";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Signin() {
  const refer = useNavigate();
  const [message, setMessage] = useState(false);

  // form validation
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // const [user, setUser] = useState([]);
  const [note, setNote] = useState({
    email: "",
    password: "",
  });

  function InputEvent(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setNote((prevData) => {
      return { ...prevData, [name]: value };
    });
  }

  const signIn = async (a, e) => {
    e.preventDefault();
    const { email, password } = note;
    try {
      const res = await axios.post("http://localhost:9000/user/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      const data = await res.data;
      console.log(data.email, "new");
      if (data.email && data.password) {
        setMessage(false);
        refer("/dashboard");
      }
    } catch (error) {
      if (error.response.data.message) {
        setMessage(true);
      }
    }

    // const res = await fetch("http://localhost:9000/user/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email,
    //     password,
    //   }),
    // });
    // const data = await res.json();
    // console.log(data, "wajid");
    // if (data.email !== email && data.password !== password) {
    //   window.alert("Invalid credential");
    // } else {
    //   window.alert(" User Login");
    //   setNote({
    //     email: "",
    //     password: "",
    //   });
    // }
  };

  return (
    <div className="signin__container">
      <div className="signin__form" id="login-intro-form">
        <div className="form">
          <h2 className="h2 text-white ">Login Form</h2>
          <form>
            <div className="">
              <input
                {...register("email", {
                  required: "Email is required !",
                })}
                type="email"
                name="email"
                placeholder="Email"
                onChange={InputEvent}
                value={note.email}
              />
              <span className="text-sm text-red-500 font-bold">
                {errors.email?.message}
              </span>
            </div>

            <div className="text-black">
              <input
                {...register("password", {
                  required: "Password is required !",
                })}
                type="password"
                name="password"
                placeholder="Password"
                value={note.password}
                onChange={InputEvent}
              />
              <span className="text-sm text-red-500 font-bold">
                {errors.password?.message}
              </span>
            </div>
            {message ? (
              <span className="text-sm text-red-500 font-bold">
                Wrong Credentials
              </span>
            ) : (
              ""
            )}
            <div>
              <button onClick={handleSubmit(signIn)}>Login</button>
            </div>
          </form>
          <div className="text-center text-white">
            Don't have an account ?{" "}
            <Link to="/signup" className="font-bold  ">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
