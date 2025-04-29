// const axios = require("axios");
// const bcrypt = require("bcryptjs");
// const Student = require("../models/student");

// const fetchAndStoreStudents = async (req, res) => {
//   try {
//     const apiUrl =
//       "https://script.google.com/macros/s/AKfycby1j2F_4AZ8y-HhTjtHdmQmi_vzEBNx_9ilxDe_umrM3CDXU_P2BdXvScEr3JDqMf6oNw/exec";

//     const response = await axios.get(apiUrl);
//     const students = response.data;

//     for (const student of students) {
//       // Hash the password before storing/updating
//       const hashedPassword = await bcrypt.hash(student.password, 10);

//       await Student.findOneAndUpdate(
//         { email: student.email },
//         {
//           batch: student.batch,
//           internId: student.intern_id,
//           name: student.full_name,
//           domain: student.domain,
//           password: hashedPassword // Store hashed password
//         },
//         {
//           upsert: true,
//           new: true
//         }
//       );
//     }

//     res.status(200).json({ message: "Students data updated successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error fetching/storing students" });
//   }
// };

// module.exports = { fetchAndStoreStudents };


const axios = require("axios");
const bcrypt = require("bcryptjs");
const Student = require("../models/student");

const fetchAndStoreStudents = async (req, res) => {
  try {
    const apiUrl = "https://script.google.com/macros/s/AKfycby1j2F_4AZ8y-HhTjtHdmQmi_vzEBNx_9ilxDe_umrM3CDXU_P2BdXvScEr3JDqMf6oNw/exec";
    const response = await axios.get(apiUrl);
    const students = response.data;

    const operations = students.map(async (student) => {
      // Validate required fields
      if (!student.email || !student.intern_id) {
        console.warn('Skipping student missing required fields:', student);
        return null;
      }

      // Hash password only for new entries
      let hashedPassword = student.password;
      const existing = await Student.findOne({ email: student.email });
      
      if (!existing || !existing.password) {
        hashedPassword = await bcrypt.hash(student.password, 10);
      }

      return {
        updateOne: {
          filter: { email: student.email },
          update: {
            $setOnInsert: { // Only set these fields on new document creation
              internId: student.intern_id, // Corrected field name
              name: student.full_name,
              domain: student.domain,
              password: hashedPassword,
              batch: student.batch,
              createdAt: new Date()
            },
            // $set: { // These fields will update on existing documents
            //   batch: student.batch
            // }
          },
          upsert: true
        }
      };
    });

    // Filter out null operations from invalid students
    const validOperations = operations.filter(op => op !== null);
    
    // Bulk write operation
    const result = await Student.bulkWrite(await Promise.all(validOperations));
    
    res.status(200).json({
      message: "Students data synchronized successfully",
      inserted: result.upsertedCount,
      modified: result.modifiedCount
    });

  } catch (error) {
    console.error("Error in fetchAndStoreStudents:", error);
    res.status(500).json({ 
      error: "Error synchronizing student data",
      details: error.message 
    });
  }
};

module.exports = { fetchAndStoreStudents };