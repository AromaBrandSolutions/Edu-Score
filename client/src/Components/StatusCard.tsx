import React from 'react';
import { FaUsers, FaChartLine, FaServer } from 'react-icons/fa';

const StatusCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mt-6">
      
      {/* Total Users */}
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 flex justify-between items-center">
        <div>
          <h2 className="font-semibold text-gray-700 text-lg">Total Users</h2>
          <p className="text-2xl font-bold text-gray-900">1,234</p>
        </div>
        <FaUsers className="text-blue-600 text-4xl" />
      </div>

      {/* Active Sessions */}
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 flex justify-between items-center">
        <div>
          <h2 className="font-semibold text-gray-700 text-lg">Active Sessions</h2>
          <p className="text-2xl font-bold text-gray-900">87</p>
        </div>
        <FaChartLine className="text-green-600 text-4xl" />
      </div>

      {/* Server Status */}
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 flex justify-between items-center">
        <div>
          <h2 className="font-semibold text-gray-700 text-lg">Server Status</h2>
          <p className="text-lg font-medium text-gray-900">All systems operational</p>
        </div>
        <FaServer className="text-purple-600 text-4xl" />
      </div>

    </div>
  );
};

export default StatusCards;
