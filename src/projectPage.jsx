import React from 'react';
import { Github,  Folder, Globe } from 'lucide-react';

const projectsData = [
  {
    title: "MOPCARE Website",
    description: "As a Web Developer at Mopcare, an organization dedicated to combating social isolation among the elderly, I contribute to a mission that has significantly impacted hundreds of seniors through various programs and consultations.",
    tech: ["Next.js", "TypeScript", "Tailwind", "CSS", "Supabase"],
    githubLink: "https://github.com/xamorite/mopcare",
    liveLink: "https://mopcare.netlify.app",
    Icon: Globe,
  },
  // Add more of your real projects here!
  {
    title: "MUSIX (A music Streaming Site)",
    description: "Inspired by my passion for music, I built Musix, a multi-view web application designed to provide a seamless experience for music search, employer, and admin users.",
    tech: ["React", "HTML5", "Tailwind", "CSS", "Supabase", "PostgreSQL"],
    githubLink: "https://github.com/xamorite/spotify-clone",
    liveLink: null,
    Icon: Server, // Need to import Server icon
  },
  {
    title: "BTJ",
    description: "Built a landing page for BTJ, a community of belivers who gather to discuss the truth about the Gospel of Jesus Christ.",
    tech: ["HTML", "CSS", "TailwindCss", "JavaScript"],
    githubLink: "https://github.com/xamorite/bibletalkwithjudah",
    liveLink: "https://bibletalkwithjudah.netlify.app",
    Icon: Server, // Need to import Server icon
  },
  {
    title: "Employee Record Management System",
    description: "Build a Java System for Employee Record System that allows users to add, view, update, and delete employee records. The system uses file handling to store employee data in a text file.",
    tech: ["Java", "File Handling", "OOP", "GUI"],
    githubLink: "https://github.com/xamorite/EmployeerecordManagement",
    liveLink: null,
    Icon: Server, // Need to import Server icon
  },
  {
    title: "Psychgen Portal Website",
    description: "The Psychiatric Genomics Africa Portal (PsychGenAfrica)is a pioneering initiative from the PGCAfrica working group, designed to serve as a centralized platform for psychiatric genomics research focused on the African population.",
    tech: ["Next.Js", "HTML5", "Tailwind", "CSS", "ShadCn", ],
    githubLink: "https://github.com/xamorite/psy ",
    liveLink: "https://psychgenportal.netlify.app/",
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
      <h2 className="text-5xl font-extrabold my-12 font-display ">
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