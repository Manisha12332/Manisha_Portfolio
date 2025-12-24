import { Routes, Route } from "react-router-dom";
import "./App.css";
import HeroSection from "./Components/HeroSection";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;