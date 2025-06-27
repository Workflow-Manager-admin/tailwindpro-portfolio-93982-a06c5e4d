import React, { useRef, useState } from "react";
import profileOld from "../assets/profile_v2.jpg";
import profileNew from "../assets/glassmorphic_hero.jpg";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

/**
 * Hero section for Sathish - animated, 3D, responsive, parallax, and ultra-modern.
 * Adds a tilting/3D effect to the profile image on hover, matching glassmorphic style.
 * Includes toggle between two demo images for visual verification.
 */
// PUBLIC_INTERFACE
function Hero() {
  // Toggle test for new/old image
  const [useNewProfile, setUseNewProfile] = useState(true);

  // Easily switch here for test/demo/validation.
  const imgSrc = useNewProfile ? profileNew : profileOld;

  // 3D tilt logic & animation, robust for all use-cases
  const imgRef = useRef(null);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 180, damping: 15 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 180, damping: 15 });
  const shadow = useSpring(useMotionValue(0), { stiffness: 120, damping: 18 });

  function handleMouseMove(e) {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    // Touch move fallback (no 3D for touch - no pointer events if width <= 640)
    if (rect.width < 60 || window.innerWidth <= 640) return;
    const x = e.clientX - rect.left, y = e.clientY - rect.top;
    const dx = x - rect.width / 2, dy = y - rect.height / 2;
    const maxTilt = 22;
    rotateY.set(((dx / (rect.width / 2)) * maxTilt) * 0.85);
    rotateX.set((-(dy / (rect.height / 2)) * maxTilt) * 0.82);
    shadow.set(dy / (rect.height / 2));
  }
  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
    shadow.set(0);
  }

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
      <div className="flex flex-col items-center z-20" style={{ minWidth: "8rem" }}>
        <motion.div
          ref={imgRef}
          className="relative z-10 w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full shadow-2xl ring-4 ring-accent/45 flex items-center justify-center bg-transparent
                     border-4 border-zinc-200 dark:border-zinc-800 glass-bg focus:outline-accent"
          style={{
            perspective: 800,
            boxShadow:
              "0 16px 60px 0 rgba(76,74,94,0.13), 0 1.5px 8px 0 rgba(60,44,70,0.10)",
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          tabIndex={0}
          aria-label="Profile image 3D interactive"
        >
          <motion.img
            src={imgSrc}
            alt={useNewProfile ? "Profile 3D glassmorphic" : "Profile (classic)"}
            initial={{ scale: 0.85, y: 60, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 110 }}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "999px",
              objectFit: "cover",
              objectPosition: "center",
              background: "linear-gradient(122deg, #fff 70%, #e7ecff 100%)",
              boxShadow:
                "0 6px 32px 0 rgba(90,90,122,0.10), 0 1.5px 10px 0 rgba(180,180,200,0.06)",
              willChange: "transform",
              transformPerspective: 800,
              rotateX,
              rotateY,
              filter: shadow.to((s) =>
                `drop-shadow(0px ${16 + s * 10}px 44px rgba(63,48,115,0.13))`
              ),
              transition: "box-shadow .4s cubic-bezier(.55,.1,.16,.99)",
            }}
          />
          {/* Glass shine highlight */}
          <motion.div
            className="absolute left-0 top-0 w-full h-full pointer-events-none rounded-full"
            style={{
              background:
                "radial-gradient(circle at 45% 23%,rgba(255,255,255,0.19) 0%,rgba(240,240,255,0.05) 72%,transparent 98%)",
              mixBlendMode: "lighten",
              opacity: 0.89,
              zIndex: 1,
            }}
            aria-hidden="true"
          />
        </motion.div>
        {/* Toggle demo ONLY: not visible in live site */}
        <button
          onClick={() => setUseNewProfile((v) => !v)}
          className="mt-3 px-3 py-1 rounded bg-primary/80 text-white text-xs font-bold shadow-micro hover:bg-accent/95 border border-accent focus:outline-accent transition"
          style={{
            letterSpacing: "0.03em",
            opacity: 0.82,
            marginBottom: "6px",
            outline: "none",
          }}
        >
          {useNewProfile ? "Show Classic Avatar" : "Show Glassmorph Image"}
        </button>
      </div>
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
