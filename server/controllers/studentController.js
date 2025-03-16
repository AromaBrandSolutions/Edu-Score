const axios = require("axios");
const Student = require("../models/student");

const fetchAndStoreStudents = async (req, res) => {
  try {
    const apiUrl =
      "https://script.google.com/macros/s/AKfycbzRxWb2oXAz7aBVfkkH84sGc8spewV30CUXW8hc-0uGqtfImKBAB4k54u7QQAi7N5TW/exec";

    const response = await axios.get(apiUrl);
    const students = response.data;

    for (let student of students) {
      const examKey = student.email + "-" + Math.floor(100000 + Math.random() * 900000); // Email + 6-digit random number

      const newStudent = new Student({
        name: student.name,
        domain: student.domain,
        email: student.email,
        examKey: examKey,
        upsert: true, new: true 
      });

      await newStudent.save();
    }

    res.status(200).json({ message: "Students stored successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching/storing students" });
  }
};

module.exports = { fetchAndStoreStudents };
