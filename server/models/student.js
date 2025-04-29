const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  batch: { type: String, required: true, index: true },
  internId: { type: String },
  name: String,
  domain: String,
  email: { type: String, unique: true },
  password: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now }

});

module.exports = mongoose.model("Student", StudentSchema);
