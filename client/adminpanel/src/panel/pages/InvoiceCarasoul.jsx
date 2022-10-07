import React, { useState, useEffect } from "react";
import { base_url, carasolData } from "../assets/data/config";
import { FaAngleLeft, FaAngleRight, FaTimes } from "react-icons/fa";
import "../style/carasoul.css";
export default function InvoiceCarasoul({
  carasoul,
  setCarasoul,
  registeImages,
}) {
  const [Count, setCount] = useState(0);
  const value = registeImages[Count];
  // console.log("before", registeImages);
  // console.log("after", `${base_url}/${value}`);
  function forword() {
    const next = Count + 1;
    const len = registeImages.length;
    if (next == len) {
      setCount(0);
    } else {
      setCount(next);
    }
  }

  function backword() {
    const prev = Count - 1;
    const len = registeImages.length;
    if (prev < 0) {
      setCount(len - 1);
    } else {
      setCount(prev);
    }
  }

  useEffect(() => {
    const set = setTimeout(() => {
      forword();
    }, 5000);
    return () => clearTimeout(set);
  }, [Count]);
  return (
    <>
      {/* <div className="fixed inset-0 flex items-center justify-center w-full h-full bg-blue-900 bg-opacity-90"> */}
      <div className="relative flex items-center justify-center w-[800px] h-[500px] overflow-hidden rounded-md">
        <FaTimes
          className="absolute top-5 right-5 text-3xl  "
          onClick={() => setCarasoul(false)}
        />
        <button
          onClick={backword}
          className="absolute bottom-16 right-32  hidden lg:flex text-7xl md:mr-4 text-green-300 p-2 rounded "
        >
          <FaAngleLeft />
        </button>
        <img
          src={`${base_url}/${value}`}
          alt="upload image"
          className="w-full h-full"
        />
        <button
          onClick={forword}
          className="absolute bottom-16 right-16  text-7xl hidden lg:flex md:ml-4  p-2 rounded text-green-300 "
        >
          <FaAngleRight />
        </button>
      </div>
      {/* </div> */}
    </>
  );
}
export function Image({ image, setImage, cnicImage }) {
  return (
    <>
      {/* <div className="fixed inset-0 flex items-center justify-center w-full h-full bg-blue-900 bg-opacity-90"> */}
      <div className="relative flex items-center justify-center w-[800px] h-[500px] overflow-hidden rounded-md">
        <FaTimes
          className="absolute top-5 right-5 text-3xl bg-white rounded-md hover:bg-slate-300 duration-300   "
          onClick={() => setImage(false)}
        />

        <img
          src={`${base_url}/${cnicImage}`}
          alt="upload image"
          className="w-full h-full"
        />
      </div>
      {/* </div> */}
    </>
  );
}
