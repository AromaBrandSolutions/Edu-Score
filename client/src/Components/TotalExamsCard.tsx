import React from "react";

interface TotalExamsCardProps {
  title: string;
  number: number;
  icon: React.ReactElement;
}

const TotalExamsCard: React.FC<TotalExamsCardProps> = ({
  title,
  number,
  icon,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center justify-between space-x-40">
      {/* Text Content on Left */}
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-2xl font-semibold">{number}</p>
      </div>

      {/* Icon on Right */}
      <div className="bg-blue-100 text-blue-600 p-4 rounded-full">{icon}</div>
    </div>
  );
};

export default TotalExamsCard;
