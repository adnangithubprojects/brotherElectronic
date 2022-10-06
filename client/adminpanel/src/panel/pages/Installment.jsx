import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signin, authenticate } from "../auth";

// import "./../CSS/signin.css";
const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    redirectToReferrer: false,
  });
  const { email, password, loading, error, redirectToReferrer } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        authenticate(data, () => {
          setValues({
            ...values,
            redirectToReferrer: true,
          });
        });
      }
    });
  };

  const SignUpForm = () => (
    <div className="signin__container">
      <div className="signin__form" id="login-intro-form">
        <div className="form">
          <h2 className="h2 text-white ">Login Form</h2>
          <form>
            <div className="">
              {/* <label className="text-white font-bold">Email</label> */}
              <input
                onChange={handleChange("email")}
                placeholder="Email"
                type="email"
                value={email}
              />
            </div>

            <div className="text-black">
              {/* <label className="text-white font-weight-bold">Password</label> */}
              <input
                onChange={handleChange("password")}
                type="password"
                placeholder="Password"
                value={password}
              />
            </div>
            <div>
              <button onClick={clickSubmit}>Login</button>
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

  return <SignUpForm />;
};

export default Signin;
