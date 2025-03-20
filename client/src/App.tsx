
import "./App.css"
import HeroSection from "./Components/Head";
import MissionComponent from './Components/MissionComponent';
import FooterComponent from './Components/FooterComponent';
import Navbar from './Components/Navbar'

function App() {
  return (
    <div>
      <Navbar /> {/* Use the Navbar component here */}
      <HeroSection/>
      <MissionComponent />
      <FooterComponent />
      
    </div>
  );
}

export default App;

