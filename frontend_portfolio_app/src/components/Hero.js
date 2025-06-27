import React from "react";
import profile from "../assets/profile.jpg";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

// PUBLIC_INTERFACE
function Hero() {
  /**
   * Hero section for Sathish - animated, 3D, responsive, parallax, and ultra-modern.
   */
  return (
    <section
      id="home"
      className="relative w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-14 pt-36 pb-28 md:py-48 
      overflow-x-hidden bg-gradient-to-b from-white via-zinc-100 to-zinc-100 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-950 transition
      min-h-[650px] md:min-h-[630px] max-w-[100vw]"
      style={{ minHeight: "66vh" }}
    >
      {/* 3D Parallax BG Circles */}
      <Parallax speed={-20}>
        <div className="parallax-bg z-0 pointer-events-none">
          <div className="depth-circle" />
        </div>
      </Parallax>
      <motion.img
        src={profile}
        alt="Profile"
        initial={{ scale: 0.85, y: 60, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 110 }}
        className="z-10 w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full shadow-2xl ring-4 ring-accent/45 object-cover border-4 border-zinc-200 dark:border-zinc-800 hover:scale-105 hover:shadow-2xl transition-transform duration-300 motion-reveal"
        style={{
          boxShadow:
            "0 16px 60px 0 rgba(76,74,94,0.11), 0 1.5px 8px 0 rgba(60,44,70,0.07)",
        }}
      />
      <div className="flex flex-col gap-4 max-w-xl z-20 justify-center items-center md:items-start">
        <motion.h1
          className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl xl:text-[3.3rem] font-extrabold leading-tight
          bg-gradient-to-r from-primary via-secondary to-accent text-transparent bg-clip-text animate-gradientmove mb-1 sm:mb-2
          drop-shadow"
          initial={{ opacity: 0, y: 56 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, type: "spring" }}
        >
          Hi, I'm Sathish – Modern Fullstack Developer
        </motion.h1>
        <motion.p
          className="text-base md:text-lg text-zinc-600 dark:text-zinc-200 leading-relaxed text-center md:text-left font-medium motion-reveal"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.33, duration: 0.8, type: "tween" }}
        >
          I build visually striking, performant modern websites & apps
          <span className="inline-block mx-1 shimmer px-2 rounded">
            <span className="font-semibold">with code, motion & a human touch</span>
          </span>
          —let's create digital experiences that stand out.
        </motion.p>
        <motion.div
          className="flex flex-row gap-3 mt-4 motion-reveal"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.54, duration: 0.7 }}
        >
          <a
            href="/assets/Sathish_Resume.pdf"
            className="inline-block px-6 py-2.5 font-semibold rounded bg-primary text-white shadow-micro hover:bg-primary/90 hover:scale-105 transition
            active:scale-95 ring-primary focus:outline-accent"
            download
          >Download CV</a>
          <a
            href="#projects"
            className="inline-block px-6 py-2.5 font-semibold rounded border border-accent text-accent hover:bg-accent/5 hover:scale-104 transition
            focus:outline-accent"
          >See Projects</a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
