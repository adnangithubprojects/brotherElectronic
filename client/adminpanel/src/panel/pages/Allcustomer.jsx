import React, { useEffect, useState } from "react";
import { FaEdit, FaFileInvoice, FaTimes, FaTrashAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { base_url, customer } from "../assets/data/config";
// import { user } from "./CustomerForm";
import "../style/customer.css";
import axios from "axios";
export default function Allcustomer() {
  const [Search, setSearch] = useState("");
  const [data, setData] = useState([]);

  function onDelete(Sno) {
    setData(data.filter((it) => it.Sno !== Sno));
  }
  function abc(opt) {
    const updateData = customer.filter((it) => {
      return it.status === opt;
    });
    setData(updateData);

    // 2nd method
    // setData(
    //   customer.filter((it) => {
    //     return it.check == "Active";
    //   })
    // );

    // 3rd method
    // if (opt == "Active") {
    //   setData(customer.filter((it) => it.status == opt));
    // }
  }

  const customerData = async () => {
    const res = await axios.get(`${base_url}/customer/get`);
    const req = await res.data.result;
    setData(req);
  };

  useEffect(() => {
    // abc("Active");
    customerData();
  }, []);

  return (
    <div className="flex flex-col gap-1 w-screen items-center  ">
      {/* <Fetching /> */}
      <div className="scroll w-full py-4">
        <input
          type="text"
          placeholder="Search"
          value={Search}
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none py-2 rounded mt-1 px-3"
        />
        <h1 className="text-2xl font-bold text-white  py-2 ">All Customer</h1>
        <table
          className="border-[1px] md:border-none md:border-t-2 border-cyan-200 text-xs md:text-base w-[300px] sm:w-[400px] md:w-full "
          id="ad"
        >
          <tbody className="text-white text-center">
            <tr className="flex justify-between  md:justify-evenly gap-x-5 bg-cyan-800 py-2 ">
              <td className="text-center w-8 md:w-32 ">S:No</td>
              <td className="text-center w-10  md:w-32  md:pr-4 ">Name</td>
              <td className=" md:text-right w-20 md:w-32  md:pr-14 ">cell</td>
              <td className="md:text-right w-12 md:w-32  md:pr-6 ">status</td>
            </tr>
            {data.map((data, index) => {
              return (
                <tr
                  className="flex justify-between  md:justify-around bg-cyan-800 cursor-pointer py-2 border-t hover:bg-cyan-700"
                  key={index}
                >
                  <td className="w-8 md:w-28 ">{index + 1} </td>
                  <td className="text-center w-20 md:w-28 ">
                    {data.cutomerName}
                  </td>
                  <td className="text-center h-[20px] md:h-8 w-20  md:w-28 ">
                    0{data.custMobile1}
                  </td>
                  <td
                    className={`text-center h-[20px] md:h-8  w-12 md:w-28 ${
                      data.custstatus === "Pending"
                        ? "bg-red-500 rounded "
                        : "bg-green-500 rounded"
                    }`}
                  >
                    {data.custstatus}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// cutomerName: "",
//     custFName: "",
//     resedential: "",
//     occupation: "",
//     custMobile1: "",
//     custMobile2: "",
//     custCnic: "",
//     custhomeAddress: "",
//     custofficeAddres: "",
//     status: "",

function Fetching() {
  const url = "https://api.github.com/users";
  const [Search, setSearch] = useState("");
  const [data, setdata] = useState([]);
  async function GetApi() {
    const req = await fetch(url);
    const res = await req.json();
    setdata(res);
  }
  console.log(data);
  useEffect(() => {
    GetApi();
  }, []);
  return (
    <>
      <input
        type="text"
        placeholder="search "
        value={Search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex flex-wrap  gap-8">
        {data
          .filter((fil) => {
            if (Search == "") {
              return fil;
            } else if (
              fil.login.toLocaleLowerCase().includes(Search.toLocaleLowerCase())
            ) {
              return fil.login;
            }
          })
          .map((it, pos) => {
            return (
              <>
                <div className="h-96 w-[400px] border-2" key={pos.id}>
                  <div></div>
                  <div className="flex gap-4 border-2 w-32 h-24">
                    <div>
                      <img
                        src={it.avatar_url}
                        alt="error"
                        className="rounded-full w-10 h-10"
                      />
                    </div>
                    <div>
                      <p>{it.login}</p>
                      <p>{it.login}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}
