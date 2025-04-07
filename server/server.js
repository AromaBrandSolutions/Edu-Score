require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { fetchAndStoreStudents } = require("./controllers/studentController");
const authRoutes = require("./routes/auth");

const adminRoutes = require("./routes/adminRoutes")

const mongoose = require("mongoose");
const morgan = require("morgan");

const connectDB = async () => {
  mongoose
  .connect(process.env.DEV_CONNECTION_URL)
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));
  
};

const app = express();
app.use(cors());
app.use(express.json());

connectDB();





app.get("/", (req, res) => {
  res.send("Edu-Score Backend Running");
});

app.get("/fetch-students", fetchAndStoreStudents);
app.use("/api/auth", authRoutes);

app.use("/api/admin", adminRoutes);

const PORT = process.env.NODE_ENV || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
