import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express, { json } from "express";
const app = express();
import morgan from "morgan";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

// import cloudinary from "cloudinary";
//routers
import postsRouter from "./routes/postsRouter.js";
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";
import connectionsRouter from "./routes/connectionsRouter.js";
//public
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
//middleware
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import { authenticateUser } from "./middleware/authMiddleware.js";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD__API_SECRET,
});
const __dirname = dirname(fileURLToPath(import.meta.url));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cookieParser());
app.use(express.urlencoded({ extended: true })); //// Parse incoming FormData
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "./public")));

app.use("/api/v1/posts", authenticateUser, postsRouter);
app.use("/api/v1/users", authenticateUser, userRouter);
app.use("/api/v1/connections", authenticateUser, connectionsRouter);
app.use("/api/v1/auth", authRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public", "index.html"));
});

app.use("*", (req, res) => {
  res.status(404), json({ msg: "not found" });
});
// app.use("/").get(() => {});
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 2012;
try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log("server is running on port " + port);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
