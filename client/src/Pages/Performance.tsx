import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { GiGraduateCap } from 'react-icons/gi';

interface ExamResult {
  student: string;
  email: string;
  exam: string;
  date: string;
  score: string;
}

const initialData: ExamResult[] = [
  {
    student: 'John Doe',
    email: 'john@example.com',
    exam: 'English Literature',
    date: 'Apr 1, 2025',
    score: '78%',
  },
  {
    student: 'John Doe',
    email: 'john@example.com',
    exam: 'Basic Physics',
    date: 'Mar 30, 2025',
    score: '85%',
  },
];

const PerformanceTable: React.FC = () => {
  const [search, setSearch] = useState('');

  const filteredData = initialData.filter(item =>
    item.exam.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-6xl p-8 rounded-3xl transition-all duration-300 bg-transparent">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-blue-700 flex items-center gap-2">
            <GiGraduateCap className="text-blue-600" /> Exam Results
          </h2>
          <div className="relative">
            <FaSearch className="absolute left-3 top-3 text-blue-400" />
            <input
              type="text"
              placeholder="Search by exam title..."
              className="border border-blue-300 px-10 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>
        <table className="w-full text-left border-separate border-spacing-y-2">
          <thead>
            <tr className="bg-gray-200 text-gray-700 rounded-xl">
              <th className="p-4 rounded-l-xl">Student</th>
              <th className="p-4">Exam</th>
              <th className="p-4">Date</th>
              <th className="p-4 rounded-r-xl">Score</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr
                key={index}
                className="hover:scale-[1.02] hover:shadow-md transition duration-300 rounded-xl bg-white"
              >
                <td className="p-4 rounded-l-xl">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 text-blue-700 font-semibold px-4 py-2 rounded-full">
                      {item.student.split(' ')[0][0] + item.student.split(' ')[1][0]}
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">{item.student}</div>
                      <div className="text-sm text-gray-500">{item.email}</div>
                    </div>
                  </div>
                </td>
                <td className="p-4">{item.exam}</td>
                <td className="p-4">{item.date}</td>
                <td className="p-4 rounded-r-xl">{item.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PerformanceTable;
