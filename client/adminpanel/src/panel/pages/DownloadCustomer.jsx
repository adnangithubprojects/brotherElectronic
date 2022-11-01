import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import "../style/customer.css";
import { base_url } from "../assets/data/config";
export default function DownlaodCustomer() {
  const [data, setData] = useState([]);

  const componentRef = useRef();
  const onPrint = useReactToPrint({
    content: () => componentRef.current,
    ducomentTitle: "epm-daata",
    onafterprint: () => alert("print succesfull"),
  });

  const customerData = async (opt) => {
    const res = await axios.get(`${base_url}/customer/get`);
    const req = await res.data.result;
    const updateData = await req.filter((data) => data.custstatus === opt);
    setData(updateData);
  };
  useEffect(() => {
    customerData("Active");
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center flex-col text-white bg-cyan-800 px-8">
      <h1 className="text-2xl text-white  py-2 ">Downlaod Customer</h1>
      <div className="DownlaodScroll scrollbar-hide">
        <table
          className=" border-t-2 text-sm border-cyan-200  w-full mx-7  "
          ref={componentRef}
        >
          <tbody className=" text-center  ">
            <tr className="flex items-center justify-between gap-x-5  py-1 ">
              <td className="flex items-center justify-center w-8 bg-red-500">
                S:No
              </td>
              <td className="flex items-center justify-center w-28">Name</td>
              <td className="flex items-center justify-center w-24">
                Mobile No
              </td>
              <td className="flex items-center justify-center w-28">
                Recovery Officer
              </td>
              <td className="flex items-center justify-center w-28">
                Installment
              </td>
              <td className="flex items-center justify-center w-28">
                Remaining Installment
              </td>
              <td className="flex items-center justify-center w-28">
                Customer Signature
              </td>
              <td className="flex items-center justify-center w-28">
                Officer Signature
              </td>
            </tr>
            {data.map((data, index) => {
              return (
                <tr
                  className={`flex justify-around  cursor-pointer h-9 border-t hover:bg-cyan-700 `}
                  key={index}
                >
                  <td className="flex items-center justify-center w-8  ">
                    {index + 1}
                  </td>
                  <td
                    className={`flex items-center justify-center  w-28 border-l`}
                  >
                    {data.cutomerName}
                  </td>
                  <td
                    className={`flex items-center justify-center  w-24 border-l`}
                  >
                    0{data.custMobile1}
                  </td>
                  <td
                    className={`flex items-center justify-center w-28 border-l`}
                  ></td>
                  <td
                    className={`flex items-center justify-center w-28 border-l`}
                  ></td>
                  <td
                    className={`flex items-center justify-center w-28 border-l`}
                  ></td>
                  <td
                    className={`flex items-center justify-center w-28 border-l`}
                  ></td>
                  <td
                    className={`flex items-center justify-center w-28 border-l`}
                  ></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <button
        onClick={onPrint}
        className="cursor-pointer transition-all duration-300 bg-blue-700 text-white   w-24 hover:bg-gray-400 hover:text-yellow-400 font-bold mt-3 outline-none border-none px-2 py-3 rounded-lg"
      >
        Print
      </button>
    </div>
  );
}
