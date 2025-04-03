import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom"; 
import { FaTachometerAlt, FaBook, FaChartBar, FaChevronDown } from "react-icons/fa";
import { MdChevronLeft } from "react-icons/md";

const StudentDashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [userType, setUserType] = useState("Student");
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeTab, setActiveTab] = useState("Dashboard");
  const navigate = useNavigate(); 

  
  const handleUserTypeChange = (role: string) => {
    setUserType(role);
    setShowDropdown(false);

    if (role === "Admin") {
      navigate("/admin/dashboard"); 
    } else if (role === "Student") {
      navigate("/student/dashboard"); 
    }
  };

  return (
    <div className="relative h-screen">
      
      <div className="flex justify-between items-center px-5 py-2 bg-white shadow-md">
        <div className="font-serif text-lg">Exam Portal</div>
        <div className="flex items-center gap-5 relative">
          <h1 className="text-lg font-bold">Exam Portal</h1>

          
          <div className="relative">
            <button
              className="flex items-center px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-100"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              {userType} <FaChevronDown className={`ml-2 transition-transform duration-200 ${showDropdown ? "rotate-180" : ""}`} />
            </button>

            {showDropdown && (
              <div className="absolute top-full right-0 mt-2 bg-white border border-gray-300 shadow-md rounded-md z-10">
                {["Admin", "Student","Logged in"].map((role) => (
                  <span
                    key={role}
                    className="block px-4 py-2 cursor-pointer hover:bg-gray-200 rounded-md"
                    onClick={() => handleUserTypeChange(role)}
                  >
                    {role}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-50px)] font-sans">
        {/* Sidebar */}
        <div className={`bg-white text-black p-4 transition-all duration-300 border-r border-gray-300 flex flex-col justify-between ${isCollapsed ? "w-0 opacity-0 overflow-hidden" : "w-64"}`}>
          <nav>
            {[{ name: "Dashboard", icon: <FaTachometerAlt />, path: "dashboard" },
              { name: "MyExams", icon: <FaBook />, path: "my-exams" },
              { name: "Results", icon: <FaChartBar />, path: "results" }]
              .map((item) => (
                <Link
                  to={item.path}
                  key={item.name}
                  className={`flex items-center p-2 w-full text-left text-sm font-normal rounded-md transition-colors duration-200 ${activeTab === item.name ? "bg-blue-500 text-white" : "hover:bg-gray-100"}`}
                  onClick={() => setActiveTab(item.name)}
                >
                  <span className="mr-2">{item.icon}</span> {!isCollapsed && item.name}
                </Link>
              ))}
          </nav>

          {/* Collapse Button */}
          <div className="mt-auto pt-2">
            <button onClick={() => setIsCollapsed(!isCollapsed)} className="flex items-center w-full p-2 text-left cursor-pointer text-black hover:bg-gray-200 rounded-md">
              <MdChevronLeft className="mr-2" /> {!isCollapsed && "Collapse"}
            </button>
          </div>
        </div>

        
        <div className="flex-1 p-5 bg-gray-50">
          <Outlet />  
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
