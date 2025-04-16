import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { FiLogIn } from "react-icons/fi";
import { FaUserGraduate } from "react-icons/fa";

const StudentLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  // Form validation logic
  const validateForm = () => {
    let newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = "⚠️ Please fill out this field";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "⚠️ Please fill out this field";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    } else if (!/(?=.*[0-9])(?=.*[!@#$%^&*])/.test(password)) {
      newErrors.password = "Password must contain a number and a special character";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccess(true);
      setEmail("");
      setPassword("");
      localStorage.setItem("userType", "student");  // Save student login status
      setTimeout(() => {
        setSuccess(false);
        // Redirect to student dashboard
        navigate("/student/dashboard");
      }, 1500);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 flex-col">
      {success && (
        <div className="fixed top-10 p-4 bg-green-100 text-green-700 text-center rounded-lg shadow-lg w-80">
          ✅ You are successfully logged in!
        </div>
      )}
      <div className="bg-white p-6 rounded-lg shadow-lg w-90">
        <h2 className="text-2xl font-bold text-center mb-2 flex items-center justify-center gap-2">
          <FaUserGraduate className="text-black" /> Student Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              className={`mt-1 p-2 w-full border rounded-lg ${errors.email ? "border-red-500" : ""}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              className={`mt-1 p-2 w-full border rounded-lg ${errors.password ? "border-red-500" : ""}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 flex items-center justify-center gap-2">
            <FiLogIn /> Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentLogin;
