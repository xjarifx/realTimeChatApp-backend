import dotenv from "dotenv";
import express from "express";
import authRoutes from "./routes/auth.route.js";
import connectDB from "./lib/db.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`server running on 'http://localhost:${PORT}'`);
  connectDB();
});
