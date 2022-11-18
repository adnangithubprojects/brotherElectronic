import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { customer } from "../assets/data/config";
import { useReactToPrint } from "react-to-print";
import "../style/downloadCustomer.css";
import { base_url } from "../assets/data/config";
export default function DownlaodCustomer() {
  const [data, setData] = useState([]);

  const componentRef = useRef();
  const onPrint = useReactToPrint({
    content: () => componentRef.current,
    ducomentTitle: "epm-daata",
    onafterprint: () => alert("print successfull"),
  });

  const pageStyle = `
  @page {
    size: 80mm 50mm;
  }

  @media all {
    .pagebreak {
      display: none;
    }
  }

  @media print {
    .pagebreak {
      page-break-before: always;
    }
  }
`;

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
          className=" border-t border-x text-sm   w-full mx-7   "
          ref={componentRef}
        >
          <thead className="thead ">
            <th className="thead__th thead__th1">AccNo</th>
            <th className="thead__th thead__th2  ">Name</th>
            <th className="thead__th thead__th3  ">Mobile No</th>
            <th className="thead__th thead__th2  ">Recieving Date</th>
            <th className="thead__th thead__th2  ">Installment</th>
            <th className="thead__th thead__th2  ">Remaining Installment</th>
            <th className="thead__th thead__th2  ">
              Recovery Officer Signature
            </th>
            <th className="thead__th thead__th2  ">Mannager Signature</th>
          </thead>
          <tbody className="tbody ">
            {customer.map((data, index) => {
              return (
                <tr className={`tbody__tr`} key={index}>
                  <td className="tbody__tr__td tbody__tr__td1">{index + 1}</td>
                  <td className={`tbody__tr__td tbody__tr__td2`}>
                    {/* {data.cutomerName} */}
                    {data.name}
                  </td>
                  <td className={`tbody__tr__td tbody__tr__td3`}>
                    0{data.cell}
                    {/* 0{data.custMobile1} */}
                  </td>
                  <td className={`tbody__tr__td tbody__tr__td2  `}></td>
                  <td className={`tbody__tr__td tbody__tr__td2  `}>
                    {/* {data.actInstall} */}
                  </td>
                  <td className={`tbody__tr__td tbody__tr__td2  `}>
                    {/* {data.custMobile1} */}
                  </td>
                  <td className={`tbody__tr__td tbody__tr__td2  `}></td>
                  <td className={`tbody__tr__td tbody__tr__td4  `}></td>
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
