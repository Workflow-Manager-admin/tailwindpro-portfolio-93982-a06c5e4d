import React from "react";
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
  /** Skills & technology grid section. */
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-20 md:py-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-primary">Skills & Stack</h2>
      <p className="text-zinc-600 dark:text-zinc-300 text-center mb-8">
        Key technologies and tools I use for modern web & app development.
      </p>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-6 justify-center items-center">
        {skills.map(skill => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center rounded-lg shadow-micro p-4 bg-zinc-100 dark:bg-zinc-800 hover:scale-105 transition-transform duration-200"
          >
            <span className="text-3xl mb-2">{skill.icon}</span>
            <span className="font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
