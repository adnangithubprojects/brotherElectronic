import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const user = localStorage.getItem("token");
console.log(user, "userdata");
const Child = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const enter = setTimeout(() => {
      navigate("/");
    }, 0);
    return () => clearInterval(enter);
  }, [navigate]);
};
const RouteProtection = ({ children }) => {
  //   const { user } = useSelector((state) => ({ ...state.UserSlice }));
  return <div>{user ? children : <Child />}</div>;
};

export default RouteProtection;
