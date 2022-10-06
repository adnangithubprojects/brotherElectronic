import mongoose from "mongoose";

const imageSchema = mongoose.Schema({
  username: {
    type: String,
  },
  fname: {
    type: String,
  },
  email: {
    type: String,
  },
  image: {
    type: [Object],
  },
  cnicImage: {
    type: [Object],
  },
});

const imageData = mongoose.model("imageData", imageSchema);
export default imageData;
