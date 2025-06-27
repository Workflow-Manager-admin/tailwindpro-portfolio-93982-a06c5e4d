import React from "react";

import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home", section: true },
  { to: "/education", label: "Education", section: false },
  { to: "/resume", label: "Resume", section: false },
  { href: "#skills", label: "Skills", section: true },
  { href: "#projects", label: "Projects", section: true },
  { href: "#contact", label: "Contact", section: true }
];

const socialLinks = [
  { href: "https://github.com/", label: "GitHub", icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 ..."/></svg> },
  { href: "https://linkedin.com/", label: "LinkedIn", icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.944 3C21.065 3 ..." /></svg> },
  // Add more as needed
];

/**
 * Stylish and animated navigation bar for 'Sathish' portfolio.
 */
function Navbar({ onToggleTheme, theme }) {
  const location = typeof window !== "undefined" && window.location ? window.location.pathname : "/";
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50
      bg-white/70 dark:bg-zinc-900/80 shadow-micro backdrop-blur-xl
      border-b border-white/15 dark:border-zinc-300/5
      transition-all duration-200"
      style={{
        background: "linear-gradient(94deg,rgba(255,255,255,0.72) 72%,rgba(200,200,235,0.13) 100%)",
        boxShadow: "0 3px 14px 0 rgba(50,44,114,0.06), 0 1.5px 10px 0 rgba(180,180,190,0.023)"
      }}
    >
      <div className="max-w-5xl mx-auto px-3 py-2 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-tighter bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent select-none focus:outline-accent shadow-micro"
          style={{ letterSpacing: "0.075em" }}
        >
          Sathish
        </Link>
        <div className="flex gap-2 md:gap-4 items-center">
          {navLinks.map(link =>
            link.section ? (
              <a
                key={link.label}
                href={link.href}
                className="px-2 md:px-3 py-1 rounded-lg text-zinc-700 dark:text-zinc-100 font-semibold hover:bg-accent/10 dark:hover:bg-accent/20 transition focus:bg-accent/20 outline-none"
                tabIndex={0}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className={[
                  "px-2 md:px-3 py-1 rounded-lg font-semibold focus:outline-accent transition",
                  location === link.to
                    ? "bg-accent/15 dark:bg-accent/25 text-accent"
                    : "text-zinc-700 dark:text-zinc-100 hover:bg-accent/10 dark:hover:bg-accent/20",
                ].join(" ")}
                tabIndex={0}
              >
                {link.label}
              </Link>
            )
          )}
          <button
            aria-label="Toggle theme"
            className="ml-2 md:ml-3 rounded-lg px-2 py-1 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition focus:outline-accent"
            onClick={onToggleTheme}
          >
            {theme === "dark"
              ? <span aria-label="Light mode" role="img">☀️</span>
              : <span aria-label="Dark mode" role="img">🌙</span>}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
