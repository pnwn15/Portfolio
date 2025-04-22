import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.js/Navbar";
import Footer from "./Components/Footer/Footer";
import Carousel from "./Components/Carousel/Carousel";
import Project from "./Components/Project/Project";
import Aboute from "./Components/Aboute/Aboute";
import Contact from "./Components/Contact/Contact";
import LoadingScreen from "./LoadingScreen";
import React, { useState, useEffect } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // จำลองการโหลดข้อมูล 2 วินาที
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }
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
