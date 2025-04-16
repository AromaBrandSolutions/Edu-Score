import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Mon", Students: 120, Teachers: 40 },
  { name: "Tue", Students: 150, Teachers: 50 },
  { name: "Wed", Students: 200, Teachers: 70 },
  { name: "Thu", Students: 180, Teachers: 60 },
  { name: "Fri", Students: 210, Teachers: 80 },
  { name: "Sat", Students: 130, Teachers: 30 },
  { name: "Sun", Students: 110, Teachers: 20 },
];

const UserActivityChart = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-2xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">User Activity</h2>
        <select className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 90 days</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend
            formatter={(value, entry) => (
              <span className="text-sm text-gray-600">{value}</span>
            )}
          />
          <Bar dataKey="Students" stackId="a" fill="#4F46E5" />
          <Bar dataKey="Teachers" stackId="a" fill="#60A5FA" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserActivityChart;
