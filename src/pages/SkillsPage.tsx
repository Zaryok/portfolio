import React from 'react';
import { Code2, Globe, Database, Server } from 'lucide-react';

const SkillsPage = () => {
  const skills = {
    frontend: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "TypeScript",
      "Tailwind CSS"
    ],
    backend: [
      "Node.js",
      "MongoDB",
      "SQL"
    ],
    tools: [
      "Git & GitHub",
      "VS Code",
      "Netlify",
      "npm/yarn",
      "Vite"
    ]
  };

  return (
    <section className="flex items-center justify-center">
      <div className="content-wrapper">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12 fade-in">
            <Code2 className="w-8 h-8 text-purple-400 mr-3" />
            <h2 className="text-4xl font-bold text-white">Tech Stack</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in">
            <div className="card">
              <div className="flex items-center justify-center mb-6">
                <Globe className="w-10 h-10 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white text-center mb-6">Frontend Development</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="card">
              <div className="flex items-center justify-center mb-6">
                <Server className="w-10 h-10 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white text-center mb-6">Backend & Database</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="card">
              <div className="flex items-center justify-center mb-6">
                <Database className="w-10 h-10 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white text-center mb-6">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;