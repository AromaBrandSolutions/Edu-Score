import { useState, useEffect } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBook,
  FaCalendarAlt,
  FaChartBar,
  FaChevronDown,
} from "react-icons/fa";

const AdmindashboardLayout = () => {
  const [userType, setUserType] = useState("Admin");
  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (userType === "Admin" && !location.pathname.startsWith("/admin")) {
      navigate("/admin/dashboard");
    } else if (
      userType === "Student" &&
      !location.pathname.startsWith("/student")
    ) {
      navigate("/student/dashboard");
    }
  }, [userType, navigate, location.pathname]);

  const navItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, path: "/admin/dashboard" },
    { name: "Manage Students", icon: <FaBook />, path: "/admin/manage-exams" },
    {
      name: "Schedule Exam",
      icon: <FaCalendarAlt />,
      path: "/admin/schedule-exam",
    },
    { name: "Performance", icon: <FaChartBar />, path: "/admin/performance" },
  ];

  return (
    <div className="relative h-screen">
      {/* Header */}
      <div className="flex justify-between items-center px-5 py-2 bg-white shadow-md">
      <div className="flex items-center gap-2">
  <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-full font-bold text-sm">
    EP
  </div>
  <span className="text-lg font-serif font-semibold">Exam Portal</span>
</div>

        <div className="flex items-center gap-5 relative">
          <h1 className="text-lg font-bold">Admin Dashboard</h1>

          <div className="relative">
            <button
              className="flex items-center px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-100"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              {userType}{" "}
              <FaChevronDown
                className={`ml-2 transition-transform duration-200 ${
                  showDropdown ? "rotate-180" : ""
                }`}
              />
            </button>

            {showDropdown && (
              <div className="absolute top-full right-0 mt-2 bg-white border border-gray-300 shadow-md rounded-md z-10">
                {["Admin", "Student", "Logged in"].map((role) => (
                  <span
                    key={role}
                    className="block px-4 py-2 cursor-pointer hover:bg-gray-200 rounded-md"
                    onClick={() => {
                      setUserType(role);
                      setShowDropdown(false);
                    }}
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
        <div className="w-64 bg-white text-black border-r border-gray-200 flex flex-col justify-between">
          <nav className="flex-1 px-3 py-4">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  to={item.path}
                  key={item.name}
                  className={`flex items-center py-3 px-4 mb-2 rounded-md transition-colors duration-200
                    ${
                      isActive
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  <span
                    className={`mr-3 text-lg ${
                      isActive ? "text-blue-600" : "text-gray-500"
                    }`}
                  >
                    {item.icon}
                  </span>
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Main Content Area */}
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdmindashboardLayout;