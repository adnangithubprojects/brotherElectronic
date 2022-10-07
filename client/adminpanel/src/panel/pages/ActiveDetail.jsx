import React, { useEffect, useRef, useState } from "react";
import {
  FaCheckCircle,
  FaEdit,
  FaFileInvoice,
  FaTimes,
  FaTrashAlt,
} from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { customer } from "../assets/data/config";
import DeleteBox from "../component/DeleteBox";
import axios from "axios";
import "../style/user.css";
import { base_url } from "../assets/data/config";
export default function ActiveDetail() {
  const [Search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [dialog, setDialog] = useState(false);
  const confirmId = useRef();
  const message = "Are you sure you want to Delete Customer!";
  function onDelete(id) {
    setDialog(true);
    confirmId.current = id;
  }
  async function confirmDelete(choose) {
    if (choose) {
      try {
        const res = await axios.delete(
          `${base_url}/customer/${confirmId.current}`
        );
        // setData(data.filter((it) => it.Sno !== confirmId.current));
        setDialog(!dialog);
        window.alert("Customer Deleted");
        customerData("Active");
      } catch (error) {
        console.log(error);
      }
    } else {
      setDialog(false);
    }
  }

  // function abc(opt) {
  //   const updateData = customer.filter((it) => {
  //     return it.status === opt;
  //   });
  //   setData(updateData);
  // }

  // get data from backend
  const customerData = async (opt) => {
    const res = await axios.get(`${base_url}/customer/get`);
    const req = await res.data.result;
    const updateData = await req.filter((data) => data.custstatus === opt);
    setData(updateData);

    // updateData.map((data) => {
    //   const lastLength = data.installments.length;
    //   const secondLastLenght = lastLength - 1;
    //      const pastDate = new Date(data.installments
    //     .slice(secondLastLenght, lastLength)
    //     .map((installments, index) =>
    //       console.log("show data", installments.createdAt)
    //     ));
    // });
  };

  // const pastDate = new Date("2022-09-13T10:53:20.193Z"); //pastDate mean last index createdAt date
  // const currentDate = new Date();
  // const [previuosDate, setPreviuosDate] = useState("");
  // const [lateInstallment, setLateInstallment] = useState(false);
  // const abc = () => {
  // data.map((data) => {
  // const lastLength = data.installments.length;
  // const secondLastLenght = lastLength - 1;
  // data.installments
  //   .slice(secondLastLenght, lastLength)
  //   .map((installments, index) => {
  //     return setPreviuosDate(installments.createdAt);
  //   });
  // const pastDate = new Date(previuosDate);
  // const currentDate = new Date();
  // if (pastDate.getMonth() < currentDate.getMonth()) {
  //   setLateInstallment(false);
  // } else {
  //   setLateInstallment(true);
  // }
  // });

  //   }
  // };

  useEffect(() => {
    customerData("Active");
    // abc();
  }, []);

  return (
    <div className="w-full h-full">
      <div className="scroll1 ">
        <input
          type="text"
          placeholder="Search"
          value={Search}
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none py-2 rounded mt-1 px-3"
        />
        <h1 className="text-2xl text-white  py-2 ">Active Customer</h1>
        <table className=" border-t-2 border-cyan-200  w-full ">
          <tbody className="text-white text-center">
            <tr className="flex  justify-evenly gap-x-5 bg-cyan-800 py-2 ">
              <td className="text-center w-32 ">S:No</td>
              <td className="text-center w-32  pr-3 ">Name</td>
              <td className="text-right w-32  pr-10 ">F Name</td>
              <td className="text-right w-32  pr-12 ">cell</td>
              <td className="text-right w-32  pr-10">edit</td>
            </tr>
            {data
              .filter((fil) => {
                if (Search == "") {
                  return fil;
                } else if (
                  fil.cutomerName
                    .toLocaleLowerCase()
                    .includes(Search.toLocaleLowerCase())
                ) {
                  return fil.cutomerName;
                }
              })
              .map((data, index) => {
                // below code is about installment warning
                let lateInstallment = [];
                const lastLength = data.installments.length;
                const secondLastLenght = lastLength - 1;
                const currentDate = new Date();
                // console.log("length", data.installments);
                if (data.installments.length === 0) {
                  lateInstallment = true;
                  // console.log("workingfffffffffffffffffffffff");
                } else {
                  const previuosDate = data.installments[secondLastLenght].date; //here
                  const pastDate = new Date(previuosDate);
                  if (pastDate.getMonth() < currentDate.getMonth()) {
                    // console.log(secondLastLenght);
                    lateInstallment = true;
                  } else {
                    // console.log(secondLastLenght);
                    lateInstallment = false;
                  }
                }
                return (
                  <tr
                    className={`flex justify-around bg-cyan-800 cursor-pointer py-2 border-t hover:bg-cyan-700 `}
                    key={index}
                  >
                    <td className="text-center w-28 ">{index + 1}</td>
                    <td className={`text-center w-28 `}>{data.cutomerName}</td>
                    <td className={`text-center w-28  `}>{data.custFName}</td>

                    <td className={`text-center w-28  `}>
                      0{data.custMobile1}
                    </td>

                    <td className="w-28 flex gap-2">
                      {lateInstallment ? (
                        <span className="p-2 text-sm border rounded-full bg-[#ffc107] ">
                          <IoIosWarning />
                        </span>
                      ) : (
                        <span className="p-2 text-sm border rounded-full bg-green-700 ">
                          <FaCheckCircle />
                        </span>
                      )}
                      <span
                        onClick={() => {
                          onDelete(data._id);
                        }}
                        className="p-2 text-sm border rounded-full bg-rose-600 hover:text-red-600 hover:bg-white transition-all duration-300"
                      >
                        <FaTrashAlt />
                      </span>
                      <NavLink
                        to="/CustomerDetail"
                        state={data}
                        className="p-2 text-sm border rounded-full bg-orange-500 hover:text-orange-500 hover:bg-white transition-all duration-300"
                      >
                        <FaFileInvoice />
                      </NavLink>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      {dialog ? (
        <DeleteBox confirmDelete={confirmDelete} message={message} />
      ) : (
        ""
      )}
    </div>
  );
}
