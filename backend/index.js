import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";

const app = express();
const PORT = 5001;

app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/ecommerce")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Error:", err));

app.get("/api/message", (req, res) => {
  res.json({ message: "Backend running fine!" });
});

app.get("/", (req, res) => {
  res.send("✅ E-commerce API is running...");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
