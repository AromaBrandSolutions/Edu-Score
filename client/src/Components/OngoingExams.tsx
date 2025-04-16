import React from "react";
import { Clock, FileText, Calendar } from "lucide-react";

interface OngoingExamCardProps {
  title: string;
  subject: string;
  status?: string;
  duration: string;
  questions: number;
  availableText: string;
  onStart?: () => void;
}

const OngoingExamCard: React.FC<OngoingExamCardProps> = ({
  title,
  subject,
  status = "Ongoing",
  duration,
  questions,
  availableText,
  onStart,
}) => {
  return (
    <div className="shadow-md rounded-xl p-6 bg-white w-full max-w-md mx-auto hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <span className="bg-amber-100 text-amber-700 px-3 py-1 text-xs font-medium rounded-full">
            {status}
          </span>
        </div>

        <p className="text-gray-600 font-medium">{subject}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
          <div className="flex items-center text-gray-700 text-sm">
            <Calendar className="w-4 h-4 mr-2 text-blue-500" />
            <span className="truncate">{availableText}</span>
          </div>

          <div className="flex items-center text-gray-700 text-sm">
            <Clock className="w-4 h-4 mr-2 text-blue-500" />
            <span>{duration}</span>
          </div>

          <div className="flex items-center text-gray-700 text-sm">
            <FileText className="w-4 h-4 mr-2 text-blue-500" />
            <span>{questions} questions</span>
          </div>
        </div>

        <button
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg mt-4 px-6 py-2.5 font-medium transition-colors duration-300 flex items-center justify-center"
          onClick={onStart}
        >
          Start Exam
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default OngoingExamCard;
