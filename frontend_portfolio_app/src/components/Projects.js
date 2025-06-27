import React from "react";

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
  /** Display a visual, animated grid of project cards. */
  return (
    <section id="projects" className="bg-zinc-50 dark:bg-zinc-900 py-20 md:py-24 transition-colors">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-2">
          Featured Projects
        </h2>
        <p className="mb-8 text-center text-zinc-600 dark:text-zinc-300">
          Some of the work that highlights my experience and interests.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map(project => (
            <div
              key={project.name}
              className="bg-white dark:bg-zinc-800 rounded-xl shadow-micro p-4 flex flex-col
                         hover:shadow-2xl hover:scale-105 transition-all duration-200"
              tabIndex={0}
            >
              <div className="relative rounded-lg overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-40 w-full object-cover object-top transition duration-300 hover:scale-110"
                  loading="lazy"
                />
                <span className="absolute top-2 right-2 bg-accent text-white text-xs px-2 py-1 rounded shadow">
                  {project.tech[0]}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-1">{project.name}</h3>
              <p className="mb-3 text-zinc-600 dark:text-zinc-300">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map(tech => (
                  <span key={tech} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded">{tech}</span>
                ))}
              </div>
              <div className="mt-auto flex gap-3">
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline font-medium">Demo</a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 dark:text-zinc-300 hover:text-accent transition">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
