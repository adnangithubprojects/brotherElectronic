import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    title: { type: String },
    content: { type: String },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  },
  {
    timestamp: true,
  }
);

const Post = mongoose.model("Post", postSchema);
export default Post;
