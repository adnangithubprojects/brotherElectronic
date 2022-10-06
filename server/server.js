import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dtenv from "dotenv/config";
dtenv.config;
import router from "./routes/routes.js";
import userrouter from "./routes/userRoutes.js";
import userDataRoutes from "./routes/userDataRoutes.js";
import image from "./routes/imageRoute.js";
import customer from "./routes/customerRoutes.js";
import product from "./routes/productRoutes.js";
import installment from "./routes/installmentRoutes.js";
import extra from "./controllers/extra.js";
import relations from "./controllers/relation.js";
const port = process.env.PORT;
const dbpath = process.env.MONGOOS;
// const dbpath = process.env.LOCAL_DB;

const app = express();

app.use(cors());
app.use(express.json());
app.use("", express.static("uploads"));
app.use(router);
app.use(image);
app.use(relations);
app.use(extra);
app.use(customer);
app.use(product);
app.use(installment);
app.use(userrouter);
app.use(userDataRoutes);

mongoose.connect(dbpath).then(() => {
  app.listen(port, () => {
    console.log(`port created succesfully ${port}`);
  });
});
