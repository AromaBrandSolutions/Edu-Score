const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    internId: {
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
    score: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

const Result = mongoose.model("Result", resultSchema);

module.exports = Result;
