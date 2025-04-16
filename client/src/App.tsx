import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentLogin from "./Components/StudentLogin";
import AdminLogin from "./Components/AdminLogin";
import StudentdashboardLayout from "./Pages/StudentdashboardLayout";
import Studentdashboard from "./Pages/Studentdashboard";
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
        {/* Login Routes */}
        <Route path="/" element={<StudentLogin />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Student Routes */}
        <Route path="/student" element={<StudentdashboardLayout />}>
          <Route index element={<Studentdashboard />} />
          <Route path="dashboard" element={<Studentdashboard />} />
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

        {/* Catch-all */}
        <Route path="*" element={<StudentLogin />} />
      </Routes>
    </Router>
  );
};

export default App;
