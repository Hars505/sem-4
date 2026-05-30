import { Routes, Route } from "react-router-dom";
import { HeroDigitalSuccess } from "./hero-digital-success/digital-success";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<HeroDigitalSuccess />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
}

export default Routing;
