const express = require("express");
const router = express.Router();
const axios = require("axios");
const Result = require("../models/result"); 
const authenticateToken = require("../models/authenticateToken");


// Google Apps Script Web App URL
const GOOGLE_SHEET_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbz38jQS1UT7GUMvGJi8iyE3ntOQA6-I_zD2qFREDC8DJveZRcwf9sXdSqV32q9KAdmdag/exec";

// @route   GET /send-results-to-sheet
// @desc    Fetch results from DB and send each one to Google Sheet
router.get("/resultToSheet", async (req, res) => {
  try {
    const results = await Result.find();

    if (!results.length) {
      return res.status(404).json({ success: false, message: "No results found" });
    }

    const sendPromises = results.map(result =>
      axios.post(GOOGLE_SHEET_WEBHOOK_URL, {
        internId: result.internId,
        name: result.name,
        score: result.score,
        email: result.email,
        exam: result.exam,
        date: result.date || new Date().toISOString()
      })
    );

    await Promise.all(sendPromises);

    res.status(200).json({ success: true, message: "Results sent to Google Sheet" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: "Failed to send data", error: error.message });
  }
});


// @route   POST /store-result-from-token?score=90
// @desc    Store result using JWT token data + score from URL
// @access  Protected (token required)
router.post("/resultToDatabase", authenticateToken, async (req, res) => {
  try {
    const { score } = req.query;
    const user = req.user; // ✅ This now has data

    const result = new Result({
      name: user.name,
      email: user.email,
      internId: user.internId,
      batch: user.batch,
      domain: user.domain,
      exam: "EduScore Test",
      score: parseInt(score),
      date: new Date()
    });

    await result.save();
    res.json({ success: true, message: "Result stored successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to store result", error: error.message });
  }
});

module.exports = router;
