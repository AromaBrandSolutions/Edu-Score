import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa"; // Importing an icon for the submit button

interface QuestionNavigationProps {
  totalQuestions: number;
  currentQuestionIndex: number;
  setCurrentQuestionIndex: (index: number) => void;
  answeredQuestions: number[]; // Array of answered question indexes
}

const QuestionNavigation: React.FC<QuestionNavigationProps> = ({
  totalQuestions,
  currentQuestionIndex,
  setCurrentQuestionIndex,
  answeredQuestions,
}) => {
  const [activeTab, setActiveTab] = useState<"All" | "Unanswered">("All");

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-64">
      {/* Questions Title */}
      <h2 className="text-lg font-semibold">Questions</h2>
      
      {/* ✅ Fixed Answered Count Display */}
      <p className="text-gray-500 text-sm mt-1">
        {answeredQuestions.length} of {totalQuestions} answered
      </p>

      {/* Tab Navigation */}
      <div className="flex bg-gray-100 p-1 rounded-md mt-2">
        <button
          className={`w-1/2 text-sm py-2 rounded-md ${
            activeTab === "All" ? "bg-white shadow text-black" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("All")}
        >
          All
        </button>
        <button
          className={`w-1/2 text-sm py-2 rounded-md ${
            activeTab === "Unanswered" ? "bg-white shadow text-black" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("Unanswered")}
        >
          Unanswered
        </button>
      </div>

      {/* Question Grid */}
      <div className="grid grid-cols-5 gap-2 mt-4">
        {Array.from({ length: totalQuestions }, (_, i) => i).map((q) => {
          const isAnswered = answeredQuestions.includes(q);
          return (
            <button
              key={q}
              className={`w-10 h-10 rounded-md text-center font-medium transition ${
                currentQuestionIndex === q
                  ? "bg-blue-500 text-white" // Current question is blue
                  : isAnswered
                  ? "bg-green-500 text-white" // ✅ Highlight answered in green
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              onClick={() => setCurrentQuestionIndex(q)}
            >
              {q + 1}
            </button>
          );
        })}
      </div>

      {/* Submit Button */}
      <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md flex items-center justify-center">
        <FaPaperPlane className="mr-2" /> Submit Exam
      </button>
    </div>
  );
};

export default QuestionNavigation;
