import React from "react";
import { motion } from "framer-motion";

// Sample experience/resume data.
const experience = [
  {
    title: "Frontend Developer",
    company: "ModernWeb Solutions",
    period: "2022 – Present",
    details: [
      "Built performant React-based UIs and reusable components.",
      "Led migration to Tailwind CSS with dark mode & glassmorphism.",
    ]
  },
  {
    title: "Fullstack Engineer",
    company: "Tech Innovators Inc.",
    period: "2020 – 2022",
    details: [
      "Designed REST APIs and UI for SaaS dashboards.",
      "Improved CI/CD workflows and implemented code reviews."
    ]
  }
];

// PUBLIC_INTERFACE
function Resume() {
  /** Glassmorphic Resume/Experience section; with download button and modern layout. */
  return (
    <section id="resume" className="w-full py-20 md:py-24 bg-transparent">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-2 text-center text-secondary animate-fadein-up"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        Resume
      </motion.h2>
      <motion.p
        className="text-zinc-600 dark:text-zinc-200 text-center mb-7 animate-fadein-up"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.06 }}
        viewport={{ once: true }}
      >
        Professional Experience & Career Journey. Download full CV below.
      </motion.p>
      <div className="flex flex-col items-center mb-12">
        <a
          href="/assets/Sathish_Resume.pdf"
          className="inline-block px-8 py-3 font-bold rounded-xl shadow-micro glass-bg border border-white/25 dark:border-zinc-200/10 transition-colors duration-150 hover:bg-accent hover:text-white dark:hover:bg-primary/80 hover:scale-105 mb-4 backdrop-blur-xl"
          style={{
            background: "linear-gradient(98deg,rgba(255,255,255,0.54) 43%,rgba(140,195,255,0.15) 100%)",
            boxShadow: "0 3px 14px 0 rgba(50,44,114,0.10), 0 1.5px 10px 0 rgba(180,180,190,0.03)",
            border: "1px solid rgba(255,255,255,0.18)",
          }}
          download
        >
          Download CV (PDF)
        </a>
      </div>

      <div className="max-w-3xl mx-auto flex flex-col gap-8 md:gap-10 px-2 sm:px-4">
        {experience.map((role, idx) => (
          <motion.div
            key={role.company + role.period}
            className="rounded-xl glass-bg px-6 py-7 shadow-lg border border-white/25 dark:border-zinc-200/10 backdrop-blur-xl glass-micro relative"
            initial={{ opacity: 0, y: 48, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.57, delay: idx * 0.16 }}
            tabIndex={0}
            style={{
              boxShadow: `0 6px 32px 0 rgba(60,54,122,0.09), 0 1.5px 10px 0 rgba(180,180,190,0.04)`,
              background:
                "linear-gradient(129deg,rgba(255,255,255,0.62) 37%,rgba(176,176,245,0.20) 91%)",
              border: "1px solid rgba(255,255,255,0.18)",
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <span className="font-bold text-xl md:text-2xl text-primary">{role.title}</span>
              <span className="block mt-1 md:mt-0 text-secondary/90 text-sm font-semibold">{role.period}</span>
            </div>
            <div className="text-lg md:text-xl mb-2 font-medium">{role.company}</div>
            <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-200 text-base">
              {role.details.map((d, i) => (
                <li key={i} className="my-1">{d}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Resume;
