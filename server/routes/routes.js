import {
  postBlog,
  getBlog,
  deleteBlog,
  updateBlog,
} from "../controllers/control.js";
import express from "express";

const router = express.Router();

// router.post("/api/blog", postBlog);
// router.get("/api/blog", getBlog);
router.route("/api/blog").get(getBlog).post(postBlog);
router.put("/api/blog/update/:id", updateBlog);
router.delete("/api/blog/delete/:id", deleteBlog);

export default router;
