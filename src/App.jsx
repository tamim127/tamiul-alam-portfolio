import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./hooks/useScrollToTop";
import "./styles/App.css";

function App() {
  useEffect(() => {
    ScrollToTop();
  }, []);

  return (
    <div className="wrapper">
      <Navbar />
      <div className="outerSectionDiv">
        <Hero />
      </div>
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
