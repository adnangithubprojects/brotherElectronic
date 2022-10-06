import express from "express";
import protect from "../middleware/userMiddleware.js";
import {
  deleteUser,
  getUser,
  loginUser,
  postUser,
  updateUser,
} from "../controllers/usercontrol.js";

const userrouter = express.Router();
userrouter.post("/user/post", postUser);
userrouter.get("/user/get", getUser);
// userrouter.route("/user").get(getUser).post(postUser);
userrouter.route("/user/:id").delete(protect, deleteUser).put(updateUser);
userrouter.post("/user/login", loginUser);

export default userrouter;

//   router.put("/api/blog/update/:id", updateBlog);
//   router.delete("/api/blog/delete/:id", deleteBlog);
