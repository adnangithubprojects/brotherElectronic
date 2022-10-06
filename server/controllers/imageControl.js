import imageData from "../models/imageModel.js";

export const postImage = async (req, res) => {
  console.log(req.body, "look deep into that", req.files);
  const { username, fname, email } = req.body;
  //  multiple input file
  const image = req.files.image.map((it) => it.filename);
  // const cnicImage = req.files.cnicImage.map((it) => it.filename);

  const gellary = [];
  req.files.cnicImage.map((it) => {
    return gellary.push(it.filename);
  });
  console.log("gellary images", gellary);
  const result = await imageData.create({
    username,
    fname,
    email,
    image: image,
    cnicImage: gellary,
  });
  res.json({
    status: "success",
    result,
  });
};

// Customer Get Data
export const getImage = async (req, res) => {
  const result = await imageData.find();
  res.json({
    status: "success",
    result,
  });
};

// export const createBlogs = async (req, res) => {
//   const { name, description, owner } = req.body;
//   const grnt1 = req.files.grnt1.map((it) => it.filename);
//   const grnt2 = req.files.grnt2.map((it) => it.filename);

//   const gallary = [];

//   req.files.image.map((it) => {
//     return gallary.push(it.filename);
//   });

//   const result = await Blogs.create({
//     name,
//     description,
//     owner,
//     images: gallary,
//     grnt1: grnt1,
//     grnt2: grnt2,
//   });
//   res.json({
//     status: "success",
//     result,
//   });
// };
