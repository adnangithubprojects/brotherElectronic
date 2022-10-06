import mongoose from "mongoose";
// import { Schema } from "mongoose";

const studentSchema = mongoose.Schema({
  name: { type: String },
  age: { type: Number },
  subject: { type: String },
});
const classSchema = mongoose.Schema({
  name: {
    type: String,
  },
  students: [{ type: "ObjectId", ref: "Student" }],
});

const Student = mongoose.model("Student", studentSchema);
const Class = mongoose.model("Class", classSchema);
// export  default Class;
export { Student, Class };
