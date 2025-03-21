import "./App.css";
import HeroSection from "./Components/Head";
import MissionComponent from "./Components/MissionComponent";
import FooterComponent from "./Components/FooterComponent";
import Navbar from "./Components/Navbar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar /> {/* Use the Navbar component here */}
        <HeroSection />
        <MissionComponent />
        <FooterComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
