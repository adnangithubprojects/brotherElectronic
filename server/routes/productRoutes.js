import express from "express";
import {
  deleteProduct,
  getProduct,
  postProduct,
  updateProduct,
} from "../controllers/productController.js";

const product = express.Router();
product.post("/product/post", postProduct);
product.get("/product/get", getProduct);
product.delete("/products", deleteProduct);
product.put("/product/:id", updateProduct);

export default product;
