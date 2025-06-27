import React from "react";
import profile from "../assets/profile.jpg";

// PUBLIC_INTERFACE
function Hero() {
  /** Hero section with profile, title, intro, download CV. */
  return (
    <section id="home" className="w-full flex flex-col md:flex-row items-center justify-center gap-8 py-32 md:py-40 bg-gradient-to-b from-white via-zinc-100 to-zinc-100 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-950 transition">
      <img
        src={profile}
        alt="Profile"
        className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-xl ring-4 ring-accent/40 object-cover border-4 border-zinc-200 dark:border-zinc-800 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
      />
      <div className="flex flex-col gap-4 max-w-xl">
        <h1 className="text-[2.6rem] md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-primary via-secondary to-accent text-transparent bg-clip-text animate-gradientmove mb-2">
          Hi, I'm Alex – Fullstack Developer
        </h1>
        <p className="text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed">
          I craft modern apps & websites with clean code, accessible UX, and a passion for UI micro-animation.
        </p>
        <div className="flex gap-3 mt-4">
          <a
            href="/assets/KaviaDev_Resume.pdf"
            className="inline-block px-6 py-2 font-semibold rounded bg-primary text-white shadow-micro hover:bg-primary/80 hover:translate-y-[-2px] transition"
            download
          >Download CV</a>
          <a
            href="#projects"
            className="inline-block px-6 py-2 font-semibold rounded border border-accent text-accent hover:bg-accent/10 transition"
          >See Projects</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
