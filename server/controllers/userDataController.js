import UserData from "../models/userdata.js";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// user create get delete and update authuization tokenCreation
// user create
export const postUserData = async (req, res) => {
  const { name, username, number, email, password, confirmpassword, role } =
    req.body;
  //   const hashPassword = await bcrypt.hash(password, 10);
  try {
    const result = await UserData.create({
      name,
      username,
      number,
      email,
      password,
      confirmpassword,
      role,
    });
    res.status(200).json({
      status: "success",
      result,
    });
  } catch (error) {
    res.status(401).json({
      status: "fail",
      error: error.message,
    });
  }
};

// user get
export const getUserData = async (req, res) => {
  try {
    const result = await UserData.find();
    res.status(200).json({
      status: "success",
      result,
    });
  } catch (error) {
    res.status(401).json({
      status: "fail",
      error: error.message,
    });
  }
};

// user delete
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await UserData.findByIdAndDelete(id);
    res.status(200).json({
      status: "success",
      result,
    });
  } catch (error) {
    res.status(401).json({
      status: "fail",
      error: error.message,
    });
  }
};

// user update
export const updateUser = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const result = await UserData.findByIdAndUpdate(id, data, { new: true });
    res.status(200).json({
      status: "success",
      result,
    });
  } catch (error) {
    res.status(401).json({
      status: "fail",
      error: error.message,
    });
  }
};

// user Authorization

// export const loginUser = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     if (!email || !password) {
//       res.json({
//         status: "failed",
//         message: "please enter valid email and password",
//       });
//     }

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.json({ status: "fail", massage: "wrong credential" });
//     }
//     const compPassword = await bcrypt.compare(password, user.password);
//     if (!compPassword) {
//       return res.json({ status: "fail", massage: "wrong p credential" });
//     }
//     const token = jwt.sign(
//       { name: user.email, id: user.id },
//       "key",
// process.env.SECRETE_KEY,
//       {
//         expiresIn: "1h",
//       }
//     );
//     res.json({ token });
//   } catch (error) {
//     res.json({
//       status: "failed",
//       message: "please enter valid email and password",
//     });
//     console.log(error);
//   }
// };
