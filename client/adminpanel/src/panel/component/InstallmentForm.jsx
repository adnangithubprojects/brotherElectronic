import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router";
import { base_url } from "../assets/data/config";

export default function InstallmentForm({ show, setShow, customerId }) {
  const refer = useNavigate();
  // const [customerId, setCustomerId] = useState(id);
  const [note, setNote] = useState({
    date: "",
    slipNo: "",
    preBalance: "",
    installment: "",
    discount: "0",
    fine: "0",
    fineType: "Exempt",
    recoveryOfficer: "nil",
    remarks: "nil",
  });
  const token = localStorage.getItem("token");
  // form Validation
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const inputEvent = (e) => {
    e.preventDefault();
    setNote((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const onSubmit = async (a, e) => {
    e.preventDefault();
    const {
      date,
      slipNo,
      preBalance,
      installment,
      discount,
      fine,
      fineType,
      recoveryOfficer,
      remarks,
    } = note;
    console.log("noteData", note);
    console.log("customerID", customerId);

    await axios
      .post(`${base_url}/${customerId}/installment`, note, {
        headers: { token: token },
      })
      .then((res) => {
        if (res) {
          window.alert("Installment Added");
          setShow(false);

          // refer("/CustomerDetail");
        }
      });
  };

  // remove after submit worked properly
  // const abc = async (e) => {
  //   const res = await axios.post(
  //     `http://localhost:9000/${customerId}/installment`
  //   );
  //   const req = await res.data.result;
  // };

  // useEffect(() => {
  //   abc();
  // }, []);

  return (
    <div className="flex justify-center items-center bg-slate-500 h-[500px] w-96 md:w-[500px] relative">
      <FaTimes
        className="absolute top-5 right-5 text-3xl  "
        onClick={() => setShow(false)}
      />
      <form className="flex flex-col justify-evenly items-center cursor-pointer py-2 h-[430px] w-96 md:w-[400px] ">
        <div className=" flex  gap-2 w-full px-2 ">
          <span className="w-full relative">
            <input
              {...register("preBalance", {
                required: "Field Required!",
                minLength: {
                  value: 0,
                  message: "Enter Valid Value",
                },
              })}
              type="number"
              name="preBalance"
              className="w-full   outline-none border-none px-4 py-1 rounded-xl "
              required
              value={note.preBalance}
              onChange={inputEvent}
            />
            <p className="absolute -top-6 left-2 text-white">Pre Balance:</p>
            <span className="text-xs text-red-500 font-bold">
              {errors.preBalance?.message}
            </span>
          </span>
          <span className="w-full relative">
            <input
              {...register("installment", {
                required: "Field Required!",
                minLength: {
                  value: 0,
                  message: "Enter Valid Value",
                },
              })}
              type="number"
              name="installment"
              className="w-full   outline-none border-none px-4 py-1 rounded-xl "
              required
              value={note.installment}
              onChange={inputEvent}
            />
            <p className="absolute -top-6 left-2 text-white">Installment :</p>
            <span className="text-xs text-red-500 font-bold">
              {errors.installment?.message}
            </span>
          </span>
        </div>
        <div className=" flex  gap-2 w-full px-2 ">
          <span className="w-full relative">
            <input
              {...register("discount", {
                required: "Field Required!",
                minLength: {
                  value: 0,
                  message: "Enter Valid Value",
                },
              })}
              type="number"
              name="discount"
              className="w-full   outline-none border-none px-4 py-1 rounded-xl "
              required
              value={note.discount}
              onChange={inputEvent}
            />
            <p className="absolute -top-6 left-2 text-white">Discount:</p>
            <span className="text-xs text-red-500 font-bold">
              {errors.discount?.message}
            </span>
          </span>
          <span className="w-full relative">
            <input
              {...register("fine", {
                required: "Field Required!",
                minLength: {
                  value: 0,
                  message: "Enter Valid Value",
                },
              })}
              type="number"
              name="fine"
              className="w-full   outline-none border-none px-4 py-1 rounded-xl "
              required
              value={note.fine}
              onChange={inputEvent}
            />
            <p className="absolute -top-6 left-2 text-white">Fine :</p>
            <span className="text-xs text-red-500 font-bold">
              {errors.fine?.message}
            </span>
          </span>
        </div>
        <div className=" flex  gap-2 w-full px-2 ">
          <span className="w-full relative">
            <input
              {...register("slipNo", {
                required: "Field Required!",
              })}
              type="number"
              name="slipNo"
              className="w-full   outline-none border-none px-4 py-1 rounded-xl "
              required
              value={note.slipNo}
              onChange={inputEvent}
            />
            <p className="absolute -top-6 left-2 text-white">Slip No:</p>
            <span className="text-xs text-red-500 font-bold">
              {errors.slipNo?.message}
            </span>
          </span>

          <span className="w-full relative">
            <input
              {...register("fineType", {
                required: "Field Required!",
                minLength: {
                  value: 0,
                  message: "Enter Valid Value",
                },
              })}
              type="text"
              name="fineType"
              className="w-full   outline-none border-none px-4 py-1 rounded-xl "
              required
              value={note.fineType}
              onChange={inputEvent}
            />
            <p className="absolute -top-6 left-2 text-white">FineType:</p>
            <span className="text-xs text-red-500 font-bold">
              {errors.fineType?.message}
            </span>
          </span>
        </div>
        <div className=" flex  gap-2 w-full px-2 ">
          <span className="w-full relative">
            <input
              {...register("recoveryOfficer", {})}
              type="text"
              name="recoveryOfficer"
              className="w-full   outline-none border-none px-4 py-1 rounded-xl "
              required
              value={note.recoveryOfficer}
              onChange={inputEvent}
            />
            <p className="absolute -top-6 left-2 text-white">
              Recovery Officer:
            </p>
            <span className="text-xs text-red-500 font-bold">
              {errors.recoveryOfficer?.message}
            </span>
          </span>

          <span className="w-full relative">
            <input
              {...register("remarks", {})}
              type="text"
              name="remarks"
              className="w-full   outline-none border-none px-4 py-1 rounded-xl "
              required
              value={note.remarks}
              onChange={inputEvent}
            />
            <p className="absolute -top-6 left-2 text-white">Remarks:</p>
            <span className="text-xs text-red-500 font-bold">
              {errors.remarks?.message}
            </span>
          </span>
        </div>
        <div className=" flex  gap-2 w-full px-2 ">
          <span className="w-full relative">
            <input
              {...register("date", {})}
              type="date"
              name="date"
              className="w-full   outline-none border-none px-4 py-1 rounded-xl "
              required
              value={note.date}
              onChange={inputEvent}
            />
            <p className="absolute -top-6 left-2 text-white">Date:</p>
            <span className="text-xs text-red-500 font-bold">
              {errors.date?.message}
            </span>
          </span>
        </div>

        <div className="flex  ">
          <button
            onClick={handleSubmit(onSubmit)}
            className="cursor-pointer transition-all duration-300 bg-blue-700 text-white   w-full hover:bg-gray-400 hover:text-yellow-400 font-bold  outline-none px-2 py-2 rounded-lg"
          >
            Add Installment
          </button>
        </div>
      </form>
    </div>
  );
}
