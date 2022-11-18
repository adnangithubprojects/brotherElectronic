import React from "react";
import logo from "../assets/images/logo1.png";
export default function RecieptCard({
  accountNo,
  custName,
  productName,
  reqOfficer,
  accountDate,
  installmentDate,
  g1Name,
  g1Mobile,
  g1Address,
  totalPrice,
  duration,
  advance,
  recievedBalance,
  installmentt,
  g2Name,
  g2Mobile,
  g2Address,
  totalInstallment,
  recievedInstallment,
  remInstallment,
  remBalance,
}) {
  // h-[1650px]
  return (
    <div className="relative flex flex-col gap-1 mb-1 bg-amber-100 h-[555px] w-[1024px]">
      <div className="absolute top-32 left-[315px] opacity-10">
        <img src={logo} alt="" className="w-96 h-96" />
      </div>

      <div className="flex items-center justify-around gap-6 py-4 ">
        <div>
          <img src={logo} alt="" className="w-28 h-28" />
        </div>
        <div className="flex flex-col text-[22px] items-center ">
          <h1 className="text-3xl uppercase flex gap-1 text-blue-900 tracking-wider border-b-2  border-blue-900">
            <span className=" font-bold ">Brothers</span> Electronics
          </h1>
          <h2 className="text-[22px] text-orange-500 font-bold ">
            Installment Collection Reciept
          </h2>
        </div>
        <div className="flex flex-col tracking-wide text-xs font-bold w-72 gap-1 text-blue-900 items-center ">
          <h2 className="text-sm text-white bg-orange-500 py-1 px-4 rounded ">
            ضروری نوٹ
          </h2>
          <p>
            قسط ہر ماہ کی{" "}
            <span className="text-white bg-blue-900 p-[1px] rounded">5</span>{" "}
            اتاریخ تک لازمی جمع کروایئں
          </p>
          <p className="">
            ا <span className="text-white bg-blue-900 p-[1px] rounded">5</span>
            تاریخ کے بعد
            <span className="text-white bg-blue-900 p-[1px] rounded">
              500
            </span>{" "}
            روپے جرمانہ لازمی وصول کیا جائے گا۔ اور کمپنی کا نمائندہ کسٹمر کے
            جگہ قسط وصول کرنے پر پٹرول کے{" "}
            <span className="text-white bg-blue-900 p-[1px] rounded">100</span>{" "}
            روپے علیحدہ وصول کریں گا۔
          </p>
        </div>
      </div>

      <div className="flex gap-3 justify-between px-8 text-blue-900">
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-center ">
            <p className="font-bold">Account No:</p>
            <p className="border-b-2 border-blue-800 w-44 text-center">
              {" "}
              34456
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="font-bold w-32 ">Customer Name:</p>
            <p className="border-b-2 border-blue-800 w-44 text-center capitalize">
              {custName}
            </p>
          </div>
          <div className="flex gap-2  items-center">
            <p className="font-bold w-32"> Product Name:</p>
            <p className="border-b-2 border-blue-800 w-44 text-center">
              {productName}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="font-bold w-[135px]"> Recovery Officer:</p>
            <p className="border-b-2 border-blue-800 w-44 text-center capitalize">
              {reqOfficer}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-center ">
            <p className="font-bold">Account Date:</p>
            <p className="border-b-2 border-blue-800 w-32 text-center">
              {accountDate}
            </p>
          </div>
          <div className="flex items-center">
            <p className="font-bold w-32 text-sm ">Installment Date:</p>
            <p className="border-b-2 border-blue-800 w-24 h-6 text-center"></p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 items-center">
            <p className="font-bold w-32 ">Total Price:</p>
            <p className="border-b-2 border-blue-800 w-44 text-center">
              {totalPrice}/-
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="font-bold w-32 ">Duration:</p>
            <p className="border-b-2 border-blue-800 w-44 text-center">
              12 months
            </p>
          </div>
          <div className="flex gap-2  items-center">
            <p className="font-bold w-32"> Advance:</p>
            <p className="border-b-2 h-5 border-blue-800 w-44 text-center">
              {/* {advance}/- */}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="font-bold w-[135px]"> Recieved Balance:</p>
            <p className="border-b-2 h-5 border-blue-800 w-44 text-center">
              {/* {recievedBalance}/- */}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="font-bold w-[135px]">Installment:</p>
            <p className="border-b-2 h-5 border-blue-800 w-44 text-center">
              {/* {installmentt}/- */}
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-3 justify-between px-8 text-blue-900">
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-center">
            <p className="font-bold w-32">G-1 Name:</p>
            <p className="border-b-2 border-blue-800 w-44 text-center capitalize">
              {g1Name}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="font-bold w-32 ">Mobile:</p>
            <p className="border-b-2 border-blue-800 w-44 text-center">
              0{g1Mobile}
            </p>
          </div>
          <div className="flex gap-3  items-center">
            <p className="font-bold w-auto"> Address:</p>
            <p className="border-b-2 border-blue-800 w-full h-[48px] text-xs flex flex-wrap items-center">
              {g1Address}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-center">
            <p className="font-bold w-32">G-2 Name:</p>
            <p className="border-b-2 border-blue-800 w-44 text-center capitalize">
              {g2Name}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="font-bold w-32 ">Mobile:</p>
            <p className="border-b-2 border-blue-800 w-44 text-center">
              0{g2Mobile}
            </p>
          </div>
          <div className="flex gap-3  items-center">
            <p className="font-bold w-auto"> Address:</p>
            <p className="border-b-2 border-blue-800 w-full h-[48px] text-xs flex flex-wrap items-center">
              {g2Address}
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 justify-between px-8 py-2 text-blue-900">
        <div className="flex gap-1 items-center">
          <p className="font-bold w-36">Total Installment:</p>
          <p className="border-b-2 border-blue-800 w-16 text-center">12</p>
        </div>

        <div className="flex gap-1 items-center">
          <p className="font-bold w-36">Recv. Installment:</p>
          <p className="border-b-2 h-5 border-blue-800 w-16 text-center">
            {/* {recievedInstallment} */}
          </p>
        </div>

        <div className="flex gap-1 items-center">
          <p className="font-bold w-36">Rem. Installment:</p>
          <p className="border-b-2 h-5 border-blue-800 w-16 text-center">
            {/* {remInstallment} */}
          </p>
        </div>

        <div className="flex gap-2 items-center">
          <p className="font-bold w-28">Rem. Balance:</p>
          <p className="border-b-2 h-5 text-lg font-bold border-blue-800 w-20 text-center">
            {/* {remBalance}/- */}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center text-blue-900 font-bold">
        ادارے کی رسید کے بغیر لین دین نہ کریں۔ رسید کے بغیر ادارہ زمہ دار نہ
        ہوگا۔
        <span className="bg-orange-500 py-1 px-2 text-white  rounded-3xl mx-2">
          {" :"}
          نوٹ
        </span>
      </div>
    </div>
  );
}
