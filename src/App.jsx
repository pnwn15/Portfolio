import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.js/Navbar";
import Footer from "./Components/Footer/Footer";
import Carousel from "./Components/Carousel/Carousel";
import Project from "./Components/Project/Project";
import Aboute from "./Components/Aboute/Aboute";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Carousel />} />
        <Route path="/project" element={<Project />} />
        <Route path="/aboutme" element={<Aboute />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
