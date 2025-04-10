import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentDashboard from "./Pages/StudentDashboardLayout";
import SDashboard from "./Pages/StudentDashboard";
import MyExams from "./Pages/MyExams";
import Results from "./Pages/Results";
import AdmindashboardLayout from "./Pages/AdmindashboardLayout";
import ADashboard from "./Pages/Admindashboard";
import ManageStudent from "./Pages/ManageStudent";
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
        <Route path="/admin" element={<AdmindashboardLayout />}>
          <Route index element={<ADashboard />} />
          <Route path="dashboard" element={<ADashboard />} />
          <Route path="manage-exams" element={<ManageStudent />} />
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
