import React from "react";

const socials = [
  { href: "https://github.com/", name: "GitHub", icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 ..."/></svg>
  )},
  { href: "https://linkedin.com/", name: "LinkedIn", icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.944 3C21.065 3 ..." /></svg>
  )},
  // Add more as required
];

// PUBLIC_INTERFACE
function Footer() {
  /** Footer for Sathish's portfolio: modern, minimal, and fully responsive. */
  return (
    <footer
      className="w-full py-8 glass-bg glass-micro border-t border-white/10 dark:border-zinc-700/20 transition-colors"
      style={{
        background:
          "linear-gradient(126deg,rgba(255,255,255,0.65) 36%,rgba(220,220,255,0.13) 100%)",
        borderTop: "1px solid rgba(255,255,255,0.13)",
        backdropFilter: "blur(17px)"
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 px-4 sm:px-6">
        <div className="text-zinc-500 dark:text-zinc-300 text-sm">
          © {new Date().getFullYear()} Sathish Portfolio
        </div>
        <div className="flex gap-3 md:gap-4">
          {socials.map(s => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 dark:text-zinc-200 hover:text-accent transition-colors"
              aria-label={s.name}
            >{s.icon}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
