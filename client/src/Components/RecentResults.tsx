import React from "react";
import { FaCheckCircle, FaTimesCircle, FaClock, FaCalendarAlt } from "react-icons/fa";

const RecentResults: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-6">
      
      {/* Recent Results Heading */}
      <div className="w-[700px] max-w-full mb-4">
        <h2 className="text-xl font-bold text-gray-800">Recent Results</h2>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-6 w-[700px] max-w-full border border-gray-200">
        {/* Subject Header */}
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">English Literature</h3>
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
            B
          </span>
        </div>

        {/* Exam Date & Duration */}
        <div className="flex items-center text-gray-600 text-sm mt-2 space-x-4">
          <div className="flex items-center space-x-1">
            <FaCalendarAlt />
            <span>March 30th, 2025</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaClock />
            <span>45 min</span>
          </div>
        </div>

        {/* Score Progress */}
        <div className="mt-4">
          <p className="text-gray-700 font-semibold">Score</p>
          <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: "78%" }}></div>
          </div>
          <p className="text-right text-gray-800 font-semibold mt-1">78/100 (78%)</p>
        </div>

        {/* Correct & Incorrect Answers */}
        <div className="flex justify-between mt-4">
          <div className="bg-green-100 px-4 py-3 rounded-lg w-[48%] text-center border border-green-300">
            <div className="flex items-center justify-center text-green-700 font-semibold">
              <FaCheckCircle className="mr-1" />
              Correct
            </div>
            <p className="text-xl font-bold text-green-700 mt-1">19</p>
          </div>
          <div className="bg-red-100 px-4 py-3 rounded-lg w-[48%] text-center border border-red-300">
            <div className="flex items-center justify-center text-red-700 font-semibold">
              <FaTimesCircle className="mr-1" />
              Incorrect
            </div>
            <p className="text-xl font-bold text-red-700 mt-1">6</p>
          </div>
        </div>

        {/* View Details Button */}
        <div className="mt-6">
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold text-lg hover:bg-blue-700 transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentResults;
