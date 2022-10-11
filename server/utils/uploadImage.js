import multer from "multer";
var maxSize = 1 * 1000 * 1000;

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, callB) => {
    return callB(null, `img-${Date.now()}.${file.mimetype.split("/")[1]}`);
  },

  onFileUploadStart: function (file, req, res) {
    if (req.files.file.length > maxSize) {
      return false;
    }
  },
});
export const uploadFile = multer({
  storage: storage,
});
