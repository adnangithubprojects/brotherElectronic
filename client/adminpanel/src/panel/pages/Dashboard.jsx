import react, { useEffect, useState } from "react";
import { FaUsers, FaUsersCog, FaUserTie } from "react-icons/fa";
import Chart from "react-apexcharts";
// import { FaArrowLeft, FaInstagram } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
import Counter from "../component/Counter";
import { BiUserCheck } from "react-icons/bi";
import axios from "axios";
import { base_url } from "../assets/data/config";
// import { Menu } from "../assets/data/config";
import "../style/dashbaord.css";
const api1 = "https://dummy.restapiexample.com/api/v1/employees";

function Dashboard() {
  const [active, setActive] = useState();
  const [allCustomer, setAllCustomer] = useState();
  const [pending, setPending] = useState();
  const [user, setUser] = useState(0);
  const token = localStorage.getItem("token");
  console.log(token, "dashbaoard");
  const customerData = async (opt1, opt2) => {
    try {
      const res = await axios.get(`${base_url}/customer/get`, {
        headers: {
          token: token,
        },
      });
      const req = await res.data.result;
      setAllCustomer(req.length);
      const updateActive = await req.filter((data) => data.custstatus === opt1);
      setActive(updateActive.length);
      const updatePending = await req.filter(
        (data) => data.custstatus === opt2
      );
      setPending(updatePending.length);

      // console.log(active, "activelength");
      // console.log(pending, "pendinglength");
      // console.log(allCustomer, "allCustomerlength");
    } catch (error) {
      console.log(error, "error");
    }
  };
  const userData = async () => {
    try {
      const res = await axios.get(`${base_url}/userdata/get`, {
        headers: {
          token: "key",
        },
      });
      const req = await res.data.result;
      // setUser(req.length);
      setUser(1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    customerData("Active", "Pending");
    userData();
  }, []);
  // Charts
  const [state, setstate] = useState({
    colors: ["#2E93fA", "#FF9800"],
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });
  // area
  // line
  // bar
  // histogram
  // radar
  // heatmap
  // scatter
  return (
    <div className="Dashbaord">
      <div className="flex gap-14 items-center flex-col md:flex-row  px-3 justify-evenly ">
        <div className="border-2  w-[242px] h-[137px] flex justify-center items-center rounded-2xl shadow-2xl bg-white relative">
          <span className="absolute -top-10 left-5 text-5xl text-gray-700 py-2 rounded-lg shadow-2xl">
            <FaUserTie />
          </span>

          <div className="flex flex-col  justify-center items-center">
            <p className="font-bold text-3xl ">
              <Counter end={user} />
            </p>
            <p className="text-3xl ">User</p>
          </div>
        </div>
        <div className="border  w-[242px] h-[137px] flex justify-center items-center rounded-2xl shadow-2xl bg-white relative">
          <span className="absolute -top-10 left-5 text-6xl  text-gray-700 py-2 rounded-lg shadow-2xl">
            <FaUsers />
          </span>

          <div className="flex flex-col  justify-center items-center">
            <p className="font-bold text-3xl ">
              {" "}
              <Counter end={allCustomer} />
            </p>
            <p className="text-2xl ">All Customer</p>
          </div>
        </div>
      </div>
      <div className="flex gap-14 items-center flex-col md:flex-row px-3  justify-evenly">
        <div className="border-2  w-[242px] h-[137px] flex justify-center items-center rounded-2xl shadow-2xl bg-white relative">
          <span className="absolute -top-10 left-5 text-6xl text-gray-700 py-2 rounded-lg shadow-2xl">
            <BiUserCheck />
          </span>

          <div className="flex flex-col  justify-center items-center">
            <p className="font-bold text-3xl ">
              {" "}
              <Counter end={active} />
            </p>
            <p className="text-2xl ">Active Customer</p>
          </div>
        </div>
        <div className="border-2  w-[242px] h-[137px] flex justify-center items-center rounded-2xl shadow-2xl bg-white relative">
          <span className="absolute -top-10 left-5 text-6xl  text-gray-700 py-2 rounded-lg shadow-2xl">
            <FaUsersCog />
          </span>

          <div className="flex flex-col  justify-center items-center">
            <p className="font-bold text-3xl ">
              {" "}
              <Counter end={pending} />
            </p>
            <p className="text-2xl ">Pending Customer</p>
          </div>
        </div>
      </div>
      {/* <div className="flex gap-4 px-3  ">
        <div className="bg-pink-500 rounded p-5">
          <Chart
            options={month.options}
            series={month.series}
            type="bar"
            width="300"
          />
        </div>
        <div className="bg-green-500 rounded p-5">
          <Chart
            options={state.options}
            series={state.series}
            type="line"
            width="300"
          />
        </div>
        <div className="bg-gray-600 rounded p-5">
          <Chart
            options={state.options}
            series={state.series}
            type="area"
            width="300"
          />
        </div>
        <Chart
          options={state.options}
          series={state.series}
          type="donut"
          width="300"
        />
      </div> */}
    </div>
  );
}

export default Dashboard;
