import React, { useEffect, useRef, useState } from "react";
import RecieptCard from "../component/RecieptCard";
import { useReactToPrint } from "react-to-print";
import { useDispatch, useSelector } from "react-redux";
import { asyncAllCustomers } from "../../redux/Features/customerSlice";
import axios from "axios";
import { base_url } from "../assets/data/config";
export default function AllReciept() {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  const componentRef = useRef(); //Print Dev Setting
  const onPrint = useReactToPrint({
    content: () => componentRef.current,
    ducomentTitle: "epm-daata",
    onafterprint: () => alert("print succesfull"),
  });

  const { allCustomers, error, loading } = useSelector(
    (state) => state.customer
  );
  const dispatch = useDispatch();

  // const getData = async () => {
  //   await dispatch(asyncAllCustomers());
  //   setTimeout(() => {
  //     const updatData = allCustomers.result?.filter(
  //       (data) => data.custstatus === "Active"
  //     );
  //     setCustomerData(updatData);
  //     console.log(updatData, "updatData");
  //   }, 6000);
  // };

  const customerData = async (opt) => {
    try {
      const res = await axios.get(`${base_url}/customer/get`);
      const req = await res.data.result;
      const updateData = await req.filter((data) => data.custstatus === opt);
      setData(updateData);
    } catch (error) {
      console.log(error, "dataFailed");
    }
  };
  useEffect(() => {
    customerData("Active");
  }, []);
  console.log(data?.installments, "new Data");
  return (
    <div className=" overflow-scroll h-[625px] ml-6">
      <div className="flex items-center justify-center h-24 gap-4">

      <input
        type="text"
        placeholder="Search with Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="outline-none py-2 rounded mt-1 px-3 border-2 border-blue-500 focus:border-indigo-700"
        />
      <button
        onClick={onPrint}
        className="cursor-pointer transition-all mb-2 duration-300 bg-blue-700 text-white   w-24 hover:bg-gray-400 hover:text-yellow-400 font-bold mt-3 outline-none border-none px-2 py-3 rounded-lg"
        >
        Print
      </button>
        </div>
      <div className="flex flex-col  " ref={componentRef}>
        {data
          ?.filter((fil) => {
            if (search == "") {
              return fil;
            } else if (
              fil.cutomerName
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase())
            ) {
              return fil.cutomerName;
            }
          })
          .map((data, index) => {
            // below code is about installment warning
            let lateInstallment = [];
            const lastLength = data.installments.length;
            const totalInstallment = data?.installments?.reduce((total, items) => {
              return total + items.installment;
            }, 0);
            const recievedBalance= totalInstallment + parseInt(data?.actAdvance);
            const remainingBalance = parseInt(data?.instprice)-recievedBalance;
            const recievedInstallment = lastLength + 1;
            const remainingInstallment = 12 - recievedInstallment;
            const accountDatee = new Date(data.updatedAt),//account created Date
              date =
                accountDatee.getDate() +
                " / " +
                (accountDatee.getMonth() + 1) +
                " / " +
                accountDatee.getFullYear();
            const secondLastLenght = lastLength - 1;
            const currentDate = new Date();
            if (data.installments.length === 0) {
              lateInstallment = true;
            } else {
              const previuosDate = data.installments[secondLastLenght].date; //here
              const pastDate = new Date(previuosDate);
              if (pastDate.getMonth() < currentDate.getMonth()) {
                lateInstallment = true;
              } else {
                lateInstallment = false;
              }
            }
            return !lateInstallment ? (
              <RecieptCard
                accountNo="hallo"
                custName={data?.cutomerName}
                productName={data?.product}
                reqOfficer={data?.inqvOff}
                accountDate={date}
                installmentDate="hallo"
                g1Name={data?.gName}
                g1Mobile={data?.gmobileNumber1}
                g1Address={data?.ghomeAddress}
                totalPrice={data?.instprice}
                duration="hallo"
                advance={data?.actAdvance}
                recievedBalance={recievedBalance}
                installmentt={data?.installments[0]?.installment}
                g2Name={data?.g2Name}
                g2Mobile={data?.g2mobileNumber1}
                g2Address={data?.g2homeAddress}
                totalInstallment="hallo"
                recievedInstallment={recievedInstallment}
                remInstallment={remainingInstallment}
                remBalance={remainingBalance}
                key={index}
              />
            ) : (
              ""
            );
          })}
        
      </div>
    </div>
  );
}
