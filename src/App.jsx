import "./App.css";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import SmoothScrollProvider from "./SmoothScrollProvider";
import { ServiceSection } from "./component/ServiceSection";

function App() {
  return (
    <SmoothScrollProvider>
      <Navbar />
      <HeroSection />
      <ServiceSection />    
    </SmoothScrollProvider>
  );
}

export default App;
