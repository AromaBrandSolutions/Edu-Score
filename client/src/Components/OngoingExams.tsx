import { Clock, FileText, Calendar } from "lucide-react";

const OngoingExams = () => {
  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-2">Ongoing Exams</h2>
      <div className="shadow-lg border rounded-xl p-4 bg-white">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Advanced Mathematics</h3>
            <span className="bg-yellow-100 text-black px-2 py-1 text-sm rounded">Ongoing</span>
          </div>
          <p className="text-gray-500">Mathematics</p>
          <div className="flex items-center text-gray-600 text-sm gap-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" /> Available now
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" /> 90 min
            </div>
            <div className="flex items-center gap-1">
              <FileText className="w-4 h-4" /> 40 questions
            </div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg mt-4 px-4 py-2">
            Start Exam →
          </button>
        </div>
      </div>
    </div>
  );
};

export default OngoingExams;
