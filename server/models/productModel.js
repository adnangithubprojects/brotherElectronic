import mongoose from "mongoose";
import Customer from "../models/customerModel.js";

const productSchema = mongoose.Schema({
  pName: {
    type: String,
  },
  netPrice: {
    type: Number,
  },
  instPrice: {
    type: Number,
    // installment Price
  },
  profit: {
    type: Number,
  },
});

const Product = mongoose.model("Product", productSchema);
export default Product;
