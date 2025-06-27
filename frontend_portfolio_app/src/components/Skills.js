import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", icon: "🟨" },
  { name: "TypeScript", icon: "🔵" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟩" },
  { name: "Tailwind CSS", icon: "🌈" },
  { name: "Python", icon: "🐍" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
  // Add more as needed
];

// PUBLIC_INTERFACE
function Skills() {
  /** Modern animated skills grid for Sathish portfolio. */
  return (
    <section id="skills" className="w-full px-1 sm:px-4 py-20 md:py-24 flex flex-col items-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-2 text-center text-primary animate-fadein-up"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        viewport={{ once: true }}
      >
        Sathish's Skills & Stack
      </motion.h2>
      <motion.p
        className="text-zinc-600 dark:text-zinc-300 text-center mb-8"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Key technologies I use to build outstanding, responsive apps and robust backends.
      </motion.p>
      <div className="w-full grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-5 gap-4 sm:gap-6 md:gap-7 justify-center items-center motion-reveal">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center justify-center rounded-xl shadow-micro p-3 sm:p-4 bg-zinc-100 dark:bg-zinc-800
                      hover:scale-105 focus:scale-105 transition-transform duration-200 min-h-[80px]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.48, delay: 0.06 * idx }}
            tabIndex={0}
          >
            <span className="text-2xl sm:text-3xl mb-2">{skill.icon}</span>
            <span className="font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
