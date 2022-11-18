import react, { useEffect, useState } from "react";
// import { FaArrowLeft, FaInstagram } from "react-icons/fa";
import logo1 from "../assets/images/logo1.png";
import "../style/sidebar.css";
import {
  FaHome,
  FaInstagram,
  FaUserAlt,
  FaUsers,
  FaUsersCog,
  FaArrowLeft,
  FaDownload,
  FaBars,
  FaTimes,
  FaReceipt,
} from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiUserCheck, BiUserPlus } from "react-icons/bi";
import { NavLink, useNavigate } from "react-router-dom";
// import { decode } from "decode";

function Sidebar() {
  const user = localStorage.getItem("token");
  const [open, setOpen] = useState(true);
  const [icon, setIcon] = useState(false);
  const refer = useNavigate();
  useEffect(() => {
    const set = setTimeout(() => {
      localStorage.removeItem("token");
      refer("/");
    }, 43200000);
    return () => clearTimeout(set);
    // const token = user?.token;
    // if (token) {
    //   const decodeToken = decode(token);
    //   if (decodeToken.exp * 1000 < new Date().getTime()) {
    //     refer("/");
    //   }
    // }
  }, []);

  return (
    <div>
      {user && (
        <div className={`${open ? " md:w-72" : "md:w-20"}  sidebar`}>
          <div className={`flex justify-around  w-full ${!open && "md:ml-8"}`}>
            <span
              className={`hidden  md:flex sidebar__icon ${
                !open && "rotate-180 border-none"
              }`}
              onClick={() => setOpen(!open)}
            >
              <FaArrowLeft />
            </span>
            <div className={`flex gap-x-4 items-center`}>
              {/* <FaDownload className="hidden" /> */}

              <img
                src={logo1}
                alt="logoImage"
                className={`w-10 h-10 cursor-pointer duration-300 ${
                  !open && "rotate-380"
                }`}
              />
              <h1
                className={` text-white origin-left font-medium text-lg md:text-xl duration-300 ${
                  !open && "md:scale-0 "
                }`}
              >
                Brothers Electronics
              </h1>
            </div>

            <div
              className="md:hidden flex border border-gray-200 text-white border-opacity-20 p-3 rounded-md text-xl"
              onClick={() => setIcon(!icon)}
            >
              {!icon ? <FaBars /> : <FaTimes />}
            </div>
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
          <ul
            className={`pt-5 ${icon ? "NavUnActive" : "NavActive"}`}
            onClick={() => setIcon(!icon)}
          >
            <NavLink to="/dashboard">
              <li className={`sidebar__items`}>
                <span className={`text-2xl cursor-pointer duration-300 `}>
                  <FaHome />
                </span>
                <span
                  className={`${!open && "md:hidden"} duration-200 origin-left`}
                >
                  Dashboard
                </span>
              </li>
            </NavLink>
            <NavLink to="/AllCustomer">
              <li className={`sidebar__items `}>
                <span className={`text-2xl cursor-pointer duration-300 `}>
                  <FaUsers />
                </span>
                <span
                  className={`${!open && "md:hidden"} duration-200 origin-left`}
                >
                  All Customer
                </span>
              </li>
            </NavLink>
            <NavLink to="/ActiveCustomer">
              <li className={`sidebar__items`}>
                <span className={`text-2xl cursor-pointer duration-300 `}>
                  <BiUserCheck />
                </span>
                <span
                  className={`${!open && "md:hidden"} duration-200 origin-left`}
                >
                  Active Customer
                </span>
              </li>
            </NavLink>
            <NavLink to="/PendingCustomer">
              <li className={`sidebar__items`}>
                <span className={`text-2xl cursor-pointer duration-300 `}>
                  <FaUsersCog />
                </span>
                <span
                  className={`${!open && "md:hidden"} duration-200 origin-left`}
                >
                  Pending Customer
                </span>
              </li>
            </NavLink>
            <NavLink to="/downloadcustomer">
              <li className={`sidebar__items`}>
                <span className={`text-2xl cursor-pointer duration-300 `}>
                  <FaDownload />
                </span>
                <span
                  className={`${!open && "md:hidden"} duration-200 origin-left`}
                >
                  Download Customer
                </span>
              </li>
            </NavLink>
            <NavLink to="/addcustomer">
              <li className={`sidebar__items`}>
                <span className={`text-2xl cursor-pointer duration-300 `}>
                  <BiUserPlus />
                </span>
                <span
                  className={`${!open && "md:hidden"} duration-200 origin-left`}
                >
                  Add Customer
                </span>
              </li>
            </NavLink>
            <NavLink to="/allreciept">
              <li className={`sidebar__items`}>
                <span className={`text-2xl cursor-pointer duration-300 `}>
                  <FaReceipt />
                </span>
                <span
                  className={`${!open && "md:hidden"} duration-200 origin-left`}
                >
                  All Reciept
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
                  className={`${!open && "md:hidden"} duration-200 origin-left`}
                >
                  Revenue
                </span>
              </li>
            </NavLink>
            {/* <NavLink to="/user">
              <li className={`sidebar__items`}>
                <span className={`text-2xl cursor-pointer duration-300 `}>
                  <FaUserAlt />
                </span>
                <span
                  className={`${!open && "md:hidden"} duration-200 origin-left`}
                >
                  User
                </span>
              </li>
            </NavLink> */}
            <NavLink to="/signup">
              <li className={`sidebar__items`}>
                <span className={`text-2xl cursor-pointer duration-300 `}>
                  <FaUserAlt />
                </span>
                <span
                  className={`${!open && "md:hidden"} duration-200 origin-left`}
                >
                  Register
                </span>
              </li>
            </NavLink>
            <NavLink to="/" onClick={() => localStorage.removeItem("token")}>
              <li className={`sidebar__items`}>
                <span className={`text-2xl cursor-pointer duration-300 `}>
                  <TbLogout />
                </span>
                <span
                  className={`${!open && "md:hidden"} duration-200 origin-left`}
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
