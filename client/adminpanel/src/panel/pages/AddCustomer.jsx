import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import CustomerForm from "../pages/CustomerForm";
export default function AddCustomer() {
  return (
    <div className=" flex flex-col  items-start bg-blue-800 w-screen ">
      <Link
        to="/dashboard"
        className="flex justify-center items-center gap-2 ml-8 bg-white text-blue-700 hover:bg-blue-800 hover:text-white border hover:border-white cursor-pointer transition-all duration-300  w-36   font-bold mt-3 outline-none   px-2 py-3 rounded-lg"
      >
        <FaAngleLeft /> DashBoard
      </Link>
      <CustomerForm />
    </div>
  );
}
