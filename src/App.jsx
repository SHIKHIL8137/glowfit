import "./App.css";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import SmoothScrollProvider from "./SmoothScrollProvider";
import { ServiceSection } from "./component/ServiceSection";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <SmoothScrollProvider>
      <Navbar />
      <HeroSection />
      <ServiceSection />    
      <About />
      <Contact />
      <Footer />
    </SmoothScrollProvider>
  );
}

export default App;