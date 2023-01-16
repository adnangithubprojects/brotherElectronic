import React, { useEffect, useRef, useState } from "react";
import { FaEdit, FaTrashAlt, FaTimes, FaAngleDown } from "react-icons/fa";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
// import { NavLink } from "react-router-dom";
import axios from "axios";
import DeleteBox from "../component/DeleteBox";
import { base_url, customer } from "../assets/data/config";
import "../style/user.css";
import { BiWindows } from "react-icons/bi";
// import Form from "./CustomerForm";
export default function PendingDetail() {
  const [Search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const [show, setShow] = useState(true);
  const [dialog, setDialog] = useState(false);
  const confirmId = useRef();
  const token = localStorage.getItem("token");
  const message = "Are you sure you want to Delete Customer!";
  function onDelete(id) {
    setDialog(true);
    confirmId.current = id;
  }
  async function confirmDelete(choose) {
    if (choose) {
      try {
        const res = await axios.delete(
          `${base_url}/customer/${confirmId.current}`,
          {
            headers: {
              token: token,
            },
          }
        );
        // setData(data.filter((it) => it.Sno !== confirmId.current));
        setDialog(!dialog);
        window.alert("Cutomer Deleted");
        customerData("Pending");
      } catch (error) {
        console.log(error);
      }
    } else {
      setDialog(false);
    }
  }
  // function abc(opt) {
  //   const updateData = customer.filter((it) => {
  //     return it.status === opt;
  //   });
  //   setData(updateData);
  // }
  // useEffect(() => {
  //   abc("pending");
  // }, []);

  // getting data from backend
  const customerData = async (opt) => {
    const res = await axios.get(`${base_url}/customer/get`, {
      headers: {
        token: token,
      },
    });
    const req = await res.data.result;
    const updateData = await req.filter((data) => data.custstatus === opt);
    setData(updateData);
    // setData(req);
  };

  const selectUser = async (data) => {
    setUser(data);
    // console.log("heloo", user);
  };

  useEffect(() => {
    customerData("Pending");
  }, []);

  return (
    <div className="bg-gray-200 w-full  py-3 h-[] overflow-hidden flex justify-center">
      <div className="scroll1">
        <input
          type="text"
          placeholder="Search"
          value={Search}
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none py-2 rounded mt-1 px-3 border-2 border-blue-700"
        />
        <h1 className="text-xl sm:text-2xl font-bold  py-2 ">
          Pending Customer
        </h1>
        <table className="text-xs md:text-base border border-gray-400   w-[300px] sm:w-[400px] md:w-full ">
          <tbody className=" text-center">
            <tr className="flex justify-between md:justify-evenly gap-x-5 font-bold capitalize bg-gray-200 py-2 ">
              <td className="md:text-center w-8 md:w-16 ">Acc No</td>
              <td className="md:text-center w-10 md:w-36  md:pl-5 ">Name</td>
              <td className="md:text-right w-20 md:w-36  md:pr-5 ">F Name</td>
              <td className="md:text-right w-12 md:w-32 pr-4 md:pr-6 ">cell</td>
              <td className=" hidden md:flex items-center justify-end md:pr-5 md:w-32  ">
                edit
              </td>
            </tr>
            {data
              ?.filter((fil) => {
                if (Search == "") {
                  return fil;
                } else if (
                  fil.cutomerName
                    .toLocaleLowerCase()
                    .includes(Search.toLocaleLowerCase())
                ) {
                  return fil.cutomerName;
                }
              })
              .map((data, index) => {
                return (
                  <>
                    <tr
                      className="flex justify-between md:justify-around capitalize cursor-pointer py-2 border-t border-gray-400 bg-white hover:bg-gray-200"
                      key={data?._id}
                    >
                      <td className="md:text-center w-8 md:w-12 ">
                        {data?.accountNo}
                      </td>
                      <td className="md:text-center w-16 md:w-36 text-sm">
                        {data?.cutomerName}
                      </td>

                      <td className={`md:text-center w-16 md:w-36 text-sm `}>
                        {data?.custFName}
                      </td>
                      <td className="md:text-center  md:w-28 ">
                        {data?.custMobile1}
                      </td>

                      <td className="hidden md:flex gap-2 text-white">
                        <span
                          onClick={() => {
                            setShow(!show);
                            selectUser(data);
                          }}
                          className="p-2  text-sm border rounded-full bg-green-600 hover:text-green-700 hover:bg-white transition-all duration-300"
                        >
                          <FaEdit />
                        </span>
                        <span
                          onClick={() => {
                            onDelete(data?._id);
                          }}
                          className="p-2 text-sm border rounded-full bg-rose-600 hover:text-red-600 hover:bg-white transition-all duration-300"
                        >
                          <FaTrashAlt />
                        </span>
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
      {dialog ? (
        <DeleteBox confirmDelete={confirmDelete} message={message} />
      ) : (
        ""
      )}
      <div className={`${!show ? "PopUp" : ""} `}>
        {!show ? (
          <CutomerForm
            show={show}
            setShow={setShow}
            user={user}
            customerData={customerData}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

// edit Form
export function CutomerForm({ show, setShow, user, customerData }) {
  // form validation
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // const [gender, setGender] = useState("male");
  const [icon, setIcon] = useState(false);
  const [note, setNote] = useState({
    // customer info
    cutomerName: "",
    custFName: "",
    resedential: "",
    occupation: "",
    custMobile1: "",
    custMobile2: "",
    custCnic: "",
    custImage: "",
    custCnicImage: "",
    gender: "male",
    custhomeAddress: "",
    custofficeAddres: "",
    custstatus: "",
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
    discount: "",
    //
    balance: "",
    company: "",
    product: "",
    model: "",
    serialNo: "0",
    fineTime: "",
    //
    fineRev: "",
    fineExp: "",
    duration: "",
    instRev: "",
    instRem: "",
    status: "",
    //
    srm: "",
    rm: "",
    crc: "",
    delvMng: "",
    secondMng: "",
    inqvOff: "",
    markOff: "",
    //
    doo: "",
    processAT: "",
    defaulter: "",
    pto: "",
    vpn: "",
    processFee: "",
    salary: "",

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

    // images
    inquiryImages: [],
  });
  const token = localStorage.getItem("token");
  // InputEvent function or getting value from field
  function InputEvent(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setNote((prevData) => {
      return { ...prevData, [name]: value };
    });
  }

  function InputFile(e) {
    e.preventDefault();
    setNote((prev) => {
      return { ...prev, [e.target.name]: e.target.files[0] };
    });
  }
  // selected data
  useEffect(() => {
    setNote({
      id: user?._id,
      // customer info
      cutomerName: user?.cutomerName,
      custFName: user?.custFName,
      resedential: user?.resedential,
      occupation: user?.occupation,
      custMobile1: user?.custMobile1,
      custMobile2: user?.custMobile2,
      custCnic: user?.custCnic,
      // custImage: user?.custImage[0],
      // custCnicImage: user?.custCnicImage[0],
      gender: user?.gender,
      custhomeAddress: user?.custhomeAddress,
      custofficeAddres: user?.custofficeAddres,
      custstatus: user?.custstatus,
      custRepeat: user?.custRepeat,
      custRepeatGauranter: user?.custRepeatGauranter,
      custPreviosAccount: user?.custPreviosAccount,
      accountNo: user?.accountNo,

      // Product:=>
      instprice: user?.instprice,
      actInstall: user?.actInstall,
      actAdvance: user?.actAdvance,
      advanceRev: user?.advanceRev,
      totalRev: user?.totalRev,
      discount: user?.discount,
      //
      balance: user?.balance,
      company: user?.company,
      product: user?.product,
      model: user?.model,
      serialNo: user?.serialNo,
      fineTime: user?.fineTime,
      //
      fineRev: user?.fineRev,
      fineExp: user?.fineExp,
      duration: user?.duration,
      instRev: user?.instRev,
      instRem: user?.instRem,
      status: user?.status,
      //
      srm: user?.srm,
      rm: user?.rm,
      crc: user?.crc,
      delvMng: user?.delvMng,
      secondMng: user?.secondMng,
      inqvOff: user?.inqvOff,
      markOff: user?.markOff,
      //
      doo: user?.doo,
      processAT: user?.processAT,
      defaulter: user?.defaulter,
      pto: user?.pto,
      vpn: user?.vpn,
      processFee: user?.processFee,
      salary: user?.salary,

      // guaranter 1:=>
      gName: user?.gName,
      gfName: user?.gfName,
      grelation: user?.grelation,
      gOccupation: user?.gOccupation,
      gmobileNumber1: user?.gmobileNumber1,
      gmobileNumber2: user?.gmobileNumber2,
      gcnic: user?.gcnic,
      // gimage: user?.gimage[0],
      ghomeAddress: user?.ghomeAddress,
      gofficeAddres: user?.gofficeAddres,

      // guaranter 2:=>
      g2Name: user?.g2Name,
      g2fName: user?.g2fName,
      g2relation: user?.g2relation,
      g2occupation: user?.g2occupation,
      g2mobileNumber1: user?.g2mobileNumber1,
      g2mobileNumber2: user?.g2mobileNumber2,
      g2cnic: user?.g2cnic,
      // g2image: user?.g2image[0],
      g2homeAddress: user?.g2homeAddress,
      g2officeAddres: user?.g2officeAddres,

      // images
      inquiryImages: [],
    });
  }, []);

  // sendind data to backend
  const HandleForm = async (a, e) => {
    console.log("adnan", note);
    e.preventDefault();

    const {
      id,
      cutomerName,
      custFName,
      resedential,
      occupation,
      custMobile1,
      custMobile2,
      custCnic,
      gender,
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
      g2homeAddress,
      g2officeAddres,

      inquiryImages,
    } = note;

    const custData = new FormData();
    // customer
    custData.append("cutomerName", cutomerName);
    custData.append("custFName", custFName);
    custData.append("resedential", resedential);
    custData.append("occupation", occupation);
    custData.append("custMobile1", custMobile1);
    custData.append("custMobile2", custMobile2);
    custData.append("custCnic", custCnic);
    custData.append("gender", gender);
    custData.append("custhomeAddress", custhomeAddress);
    custData.append("custofficeAddres", custofficeAddres);
    custData.append("custstatus", custstatus);
    custData.append("custRepeat", custRepeat);
    custData.append("custRepeatGauranter", custRepeatGauranter);
    custData.append("custPreviosAccount", custPreviosAccount);
    custData.append("accountNo", accountNo);

    // product
    custData.append("instprice", instprice);
    custData.append("actInstall", actInstall);
    custData.append("actAdvance", actAdvance);
    custData.append("advanceRev", advanceRev);
    custData.append("totalRev", totalRev);
    custData.append("discount", discount);
    custData.append("balance", balance);
    custData.append("company", company);
    custData.append("product", product);
    custData.append("model", model);
    custData.append("serialNo", serialNo);
    custData.append("fineTime", fineTime);
    custData.append("fineRev", fineRev);
    custData.append("fineExp", fineExp);
    custData.append("duration", duration);
    custData.append("instRev", instRev);
    custData.append("instRem", instRem);
    custData.append("status", status);
    custData.append("srm", srm);
    custData.append("rm", rm);
    custData.append("crc", crc);
    custData.append("delvMng", delvMng);
    custData.append("secondMng", secondMng);
    custData.append("inqvOff", inqvOff);
    custData.append("markOff", markOff);
    custData.append("doo", doo);
    custData.append("processAT", processAT);
    custData.append("defaulter", defaulter);
    custData.append("pto", pto);
    custData.append("vpn", vpn);
    custData.append("processFee", processFee);
    custData.append("salary", salary);

    // guaranter1
    custData.append("gName", gName);
    custData.append("gfName", gfName);
    custData.append("grelation", grelation);
    custData.append("gOccupation", gOccupation);
    custData.append("gmobileNumber1", gmobileNumber1);
    custData.append("gmobileNumber2", gmobileNumber2);
    custData.append("gcnic", gcnic);
    custData.append("ghomeAddress", ghomeAddress);
    custData.append("gofficeAddres", gofficeAddres);

    // guaranter2
    custData.append("g2Name", g2Name);
    custData.append("g2fName", g2fName);
    custData.append("g2relation", g2relation);
    custData.append("g2Occupation", g2occupation);
    custData.append("g2mobileNumber1", g2mobileNumber1);
    custData.append("g2mobileNumber2", g2mobileNumber2);
    custData.append("g2cnic", g2cnic);
    custData.append("g2homeAddress", g2homeAddress);
    custData.append("g2officeAddres", g2officeAddres);

    // custData.append("image", image);
    inquiryImages.map((it) => {
      console.log(it);
      custData.append("inquiryImages", it);
    });

    // const custData = new FormData();
    // for (let key in note) {
    //   custData.append(key, note[key]);
    // }
    try {
      const res = await axios
        .put(`${base_url}/customer/${id}`, custData, {
          headers: {
            "Content-Type": "multipart/form-data",
            token: token,
          },
        })
        .then((res) => {
          if (res) {
            window.alert("Customer Updated");
            setShow(!show);
            customerData("Pending");
          }
        });
    } catch (error) {
      console.log(error);
    }
    // console.log("halloworld", res);
  };
  return (
    <>
      <div className="Customer__Container">
        <div className="Customer__Container__Form">
          <h2 className="text-white  capitalize text-2xl ">Customer Form</h2>
          <FaTimes
            className="absolute top-5 right-5 text-3xl  "
            onClick={() => setShow(!show)}
          />
          <form action="post" method="POST" className="scrollbar-hide">
            {/* Customer Data */}
            <div className="child flex justify-center font-bold ">
              Customer Information
            </div>
            <div className="child">
              <span>
                <input
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
                  name="custMobile2"
                  value={note.custMobile2}
                  onChange={InputEvent}
                />
                <p className="pp">Mobile No : 2 </p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.custMobile2?.message}
                </span>
              </span>
              <span className="relative">
                <InputMask
                  mask="99999-9999999-9"
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
                    // required: "CNIC Reuired !",
                  })}
                  type="number"
                  name="accountNo"
                  value={note.accountNo}
                  onChange={InputEvent}
                />
                <p className="pp">Account No: </p>
                {/* <span className="text-sm text-red-500 font-bold">
                  {errors.accountNo?.message}
                </span> */}
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
                  type="file"
                  name="custImage"
                  // value={note.custImage}
                  onChange={InputFile}
                  disabled
                />
                <p className="pp">Customer Image : </p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.custImage?.message}
                </span>
              </span>
              <span className="relative">
                <input
                  type="file"
                  name="custCnicImage"
                  // value={note.custCnicImage}
                  onChange={InputFile}
                  disabled
                />
                <p className="pp">CNIC Image : </p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.custCnicImage?.message}
                </span>
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
                  type="text"
                  name="serialNo"
                  value={note.serialNo}
                  onChange={InputEvent}
                />
                <p className="pp">Serial No : </p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.serialNo?.message}
                </span>
              </span>
              <span className="relative">
                <input
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
                  mask="9999-9999999-9"
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
                  type="file"
                  name="gimage"
                  // value={note.image}
                  onChange={InputFile}
                  disabled
                />
                <p className="pp">CNIC Image :</p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.gimage?.message}
                </span>
              </span>
            </div>
            <div className="child">
              <span className="relative">
                <textarea
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
                  mask="9999-9999999-9"
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
                  type="file"
                  name="g2image"
                  // value={note.g2image}
                  onChange={InputFile}
                  disabled
                />
                <p className="pp">CNIC Image :</p>
                <span className="text-sm text-red-500 font-bold">
                  {errors.g2image?.message}
                </span>
              </span>
            </div>
            <div className="child">
              <span className="relative">
                <textarea
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

            <div className="child flex justify-center font-bold my-3 ">
              Registration images
            </div>
            <div className="child">
              <span className="relative">
                <input
                  type="file"
                  multiple
                  name="inquiryImages"
                  onChange={(e) =>
                    setNote({ ...note, inquiryImages: [...e.target.files] })
                  }
                />
                <p className="pp">Inquiry Images:</p>
              </span>
            </div>
            <button onClick={handleSubmit(HandleForm)}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
