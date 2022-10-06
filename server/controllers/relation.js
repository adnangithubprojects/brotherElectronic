import express from "express";
import Post from "../models/post.js";
import Comment from "../models/comment.js";

// Routes
const relations = express.Router();
// Comment create
relations.post("/post/:postId/comment", async (req, res) => {
  const post = await Post.findOne({ _id: req.params.postId });

  const comment = new Comment();
  comment.content = req.body.content;
  comment.post = post._id;

  // associate post with commet
  post.comments.push(comment._id);
  try {
    // const result = await Comment.create(data);
    // res.json({
    //   status: "success",
    //   result,
    // });
    await post.save();
    res.send(comment);
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
});

// Comment get
relations.get("/post/:postId/comment", async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.postId });
    // const result = await Comment.find(post).populate("comments");
    res.status(200).json({
      status: "success",
      result: post,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
});

// Post paste
relations.post("/post", async (req, res) => {
  const data = req.body;
  try {
    const result = await Post.create(data);
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

// Post get
relations.get("/post", async (req, res) => {
  try {
    const result = await Post.find();
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

export default relations;
