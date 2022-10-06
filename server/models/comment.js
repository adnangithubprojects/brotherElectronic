import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  content: { type: String },
  post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
});

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;
