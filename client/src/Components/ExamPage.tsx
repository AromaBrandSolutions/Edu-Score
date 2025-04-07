import { useEffect, useState } from "react";

// Types
interface Question {
  id: number;
  text: string;
  options: string[];
}

interface ExamPageProps {
  currentQuestionIndex: number;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  markQuestionAsAnswered: (index: number) => void; // ✅ Added this
}

export default function ExamPage({
  currentQuestionIndex,
  setCurrentQuestionIndex,
  markQuestionAsAnswered, // ✅ Receive it as a prop
}: ExamPageProps) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

  // Simulate API call on mount
  useEffect(() => {
    const fakeData: Question[] = Array.from({ length: 25 }, (_, index) => ({
      id: index + 1,
      text: `Sample question ${index + 1} for Advanced Mathematics exam?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
    }));
    setQuestions(fakeData);
    setSelectedAnswers(Array(25).fill("")); // Default blank selections
  }, []);

  // Ensure questions are loaded before rendering content
  if (!questions.length) return <p className="p-6">Loading questions...</p>;

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionSelect = (option: string) => {
    setSelectedAnswers((prev) => {
      const updated = [...prev];
      updated[currentQuestionIndex] = option;
      return updated;
    });

    markQuestionAsAnswered(currentQuestionIndex); // ✅ Mark the question as answered
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-start bg-gray-100 min-h-screen p-6 gap-6">
      {/* Main Exam Content */}
      <div className="w-[750px] bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">Advanced Mathematics</h1>
        <p className="text-gray-500">Mathematics</p>

        {/* Question Box */}
        <div className="mt-4 p-6 border rounded-lg bg-gray-50 relative">
          <span className="absolute -top-3 left-3 bg-blue-100 text-blue-500 font-semibold px-3 py-1 rounded-full">
            {currentQuestionIndex + 1}
          </span>

          <h2 className="text-lg font-semibold">{currentQuestion.text}</h2>

          {/* Options */}
          <div className="mt-4 space-y-3">
            {currentQuestion.options.map((option, index) => (
              <label
                key={`${option}-${index}`}
                className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition ${
                  selectedAnswers[currentQuestionIndex] === option
                    ? "bg-blue-100 border-blue-500"
                    : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name={`question-${currentQuestion.id}`}
                  className="hidden"
                  onChange={() => handleOptionSelect(option)}
                  checked={selectedAnswers[currentQuestionIndex] === option}
                />
                <span className="w-4 h-4 border-2 border-gray-400 rounded-full flex items-center justify-center">
                  {selectedAnswers[currentQuestionIndex] === option && (
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  )}
                </span>
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <button
            className="px-6 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
            onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
            disabled={currentQuestionIndex === 0}
          >
            ← Previous
          </button>

          <button
            className="px-6 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
            onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
            disabled={currentQuestionIndex >= questions.length - 1}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
