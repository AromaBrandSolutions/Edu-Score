const WelcomeBanner: React.FC = () => {
    return (
      <div className="bg-blue-100 rounded-2xl p-6 shadow-md">
        <h2 className="text-2xl font-semibold text-gray-900">
        Welcome, Admin!
        </h2>
        <p className="text-gray-600 mt-1">
        Use this space to manage your application efficiently.
        </p>
      </div>
    );
  };
  
  export default WelcomeBanner;
  