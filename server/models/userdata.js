import mongoose from "mongoose";
import Installment from "./installmentModel.js";

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name Required!"],
  },
  username: {
    type: String,
    unique: [true, "Enter different username!"],
    required: [true, "username Required!"],
  },
  number: {
    type: Number,
    required: [true, "Email Required!"],
  },
  email: {
    type: String,
    required: [true, "Email Required!"],
  },
  password: {
    type: String,
    required: [true, "Enter Password!"],
  },
  confirmpassword: {
    type: String,
    required: [true, "Password should be Same!"],
  },
  role: {
    type: String,
    required: [true, "field should be Filled!"],
  },
  // installments: [{ type:Schema.Installment }],
});

const UserData = mongoose.model("UserData", UserSchema);
export default UserData;
