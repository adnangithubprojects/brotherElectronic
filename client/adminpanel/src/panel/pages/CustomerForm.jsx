import React, { useState } from "react";
import "../style/customerform.css";
import { FaAngleDown, FaTimes } from "react-icons/fa";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import axios from "axios";
import { base_url } from "../assets/data/config";
// import scrollbar-hide from "tailwind-scrollbar-hide";

export default function CutomerForm({ show, setShow }) {
  // form validation
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // const [gender, setGender] = useState("male");
  // const [user, setUser] = useState([]);
  const [icon, setIcon] = useState(false);
  const [val, setVal] = useState("");
  const [note, setNote] = useState({
    // customer info
    cutomerName: "",
    custFName: "",
    resedential: "",
    occupation: "",
    custMobile1: "",
    custMobile2: "0",
    custCnic: "",
    custImage: "",
    custFingerImage: "",
    custCnicImage: "",
    gender: "male",
    custhomeAddress: "",
    custofficeAddres: "",
    custstatus: "Pending",
    custRepeat: "0",
    custRepeatGauranter: "0",
    custPreviosAccount: "0",
    accountNo: "",

    // Product:=>
    instprice: "",
    actInstall: "",
    actAdvance: "",
    advanceRev: "",
    totalRev: "",
    discount: "0",
    //
    balance: "0",
    company: "",
    product: "",
    model: "",
    serialNo: "ok",
    fineTime: "0",
    //
    fineRev: "0",
    fineExp: "0",
    duration: "",
    instRev: "",
    instRem: "",
    status: "open",
    //
    srm: "nil",
    rm: "nil",
    crc: "nil",
    delvMng: "nil",
    secondMng: "nil",
    inqvOff: "",
    markOff: "nil",
    //
    doo: "nil",
    processAT: "nil",
    defaulter: "nil",
    pto: "nil",
    vpn: "nil",
    processFee: "0",
    salary: "nil",

    // guaranter 1:=>
    gName: "",
    gfName: "",
    grelation: "",
    gOccupation: "",
    gmobileNumber1: "",
    gmobileNumber2: "0",
    gcnic: "",
    gimage: "",
    ghomeAddress: "",
    gofficeAddres: "",

    // guaranter 2:=>
    g2Name: "",
    g2fName: "",
    g2relation: "",
    g2occupation: "",
    g2mobileNumber1: "",
    g2mobileNumber2: "0",
    g2cnic: "",
    g2image: "",
    g2homeAddress: "",
    g2officeAddres: "",

    // images
    // inquiryImages: "",
  });
  // InputEvent function or getting value from field
  function InputEvent(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setNote((prevData) => {
      return { ...prevData, [name]: value };
    });
  }
  // function InputEventNumber(event) {
  //   event.preventDefault();
  //   const { name, value } = event.target;
  //   let f_val = value.replace(/\D[^\.]/g, "");

  //   f_val =
  //     f_val.slice(0, 5) + "-" + f_val.slice(5, 12) + "-" + f_val.slice(12, 14);
  //   setNote((prevData) => {
  //     return { ...prevData, [name]: f_val };
  //   });
  //   console.log(note.custCnic, "");
  // }
  // function InputEventNumber(event) {
  //   event.preventDefault();
  //   const { name, value } = event.target;

  //   const cnic = formatPhoneNumber(value);
  //   setNote((prevData) => {
  //     return { ...prevData, [name]: cnic };
  //   });
  //   console.log(note.custCnic);
  // }

  function InputFile(e) {
    e.preventDefault();
    setNote((prev) => {
      return { ...prev, [e.target.name]: e.target.files[0] };
    });
  }

  // sendind data to backend
  const token = localStorage.getItem("token");
  const HandleForm = async (a, e) => {
    e.preventDefault();

    const {
      cutomerName,
      custFName,
      resedential,
      occupation,
      custMobile1,
      custMobile2,
      custCnic,
      custImage,
      custFingerImage,
      gender,
      custCnicImage,
      custhomeAddress,
      custofficeAddres,
      custstatus,
      custRepeat,
      custRepeatGauranter,
      custPreviosAccount,
      accountNo,

      // Product Details
      instprice,
      actInstall,
      actAdvance,
      advanceRev,
      totalRev,
      discount,

      balance,
      company,
      product,
      model,
      serialNo,
      fineTime,

      fineRev,
      fineExp,
      duration,
      instRev,
      instRem,
      status,

      srm,
      rm,
      crc,
      delvMng,
      secondMng,
      inqvOff,
      markOff,

      doo,
      processAT,
      defaulter,
      pto,
      vpn,
      processFee,
      salary,

      // Guaranter 1 Information

      gName,
      gfName,
      grelation,
      gOccupation,
      gmobileNumber1,
      gmobileNumber2,
      gcnic,
      gimage,
      ghomeAddress,
      gofficeAddres,

      // Guaranter 2 information

      g2Name,
      g2fName,
      g2relation,
      g2occupation,
      g2mobileNumber1,
      g2mobileNumber2,
      g2cnic,
      g2image,
      g2homeAddress,
      g2officeAddres,
    } = note;
    // console.log("looking for customerStatus Data ", note);
    const custData = new FormData();
    for (let key in note) {
      custData.append(key, note[key]);
    }
    try {
      await axios.post(
        `${base_url}/customer/post`,
        custData,
        {
          headers: {
            token: token,
          },
        }
        // {
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //   },
        //   custData,
        // }
      );
      setNote({
        // customer info
        cutomerName: "",
        custFName: "",
        resedential: "",
        occupation: "",
        custMobile1: "",
        custMobile2: "",
        custCnic: "",
        custFingerImage: "",
        custImage: "",
        custCnicImage: "",
        gender: "male",
        custhomeAddress: "",
        custofficeAddres: "",
        custstatus: "Pending",
        custRepeat: "0",
        custRepeatGauranter: "0",
        custPreviosAccount: "0",
        accountNo: "0",

        // Product:=>
        instprice: "",
        actInstall: "",
        actAdvance: "",
        advanceRev: "",
        totalRev: "",
        discount: "0",
        //
        balance: "0",
        company: "",
        product: "",
        model: "",
        serialNo: "ok",
        fineTime: "0",
        //
        fineRev: "0",
        fineExp: "0",
        duration: "",
        instRev: "",
        instRem: "",
        status: "close",
        //
        srm: "nil",
        rm: "nil",
        crc: "nil",
        delvMng: "nil",
        secondMng: "nil",
        inqvOff: "nil",
        markOff: "nil",
        //
        doo: "nil",
        processAT: "nil",
        defaulter: "nil",
        pto: "nil",
        vpn: "nil",
        processFee: "0",
        salary: "nil",

        // guaranter 1:=>
        gName: "",
        gfName: "",
        grelation: "",
        gOccupation: "",
        gmobileNumber1: "",
        gmobileNumber2: "",
        gcnic: "",
        gimage: "",
        ghomeAddress: "",
        gofficeAddres: "",

        // guaranter 2:=>
        g2Name: "",
        g2fName: "",
        g2relation: "",
        g2occupation: "",
        g2mobileNumber1: "",
        g2mobileNumber2: "",
        g2cnic: "",
        g2image: "",
        g2homeAddress: "",
        g2officeAddres: "",
      });
      alert("Customer Added Successfully");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="Customer__Container">
        <div className="Customer__Container__Form">
          <h2 className="text-white  capitalize text-2xl ">Customer Form</h2>
          {/* <FaTimes
            className="absolute top-5 right-5 text-3xl  "
            onClick={() => setShow(!show)}
          /> */}
          <form action="post" method="POST" className="scrollbar-hide">
            {/* Customer Data */}
            <div className="child flex justify-center font-bold ">
              Customer Information
            </div>
            <div className="child">
              <span>
                <input
                  {...register("cutomerName", {
                    required: "Name field should be filled",
                    minLength: {
                      value: 3,
                      message: "Name should be greater than 3 characters",
                    },
                    maxLength: {
                      value: 20,
                      message: "Name should be less than 20 characters",
                    },
                  })}
                  type="text"
                  name="cutomerName"
                  required="required"
                  value={note.cutomerName}
                  onChange={InputEvent}
                />
                <p className="pp">Cutomer Name :</p>

                <span className="text-sm text-red-500 font-bold">
                  {errors.cutomerName?.message}
                </span>
              </span>
              <span className="relative">
                <input
                  {...register("custFName", {
                    required: "FName field should be filled",
                    minLength: {
                      value: 3,
                      message: "Name should be greater than 3 characters",
                    },
                    maxLength: {
                      value: 20,
                      message: "Name should be less than 20 characters",
                    },
                  })}
                  type="text"
                  name="custFName"
                  required
                  value={note.custFName}
                  onChange={InputEvent}
                />
                <p className="pp">Father Name :</p>

                <span className="text-sm text-red-500 font-bold">
                  {errors.custFName?.message}
                </span>
              </span>
              <span className="relative">
                <input
                  {...register("resedential", {
                    required: "resedential field should be filled",
                    maxLength: {
                      value: 20,
                      message: "Resedential should be less than 20 characters",
                    },
                  })}
                  type="text"
                  name="resedential"
                  required
                  value={note.resedential}
                  onChange={InputEvent}
                />
                <p className="pp">Resedential :</p>

                <span className="text-sm text-red-500 font-bold">
                  {errors.resedential?.message}
                </span>
              </span>
              <span className="relative">
                <input
                  {...register("occupation", {
                    required: "occupation field should be filled",
                    maxLength: {
                      value: 20,
                      message: "Occupation should be less than 20 characters",
                    },
                  })}
                  type="text"
                  name="occupation"
                  required
                  value={note.occupation}
                  onChange={InputEvent}
                />
                <p className="pp">Occupation :</p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.occupation?.message}
                </span>
              </span>
              <span className="relative">
                <input
                  {...register("custRepeat", {
                    // required: "CNIC Reuired !",
                  })}
                  type="number"
                  name="custRepeat"
                  value={note.custRepeat}
                  onChange={InputEvent}
                />
                <p className="pp">Repeat as Customer : </p>
                {/* <span className="text-sm text-red-500 font-bold">
                  {errors.custRepeat?.message}
                </span> */}
              </span>
              <span className="relative">
                <input
                  {...register("custRepeatGauranter", {
                    // required: "CNIC Reuired !",
                  })}
                  type="number"
                  name="custRepeatGauranter"
                  value={note.custRepeatGauranter}
                  onChange={InputEvent}
                />
                <p className="pp">Repeat as Guaranter : </p>
                {/* <span className="text-sm text-red-500 font-bold">
                  {errors.custRepeatGauranter?.message}
                </span> */}
              </span>
            </div>
            <div className="child">
              <span className="relative">
                <InputMask
                  mask="9999-9999999"
                  {...register("custMobile1", {
                    required: "Mobile No required!",
                  })}
                  // type="number"
                  name="custMobile1"
                  value={note.custMobile1}
                  onChange={InputEvent}
                />
                <p className="pp">Mobile No : 1 </p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.custMobile1?.message}
                </span>
              </span>
              <span className="relative">
                <InputMask
                  mask="9999-9999999"
                  {...register("custMobile2")}
                  // type="number"
                  name="custMobile2"
                  value={note.custMobile2}
                  onChange={InputEvent}
                />
                <p className="pp">Mobile No : 2 </p>
                {/* <span className="text-sm text-red-500 font-bold">
                  {errors.custMobile2?.message}
                </span> */}
              </span>
              <span className="relative">
                {/* <input
                  {...register("custCnic", {
                    required: "CNIC Reuired !",
                    maxLength: {
                      value: 15,
                      message: "Cnic should be less than 20 characters",
                    },
                  })}
                  type="number"
                  name="custCnic"
                  value={note.custCnic}
                  onChange={InputEvent}
                /> */}
                <InputMask
                  mask="99999-9999999-9"
                  {...register("custCnic", {
                    required: "CNIC Reuired !",
                    maxLength: {
                      value: 15,
                      message: "Cnic should be less than 20 characters",
                    },
                  })}
                  // type="number"
                  name="custCnic"
                  value={note.custCnic}
                  onChange={InputEvent}
                />
                <p className="pp">CNIC Number : </p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.custCnic?.message}
                </span>
              </span>
              <span className="relative">
                <input
                  {...register("custPreviosAccount", {
                    // required: "CNIC Reuired !",
                  })}
                  type="number"
                  name="custPreviosAccount"
                  value={note.custPreviosAccount}
                  onChange={InputEvent}
                />
                <p className="pp">Prev A/C #: </p>
                {/* <span className="text-sm text-red-500 font-bold">
                  {errors.custPreviosAccount?.message}
                </span> */}
              </span>
              <span className="relative">
                <input
                  {...register("accountNo", {
                    required: "Account no Reuired !",
                  })}
                  type="number"
                  name="accountNo"
                  value={note.accountNo}
                  onChange={InputEvent}
                />
                <p className="pp">Account No: </p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.accountNo?.message}
                </span>
              </span>

              <span className="relative">
                <select
                  onClick={() => setIcon(!icon)}
                  name="custstatus"
                  value={note.custstatus}
                  onChange={InputEvent}
                >
                  <option className="text-black">Pending</option>
                  <option className="text-black">Active</option>
                </select>
                <FaAngleDown
                  className={`absolute top-3 right-6 text-2xl ${
                    icon && "rotate-180"
                  } `}
                />
                <p className="pp">Status : </p>
              </span>
            </div>
            <div className="child">
              <span className="relative">
                <input
                  {...register("custImage", {
                    // required: "Image Required!",
                  })}
                  type="file"
                  name="custImage"
                  // value={note.custImage}
                  onChange={InputFile}
                />
                <p className="pp">Customer Image : </p>
                {/* <span className="text-sm text-red-500 font-bold">
                  {errors.custImage?.message}
                </span> */}
              </span>
              <span className="relative">
                <input
                  {...register("custCnicImage", {
                    // required: "CNIC Image Required!",
                  })}
                  type="file"
                  name="custCnicImage"
                  // value={note.custCnicImage}
                  onChange={InputFile}
                />
                <p className="pp">CNIC Image : </p>
                {/* <span className="text-sm text-red-500 font-bold">
                  {errors.custCnicImage?.message}
                </span> */}
              </span>
              <span className="relative">
                <input
                  {...register("custFingerImage", {
                    // required: "CNIC Image Required!",
                  })}
                  type="file"
                  name="custFingerImage"
                  // value={note.custFingerImage}
                  onChange={InputFile}
                />
                <p className="pp">Finger Image : </p>
                {/* <span className="text-sm text-red-500 font-bold">
                  {errors.custFingerImage?.message}
                </span> */}
              </span>

              <span className="relative">
                <label>
                  <input
                    type="radio"
                    value="male"
                    name="gender"
                    checked={note.gender === "male"}
                    onChange={InputEvent}
                  />
                  Male
                  <input
                    type="radio"
                    value="female"
                    name="gender"
                    checked={note.gender === "female"}
                    onChange={InputEvent}
                  />
                  Female
                  <input
                    type="radio"
                    value="other"
                    name="gender"
                    checked={note.gender === "other"}
                    onChange={InputEvent}
                  />
                  Other
                </label>
                <p className="pp">Gender : </p>
              </span>
            </div>
            <div className="child">
              <span className="relative">
                <textarea
                  {...register("custhomeAddress", {
                    required: "Home Address Required!",
                  })}
                  rows="2"
                  cols="20"
                  type="text"
                  name="custhomeAddress"
                  value={note.custhomeAddress}
                  onChange={InputEvent}
                />
                <p className="pp">Home Address : </p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.custhomeAddress?.message}
                </span>
              </span>
              <span className="relative">
                <textarea
                  {...register("custofficeAddres", {
                    required: "Home Address Required!",
                  })}
                  rows="2"
                  cols="20"
                  type="text"
                  name="custofficeAddres"
                  value={note.custofficeAddres}
                  onChange={InputEvent}
                />
                <p className="pp">Office Address : </p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.custofficeAddres?.message}
                </span>
              </span>
            </div>

            {/* Product Information */}
            <div className="child flex justify-center font-bold my-3">
              Product
            </div>
            <div className="child">
              <span className="relative">
                <input
                  {...register("instprice", {
                    required: "Inst. Price Required!",
                  })}
                  type="number"
                  name="instprice"
                  value={note.instprice}
                  onChange={InputEvent}
                />
                <p className="pp">Inst. Price : </p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.instprice?.message}
                </span>
              </span>
              <span className="relative">
                <input
                  {...register("actInstall", {
                    required: "Act. Install  Required!",
                  })}
                  type="number"
                  name="actInstall"
                  value={note.actInstall}
                  onChange={InputEvent}
                />
                <p className="pp">Act. Install : </p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.actInstall?.message}
                </span>
              </span>
              <span className="relative">
                <input
                  {...register("actAdvance", {
                    required: "Act Advance Required!",
                  })}
                  type="number"
                  name="actAdvance"
                  value={note.actAdvance}
                  onChange={InputEvent}
                />
                <p className="pp">Act Advance : </p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.actAdvance?.message}
                </span>
              </span>
              <span className="relative">
                <input
                  {...register("advanceRev", {
                    required: "Advance Rev Required!",
                  })}
                  type="number"
                  name="advanceRev"
                  value={note.advanceRev}
                  onChange={InputEvent}
                />
                <p className="pp">Advance Rev : </p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.advanceRev?.message}
                </span>
              </span>
              <span className="relative">
                <input
                  {...register("totalRev", {
                    required: "Total Rev Required!",
                  })}
                  type="number"
                  name="totalRev"
                  value={note.totalRev}
                  onChange={InputEvent}
                />
                <p className="pp">Total Rev : </p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.totalRev?.message}
                </span>
              </span>
              <span className="relative">
                <input
                  {...register("discount", {
                    required: "Discount Required!",
                  })}
                  type="number"
                  name="discount"
                  value={note.discount}
                  onChange={InputEvent}
                />
                <p className="pp">Discount : </p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.discount?.message}
                </span>
              </span>
            </div>
            <div className="child">
              <span className="relative">
                <input
                  {...register("balance", {
                    required: "Balance Required!",
                  })}
                  type="number"
                  name="balance"
                  value={note.balance}
                  onChange={InputEvent}
                />
                <p className="pp">Balance : </p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.balance?.message}
                </span>
              </span>
              <span className="relative">
                <input
                  {...register("company", {
                    required: "Company Required!",
                  })}
                  type="text"
                  name="company"
                  value={note.company}
                  onChange={InputEvent}
                />
                <p className="pp">Company : </p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.company?.message}
                </span>
              </span>
              <span className="relative">
                <input
                  {...register("product", {
                    required: "Product Required!",
                  })}
                  type="text"
                  name="product"
                  value={note.product}
                  onChange={InputEvent}
                />
                <p className="pp">Product : </p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.product?.message}
                </span>
              </span>
              <span className="relative">
                <input
                  {...register("model", {
                    required: "Model Required!",
                  })}
                  type="text"
                  name="model"
                  value={note.model}
                  onChange={InputEvent}
                />
                <p className="pp">Model : </p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.model?.message}
                </span>
              </span>
              <span className="relative">
                <input
                  {...register("serialNo", {
                    required: "Serial No Required!",
                  })}
                  type="text"
                  name="serialNo"
                  value={note.serialNo}
                  onChange={InputEvent}
                />
                <p className="pp">IME No : </p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.serialNo?.message}
                </span>
              </span>
              <span className="relative">
                <input
                  {...register("fineTime", {
                    required: "Fine Time Required!",
                  })}
                  type="number"
                  name="fineTime"
                  value={note.fineTime}
                  onChange={InputEvent}
                />
                <p className="pp">Fine Time : </p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.fineTime?.message}
                </span>
              </span>
            </div>
            <div className="child">
              <span className="relative">
                <input
                  {...register("fineRev", {
                    required: "FineRev Required!",
                  })}
                  type="text"
                  name="fineRev"
                  value={note.fineRev}
                  onChange={InputEvent}
                />
                <p className="pp">FineRev : </p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.fineRev?.message}
                </span>
              </span>
              <span className="relative">
                <input
                  {...register("fineExp", {
                    required: "fineExp Required!",
                  })}
                  type="number"
                  name="fineExp"
                  value={note.fineExp}
                  onChange={InputEvent}
                />
                <p className="pp">fineExp : </p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.fineExp?.message}
                </span>
              </span>
              <span className="relative">
                <input
                  {...register("duration", {
                    required: "duration Required!",
                  })}
                  type="number"
                  name="duration"
                  value={note.duration}
                  onChange={InputEvent}
                />
                <p className="pp">Duration : </p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.duration?.message}
                </span>
              </span>
              <span className="relative">
                <input
                  {...register("instRev", {
                    required: "InstRev Required!",
                  })}
                  type="number"
                  name="instRev"
                  value={note.instRev}
                  onChange={InputEvent}
                />
                <p className="pp">InstRev : </p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.instRev?.message}
                </span>
              </span>
              <span className="relative">
                <input
                  {...register("instRem", {
                    required: "InstRem Required!",
                  })}
                  type="number"
                  name="instRem"
                  value={note.instRem}
                  onChange={InputEvent}
                />
                <p className="pp">InstRem : </p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.instRem?.message}
                </span>
              </span>
              <span className="relative">
                <input
                  {...register("status", {
                    required: "status Required!",
                  })}
                  type="text"
                  name="status"
                  value={note.status}
                  onChange={InputEvent}
                />
                <p className="pp">Status : </p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.status?.message}
                </span>
              </span>
            </div>
            <div className="child">
              <span className="relative">
                <input
                  {...register("srm", {
                    required: "SRM Required!",
                  })}
                  type="text"
                  name="srm"
                  value={note.srm}
                  onChange={InputEvent}
                />
                <p className="pp">SRM : </p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.srm?.message}
                </span>
              </span>
              <span className="relative">
                <input
                  {...register("rm", {
                    required: "RM Required!",
                  })}
                  type="text"
                  name="rm"
                  value={note.rm}
                  onChange={InputEvent}
                />
                <p className="pp">RM : </p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.rm?.message}
                </span>
              </span>
              <span className="relative">
                <input
                  {...register("crc", {
                    required: "CRC (J) Required!",
                  })}
                  type="text"
                  name="crc"
                  value={note.crc}
                  onChange={InputEvent}
                />
                <p className="pp">CRC (J) : </p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.crc?.message}
                </span>
              </span>
              <span className="relative">
                <input
                  {...register("delvMng", {
                    required: "Delv Mng Required!",
                  })}
                  type="text"
                  name="delvMng"
                  value={note.delvMng}
                  onChange={InputEvent}
                />
                <p className="pp">Delv Mng : </p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.delvMng?.message}
                </span>
              </span>
              <span className="relative">
                <input
                  {...register("secondMng", {
                    required: "2nd Mng Required!",
                  })}
                  type="text"
                  name="secondMng"
                  value={note.secondMng}
                  onChange={InputEvent}
                />
                <p className="pp">2nd Mng : </p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.secondMng?.message}
                </span>
              </span>
              <span className="relative">
                <input
                  {...register("inqvOff", {
                    required: "Inqv Off Required!",
                  })}
                  type="text"
                  name="inqvOff"
                  value={note.inqvOff}
                  onChange={InputEvent}
                />
                <p className="pp">Inqv Off : </p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.inqvOff?.message}
                </span>
              </span>
              <span className="relative">
                <input
                  {...register("markOff", {
                    required: "Mark Off Required!",
                  })}
                  type="text"
                  name="markOff"
                  value={note.markOff}
                  onChange={InputEvent}
                />
                <p className="pp">Mark Off: </p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.markOff?.message}
                </span>
              </span>
            </div>
            <div className="child">
              <span className="relative">
                <input
                  {...register("doo", {
                    required: "Do Required!",
                  })}
                  type="text"
                  name="doo"
                  value={note.doo}
                  onChange={InputEvent}
                />
                <p className="pp">Do : </p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.doo?.message}
                </span>
              </span>
              <span className="relative">
                <input
                  {...register("processAT", {
                    required: "Process AT Required!",
                  })}
                  type="text"
                  name="processAT"
                  value={note.processAT}
                  onChange={InputEvent}
                />
                <p className="pp">Process At : </p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.processAT?.message}
                </span>
              </span>
              <span className="relative">
                <input
                  {...register("defaulter", {
                    required: "Defaulter  Required!",
                  })}
                  type="text"
                  name="defaulter"
                  value={note.defaulter}
                  onChange={InputEvent}
                />
                <p className="pp">Defaulter : </p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.defaulter?.message}
                </span>
              </span>
              <span className="relative">
                <input
                  {...register("pto", {
                    required: "PTO  Required!",
                  })}
                  type="text"
                  name="pto"
                  value={note.pto}
                  onChange={InputEvent}
                />
                <p className="pp">PTO : </p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.pto?.message}
                </span>
              </span>
              <span className="relative">
                <input
                  {...register("vpn", {
                    required: "VPN  Required!",
                  })}
                  type="text"
                  name="vpn"
                  value={note.vpn}
                  onChange={InputEvent}
                />
                <p className="pp">VPN : </p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.vpn?.message}
                </span>
              </span>
              <span className="relative">
                <input
                  {...register("processFee", {
                    required: "ProcessFee  Required!",
                  })}
                  type="text"
                  name="processFee"
                  value={note.processFee}
                  onChange={InputEvent}
                />
                <p className="pp">Process Fee : </p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.processFee?.message}
                </span>
              </span>
              <span className="relative">
                <input
                  {...register("salary", {
                    required: "Salary/Income  Required!",
                  })}
                  type="text"
                  name="salary"
                  value={note.salary}
                  onChange={InputEvent}
                />
                <p className="pp">Salary/Income : </p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.salary?.message}
                </span>
              </span>
            </div>

            <div className="child flex justify-center font-bold my-3 ">
              Guaranter 1
            </div>
            {/* Guaranter 1 Data */}
            <div className="child">
              <span className="relative">
                <input
                  {...register("gName", {
                    required: "Name Required!",
                    minLength: {
                      value: 3,
                      message: "Name should be greater than 3 characters",
                    },
                    maxLength: {
                      value: 20,
                      message: "Name should be less than 20 characters",
                    },
                  })}
                  type="text"
                  name="gName"
                  value={note.gName}
                  onChange={InputEvent}
                />
                <p className="pp">Guaranter Name :</p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.gName?.message}
                </span>
              </span>
              <span className="relative">
                <input
                  {...register("gfName", {
                    required: "FName  Required!",
                    minLength: {
                      value: 3,
                      message: "Name should be greater than 3 characters",
                    },
                    maxLength: {
                      value: 20,
                      message: "Name should be less than 20 characters",
                    },
                  })}
                  type="text"
                  name="gfName"
                  value={note.gfName}
                  onChange={InputEvent}
                />
                <p className="pp">Father Name :</p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.gfName?.message}
                </span>
              </span>
              <span className="relative">
                <input
                  {...register("grelation", {
                    required: "Relation Required !",
                    maxLength: {
                      value: 20,
                      message: "G relation should be less than 20 characters",
                    },
                  })}
                  type="text"
                  name="grelation"
                  value={note.grelation}
                  onChange={InputEvent}
                />
                <p className="pp">Relation :</p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.grelation?.message}
                </span>
              </span>
              <span className="relative">
                <input
                  {...register("gOccupation", {
                    required: "Occupation Required!",
                    maxLength: {
                      value: 20,
                      message: "Occupation should be less than 20 characters",
                    },
                  })}
                  type="text"
                  name="gOccupation"
                  required
                  value={note.gOccupation}
                  onChange={InputEvent}
                />
                <p className="pp">Occupation :</p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.gOccupation?.message}
                </span>
              </span>
            </div>
            <div className="child">
              <span>
                <InputMask
                  mask="9999-9999999"
                  {...register("gmobileNumber1", {
                    required: "Mobile Required!",
                  })}
                  // type="number"
                  name="gmobileNumber1"
                  value={note.gmobileNumber1}
                  onChange={InputEvent}
                />
                <p className="pp">Mobile No:1</p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.gmobileNumber1?.message}
                </span>
              </span>
              <span className="relative">
                <InputMask
                  mask="9999-9999999"
                  {...register("gmobileNumber2", {
                    required: " Mobile Required!",
                  })}
                  // type="number"
                  name="gmobileNumber2"
                  required
                  value={note.gmobileNumber2}
                  onChange={InputEvent}
                />
                <p className="pp">Mobile No :2</p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.gmobileNumber2?.message}
                </span>
              </span>
              <span className="relative">
                <InputMask
                  mask="99999-9999999-9"
                  {...register("gcnic", {
                    required: " CNIC Required!",
                  })}
                  // type="number"
                  name="gcnic"
                  value={note.gcnic}
                  onChange={InputEvent}
                />
                <p className="pp">CNIC Number :</p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.gcnic?.message}
                </span>
              </span>
              <span className="relative">
                <input
                  {...register("gimage", {
                    // required: " Image Required!",
                  })}
                  type="file"
                  name="gimage"
                  // value={note.image}
                  onChange={InputFile}
                />
                <p className="pp">CNIC Image :</p>
                {/* <span className="text-sm text-red-500 font-bold">
                  {errors.gimage?.message}
                </span> */}
              </span>
            </div>
            <div className="child">
              <span className="relative">
                <textarea
                  {...register("ghomeAddress", {
                    required: " Home Address Required! ",
                  })}
                  rows="2"
                  cols="20"
                  type="text"
                  name="ghomeAddress"
                  value={note.ghomeAddress}
                  onChange={InputEvent}
                />
                <p className="pp">Home Address :</p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.ghomeAddress?.message}
                </span>
              </span>
              <span className="relative">
                <textarea
                  {...register("gofficeAddres", {
                    required: " Office Address Required! ",
                  })}
                  rows="2"
                  cols="20"
                  type="text"
                  name="gofficeAddres"
                  value={note.gofficeAddres}
                  onChange={InputEvent}
                />
                <p className="pp">Office Address :</p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.gofficeAddres?.message}
                </span>
              </span>
            </div>

            {/* Guaranter 2 Data */}
            <div className="child flex justify-center font-bold my-3 ">
              Guaranter 2
            </div>

            <div className="child">
              <span className="relative">
                <input
                  {...register("g2Name", {
                    required: "Name Required!",
                    minLength: {
                      value: 3,
                      message: "Name should be greater than 3 characters",
                    },
                    maxLength: {
                      value: 20,
                      message: "Name should be less than 20 characters",
                    },
                  })}
                  type="text"
                  name="g2Name"
                  value={note.g2Name}
                  onChange={InputEvent}
                />
                <p className="pp">Guaranter Name :</p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.g2Name?.message}
                </span>
              </span>
              <span className="relative">
                <input
                  {...register("g2fName", {
                    required: "FName  Required!",
                    minLength: {
                      value: 3,
                      message: "Name should be greater than 3 characters",
                    },
                    maxLength: {
                      value: 20,
                      message: "Name should be less than 20 characters",
                    },
                  })}
                  type="text"
                  name="g2fName"
                  value={note.g2fName}
                  onChange={InputEvent}
                />
                <p className="pp">Father Name :</p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.g2fName?.message}
                </span>
              </span>
              <span className="relative">
                <input
                  {...register("g2relation", {
                    required: "Relation Required!",
                    maxLength: {
                      value: 20,
                      message: "G2 relation should be less than 20 characters",
                    },
                  })}
                  type="text"
                  name="g2relation"
                  value={note.g2relation}
                  onChange={InputEvent}
                />
                <p className="pp">Relation :</p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.g2relation?.message}
                </span>
              </span>
              <span className="relative">
                <input
                  {...register("g2occupation", {
                    required: "Occupation Required!",
                    maxLength: {
                      value: 20,
                      message: "Occupation should be less than 20 characters",
                    },
                  })}
                  type="text"
                  name="g2occupation"
                  required
                  value={note.g2occupation}
                  onChange={InputEvent}
                />
                <p className="pp">Occupation :</p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.g2occupation?.message}
                </span>
              </span>
            </div>
            <div className="child">
              <span>
                <InputMask
                  mask="9999-9999999"
                  {...register("g2mobileNumber1", {
                    required: "Mobile Required!",
                  })}
                  // type="number"
                  name="g2mobileNumber1"
                  value={note.g2mobileNumber1}
                  onChange={InputEvent}
                />
                <p className="pp">Mobile No:1</p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.g2mobileNumber1?.message}
                </span>
              </span>
              <span className="relative">
                <InputMask
                  mask="9999-9999999"
                  {...register("g2mobileNumber2", {
                    required: " Mobile Required!",
                  })}
                  // type="number"
                  name="g2mobileNumber2"
                  required
                  value={note.g2mobileNumber2}
                  onChange={InputEvent}
                />
                <p className="pp">Mobile No :2</p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.g2mobileNumber2?.message}
                </span>
              </span>
              <span className="relative">
                <InputMask
                  mask="99999-9999999-9"
                  {...register("g2cnic", {
                    required: " CNIC Required!",
                  })}
                  // type="number"
                  name="g2cnic"
                  value={note.g2cnic}
                  onChange={InputEvent}
                />
                <p className="pp">CNIC Number :</p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.g2cnic?.message}
                </span>
              </span>
              <span className="relative">
                <input
                  {...register("g2image", {
                    // required: " Image Required!",
                  })}
                  type="file"
                  name="g2image"
                  // value={note.g2image}
                  onChange={InputFile}
                />
                <p className="pp">CNIC Image :</p>
                {/* <span className="text-sm text-red-500 font-bold">
                  {errors.g2image?.message}
                </span> */}
              </span>
            </div>
            <div className="child">
              <span className="relative">
                <textarea
                  {...register("g2homeAddress", {
                    required: "Home Address Required!",
                  })}
                  rows="2"
                  cols="20"
                  type="text"
                  name="g2homeAddress"
                  value={note.g2homeAddress}
                  onChange={InputEvent}
                />
                <p className="pp">Home Address :</p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.g2homeAddress?.message}
                </span>
              </span>
              <span className="relative">
                <textarea
                  {...register("g2officeAddres", {
                    required: "Office Address Required!",
                  })}
                  rows="2"
                  cols="20"
                  type="text"
                  name="g2officeAddres"
                  value={note.g2officeAddres}
                  onChange={InputEvent}
                />
                <p className="pp">Office Address :</p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.g2officeAddres?.message}
                </span>
              </span>
            </div>

            {/* <div className="child flex justify-center font-bold my-3 ">
              Registration images
            </div> */}
            {/* <div className="child">
              <span className="relative">
                <input
                  type="file"
                  multiple
                  name="inquiryImages"
                  onChange={InputFile}
                />
                <p className="pp">CNIC Image :</p>
              </span>
            </div> */}
            <button onClick={handleSubmit(HandleForm)}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

const formatPhoneNumber = (phoneNumber) => {
  const number = phoneNumber.trim().replace(/[^0-9]/g, "");

  if (number.length < 6) return number;
  if (number.length < 14) return number.replace(/(\d{5})(\d{7})/, "$1-$2");
  if (number.length < 16)
    return number.replace(/(\d{5})(\d{7})(\d{1})/, "$1-$2-$3");
  return number.replace(/(\d{5})(\d{7})(\d{1})/, "$1-$2-$3");
};

// function formatPhoneNumber(value) {
//   if (!value) return value;
//   const cnicNumber = value.replace(/[^/d]/g, "");
//   console.log(cnicNumber, "lks");
//   const cnicNumberLength = cnicNumber.length;
//   if (cnicNumberLength < 6) return cnicNumber;
//   if (cnicNumberLength < 7) {
//     return `(${cnicNumber.slice(0, 5)})-${cnicNumber.slice(5)}`;
//   }
//   return `(${cnicNumber.slice(0, 5)})-${cnicNumber.slice(
//     5,
//     11
//   )}-${cnicNumber.slice(11, 13)}`;
// }
