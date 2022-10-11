import express from "express";
import {
  deleteCustomer,
  getCustomer,
  postCustomer,
  updateCustomer,
  getCustomerbyID,
  getSingleCustomerInstallments,
  // updateCustomers,
} from "../controllers/customerControl.js";
import { uploadFile } from "../utils/uploadImage.js";

const customer = express.Router();
customer.post(
  "/customer/post",
  uploadFile.fields([
    { name: "custImage", maxCount: 1 },
    { name: "custCnicImage", maxCount: 1 },
    { name: "gimage", maxCount: 1 },
    { name: "g2image", maxCount: 1 },
  ]),
  postCustomer
);
customer.get("/customer/get", getCustomer);
customer.get("/single-customer/:id", getSingleCustomerInstallments);
customer.put(
  "/customer/:id",
  uploadFile.fields([{ name: "inquiryImages", maxCount: 10 }]),
  updateCustomer
);
customer.get("/customer/get/:id", getCustomerbyID);
// customer.post("/customer/", updateCustomers);
customer.delete("/customer/:id", deleteCustomer);

export default customer;
