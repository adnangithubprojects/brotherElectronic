import Customer from "../models/customerModel.js";
import Installment from "../models/installmentModel.js";

export const postInstallment = async (req, res) => {
  try {
    const customer = await Customer.findOne({ _id: req.params.customerId });
    // try {
    // const installment = new Installment();
    // installment.date = req.body.date;
    // installment.slipNo = req.body.slipNo;
    // installment.preBalance = req.body.preBalance;
    // installment.installment = req.body.installment;
    // installment.discount = req.body.discount;
    // installment.fine = req.body.fine;
    // installment.fineType = req.body.fineType;
    // installment.recoveryOfficer = req.body.recoveryOfficer;
    // installment.remarks = req.body.remarks;
    // installment.balance = req.body.preBalance - req.body.installment;
    // installment.customer = customer._id;
    // customer.installments.push(installment._id);
    // console.log("installmentData", installment);

    // await installment.save();
    // await customer.save();
    // res.status(200).json({
    //   status: "success",
    //   result: installment,
    // });
    // res.send(installment);
    // } catch (error) {
    //   res.status(400).json({
    //     status: "failed",
    //     message: error.message,
    //   });
    // }
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
    } = req.body;

    const balance = preBalance - installment;
    const result = await Installment.create({
      date,
      slipNo,
      preBalance,
      installment,
      discount,
      fine,
      fineType,
      recoveryOfficer,
      remarks,
      balance: balance,
      customer: customer._id,
    });
    await customer.installments.push(result._id);
    await customer.save();

    res.status(200).json({
      status: "success",
      result,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

// Installment Get Data
export const getInstallment = async (req, res) => {
  try {
    const result = await Installment.find();
    res.status(200).json({
      status: "success",
      result,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};
// export const getInstallment = async (req, res) => {
//   const result = await Customer.find({ _id: req.params.customerId }).populate(
//     "installments"
//   );
//   try {
//     res.send({
//       status: "success",
//       result: result,
//     });
//   } catch (error) {
//     res.send({
//       status: "success",
//       message: error.message,
//     });
//   }
// };

// export const deleteInstallment = async (req, res) => {
//   const result = await Installment.deleteMany();
//   res.json({
//     status: "succes",
//     result,
//   });
// };
// export const updateInstallment = async (req, res) => {
//   const id = req.params.id;
//   const data = req.body;
//   const result = await Installment.findByIdAndUpdate(id, data, { new: true });
//   res.json({
//     status: "succes",
//     result,
//   });
// };
