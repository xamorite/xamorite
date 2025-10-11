import React from 'react';
import { Github,  Folder, Globe } from 'lucide-react';

const projectsData = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio to showcase my skills, projects, and professional background. Built with modern web technologies.",
    tech: ["React", "TailwindCSS", "Vite"],
    githubLink: "https://github.com/xamorite/portfolio",
    liveLink: "https://xamorite.com",
    Icon: Globe,
  },
  // Add more of your real projects here!
  {
    title: "Project Alpha (e.g., E-commerce Backend)",
    description: "Developed a scalable RESTful API for an e-commerce platform handling user authentication, product catalog, and order processing.",
    tech: ["Node.Js", "Express", "MongoDB", "JWT"],
    githubLink: "https://github.com/xamorite/project-alpha",
    liveLink: null,
    Icon: Server, // Need to import Server icon
  },
  
];

const ProjectCard = ({ title, description, tech, githubLink, liveLink, Icon }) => (
  <div className="p-6 border border-gray-700 rounded-xl bg-gray-900/50 hover:border-[#E7C85B] transition-colors duration-300">
    <div className="flex justify-between items-start mb-4">
      <div className="flex items-center space-x-3">
        {/* Placeholder Icon */}
        <Icon className="w-6 h-6 text-[#E7C85B]" />
        <h3 className="text-xl font-bold text-white font-display">{title}</h3>
      </div>
      <div className="flex space-x-4">
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer" aria-label={`GitHub link for ${title}`} className="text-gray-400 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
        )}
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer" aria-label={`Live link for ${title}`} className="text-gray-400 hover:text-white transition-colors">
            <Globe className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
    <p className="text-gray-400 mb-4 text-sm">{description}</p>
    <div className="flex flex-wrap gap-2 pt-2">
      {tech.map((t) => (
        <span key={t} className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 font-mono-tech">
          {t}
        </span>
      ))}
    </div>
  </div>
);

// Add Server icon import to use in the data structure
import { Server } from 'lucide-react'; 

const ProjectsPage = () => {
  return (
    <div id="projects" className="w-full max-w-6xl px-4 py-16 text-left">
      <h2 className="text-5xl font-extrabold mb-12 font-display text-center">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <p className='text-center text-gray-400 mt-16 text-sm'>
        More projects are available on my <a href="https://github.com/xamorite" target="_blank" rel="noopener noreferrer" className='text-[#E7C85B] hover:underline'>GitHub profile</a>.
      </p>
    </div>
  );
};

export default ProjectsPage;