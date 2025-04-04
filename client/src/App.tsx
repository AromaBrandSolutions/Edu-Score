import React from "react";
import WelcomeBanner from "./Components/WelcomeBanner";
import TotalExamsCard from "./Components/TotalExamsCard";
import OngoingExams from "./Components/OngoingExams";
import UpcomingExams from "./Components/UpcomingExams";  
import RecentResults from "./Components/RecentResults"; 

const App: React.FC = () => {
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
    </div>
  );
};

export default App;
