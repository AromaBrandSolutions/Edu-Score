const e = require("express");
const mongoose = require("mongoose");

const examSchema = new mongoose.Schema({
    examTitle: {
        type: String,
        required: true,
    },
    examApi: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },  
    examDuration: {
        type: String,
        required: true,
    },
    batch: {
        type: String,
        required: true,
    },
    domain: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

const Exam = mongoose.model("ExamDetails", examSchema);

module.exports = Exam;
