import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Enter Email or Username!"],
    unique: [true, "Enter different username or Email!"],
  },
  password: {
    type: String,
    required: [true, "Enter password!"],
  },
  confirmpassword: {
    type: String,
    required: [true, "Password should be Same!"],
  },
});

const User = mongoose.model("User", UserSchema);
export default User;
