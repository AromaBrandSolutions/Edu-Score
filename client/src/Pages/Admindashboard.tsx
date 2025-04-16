import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminBanner from "../Components/AdminBanner";
import StatusCard from "../Components/StatusCard";
import UserChartActivity from "../Components/UserChartActivity";

const Admindashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userType = localStorage.getItem("userType");
    if (userType !== "admin") {
      navigate("/admin/login");
    }
  }, [navigate]);

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
      {/* Header Banner */}
      <AdminBanner />

      {/* Status Cards */}
      <div className="mt-6">
        <StatusCard />
      </div>

      {/* User Chart or Activity */}
      <div className="mt-8 flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <UserChartActivity />
        </div>
        {/* You can add more widgets here if needed */}
      </div>
    </div>
  );
};

export default Admindashboard;
