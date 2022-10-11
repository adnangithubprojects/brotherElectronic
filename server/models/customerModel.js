import mongoose from "mongoose";
import Installment from "../models/installmentModel.js";

const CustomerSchema = mongoose.Schema(
  {
    // customer feilds
    cutomerName: {
      type: String,
      required: [true, "Name is required"],
    },
    custFName: {
      type: String,
      required: [true, "Name is required"],
    },
    resedential: {
      type: String,
      required: [true, "Name is required"],
    },
    occupation: {
      type: String,
      required: [true, "Name is required"],
    },
    custMobile1: {
      type: Number,
      required: [true, "Number Required!"],
    },
    custMobile2: {
      type: Number,
      required: [true, "Number Required!"],
    },
    custCnic: {
      type: Number,
      required: [true, "CNIC number Required!"],
    },
    custImage: {
      type: [Object],
      // required: [true, "image Required!"],
    },
    custCnicImage: {
      type: [Object],
      // required: [true, "CNIC image Required!"],
    },
    gender: {
      type: String,
    },
    custhomeAddress: {
      type: String,
      required: [true, "Number Required!"],
    },
    custofficeAddres: {
      type: String,
      required: [true, "Number Required!"],
    },
    custstatus: {
      type: String,
    },

    // Product feilds
    instprice: {
      type: String,
    },
    actInstall: {
      type: String,
    },
    actAdvance: {
      type: String,
    },
    advanceRev: {
      type: String,
    },
    totalRev: {
      type: String,
    },
    discount: {
      type: String,
    },
    balance: {
      type: String,
    },
    company: {
      type: String,
    },
    product: {
      type: String,
    },
    model: {
      type: String,
    },
    fineTime: {
      type: String,
    },
    serialNo: {
      type: String,
    },
    fineRev: {
      type: String,
    },
    fineExp: {
      type: String,
    },
    duration: {
      type: String,
    },
    instRev: {
      type: String,
    },
    instRem: {
      type: String,
    },
    status: {
      type: String,
    },
    srm: {
      type: String,
    },
    rm: {
      type: String,
    },
    crc: {
      type: String,
    },
    delvMng: {
      type: String,
    },
    secondMng: {
      type: String,
    },
    inqvOff: {
      type: String,
    },
    markOff: {
      type: String,
    },
    doo: {
      type: String,
    },
    processAT: {
      type: String,
    },
    defaulter: {
      type: String,
    },
    pto: {
      type: String,
    },
    vpn: {
      type: String,
    },
    processFee: {
      type: String,
    },
    salary: {
      type: String,
    },

    // ================================================================

    //   Guranter 1
    gName: {
      type: String,
      required: [true, "G Name Required!"],
    },
    gfName: {
      type: String,
      required: [true, "Father Name Required!"],
    },
    grelation: {
      type: String,
      required: [true, "Relation Required!"],
    },
    gOccupation: {
      type: String,
      required: [true, "Occupation Required!"],
    },
    gmobileNumber1: {
      type: String,
      required: [true, "Number Required!"],
    },
    gmobileNumber2: {
      type: String,
      required: [true, "Number Required!"],
    },
    gcnic: {
      type: String,
      required: [true, "CNIC Required!"],
    },
    gimage: {
      type: [Object],
      // required: [true, "CNIC image Required!"],
    },
    ghomeAddress: {
      type: String,
      required: [true, "Home address Required!"],
    },
    gofficeAddres: {
      type: String,
      required: [true, "Office address Required!"],
    },
    // ================================================================

    //   Guranter 2
    g2Name: {
      type: String,
      required: [true, "G Name Required!"],
    },
    g2fName: {
      type: String,
      required: [true, "Father Name Required!"],
    },
    g2relation: {
      type: String,
      required: [true, "Reltion  Required!"],
    },
    g2occupation: {
      type: String,
      required: [true, "Occupation Required!"],
    },
    g2mobileNumber1: {
      type: String,
      required: [true, "Number Required!"],
    },
    g2mobileNumber2: {
      type: String,
      required: [true, "Number Required!"],
    },
    g2cnic: {
      type: String,
      required: [true, "CNIC Required!"],
    },
    g2image: {
      type: [Object],
      // required: [true, "CNIC Image Required!"],
    },
    g2homeAddress: {
      type: String,
      required: [true, "Home Address Required!"],
    },
    g2officeAddres: {
      type: String,
      required: [true, "Office Address Required!"],
    },

    // customer Inquiry Images
    inquiryImages: {
      type: [Object],
    },

    installments: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Installment" },
    ],
  },
  {
    timestamps: true,
  }
);

const Customer = mongoose.model("Customer", CustomerSchema);
export default Customer;
