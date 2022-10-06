import mongoose from "mongoose";

const installmentSchema = mongoose.Schema(
  {
    date: {
      type: String,
    },
    slipNo: {
      type: Number,
    },
    preBalance: {
      type: Number,
    },
    installment: {
      type: Number,
    },
    discount: {
      type: Number,
    },
    fine: {
      type: Number,
    },
    fineType: {
      type: String,
    },
    recoveryOfficer: {
      type: String,
    },
    remarks: {
      type: String,
    },
    balance: {
      type: Number,
    },
    customer: [{ type: mongoose.Schema.Types.ObjectId, ref: "Customer" }],
    _creator: {
      type: "ObjectId",
      ref: "Customer",
    },
  },
  {
    timestamps: true,
  }
);

const Installment = mongoose.model("Installment", installmentSchema);
export default Installment;
