// import { Student, Class } from "../models/extra.js";
// import Class from "../models/extra.js";
import { Student, Class } from "../models/extra.js";
import express from "express";

// Routes
const extra = express.Router();

// student create
extra.post("/student", async (req, res) => {
  const data = req.body;
  try {
    const result = await Student.create(data);
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
});

// Student get
extra.get("/student", async (req, res) => {
  try {
    const result = await Student.find();
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
});

// Class create
extra.post("/class", async (req, res) => {
  // const data = req.body;
  const cl = new Class();
  cl.name = req.body.name;
  cl.students = [];
  try {
    const result = await Class.create({
      name: cl.name,
      students: cl.students,
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
});

// Class get
extra.get("/class", async (req, res) => {
  try {
    const result = await Class.find().populate("students");
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
});

extra.put("/class/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  // console.log("looking for id ", data, "compraing with", id);
  try {
    const result = await Class.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { students: req.body.studentId } },
      { new: true }
    );
    console.log("hera is result:", result);
    // const reslut = Class.findByIdAndUpdate(id, data, { new: true });
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
});

export default extra;
