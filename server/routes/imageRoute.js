import express from "express";
import { getImage, postImage } from "../controllers/imageControl.js";
import { uploadFile } from "../utils/uploadImage.js";

const image = express.Router();

// const cpUpload = upload.fields([{ name: 'avatar'}, { name: 'gallery'}]
// image.post("/image", uploadFile.single("images"), postImage);
// image.post("/image", uploadFile.array("images"), postImage);

image.post(
  "/image",
  uploadFile.fields([
    { name: "image", maxCount: 1 },
    { name: "cnicImage", maxCount: 99 },
  ]),
  postImage
);
image.get("/image", getImage);

export default image;
