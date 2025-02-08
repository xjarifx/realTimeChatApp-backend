import dotenv from "dotenv";
dotenv.config();

import express from "express";
import authRoutes from "./routes/auth.route.js";
import connectDB from "./lib/connectDB.js";
import cookieParser from "cookie-parser";


const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use("/api/v1/auth", authRoutes);
app.use(cookieParser());

app.listen(PORT, () => {
  console.log(`server running on 'http://localhost:${PORT}'`);
  connectDB();
});
