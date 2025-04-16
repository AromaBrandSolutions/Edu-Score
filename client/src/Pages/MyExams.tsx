import OngoingExamCard from "../Components/OngoingExams";

const MyExams = () => {
  const ongoingExamProps = {
    title: "Advanced Mathematics",
    subject: "Mathematics",
    status: "Ongoing",
    duration: "90 min",
    questions: 40,
    availableText: "Available now",
    onStart: () => alert("Starting exam..."), // Placeholder for exam start logic
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Ongoing Exams Section */}
      <div className="mt-2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Ongoing Exams</h2>
        </div>

        {/* Using only one card as shown in the image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <OngoingExamCard {...ongoingExamProps} />
          <OngoingExamCard {...ongoingExamProps} />
          <OngoingExamCard {...ongoingExamProps} />
        </div>
      </div>
    </div>
  );
};

export default MyExams;