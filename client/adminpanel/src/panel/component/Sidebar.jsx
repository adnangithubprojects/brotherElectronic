import react, { useState } from "react";
// import { FaArrowLeft, FaInstagram } from "react-icons/fa";
import {
  FaHome,
  FaInstagram,
  FaUserAlt,
  FaUsers,
  FaUsersCog,
  FaArrowLeft,
  FaDownload,
} from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiUserCheck, BiUserPlus } from "react-icons/bi";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const user = localStorage.getItem("token");
  const [open, setOpen] = useState(false);

  return (
    <div>
      {user && (
        <div
          className={`${
            open ? "w-72" : "w-20"
          } p-5 pt-8 duration-300 bg-indigo-900 h-screen relative`}
        >
          <span
            className={`absolute top-9 -right-4 text-2xl py-1 px-1  cursor-pointer bg-white rounded-full  
        ${!open && "rotate-180 border-none"}`}
            onClick={() => setOpen(!open)}
          >
            <FaArrowLeft />
          </span>
          <div className={`flex gap-x-4 items-center`}>
            <span
              className={`text-4xl cursor-pointer duration-300  ${
                !open && "rotate-380"
              }`}
            >
              <FaInstagram />
            </span>
            <h1
              className={` text-white origin-left font-medium text-xl duration-300 ${
                !open && "scale-0 "
              }`}
            >
              Brothers Electronics
            </h1>
          </div>
          {/* <div
          className={`flex mt-4 justify-center items-center border-y-2 ${
            !open && "scale-0 mt-0 "
          }`}
        >
          <h1
            className={`py-3  text-white origin-left font-medium text-xl duration-300 ${
              !open && "scale-0 "
            }`}
          >
            Adnan Ahmad
          </h1>
        </div> */}
          <ul className="pt-5">
            <NavLink to="/dashboard">
              <li
                className={`text-gray-300 flex text-sm items-center gap-x-2 cursor-pointer p-2 hover:bg-indigo-700 
                     
                    `}
              >
                <span className={`text-2xl cursor-pointer duration-300 `}>
                  <FaHome />
                </span>
                <span
                  className={`${!open && "hidden"} duration-200 origin-left`}
                >
                  Dashboard
                </span>
              </li>
            </NavLink>
            <NavLink to="/AllCustomer">
              <li
                className={`text-gray-300 flex text-sm items-center gap-x-2 cursor-pointer p-2 hover:bg-indigo-700`}
              >
                <span className={`text-2xl cursor-pointer duration-300 `}>
                  <FaUsers />
                </span>
                <span
                  className={`${!open && "hidden"} duration-200 origin-left`}
                >
                  All Customer
                </span>
              </li>
            </NavLink>
            <NavLink to="/ActiveCustomer">
              <li
                className={`text-gray-300 flex text-sm items-center gap-x-2 cursor-pointer p-2 hover:bg-indigo-700`}
              >
                <span className={`text-2xl cursor-pointer duration-300 `}>
                  <BiUserCheck />
                </span>
                <span
                  className={`${!open && "hidden"} duration-200 origin-left`}
                >
                  Active Customer
                </span>
              </li>
            </NavLink>
            <NavLink to="/PendingCustomer">
              <li
                className={`text-gray-300 flex text-sm items-center gap-x-2 cursor-pointer p-2 hover:bg-indigo-700`}
              >
                <span className={`text-2xl cursor-pointer duration-300 `}>
                  <FaUsersCog />
                </span>
                <span
                  className={`${!open && "hidden"} duration-200 origin-left`}
                >
                  Pending Customer
                </span>
              </li>
            </NavLink>
            <NavLink to="/downloadcustomer">
              <li
                className={`text-gray-300 flex text-sm items-center gap-x-2 cursor-pointer p-2 hover:bg-indigo-700`}
              >
                <span className={`text-2xl cursor-pointer duration-300 `}>
                  <FaDownload />
                </span>
                <span
                  className={`${!open && "hidden"} duration-200 origin-left`}
                >
                  Download Customer
                </span>
              </li>
            </NavLink>
            <NavLink to="/addustomer">
              <li
                className={`text-gray-300 flex text-sm items-center gap-x-2 cursor-pointer p-2 hover:bg-indigo-700`}
              >
                <span className={`text-2xl cursor-pointer duration-300 `}>
                  <BiUserPlus />
                </span>
                <span
                  className={`${!open && "hidden"} duration-200 origin-left`}
                >
                  Add Customer
                </span>
              </li>
            </NavLink>
            <NavLink to="/revenuemain">
              <li
                className={`text-gray-300 mt-5 flex text-sm items-center gap-x-2 cursor-pointer p-2 hover:bg-indigo-700`}
              >
                <span className={`text-2xl cursor-pointer duration-300 `}>
                  <MdProductionQuantityLimits />
                </span>
                <span
                  className={`${!open && "hidden"} duration-200 origin-left`}
                >
                  Revenue
                </span>
              </li>
            </NavLink>
            <NavLink to="/user">
              <li
                className={`text-gray-300 flex text-sm items-center gap-x-2 cursor-pointer p-2 hover:bg-indigo-700`}
              >
                <span className={`text-2xl cursor-pointer duration-300 `}>
                  <FaUserAlt />
                </span>
                <span
                  className={`${!open && "hidden"} duration-200 origin-left`}
                >
                  User
                </span>
              </li>
            </NavLink>
            <NavLink to="/" onClick={() => localStorage.removeItem("token")}>
              <li
                className={`text-gray-300 flex text-sm items-center gap-x-2 cursor-pointer p-2 hover:bg-indigo-700`}
              >
                <span className={`text-2xl cursor-pointer duration-300 `}>
                  <TbLogout />
                </span>
                <span
                  className={`${!open && "hidden"} duration-200 origin-left`}
                >
                  Logout
                </span>
              </li>
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
