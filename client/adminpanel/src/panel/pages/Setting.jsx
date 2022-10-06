import React, { useEffect, useState } from "react";
import DeleteBox from "../component/DeleteBox";
import InstallmentForm from "../component/InstallmentForm";
import DownlaodCustomer from "./DownloadCustomer";
import InvoiceCarasoul from "./InvoiceCarasoul";
// import Imagetesting from "../extra/imagetesting";
// import { useLocation } from "react-router";
// import CustomerDetail from "./CustomerDetail";

export default function Setting() {
  // const { state } = useLocation();
  return (
    <div className="flex flex-col px-8 py-2   ">
      {/* <CustomerDetail /> */}
      {/* <Imagetesting /> */}
      <div className="bg-slate-400">
        {/* <InstallmentForm /> */}
        {/* <DownlaodCustomer /> */}
        <InvoiceCarasoul />
      </div>
      {/* <DeleteBox /> */}
    </div>
  );
}
