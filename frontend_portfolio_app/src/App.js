import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Resume from "./components/Resume";
import "./index.css";

// Animation and parallax
import { ParallaxProvider } from "react-scroll-parallax";

// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PUBLIC_INTERFACE
function App() {
  // Persistent theme (dark preferred), uses Tailwind's class+custom
  const [theme, setTheme] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );
  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    // On mount, load theme from LS or system
    const stored = localStorage.getItem("theme");
    if (stored) setTheme(stored);
  }, []);

  // PUBLIC_INTERFACE
  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  // Main page layout (Home: all sections one page; subpages for resume/education)
  const HomeSections = () => (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Resume />
      <Contact />
    </>
  );

  return (
    <ParallaxProvider>
      <Router>
        <div className="bg-background-light dark:bg-background-dark min-h-screen w-full font-sans flex flex-col relative">
          <Navbar onToggleTheme={toggleTheme} theme={theme} />
          <main className="flex-1 flex flex-col w-full xl:w-screen max-w-full mx-auto pt-16"> {/* pt-16 for fixed navbar spacing */}
            <Routes>
              <Route path="/" element={<HomeSections />} />
              <Route path="/education" element={<Education />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ParallaxProvider>
  );
}

export default App;
