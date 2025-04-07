import React from "react";
import { BookOpenIcon } from "@heroicons/react/24/outline"; // Importing Heroicon

const TotalExamsCard: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center justify-between space-x-40">
      {/* Text Content on Left */}
      <div>
        <p className="text-gray-500 text-sm">Total Exams</p>
        <p className="text-2xl font-semibold">4</p>
      </div>

      {/* Icon on Right */}
      <div className="bg-blue-100 text-blue-600 p-4 rounded-full">
        <BookOpenIcon className="w-6 h-6" />
      </div>
    </div>
  );
};

export default TotalExamsCard;
