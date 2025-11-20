import "./App.css";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import SmoothScrollProvider from "./SmoothScrollProvider";
import { ServiceSection } from "./component/ServiceSection";
import About from "./component/About";

function App() {
  return (
    <SmoothScrollProvider>
      <Navbar />
      <HeroSection />
      <ServiceSection />    
      <About />
    </SmoothScrollProvider>
  );
}

export default App;