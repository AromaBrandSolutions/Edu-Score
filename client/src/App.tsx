import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentDashboard from "./Pages/StudentDashboard";
import SDashboard from "./Pages/SDashboard";
import MyExams from "./Pages/MyExams";
import Results from "./Pages/Results";
import Admindashboard from "./Pages/Admindashboard";
import ADashboard from "./Pages/ADashboard";
import ManageExam from "./Pages/ManageExam";
import ScheduleExam from "./Pages/ScheduleExam";
import Performance from "./Pages/Performance";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Student Routes */}
        <Route path="/student" element={<StudentDashboard />}>
          <Route index element={<SDashboard />} />
          <Route path="dashboard" element={<SDashboard />} />
          <Route path="my-exams" element={<MyExams />} />
          <Route path="results" element={<Results />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<Admindashboard />}>
          <Route index element={<ADashboard />} />
          <Route path="dashboard" element={<ADashboard />} />
          <Route path="manage-exams" element={<ManageExam />} />
          <Route path="schedule-exam" element={<ScheduleExam />} />
          <Route path="performance" element={<Performance />} />
        </Route>

        {/* Catch-all route */}
        <Route path="*" element={<StudentDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
