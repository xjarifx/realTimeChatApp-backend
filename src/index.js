import dotenv from "dotenv";
dotenv.config();

import express from "express";
import authRoutes from "./routes/auth.route.js";
import connectDB from "./lib/db.js";

const app = express();
const PORT = process.env.PORT;

app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`server running on 'http://localhost:${PORT}'`);
  connectDB();
});
