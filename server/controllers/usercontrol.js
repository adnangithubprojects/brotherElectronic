import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// user create get delete and update authuization tokenCreation
// user create
export const postUser = async (req, res) => {
  const { name, email, password, confirmpassword } = req.body;
  const hashPassword = await bcrypt.hash(password, 10);

  try {
    const result = await User.create({
      name,
      email,
      password: hashPassword,
      confirmpassword: hashPassword,
    });
    res.json({
      status: "success",
      result,
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
};

// user get
export const getUser = async (req, res) => {
  try {
    const result = await User.find();
    res.status(200).json({
      status: "success",
      result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

// user delete
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await User.findByIdAndDelete(id);
    res.status(200).json({
      status: "succes",
      result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

// user update
export const updateUser = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const result = await User.findByIdAndUpdate(id, data, { new: true });
    res.status(200).json({
      status: "succes",
      result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

// user Authorization
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.status(400).json({
        status: "failed",
        message: "please enter valid email and password",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ status: "fail", message: "wrong credential" });
    }
    const compPassword = await bcrypt.compare(password, user.password);
    if (!compPassword) {
      return res
        .status(401)
        .json({ status: "fail", message: "wrong credential" });
    }
    const token = jwt.sign(
      { name: user.email, id: user.id },
      "key",
      // process.env.SECRETE_KEY,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({
      email,
      password,
      token,
    });
    // res.json({ email, password });
  } catch (error) {
    res.status(401).json({
      status: "failed",
      message: error.message,
    });
    console.log(error);
  }
};
