const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Student = require("../models/student");
require("dotenv").config();

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. Check if student exists
    const student = await Student.findOne({ email });
    if (!student) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // 2. Verify password
    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // 3. Create JWT token
    const token = jwt.sign(
      { 
        indernId: student.indernId,
        email: student.email,
        role: "student" 
      }, 
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // 4. Send response with token (exclude sensitive data)
    res.json({
      token,
      user: {
        indernId: student.indernId,
        name: student.name,
        email: student.email,
        domain: student.domain
      },
      message: "Login successful"
    });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;