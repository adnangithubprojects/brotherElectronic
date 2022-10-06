import Product from "../models/productModel.js";

export const postProduct = async (req, res) => {
  const { pName, netPrice, instPrice } = req.body.body;
  const profit = instPrice - netPrice;

  try {
    const result = await Product.create({
      pName,
      netPrice,
      instPrice,
      profit: profit,
    });
    res.status(200).json({
      status: "success",
      result,
    });
  } catch (error) {
    res.status(400).status(200).json({
      status: "fail",
      message: error.message,
    });
  }
};

// Customer Get Data
export const getProduct = async (req, res) => {
  const result = await Product.find();
  res.json({
    status: "success",
    result,
  });
};

export const deleteProduct = async (req, res) => {
  const result = await Product.deleteMany();
  res.json({
    status: "succes",
    result,
  });
};
export const updateProduct = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const result = await Product.findByIdAndUpdate(id, data, { new: true });
  res.json({
    status: "succes",
    result,
  });
};
