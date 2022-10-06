import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  discription: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
});

const Blogs = mongoose.model("Blogs", blogSchema);
export default Blogs;
