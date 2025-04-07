import React, { useState } from "react";
import WelcomeBanner from "./Components/WelcomeBanner";
import TotalExamsCard from "./Components/TotalExamsCard";
import OngoingExams from "./Components/OngoingExams";
import UpcomingExams from "./Components/UpcomingExams";
import RecentResults from "./Components/RecentResults";
import ExamPage from "./Components/ExamPage";
import QuestionNavigation from "./Components/QuestionNavigation";

const App: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]); // ✅ Added answered questions state

  // ✅ Function to mark a question as answered
  const markQuestionAsAnswered = (questionIndex: number) => {
    setAnsweredQuestions((prev) =>
      prev.includes(questionIndex) ? prev : [...prev, questionIndex]
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Welcome Banner */}
      <WelcomeBanner />

      {/* Total Exams Card Section */}
      <div className="mt-6">
        <TotalExamsCard />
      </div>

      {/* Ongoing Exams Section */}
      <div className="mt-6">
        <OngoingExams />
      </div>

      {/* Upcoming Exams Section */}
      <div className="mt-6">
        <UpcomingExams />
      </div>

      {/* Recent Results Section */}
      <div className="mt-6">
        <RecentResults />
      </div>

      {/* Exam Page Section */}
      <div className="mt-6">
        <ExamPage
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
          markQuestionAsAnswered={markQuestionAsAnswered} // ✅ Pass function to ExamPage
        />
      </div>

      {/* Question Navigation Section */}
      <div className="mt-6">
        <QuestionNavigation
          totalQuestions={25}
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
          answeredQuestions={answeredQuestions} // ✅ Passed answered questions
        />
      </div>
    </div>
  );
};

export default App;
