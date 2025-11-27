import Header from "./components/Header";
import { useState, useEffect } from 'react';
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import './styles/App.css';
function App() {
    const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

const scrollToSection = (sectionId) => {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
        <div className="app-container">
      <Header 
        darkMode={darkMode} 
        setDarkMode={setDarkMode}
        scrollToSection={scrollToSection}
      />
      <Hero scrollToSection={scrollToSection}/>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App