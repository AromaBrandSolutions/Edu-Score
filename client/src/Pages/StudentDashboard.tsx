import React from "react";
import WelcomeBanner from "../Components/WelcomeBanner";
import TotalExamsCard from "../Components/TotalExamsCard";
import OngoingExamCard from "../Components/OngoingExams";
import { Book, CheckCircle, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const StudentDashboard: React.FC = () => {
  const totalExamsProps = {
    title: "Total Exams",
    number: 4,
    icon: <Book className="text-blue-500" />,
  };

  const completedExamsProps = {
    title: "Completed",
    number: 2,
    icon: <CheckCircle className="text-green-500" />,
  };

  const averageScoreProps = {
    title: "Average Score",
    number: 0,
    icon: <Calendar className="text-blue-400" />,
  };

  const ongoingExamProps = {
    title: "Advanced Mathematics",
    subject: "Mathematics",
    status: "Ongoing",
    duration: "90 min",
    questions: 40,
    availableText: "Available now",
    onStart: () => alert("Starting exam..."), // Placeholder for exam start logic
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
      {/* Welcome Banner */}
      <WelcomeBanner />

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <TotalExamsCard {...totalExamsProps} />
        <TotalExamsCard {...completedExamsProps} />
        <TotalExamsCard {...averageScoreProps} />
      </div>

      {/* Ongoing Exams Section */}
      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Ongoing Exams</h2>
          <Link
            to="/student/exams"
            className="text-blue-600 hover:underline flex items-center"
          >
            View All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        {/* Using only one card as shown in the image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <OngoingExamCard {...ongoingExamProps} />
          <OngoingExamCard {...ongoingExamProps} />
          <OngoingExamCard {...ongoingExamProps} />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
