const express = require("express");
const router = express.Router();
const examDetails = require("../models/examDetails"); // Assuming you have a model for exam details


router.post("/examDetails", async (req, res) => {
    const { examTitle, examApi, batch, domain ,startDate,endDate,examDuration} = req.body;


  try {
    const exam = new examDetails({
        examTitle: examTitle,
        examApi: examApi,
        startDate: startDate,
        endDate: endDate,
        examDuration: examDuration,
        batch: batch,
        domain: domain,
        date: new Date()
    });

    await exam.save();

    res.status(201).json({ success: true, message: "Exam is saved"});
  } catch (err) {
    console.error("Failed to store exam details:", err);
    res.status(500).json({ success: false, message: "Failed to store exam details", error: err.message });
  }
});

module.exports = router;
