import Blogs from "../models/model.js";

export const postBlog = async (req, res) => {
  const data = req.body;
  const result = await Blogs.create(data);
  res.json({
    status: "succes",
    result,
  });
};

export const getBlog = async (req, res) => {
  const result = await Blogs.find();
  res.json({
    status: "succes",
    result,
  });
};

export const deleteBlog = async (req, res) => {
  const id = req.params.id;
  const result = await Blogs.findByIdAndDelete(id);
  res.json({
    status: "succes",
    result,
  });
};
export const updateBlog = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const result = await Blogs.findByIdAndUpdate(id, data, { new: true });
  res.json({
    status: "succes",
    result,
  });
};
