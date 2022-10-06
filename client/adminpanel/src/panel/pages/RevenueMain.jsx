import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FaPrint, FaTrashAlt } from "react-icons/fa";
import { useReactToPrint } from "react-to-print";
import { productData } from "../assets/data/config";
import DeleteBox from "../component/DeleteBox";
export default function RevenueMain() {
  const [data, setData] = useState([]);

  // total Calculation with Reduce Method
  const totalNetPrice = data.reduce((total, items) => {
    return total + items.netPrice;
  }, 0);
  const totalInstPrice = data.reduce((total, items) => {
    return total + items.instPrice;
  }, 0);
  const totalProfit = data.reduce((total, items) => {
    return total + items.profit;
  }, 0);
  // total Calculation with forEach loop
  // const total=0;
  // data.forEach((items)=>total+=items.instPrice)

  // Fetch value from backend
  const getProduct = async () => {
    const res = await axios.get("http://localhost:9000/product/get");
    const req = res.data.result;
    setData(req);
  };
  useEffect(() => {
    getProduct();
  }, []);

  // delete all rows in colleection
  const [dialog, setDialog] = useState(false);
  const message = "Are you sure you want to Clear All!";
  function onDelete() {
    setDialog(true);
  }
  async function confirmDelete(choose) {
    // console.log("function called");
    if (choose) {
      const res = await axios.delete(`http://localhost:9000/products`);
      setDialog(!dialog);
      getProduct();
    } else {
      setDialog(false);
    }
  }

  // Save to Pdf or Print
  const componentRef = useRef();
  const onPrint = useReactToPrint({
    content: () => componentRef.current,
    ducomentTitle: "epm-daata",
    onafterprint: () => alert("print succesfull"),
  });

  return (
    <div className="flex flex-col justify-between bg-cyan-800 rounded w-[1024px] py-3 h-[600px] mx-4 my-3 overflow-hidden">
      <AddProduct getProduct={getProduct} />

      <div
        ref={componentRef}
        className="flex w-full h-full flex-col items-center  overflow-auto bg-cyan-800 "
      >
        <h1 className="text-2xl text-white  py-2 ">Februry</h1>
        <table className=" border-t-2 border-cyan-200  w-full ">
          <tbody className="text-white text-center">
            <tr className="flex  justify-around gap-x-5 bg-cyan-800 py-2 ">
              <td className="w-30">S:No</td>
              <td className="w-30">Product Name</td>
              <td className="w-30">Net Price</td>
              <td className="w-30">Ints Price</td>
              <td className="w-30">profit</td>
            </tr>
            {data.map((productData, index) => {
              return (
                <tr
                  key={index}
                  className="flex justify-around bg-cyan-800 cursor-pointer py-2 border-t hover:bg-cyan-700"
                >
                  <td className="text-center w-28 ">{index + 1}</td>
                  <td className="text-center w-28 ">{productData.pName}</td>
                  <td className="text-center w-28 ">{productData.netPrice}</td>
                  <td className="text-center w-28 ">{productData.instPrice}</td>
                  <td className="text-center w-28 ">{productData.profit}</td>
                </tr>
              );
            })}
          </tbody>
          <tr className="flex justify-around bg-cyan-800 cursor-pointer py-2 border-t hover:bg-cyan-700">
            <td className="flex gap-4 text-center w-28 ">
              <span
                onClick={onPrint}
                className="px-2 p-1 flex items-center gap-1 rounded text-sm border  bg-green-600 hover:text-green-700 hover:bg-white transition-all duration-300"
              >
                save <FaPrint />
              </span>
              <span
                onClick={onDelete}
                className="px-2 p-1 flex items-center gap-1 rounded text-sm border w-24  bg-rose-600 hover:text-red-600 hover:bg-white transition-all duration-300"
              >
                <FaTrashAlt />
                All
              </span>
            </td>
            <td className="text-center w-28 font-bold text-white ">total</td>
            <td className="text-center w-28 font-bold text-white">
              {totalNetPrice}
            </td>
            <td className="text-center w-28 font-bold text-white">
              {totalInstPrice}
            </td>
            <td className="text-center w-28 font-bold text-white">
              {totalProfit}
            </td>
          </tr>
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

function AddProduct({ getProduct }) {
  const [note, setNote] = useState({
    pName: "",
    netPrice: "",
    instPrice: "",
  });

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
    const { pName, netPrice, instPrice } = note;

    await axios
      .post("http://localhost:9000/product/post", {
        body: note,
        header: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res) {
          window.alert("Product Added");
          getProduct();
        }
      });
  };

  return (
    <div>
      <form className="flex justify-evenly items-center cursor-pointer py-2 h-24 ">
        <div className="relative flex  gap-2 w-32 ">
          <span className="w-full">
            <input
              {...register("pName", {
                required: "Field Required!",
                minLength: {
                  value: 0,
                  message: "Enter Valid Value",
                },
              })}
              type="text"
              name="pName"
              className="w-full   outline-none border-none px-4 py-1 rounded-xl "
              required
              value={note.pName}
              onChange={inputEvent}
            />
            <p className="absolute -top-6 left-2 text-white">Product Name:</p>
            <span className="text-xs text-red-500 font-bold">
              {errors.pName?.message}
            </span>
          </span>
        </div>
        <div className="relative flex  gap-2 w-32 ">
          <span className="w-full">
            <input
              {...register("netPrice", {
                required: "Field Required!",
                minLength: {
                  value: 0,
                  message: "Enter Valid Value",
                },
              })}
              type="number"
              name="netPrice"
              // readOnly
              className="w-full   outline-none border-none px-4 py-1 rounded-xl "
              value={note.netPrice}
              onChange={inputEvent}
            />
            <p className="absolute -top-6 left-2 text-white">Net Price:</p>
            <span className="text-xs text-red-500 font-bold">
              {errors.netPrice?.message}
            </span>
          </span>
        </div>
        <div className="relative flex  gap-2 w-32  ">
          <span className="w-full">
            <input
              {...register("instPrice", {
                required: "Field Required!",
                minLength: {
                  value: 0,
                  message: "Enter Valid Value",
                },
              })}
              type="number"
              name="instPrice"
              className="w-full   outline-none border-none px-4 py-1 rounded-xl "
              value={note.instPrice}
              onChange={inputEvent}
            />
            <p className="absolute -top-6 left-2 text-white">Inst Price:</p>
            <span className="text-xs text-red-500 font-bold">
              {errors.instPrice?.message}
            </span>
          </span>
        </div>

        <div className="flex w-32 ">
          <button
            onClick={handleSubmit(onSubmit)}
            className="cursor-pointer transition-all duration-300 bg-blue-700 text-white   w-full hover:bg-gray-400 hover:text-yellow-400 font-bold  outline-none px-2 py-2 rounded-lg"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}

{
  /* <td className=" flex gap-2">
                <span className="p-2 text-sm border rounded-full bg-rose-600 hover:text-red-600 hover:bg-white transition-all duration-300">
                  <FaTrashAlt />
                </span>
              </td> */
}
