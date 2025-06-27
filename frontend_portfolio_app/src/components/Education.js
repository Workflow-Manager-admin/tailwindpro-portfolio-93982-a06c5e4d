import React from "react";
import { motion } from "framer-motion";

// Sample data - should be replaced with actual education history.
const educationList = [
  {
    institution: "ABC University",
    degree: "B.Sc. Computer Science",
    period: "2016 – 2020",
    details: [
      "Graduated with Honors",
      "Specialized in Software Engineering",
      "Relevant coursework: Algorithms, Databases, Web Development",
    ]
  },
  {
    institution: "XYZ High School",
    degree: "High School Diploma",
    period: "2014 – 2016",
    details: [
      "Top 5% of class",
      "President, Coding Club"
    ]
  }
];

// PUBLIC_INTERFACE
function Education() {
  /** Modern glassmorphic education section; fully responsive and animated. */
  return (
    <section id="education" className="w-full py-20 md:py-24 bg-transparent">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-2 text-center text-primary animate-fadein-up"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        Education
      </motion.h2>
      <motion.p
        className="text-zinc-600 dark:text-zinc-200 text-center mb-8 animate-fadein-up"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.07 }}
        viewport={{ once: true }}
      >
        Academic background & certifications.
      </motion.p>
      <div className="max-w-3xl mx-auto flex flex-col gap-8 md:gap-10 px-2 sm:px-4">
        {educationList.map((edu, idx) => (
          <motion.div
            key={edu.institution + edu.period}
            className="rounded-xl glass-bg px-6 py-6 sm:py-8 shadow-2xl border border-white/25 dark:border-zinc-200/10 backdrop-blur-xl glass-micro relative"
            initial={{ opacity: 0, y: 48, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.54, delay: idx * 0.12 }}
            tabIndex={0}
            style={{
              boxShadow: `0 6px 32px 0 rgba(60,54,122,0.07), 0 1.5px 10px 0 rgba(180,180,190,0.03)`,
              background:
                "linear-gradient(133deg,rgba(255,255,255,0.65) 36%,rgba(200,200,255,0.21) 95%)",
              border: "1px solid rgba(255,255,255,0.18)",
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <span className="font-bold text-xl md:text-2xl text-accent">{edu.institution}</span>
              <span className="block mt-1 md:mt-0 text-primary/80 text-sm font-medium">{edu.period}</span>
            </div>
            <div className="font-semibold text-lg md:text-xl mb-1">{edu.degree}</div>
            <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 text-base">
              {edu.details.map((d, i) => (
                <li key={i} className="my-1">{d}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;
