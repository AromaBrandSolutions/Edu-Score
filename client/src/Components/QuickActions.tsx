import React from "react";
import { Plus, Bell, FileText } from "lucide-react";

const QuickActions = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-3xl">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Quick Actions</h2>
      <div className="space-y-5">
        <button className="flex items-center gap-3 w-full bg-indigo-600 text-white py-3 px-5 rounded-md hover:bg-indigo-700 text-base font-medium">
          <Plus size={22} /> Add New User
        </button>
        <button className="flex items-center gap-3 w-full bg-emerald-600 text-white py-3 px-5 rounded-md hover:bg-emerald-700 text-base font-medium">
          <Plus size={22} /> Create New Exam
        </button>
        <button className="flex items-center gap-3 w-full bg-blue-600 text-white py-3 px-5 rounded-md hover:bg-blue-700 text-base font-medium">
          <Bell size={22} /> Send Notification
        </button>
        <button className="flex items-center gap-3 w-full bg-orange-600 text-white py-3 px-5 rounded-md hover:bg-orange-700 text-base font-medium">
          <FileText size={22} /> Generate Reports
        </button>
      </div>
    </div>
  );
};

export default QuickActions;
