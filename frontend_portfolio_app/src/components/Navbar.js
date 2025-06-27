import React from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];

const socialLinks = [
  { href: "https://github.com/", label: "GitHub", icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 ..."/></svg> },
  { href: "https://linkedin.com/", label: "LinkedIn", icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.944 3C21.065 3 ..." /></svg> },
  // Add more as needed
];

// PUBLIC_INTERFACE
function Navbar({ onToggleTheme, theme }) {
  /** Top navigation bar, fixed, with name/logo, nav links, and theme toggle. */
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-900/90 shadow-micro backdrop-blur transition-all duration-200">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-bold text-lg tracking-widest text-accent dark:text-accent">KAVIA DEV</a>
        <div className="flex gap-4 items-center">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="px-2 py-1 rounded-lg text-zinc-700 dark:text-zinc-100 hover:bg-accent/10 dark:hover:bg-accent/20 font-medium transition">{link.label}</a>
          ))}
          <button
            aria-label="Toggle theme"
            className="ml-3 rounded-lg px-2 py-1 hover:bg-zinc-200 dark:hover:bg-zinc-700"
            onClick={onToggleTheme}
          >
            {theme === "dark" ? <span aria-label="Light mode" role="img">☀️</span> : <span aria-label="Dark mode" role="img">🌙</span>}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
