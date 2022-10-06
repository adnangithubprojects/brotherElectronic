import express from "express";
// import multer from "multer";
import protect from "../middleware/userMiddleware.js";
import {
  postUserData,
  getUserData,
  deleteUser,
  updateUser,
  //   loginUserData,
} from "../controllers/userDataController.js";
// const upload = multer({ dest: "picss/" });
const userDataRoutes = express.Router();
userDataRoutes.post("/userdata/post", postUserData);
userDataRoutes.get("/userdata/get", getUserData);
userDataRoutes
  .route("/userdata/:id")
  .delete(
    // protect,
    deleteUser
  )
  .put(updateUser);

// userDataRoutes
//   .route("/userdata/:id")
//   .delete(protect, deleteUserData)
//   .put(updateUserData);
// userDataRoutes.post("/userdata/login", loginUserData);

// installment Function to push value
// userDataRoutes.get("/getinstallment", (res,req)=>{

// });

export default userDataRoutes;
