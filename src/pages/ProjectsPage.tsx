import React from 'react';
import { Briefcase, ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  features: string[];
}

const ProjectsPage = () => {
  const projects: Project[] = [
    {
      title: "CVify - Modern CV Builder",
      description: "A web application for creating professional CVs with real-time preview and PDF export. Features a responsive dashboard for managing multiple CVs with full CRUD operations.",
      image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&q=80",
      technologies: ["React", "TypeScript", "Tailwind CSS", "react-pdf/renderer", "jsPDF", "LocalStorage"],
      liveUrl: "https://cvifyy.netlify.app/",
      githubUrl: "https://github.com/Zaryok/CVIFY",
      features: [
        "Implements a responsive dashboard for managing multiple CVs with full CRUD operations",
        "Developed using React and TypeScript with modular component architecture",
        "Real-time PDF preview and export using @react-pdf/renderer and jspdf libraries",
        "Features a step-by-step form wizard with live preview and custom form validation",
        "Integrated dark mode and responsive design with Tailwind CSS for optimal user experience",
        "Utilizes local storage for data persistence and resume management",
        "Professional templates and custom styling for high-quality PDF output"
      ]
    },
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 fade-in">
            {projects.map((project, index) => (
              <div key={index} className="project-card flex flex-col h-full">
                <div className="relative h-[200px] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3 mb-4">
                    <h4 className="text-base font-semibold text-purple-400">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="skill-badge text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition-all duration-300 text-sm"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                    <a 
                      href={project.githubUrl || "https://github.com/Zaryok"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all duration-300 text-sm"
                    >
                      <Github className="w-3.5 h-3.5" />
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