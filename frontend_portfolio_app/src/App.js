import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

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

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen w-full font-sans flex flex-col relative">
      <Navbar onToggleTheme={toggleTheme} theme={theme} />
      <main className="flex-grow flex flex-col">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
