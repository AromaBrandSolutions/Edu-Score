const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: String,
  domain: String,
  email: { type: String, unique: true },
  examKey: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now }

});

module.exports = mongoose.model("Student", StudentSchema);
