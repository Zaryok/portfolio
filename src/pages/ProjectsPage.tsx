import React from 'react';
import { Briefcase, ExternalLink, Github } from 'lucide-react';

const ProjectsPage = () => {
  const projects = [
    {
      title: "Typing Practice Game",
      description: "A React-based typing game where words fall from the top, and the player must type them before they hit the bottom. Features dynamic difficulty levels, real-time scoring, and a modern user interface.",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Game Development", "Netlify"],
      liveUrl: "https://sunny-paprenjak-87520f.netlify.app/",
      features: [
        "Dynamic difficulty levels that increase word speed and spawn rate",
        "State management with useState and useEffect hooks",
        "Modern and responsive UI with Tailwind CSS",
        "AI-optimized difficulty progression"
      ]
    }
  ];

  return (
    <section className="flex items-center justify-center">
      <div className="content-wrapper">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12 fade-in">
            <Briefcase className="w-8 h-8 text-purple-400 mr-3" />
            <h2 className="text-4xl font-bold text-white">Featured Projects</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 fade-in">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="relative aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <h4 className="text-lg font-semibold text-purple-400">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="skill-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a 
                      href="https://github.com/Zaryok"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;