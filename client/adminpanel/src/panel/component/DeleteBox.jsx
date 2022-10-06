import { toUnicode } from "punycode";
import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";
export default function DeleteBox({ confirmDelete, message }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center ">
      <div className="flex flex-col gap-6 border-red-100 border justify-center bg-blue-900 bg-opacity-80 items-center w-[400px] h-[300px]   rounded">
        <div>
          <RiErrorWarningLine className="text-red-500 font-bold text-9xl    " />
        </div>
        <div className="text-xl text-white">{message}</div>
        <div className="flex gap-4">
          <button
            onClick={() => confirmDelete(true)}
            className="w-24 cursor-pointer text-white bg-red-600 hover:bg-red-500 font-bold mt-3 outline-none border-none px-2 py-2 rounded-lg duration-300"
          >
            Yes
          </button>
          <button
            onClick={() => confirmDelete(false)}
            className="w-24 cursor-pointer text-blue-500 hover:text-white bg-white hover:border hover:border-orange-50 border outline-none hover:bg-blue-900 hover:bg-opacity-40 font-bold mt-3   px-2 py-2 rounded-lg duration-300"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
