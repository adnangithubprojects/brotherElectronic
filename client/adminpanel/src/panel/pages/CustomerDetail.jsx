import React, { useState } from "react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useLocation } from "react-router";
// import { installmentData } from "../assets/data/config";
import InstallmentForm from "../component/InstallmentForm";
import InvoiceCarasoul from "./InvoiceCarasoul";
import { Image } from "./InvoiceCarasoul";
import { useEffect } from "react";
import axios from "axios";
import { FaImage } from "react-icons/fa";
import { base_url } from "../assets/data/config";

export default function CustomerDetail() {
  const [carasoul, setCarasoul] = useState(false); //carasoul popUp state
  const [image, setImage] = useState(false); //Cnic popUp Image state
  const [show, setShow] = useState(false); //Installment  popUp state
  const [customerId, setCustomerId] = useState("");
  const [registeImages, setRegisteImages] = useState([]); //carsould images set state
  const [cnicImage, setCnicImage] = useState([]); //Cnic images set state
  const [installment, setInstallment] = useState([]);
  const { state } = useLocation(); //Rounting Data
  const componentRef = useRef(); //Print Dev Setting
  const onPrint = useReactToPrint({
    content: () => componentRef.current,
    ducomentTitle: "epm-daata",
    onafterprint: () => alert("print succesfull"),
  });
  // select Customer Id to add installment
  // const selectCustomerId = (data) => {
  //   setUser(data);
  //   console.log("heloo", user);
  // };
  const singleCustomerInstallment = async (id) => {
    try {
      const res = await axios.get(`${base_url}/single-customer/${state._id}`);
      setInstallment(res.data.result.installments);
      // console.log(res.data.result.installments, "hallo");
    } catch (error) {
      console.log(error, "singleCustomerInstallment");
    }
  };

  const currDate = new Date();
  let currentDate =
    currDate.getDate() +
    " / " +
    (currDate.getMonth() + 1) +
    " / " +
    currDate.getFullYear();
  let currentTime =
    currDate.getHours() +
    ":" +
    currDate.getMinutes() +
    ":" +
    currDate.getSeconds();

  //customer created date
  const today = new Date(state.updatedAt),
    date =
      today.getDate() +
      "/" +
      (today.getMonth() + 1) +
      "/" +
      today.getFullYear();
  useEffect(() => {
    singleCustomerInstallment();
  }, [show]);
  return (
    <div className="flex flex-col bg-blue-900 text-white py-5 overflow-scroll h-[625px] ml-6">
      <div
        className={`flex flex-col   h-[1650px] w-[1024px] py-3`}
        ref={componentRef}
      >
        <div className="flex flex-col items-center justify-center py-3 w-[1000px] mx-3   h-auto">
          <h1 className="text-2xl font-bold">Brother Electronics</h1>
          <h1 className="text-xl font-bold">Tehkal Bala Peshawar</h1>
          <h2 className="text-xl underline font-bold capitalize">
            Customer account information details
          </h2>
        </div>

        {/* Customer information table */}
        <div className="flex px-8 py-4 w-[1000px] justify-between mx-3   h-auto">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <div className="flex gap-1  items-center">
                <h3 className="w-[90px] font-bold underline">Print Date :</h3>
                <h4 className=" ">{currentDate}</h4>
              </div>
              <div className="flex gap-1  items-center">
                <h3 className="w-[90px] font-bold underline">Print Time :</h3>
                <h4 className=" ">{currentTime}</h4>
              </div>
            </div>
            <div className="flex gap-3  items-center">
              <h3 className="w-32 text-xl font-bold underline">Account No :</h3>
              <h4 className=" ">4578887</h4>
            </div>
            <div className="flex gap-3 items-center">
              <h3 className="w-32 text-xl font-bold underline">Cust Name :</h3>
              <h3 className=" ">
                {state?.cutomerName}
                {/* ali{" "} */}
              </h3>
            </div>
            <div className="flex gap-3 items-center">
              <h3 className="w-32 text-xl font-bold underline">F Name :</h3>
              <h3 className=" ">{state.custFName}</h3>
            </div>
            <div className="flex gap-3 items-center">
              <h3 className="w-32 text-xl font-bold underline">
                Residential :
              </h3>
              <h3 className="capitalize ">{state.resedential}</h3>
            </div>
            <div className="flex gap-3 items-center">
              <h3 className="w-32 text-xl font-bold underline">Occupation :</h3>
              <h3 className=" ">{state.occupation}</h3>
            </div>
            <div className="flex gap-3 items-center">
              <h3 className="w-32 text-xl font-bold underline">Rest Addr :</h3>
              <h3 className=" ">{state.custhomeAddress}</h3>
            </div>
            <div className="flex gap-3 items-center">
              <h3 className="w-32 text-xl font-bold underline">
                Office Addr :
              </h3>
              <h3 className=" ">{state.custofficeAddres}</h3>
            </div>
            <div className="flex gap-1 items-center">
              <h3 className="w-32 font-bold underline">Prev A/C:</h3>
              <h3 className=" ">99</h3>
            </div>
          </div>
          <div className="flex flex-col gap-5 justify-center">
            <div className="flex gap-1  items-center">
              <h3 className="w-10 text-sm font-bold underline">Date</h3>
              <h4 className=" ">{date}</h4>
            </div>
            <div className="flex gap-1  items-center">
              <h3 className="w-36 text-sm font-bold underline">
                Repeat as Customer :
              </h3>
              <h4 className=" ">7</h4>
            </div>
            <div className="flex gap-1  items-center">
              <h3 className="w-36 text-sm font-bold underline">
                Repeat as Gauranter :
              </h3>
              <h4 className=" ">8</h4>
            </div>
          </div>

          <div className="flex">
            <div className="border w-36 h-44  overflow-hidden "></div>
            <div className="border w-44 h-44 bg-cyan-400 overflow-hidden ">
              <img
                src={`${base_url}/${state.custImage}`}
                alt=""
                className="w-full h-full"
              />
              {/* {state.custImage} */}
            </div>
          </div>
        </div>

        {/* Product details table */}
        <div className="flex px-3 pt-1 w-[1000px]  justify-between mx-3 border border-black  h-auto">
          <div className="flex flex-col w-[320px]  ">
            <div className="flex gap-1  items-center">
              <h3 className="w-32 text-lg font-bold underline">Mobile 1 # :</h3>
              <h4 className=" ">{state?.custMobile1}</h4>
            </div>
            <div className="flex gap-1  items-center">
              <h3 className="w-32 text-lg font-bold underline">Mobile 2 # :</h3>
              <h4 className=" "> {state?.custMobile2}</h4>
            </div>
            <div className="flex gap-1  items-center">
              <h3 className="w-32 text-lg font-bold underline">CNIC # :</h3>
              <h4 className=" flex items-center gap-1">
                {state?.custCnic}
                <span
                  onClick={() => {
                    setImage(true);
                    setCnicImage(state?.custCnicImage);
                  }}
                  className="text-lg p-1 hover:text-gray-700 hover:bg-white rounded-md duration-300 cursor-pointer "
                >
                  <FaImage />
                </span>
              </h4>
            </div>
            <div className="flex gap-1  items-center">
              <h3 className="w-32 text-lg font-bold underline">Gender :</h3>
              <h4 className=" ">{state?.gender}</h4>
            </div>
            <div className="flex gap-1  items-center">
              <h3 className="w-32 text-lg font-bold underline">Inst Price :</h3>
              <h4 className=" ">{state?.instprice}</h4>
            </div>
            <div className="flex gap-1  items-center">
              <h3 className="w-32 text-lg font-bold underline">
                Act Install :
              </h3>
              <h4 className=" ">{state?.actInstall}</h4>
            </div>
            <div className="flex gap-1  items-center">
              <h3 className="w-32 text-lg font-bold underline">
                Act Advance :
              </h3>
              <h4 className=" ">{state?.actAdvance}</h4>
            </div>
            <div className="flex gap-1  items-center">
              <h3 className="w-32 text-lg font-bold underline">
                Advance Rev :
              </h3>
              <h4 className=" ">{state?.advanceRev}</h4>
            </div>
            <div className="flex gap-1  items-center">
              <h3 className="w-32 text-lg font-bold underline">Total Rev :</h3>
              <h4 className="flex justify-between w-48   ">
                {state?.totalRev} <span>100%</span>
              </h4>
            </div>
            <div className="flex gap-1  items-center">
              <h3 className="w-32 text-lg font-bold underline">Discount :</h3>
              <h4 className="flex justify-between w-full pl-10 px-4 ">
                {state?.discount} <span>0%</span>
              </h4>
            </div>
            <div className="flex gap-1  items-center">
              <h3 className="w-32 text-lg font-bold underline">Balance:</h3>
              <h4 className="flex justify-between  w-full pl-10 px-4 ">
                {state?.balance} <span>0%</span>
              </h4>
            </div>
          </div>
          <div className="flex flex-col w-[320px]  ">
            <div className="flex gap-1  items-center">
              <h3 className="w-32 text-lg font-bold underline">Company :</h3>
              <h4 className=" ">{state?.company}</h4>
            </div>
            <div className="flex gap-1  items-center">
              <h3 className="w-32 text-lg font-bold underline">Product :</h3>
              <h4 className=" ">{state?.product}</h4>
            </div>
            <div className="flex gap-1  items-center">
              <h3 className="w-32 text-lg font-bold underline">Model :</h3>
              <h4 className=" ">{state?.model}</h4>
            </div>
            <div className="flex gap-1  items-center">
              <h3 className="w-32 text-lg font-bold underline">Serial No :</h3>
              <h4 className=" ">{state?.serialNo}</h4>
            </div>
            <div className="flex gap-1  items-center">
              <h3 className="w-32 text-lg font-bold underline">Fine Time :</h3>
              <h4 className=" ">{state?.fineTime}</h4>
            </div>
            <div className="flex gap-1  items-center">
              <h3 className="w-32 text-lg font-bold underline">Fine Rev :</h3>
              <h4 className=" ">{state?.fineRev}</h4>
            </div>
            <div className="flex gap-1  items-center">
              <h3 className="w-32 text-lg font-bold underline">Fine Exp :</h3>
              <h4 className=" ">{state?.fineExp}</h4>
            </div>
            <div className="flex gap-1  items-center">
              <h3 className="w-32 text-lg font-bold underline">Duration :</h3>
              <h4 className=" ">{state?.duration}</h4>
            </div>
            <div className="flex gap-1  items-center">
              <h3 className="w-32 text-lg font-bold underline">Insta Rev :</h3>
              <h4 className=" ">{state?.instRev}</h4>
            </div>
            <div className="flex gap-1  items-center">
              <h3 className="w-32 text-lg font-bold underline">Insta Rem :</h3>
              <h4 className=" ">{state?.instRem}</h4>
            </div>
            <div className="flex gap-1  items-center">
              <h3 className="w-32 text-lg font-bold underline">Status:</h3>
              <h4 className=" ">{state?.status}</h4>
            </div>
          </div>
          <div className="flex flex-col w-[320px]  ">
            <div className="flex gap-1  items-center">
              <h3 className="w-32 text-lg font-bold underline">SRM :</h3>
              <h4 className=" ">{state?.srm}</h4>
            </div>
            <div className="flex gap-1  items-center">
              <h3 className="w-32 text-lg font-bold underline">RM :</h3>
              <h4 className=" ">{state?.rm}</h4>
            </div>
            <div className="flex gap-1  items-center">
              <h3 className="w-32 text-lg font-bold underline">CRC (J) :</h3>
              <h4 className=" ">{state?.crc}</h4>
            </div>
            <div className="flex gap-1  items-center">
              <h3 className="w-32 text-lg font-bold underline">Delv Mng :</h3>
              <h4 className=" ">{state?.delvMng}</h4>
            </div>
            <div className="flex gap-1  items-center">
              <h3 className="w-32 text-lg font-bold underline">2nd Mng :</h3>
              <h4 className=" ">{state?.secondMng}</h4>
            </div>
            <div className="flex gap-1  items-center">
              <h3 className="w-32 text-lg font-bold underline">Inqv Off :</h3>
              <h4 className=" ">{state?.inqvOff}</h4>
            </div>
            <div className="flex gap-1  items-center">
              <h3 className="w-32 text-lg font-bold underline">Mark Off :</h3>
              <h4 className=" ">{state?.markOff}</h4>
            </div>
            <div className="flex gap-1  items-center">
              <h3 className="w-32 text-lg font-bold underline">DO :</h3>
              <h4 className=" ">{state?.doo} </h4>
            </div>
            <div className="flex gap-1  items-center justify-between">
              <div className="flex gap-1  items-center">
                <h3 className="w-32 text-lg font-bold underline">
                  Process At :
                </h3>
                <h4 className=" ">{state?.processAT}</h4>
              </div>
              <div className="flex gap-2  items-center">
                <h3 className="  font-bold ">Process Fee</h3>
                <h4 className=" ">{state?.processFee}</h4>
              </div>
            </div>
            <div className="flex gap-1  items-center justify-between">
              <div className="flex gap-1  items-center">
                <h3 className="w-32 text-lg font-bold underline">Defualter</h3>
                <h4 className=" ">{state?.defaulter}</h4>
              </div>
              <div className="flex gap-2  items-center">
                <h3 className="  font-bold text-sm ">Salary/Income</h3>
                <h4 className=" ">{state?.salary}</h4>
              </div>
            </div>
            <div className="flex  items-center justify-between">
              <div className="flex gap-1  items-center">
                <h3 className="w-32 text-lg font-bold underline">PTO</h3>
                <h4 className=" ">{state?.pto}</h4>
              </div>
              <div className="flex gap-2  items-center">
                <h3 className="  font-bold text-sm ">VPN :</h3>
                <h4 className=" ">{state?.vpn}</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col pl-8 w-[1000px]  h-auto">
          <div className="flex gap-1  items-center">
            <h3 className="w-40 text-lg font-bold underline">
              Employee Status :
            </h3>
            <h4 className=" ">Not Employee</h4>
          </div>
          <div className="flex gap-1  items-center">
            <h3 className="w-40 text-lg font-bold underline">DRM Remarks :</h3>
            <h4 className=" ">f</h4>
          </div>
          <div className="flex gap-1  items-center">
            <h3 className="w-40 text-lg font-bold underline">CRC Remarks :</h3>
            <h4 className=" ">CRC Remarks hidden by HO</h4>
          </div>
        </div>

        {/* garanter table */}
        <div className="flex flex-col   w-[1000px] h-[400px]  border border-black mx-3 ">
          <div className="flex   w-full   bg-cyan-600 h-12 border-b border-gray-700 text-white ">
            <div className="flex flex-col items-center justify-center  w-[152px]  font-bold  border-r border-gray-700">
              Creteria
            </div>
            <div className="flex flex-col items-center justify-center  w-[212px] font-bold  border-r border-gray-700">
              Guaranter # 1
            </div>
            <div className="flex flex-col items-center justify-center w-[212px] font-bold border-r border-gray-700">
              Guaranter # 2
            </div>
            <div className="flex flex-col items-center justify-center w-[212px] font-bold border-r border-gray-700">
              Guaranter # 3
            </div>
            <div className="flex flex-col items-center justify-center w-[212px] font-bold ">
              Guaranter # 4
            </div>
          </div>

          {/* garanter body */}
          <div className="flex   w-full  h-full ">
            {/* garanter creteria */}
            <div className="flex flex-col  w-[152px] h-auto border-r border-gray-700">
              <div className="flex flex-col gap-1 pl-4 ">
                <h3 className="w-40 text-lg font-bold underline">Name:</h3>
                <h3 className="w-40 text-lg font-bold underline">F Name :</h3>
                <h3 className="w-40 text-lg font-bold underline">
                  Rest Ph # :
                </h3>
                <h3 className="w-40 text-lg font-bold underline">
                  Office Ph #:
                </h3>
                <h3 className="w-40 text-lg font-bold underline">CNIC # :</h3>
                <h3 className="w-40 text-lg font-bold underline">
                  Occupation :
                </h3>
                <h3 className="w-40 text-lg font-bold underline">Relation :</h3>
                <h3 className="w-40 text-lg font-bold underline py-5">
                  Rest Addr. :
                </h3>
                <h3 className="w-40 text-lg font-bold underline pt-3">
                  Office Addr:
                </h3>
              </div>
            </div>

            {/* garanter one */}
            <div className="flex flex-col  w-[212px] h-auto border-r border-gray-700">
              <div className="flex flex-col gap-[9px] pl-4 ">
                <h3 className="w-40">{state?.gName}</h3>
                <h3 className="w-40">{state?.gfName}</h3>
                <h3 className="w-40">{state?.gmobileNumber1}</h3>
                <h3 className="w-40">{state?.gmobileNumber2}</h3>
                <h3 className="w-40 flex items-center gap-2">
                  {state?.gcnic}
                  <span
                    onClick={() => {
                      setImage(true);
                      setCnicImage(state?.gimage);
                    }}
                    className="text-lg p-1 hover:text-gray-700 hover:bg-white rounded-md duration-300 cursor-pointer "
                  >
                    <FaImage />
                  </span>
                </h3>
                <h3 className="w-40">{state?.gOccupation}</h3>
                <h3 className="w-40">{state?.grelation}</h3>
                <h3 className="w-40 text-sm pt-5">{state?.ghomeAddress}</h3>
                <h3 className="w-40 text-sm pt-5">{state?.g2officeAddres}</h3>
              </div>
            </div>

            {/* garanter two */}
            <div className="flex flex-col  w-[212px] h-auto border-r border-gray-700">
              <div className="flex flex-col gap-[9px] pl-4 ">
                <h3 className="w-40">{state?.g2Name}</h3>
                <h3 className="w-40">{state?.g2fName}</h3>
                <h3 className="w-40">{state.g2mobileNumber1}</h3>
                <h3 className="w-40">{state?.g2mobileNumber2}</h3>
                <h3 className="w-40 flex items-center gap-2">
                  {state?.g2cnic}
                  <span
                    onClick={() => {
                      setImage(true);
                      setCnicImage(state.g2image);
                    }}
                    className="text-lg p-1 hover:text-gray-700 hover:bg-white rounded-md duration-300 cursor-pointer "
                  >
                    <FaImage />
                  </span>
                </h3>
                <h3 className="w-40">{state?.g2occupation}</h3>
                <h3 className="w-40">{state?.g2relation}</h3>
                <h3 className="w-40 text-sm pt-5">{state?.g2homeAddress}</h3>
                <h3 className="w-40 text-sm pt-5">{state?.g2officeAddres}</h3>
              </div>
            </div>

            {/* garanter three */}
            <div className="flex flex-col  w-[212px] h-auto border-r border-gray-700"></div>

            {/* garanter three */}
            <div className="flex flex-col  w-[212px] h-auto "></div>
          </div>
        </div>
        {/*
        ======================
        Intsallment Table 
        ======================
      */}
        <div className="flex flex-col   w-[1000px] h-[407px] border border-black mt-1 mx-3 ">
          <table className="w-full">
            <tbody className=" text-center">
              <tr className="flex bg-cyan-600 text-white justify-evenly    border-b border-gray-700 ">
                <td className="w-[140px]">OutStand Month</td>
                <td className="border-l border-gray-700 w-[140px]">
                  OutStand Category
                </td>
                <td className="border-l border-gray-700 w-[140px]">
                  Recovery Officer
                </td>
                <td className="border-l border-gray-700 w-[140px]">
                  OutStand Amt
                </td>
                <td className="border-l border-gray-700 w-[140px]">
                  Recieved Amt{" "}
                </td>
                <td className="border-l border-gray-700 w-[140px]">Due Amt</td>
                <td className="border-l border-gray-700 w-[140px]">
                  Month Status
                </td>
              </tr>

              <tr className="flex justify-evenly    ">
                <td className=" w-[140px]">-</td>
                <td className="border-l border-gray-700 w-[140px]">-</td>
                <td className="border-l border-gray-700 w-[140px]">-</td>
                <td className="border-l border-gray-700 w-[140px]">0</td>
                <td className="border-l border-gray-700 w-[140px]">0</td>
                <td className="border-l border-gray-700 w-[140px]">0</td>
                <td className="border-l border-gray-700 w-[140px]">0</td>
              </tr>
              <tr className="flex bg-cyan-600 text-white justify-evenly  border-b  border-gray-700  ">
                <td className="w-1">S.# </td>
                <td className="border-l border-gray-700 w-20 flex justify-end">
                  Date
                </td>
                <td className="border-l border-gray-700 w-16  flex justify-end">
                  Rev.#
                </td>
                <td className="border-l border-gray-700 w-8    text-center">
                  Pre.Bal
                </td>
                <td className="border-l border-gray-700 w-8 text-center">
                  Install
                </td>
                <td className="border-l border-gray-700 w-8 text-center">
                  Disc
                </td>
                <td className="border-l border-gray-700 w-8 text-center">
                  Balance
                </td>
                <td className="border-l border-gray-700 w-8 text-center">
                  Fine
                </td>
                <td className="border-l border-gray-700 w-12 text-sm text-center">
                  F-Type
                </td>
                <td className="border-l border-gray-700 w-[110px] text-sm text-center">
                  Recovery Officer
                </td>
                <td className="border-l w-12 text-center">Remarks</td>
              </tr>
              {installment.map((data, index) => {
                return (
                  <tr
                    className="flex  justify-evenly border-t border-gray-700"
                    key={index}
                  >
                    <td className="w-1">{index + 1} </td>
                    <td className="border-l text-xs border-gray-700 w-20  flex justify-end items-center">
                      {data.date}
                    </td>
                    <td className="border-l  border-gray-700 w-16 text-center">
                      {data.slipNo}
                    </td>
                    <td className="border-l border-gray-700 w-8 text-center">
                      {data.preBalance}
                    </td>
                    <td className="border-l border-gray-700 w-8 text-center">
                      {data.installment}
                    </td>
                    <td className="border-l border-gray-700 w-8 text-center">
                      {data.discount}
                    </td>
                    <td className="border-l border-gray-700 w-8 text-center">
                      {data.balance}
                    </td>
                    <td className="border-l border-gray-700 w-8 text-center">
                      {data.fine}
                    </td>
                    <td className="border-l border-gray-700 w-12 text-sm text-center">
                      {data.fineType}
                    </td>
                    <td className="border-l border-gray-700 w-[110px] text-sm text-center">
                      {data.recoveryOfficer}
                    </td>
                    <td className="border-l border-gray-700 w-12 text-center">
                      {data.remarks}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {/*
        ======================
        Invoice Buttons 
        ======================
      */}
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={onPrint}
          className="cursor-pointer transition-all duration-300 bg-blue-700 text-white   w-24 hover:bg-white hover:text-blue-700 font-bold mt-3 outline-none border-none px-2 py-3 rounded-lg"
        >
          Print
        </button>
        <button
          onClick={() => {
            setShow(true);
            setCustomerId(state._id);
          }}
          className="cursor-pointer text-xs   transition-all duration-300 bg-blue-700 text-white w-28 hover:bg-white hover:text-blue-700 font-bold mt-3 outline-none border-none px-2 py-4 rounded-lg"
        >
          Add Installment
        </button>
        <button
          onClick={() => {
            setCarasoul(true);
            setRegisteImages(state.inquiryImages);
          }}
          className="cursor-pointer transition-all duration-300 bg-blue-700 text-white w-24 hover:bg-white hover:text-blue-700 font-bold mt-3 outline-none border-none px-2 py-3 rounded-lg"
        >
          Images
        </button>
      </div>
      {/*
        ======================
        Installment Form popUp 
        ======================
      */}
      <div
        className={`${
          show
            ? "fixed inset-0 flex items-center justify-center text-black bg-blue-900 bg-opacity-90"
            : ""
        } `}
      >
        {show ? (
          <InstallmentForm
            show={show}
            setShow={setShow}
            customerId={customerId}
          />
        ) : (
          ""
        )}
      </div>
      {/*
        ======================
        Inquiry Images popUp 
        ======================
      */}
      <div
        className={`${
          carasoul
            ? "fixed inset-0 flex items-center justify-center text-black bg-blue-900 bg-opacity-90"
            : ""
        } `}
      >
        {carasoul ? (
          <InvoiceCarasoul
            carasoul={carasoul}
            setCarasoul={setCarasoul}
            registeImages={registeImages}
          />
        ) : (
          ""
        )}
      </div>
      {/*
        ======================
        Cnic Images popUp 
        ======================
      */}
      <div
        className={`${
          image
            ? "fixed inset-0 flex items-center justify-center text-black bg-blue-900 bg-opacity-90"
            : ""
        } `}
      >
        {image ? (
          <Image image={image} setImage={setImage} cnicImage={cnicImage} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
