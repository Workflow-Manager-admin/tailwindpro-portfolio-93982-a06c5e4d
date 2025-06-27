import React from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

const projects = [
  {
    name: "Modern Portfolio",
    description: "A beautiful, interactive portfolio built with React, Tailwind, and Framer Motion.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/",
    demo: "#",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "API Dashboard",
    description: "Real-time dashboard to monitor microservices health, leveraging websockets and D3.",
    tech: ["Node.js", "D3.js", "Websockets"],
    github: "https://github.com/",
    demo: "#",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "E-Commerce Template",
    description: "Minimal shopping UI design system built with accessibility-first React patterns.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/",
    demo: "#",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
  },
  // Add more sample projects as desired.
];

// PUBLIC_INTERFACE
function Projects() {
  /** Display projects in a 3D parallax background with reveal-animated modern project cards. */
  return (
    <section id="projects" className="relative bg-zinc-50 dark:bg-zinc-900 py-20 md:py-24 transition-colors overflow-x-hidden">
      {/* Parallax background */}
      <Parallax speed={-15}>
        <div className="absolute left-0 right-0 top-0 h-full -z-10 opacity-20 pointer-events-none">
          <div style={{ 
            background: "linear-gradient(120deg, #3B82F630 10%, #a07e5a22 45%, #6366F130 90%)",
            width: "100vw", height: "105%",
          }} />
        </div>
      </Parallax>
      <div className="max-w-5xl mx-auto px-2 sm:px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-secondary mb-2 animate-fadein-up"
          initial={{ opacity: 0, y: 38 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring" }}
        >
          Featured Projects
        </motion.h2>
        <motion.p
          className="mb-8 text-center text-zinc-600 dark:text-zinc-300 animate-fadein-up"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Some of my work that highlights both technical experience and a love for motion/UI polish.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 md:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.name}
              className="bg-white dark:bg-zinc-800 rounded-xl shadow-micro p-4 flex flex-col
                         hover:shadow-2xl hover:-translate-y-2 transition-all duration-200 relative motion-reveal border border-zinc-100 dark:border-zinc-800
                         focus:outline-primary"
              initial={{ opacity: 0, y: 48, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.66, type: "spring", delay: 0.10 * idx }}
              tabIndex={0}
              style={{ minHeight: "320px" }}
            >
              <div className="relative rounded-lg overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-36 sm:h-44 w-full object-cover object-top transition duration-300 hover:scale-110"
                  loading="lazy"
                  style={{ borderRadius: "0.85rem" }}
                />
                <span className="absolute top-2 right-2 bg-accent text-white text-xs px-2 py-1 rounded shadow">
                  {project.tech[0]}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1">{project.name}</h3>
              <p className="mb-3 text-zinc-600 dark:text-zinc-300 text-base">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map(tech => (
                  <span key={tech} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded">{tech}</span>
                ))}
              </div>
              <div className="mt-auto flex gap-3">
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline font-medium">Demo</a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 dark:text-zinc-300 hover:text-accent transition">GitHub</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
