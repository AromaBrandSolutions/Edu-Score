// import React from "react";
// import HomeSection from "./components/HomeSection";

// function App() {
//   return <HomeSection />;
// }

// export default App;




import React from "react";
import MissionComponent from "./components/MissionComponent";
import FooterComponent from "./components/FooterComponent";
import AdminLoginForm from "./components/AdminLoginForm"; // Import the Login Form

function App() {
  return (
    <>
      <AdminLoginForm /> {/* Add the login form */}
      <MissionComponent />
      <FooterComponent />
    </>
  );
}

export default App;

