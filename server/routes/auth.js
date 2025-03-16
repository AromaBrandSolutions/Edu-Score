const express = require("express");
const jwt = require("jsonwebtoken");
const Student = require("../models/student");
require("dotenv").config();

const router = express.Router();

router.post("/login", async (req, res) => {
  const { examKey } = req.body;

  try {
    const student = await Student.findOne({ examKey });
    if (!student) {
      return res.status(401).json({ error: "Invalid Exam Key"});
    }

    const token = jwt.sign({ id: student._id, email: student.email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token, message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
