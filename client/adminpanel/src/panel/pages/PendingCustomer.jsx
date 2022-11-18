import React, { useState } from "react";
import "../style/user.css";
import CustomerForm from "./CustomerForm";
import PendingDetail from "./PendingDetail";
export default function PendingCustomer() {
  const [show, setShow] = useState(true);

  return (
    <>
      <div className="w-full md:w-[1060px]  h-[625px]  flex flex-col items-end px-1 py-4 md:py-8   gap-1 ">
        {/* <div className="pt-6 pr-5">
          <button
            className="w-32 h-12 rounded transition-all duration-300 hover:bg-blue-900 hover:text-white font-bold bg-white text-black border border-blue-900"
            onClick={() => setShow(!show)}
          >
            Add Customer
          </button>
        </div> */}
        <div className=" rounded w-full sm:w-screen md:w-[1024px]  py-3 h-auto overflow-hidden">
          <PendingDetail />
        </div>

        {/* <div className={`${!show ? "PopUp" : ""} `}>
          {!show ? <CustomerForm show={show} setShow={setShow} /> : ""}
        </div> */}
      </div>
    </>
  );
}
