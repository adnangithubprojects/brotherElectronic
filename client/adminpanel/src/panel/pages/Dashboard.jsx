import react, { useState } from "react";
import { FaFileInvoice } from "react-icons/fa";
import Chart from "react-apexcharts";
// import { FaArrowLeft, FaInstagram } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
import Counter from "../component/Counter";
// import { Menu } from "../assets/data/config";

const api1 = "https://dummy.restapiexample.com/api/v1/employees";

function Dashboard() {
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
  const [month, setMonth] = useState({
    colors: ["#2E93fA", "#FF9800"],
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993],
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
    <div className="flex flex-col justify-around bg-gray-100 w-full ">
      <div className="flex gap-4 px-3 w-full">
        <div className="border-2  w-[242px] h-[137px] flex justify-center items-center rounded-2xl shadow-2xl bg-white relative">
          <span className="absolute -top-7 left-5 text-5xl bg-indigo-900 text-gray-300 py-2 rounded-lg shadow-2xl">
            <FaFileInvoice />
          </span>

          <div className="flex flex-col  justify-center items-center">
            <p className="font-bold text-3xl ">
              <Counter end={300} />
            </p>
            <p className="text-3xl ">User</p>
          </div>
        </div>
        <div className="border  w-[242px] h-[137px] flex justify-center items-center rounded-2xl shadow-2xl bg-white relative">
          <span className="absolute -top-7 left-5 text-5xl bg-indigo-900 text-gray-300 py-2 rounded-lg shadow-2xl">
            <FaFileInvoice />
          </span>

          <div className="flex flex-col  justify-center items-center">
            <p className="font-bold text-3xl ">
              {" "}
              <Counter end={600} />
            </p>
            <p className="text-2xl ">All Customer</p>
          </div>
        </div>
        <div className="border-2  w-[242px] h-[137px] flex justify-center items-center rounded-2xl shadow-2xl bg-white relative">
          <span className="absolute -top-7 left-5 text-6xl bg-indigo-900 text-gray-300 py-2 rounded-lg shadow-2xl">
            <FaFileInvoice />
          </span>

          <div className="flex flex-col  justify-center items-center">
            <p className="font-bold text-3xl ">
              {" "}
              <Counter end={400} />
            </p>
            <p className="text-2xl ">Active Customer</p>
          </div>
        </div>
        <div className="border-2  w-[242px] h-[137px] flex justify-center items-center rounded-2xl shadow-2xl bg-white relative">
          <span className="absolute -top-7 left-5 text-6xl bg-indigo-900 text-gray-300 py-2 rounded-lg shadow-2xl">
            <FaFileInvoice />
          </span>

          <div className="flex flex-col  justify-center items-center">
            <p className="font-bold text-3xl ">
              {" "}
              <Counter end={200} />
            </p>
            <p className="text-2xl ">Pending Customer</p>
          </div>
        </div>
      </div>
      <div className="flex gap-4 px-3  ">
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
        {/* <Chart
          options={state.options}
          series={state.series}
          type="donut"
          width="300"
        /> */}
      </div>
    </div>
  );
}

export default Dashboard;
