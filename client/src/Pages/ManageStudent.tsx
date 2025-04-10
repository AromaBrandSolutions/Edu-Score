import React, { useState } from "react";
import { Search, MoreVertical, Plus } from "lucide-react";

interface Student {
  id: number;
  name: string;
  email: string;
  department: string;
  joinDate: string;
  examsCompleted: number;
}

const ManageStudents: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Sample student data
  const students: Student[] = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      department: "Computer Science",
      joinDate: "January 15, 2025",
      examsCompleted: 8,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      department: "Mathematics",
      joinDate: "February 3, 2025",
      examsCompleted: 5,
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "m.brown@example.com",
      department: "Physics",
      joinDate: "March 12, 2025",
      examsCompleted: 3,
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.d@example.com",
      department: "English",
      joinDate: "January 5, 2025",
      examsCompleted: 10,
    },
  ];

  const filteredStudents = students.filter((student) =>
    `${student.name} ${student.email} ${student.department}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  const handleDeleteAllStudents = () => {
    if (
      window.confirm(
        "Are you sure you want to delete all students? This action cannot be undone."
      )
    ) {
      // Logic to delete all students would go here
      alert("All students have been deleted");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Manage Students
            </h1>
            <p className="text-gray-500">
              View, edit, and manage your students.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleDeleteAllStudents}
              className="bg-red-500 hover:bg-red-600 transition text-white px-4 py-2 rounded-md flex items-center shadow-sm"
            >
              Delete All
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-4 py-2 rounded-md flex items-center shadow-sm">
              <Plus className="w-5 h-5 mr-2" />
              Add Student
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search students by name, email or department..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Students Table */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200">
          <div className="p-5 flex justify-between items-center border-b border-gray-200">
            <h2 className="font-semibold text-lg text-gray-700">Students</h2>
            <span className="text-gray-500">
              {filteredStudents.length} found
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-100 text-sm text-gray-600">
                <tr>
                  <th className="py-4 px-6">Name</th>
                  <th className="py-4 px-6">Email</th>
                  <th className="py-4 px-6">Department</th>
                  <th className="py-4 px-6">Intern Id</th>
                  <th className="py-4 px-6">Exams Completed</th>
                  <th className="py-4 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student) => (
                  <tr
                    key={student.id}
                    className="border-t border-gray-200 hover:bg-gray-50 transition"
                  >
                    <td className="py-4 px-6 font-medium text-gray-800">
                      {student.name}
                    </td>
                    <td className="py-4 px-6 text-gray-600">{student.email}</td>
                    <td className="py-4 px-6">{student.department}</td>
                    <td className="py-4 px-6 text-gray-500">
                      {student.joinDate}
                    </td>
                    <td className="py-4 px-6">{student.examsCompleted}</td>
                    <td className="py-4 px-6 text-center">
                      <button className="text-gray-500 hover:text-blue-600 transition">
                        <MoreVertical className="w-5 h-5 inline" />
                      </button>
                    </td>
                  </tr>
                ))}
                {filteredStudents.length === 0 && (
                  <tr>
                    <td
                      colSpan={6}
                      className="py-6 px-6 text-center text-gray-500 italic"
                    >
                      No students found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageStudents;
