import React, { useState } from "react";

const ScheduleExam = () => {
  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    startDate: "",
    endDate: "",
    duration: "",
    googleSheetUrl: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-blue-800">
            Schedule New Exam
          </h1>
          <p className="text-gray-500">
            Create and configure a new exam for students
          </p>
        </div>

        {/* Form Starts */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Basic Information
          </h2>
          <p className="text-sm text-gray-500">
            Enter the details for the new exam
          </p>

          {/* Title and Subject */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Exam Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="e.g. Introduction to Computer Science"
                value={formData.title}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="e.g. Computer Science"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Start Date & End Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Start Exam Date
              </label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                End Exam Date
              </label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Exam Duration */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Exam Duration
            </label>
            <input
              type="text"
              name="duration"
              placeholder="e.g. 2 hours"
              value={formData.duration}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Google Sheet API URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Google Sheet API URL
            </label>
            <textarea
              name="googleSheetUrl"
              placeholder="Paste your Google Sheet API URL here..."
              rows={3}
              value={formData.googleSheetUrl}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between pt-6">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-5 py-2 rounded-lg font-medium">
              Cancel
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleExam;
