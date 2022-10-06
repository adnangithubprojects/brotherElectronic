import jwt from "jsonwebtoken";

const protect = (req, res, next) => {
  const token = req.headers["token"];
  try {
    if (!token) {
      res.json({
        message: "Token required",
      });
    }
    const verifyToken = jwt.verify(token, "key");
    if (verifyToken) {
      next();
    }
  } catch (error) {
    console.log(error);
  }
};
export default protect;
