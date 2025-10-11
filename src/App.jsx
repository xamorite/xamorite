// src/App.jsx

import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  Download,
  Folder,
  User,
  Mail,
  Twitter,
  Linkedin,
  Github,
  Globe, // Needed for SkillCard data
  Smartphone, // Needed for SkillCard data
  Server, // Needed for SkillCard data
  PenTool, // Needed for SkillCard data
  Monitor, // Needed for SkillCard data
  Zap,
  Phone,
  SmartphoneCharging, // Needed for SkillCard data
} from "lucide-react";

// Import your page and component files
import AboutPage from "./aboutmePage";
import ProjectsPage from "./projectPage";
import SkillCard from "./skillCard";
import TechChip from "./teChip";
import resume from "./assets/Resume.pdf";

// --- Data Definitions (Moved to App.jsx for centralized control) ---
const navItems = [
  { title: "My Projects", icon: Folder, link: "/projects" },
  { title: "About me", icon: User, link: "/about" },
  { title: "Contact me", icon: Mail, link: "#contact" },
];

const skillsData = [
  { title: "Web Development", Icon: Globe, highlight: false },
  { title: "Mobile App Development", Icon: Smartphone, highlight: false },
  { title: "Backend Systems", Icon: Server, highlight: false },
  { title: "UI/UX Design", Icon: PenTool, highlight: false },
  { title: "Desktop Application Dev", Icon: Monitor, highlight: false },
];

const technologiesData = [
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "Next.Js",
  "TailwindCSS",
  "Node.Js",
  "Express",
  "Flutter",
  "MongoDB",
  "Java",
  "Python",
  "Git",
  "GitHub",
  "Dart",
  "Figma",
  "Firebase",
  "SupaBase",
];

const socialIcons = [
  { icon: Twitter, link: "https://x.com/xamorite", label: "Twitter" },
  {
    icon: Linkedin,
    link: "https://linkedin.com/ipaoluwa",
    label: "LinkedIn",
  },
  { icon: Github, link: "https://github.com/xamorite", label: "GitHub" },
];

// --- 1. The Full Home Page Component ---
const HomePage = ({ navItems, skillsData, technologiesData, resume }) => {
  return (
    <div className="w-full">
      {/* 1. HERO SECTION (Main Content) */}
      <main className="w-full max-w-6xl flex items-center justify-center py-16 md:py-24 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full px-4">
          {/* Left Side: Hero Text and Action Button */}
          <div className="flex flex-col justify-center text-left">
            <p className="text-xl text-gray-400 mb-2 font-light pt-4">Hello 👋</p>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 font-display">
              I'm Emmanuel Ogunneye
            </h2>
            <p className="text-base text-gray-400 mb-10 max-w-md leading-relaxed">
              Enthusiastic and fast-learning Information Technology & Business
              Intelligence student at Middlesex University Dubai, eager to
              contribute to and grow within dynamic teams. Adaptable and
              solution-oriented, thrives in collaborative environments and is
              always ready to tackle new challenges
            </p>

            <a
              href={resume}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-64 px-8 py-3 bg-[#E7C85B] text-black font-semibold rounded-lg shadow-md hover:bg-[#D5B64E] transition duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </div>

          {/* Right Side: Navigation Cards (Grid) */}
          <div className="grid grid-cols-2 gap-6 w-full max-w-lg mx-auto lg:mx-0">
            {navItems.map((item, index) =>
              item.link.startsWith("#") ? (
                <a
                  key={index}
                  href={item.link}
                  className="group flex flex-col items-center justify-center p-6 sm:p-8 md:p-10 border border-gray-600 rounded-xl transition-all duration-300 
                   hover:bg-gray-800 hover:border-gray-400 hover:shadow-xl cursor-pointer aspect-square"
                >
                  <item.icon className="w-12 h-12 mb-3 text-gray-400 group-hover:text-[#E7C85B] transition-colors duration-300" />
                  <p className="text-base font-medium text-gray-200">
                    {item.title}
                  </p>
                </a>
              ) : (
                <Link
                  key={index}
                  to={item.link}
                  className="group flex flex-col items-center justify-center p-6 sm:p-8 md:p-10 border border-gray-600 rounded-xl transition-all duration-300 
                   hover:bg-gray-800 hover:border-gray-400 hover:shadow-xl cursor-pointer aspect-square"
                >
                  <item.icon className="w-12 h-12 mb-3 text-gray-400 group-hover:text-[#E7C85B] transition-colors duration-300" />
                  <p className="text-base font-medium text-gray-200">
                    {item.title}
                  </p>
                </Link>
              )
            )}
          </div>
        </div>
      </main>

      <div className="w-full max-w-6xl h-px bg-gray-700/50 my-16 mx-auto"></div>

      {/* 2. SKILLS SECTION (Core Competencies) */}
      <section id="skills" className="w-full max-w-6xl px-4 py-16 mx-auto">
        <h2 className="text-4xl font-extrabold mb-4 font-display">Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 pt-8">
    {skillsData.map((skill, index) => (
      <SkillCard key={index} {...skill} />
    ))}
  </div>
      </section>

      <div className="w-full max-w-6xl h-px bg-gray-700/50 my-16 mx-auto"></div>

      {/* 3. TECHNOLOGIES SECTION (Toolkit) */}
      <section
        id="technologies"
        className="w-full max-w-6xl px-4 py-16 mx-auto"
      >
        <h2 className="text-4xl font-extrabold mb-2 font-display ">
          Technologies
        </h2>
        <p className="text-gray-400 mb-10 ">
          The list of technologies I've learnt and worked with.
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {technologiesData.map((tech, index) => (
            <TechChip
              key={index}
              name={tech}
              highlight={tech === "Flutter" || tech === "Next.Js"}
            />
          ))}
        </div>
      </section>

      <div className="w-full max-w-6xl h-px bg-gray-700/50 my-16 mx-auto"></div>

      {/* 4. CONTACT SECTION (Call to Action) */}
      <section
        id="contact"
        className="w-full max-w-6xl px-4 py-16 text-center mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 font-display">
          Interested in working with me?
        </h2>
        <p className="text-gray-400 mb-10 text-lg">
          I'm currently looking to join a team of creative designers and
          developers.
        </p>
        <a
          href="mailto:eogunneye@gmail.com"
          className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-[#232323] hover:bg-[#2c2c2c] text-[#E7C85B] font-semibold shadow transition-all duration-300 focus:outline-none focus:ring-[#E7C85B]"
          aria-label="Send me an email"
        >
          <Mail className="w-5 h-5" />
          Send me an e-mail
        </a>
      </section>
    </div>
  );
};

// --- 2. Main App Component (Implements Routing) ---
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#1A1A1A] text-white font-mono-tech flex flex-col items-center p-4">
        {/* Header - Always Visible */}
        <header className="fixed top-0 left-0 w-full max-w-none bg-[#1A1A1A] z-50 py-8 flex justify-between items-center   px-8 lg:px-42 ">
          <Link
            to="/"
            className="text-xl font-semibold tracking-wider text-gray-200 font-display hover:text-[#E7C85B] transition-colors"
          >
            Xamorite
          </Link>
          {/* <nav className="hidden sm:flex space-x-6">
            {navItems.map((item, index) =>
              item.link.startsWith("#") ? (
                <a
                  key={index}
                  href={item.link}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item.title}
                </a>
              ) : (
                <Link
                  key={index}
                  to={item.link}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item.title}
                </Link>
              )
            )}
          </nav> */}
        </header>

        {/* Dynamic Content Area */}
        <div className="flex-grow w-full max-w-6xl">
          <Routes>
            {/* Home Route - Now contains all the main portfolio sections */}
            <Route
              path="/"
              element={
                <HomePage
                  navItems={navItems}
                  skillsData={skillsData}
                  technologiesData={technologiesData}
                  resume={resume}
                />
              }
            />

            {/* New Dedicated Pages */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />

            {/* We removed the explicit /contact route since the CTA is now on Home */}

            <Route
              path="*"
              element={
                <h1 className="text-center text-4xl mt-20">
                  404 - Page Not Found
                </h1>
              }
            />
          </Routes>
        </div>

        {/* Footer - Always Visible */}
        <footer className="w-full max-w-6xl py-8 mt-auto border-t border-gray-700/50">
          <div className="flex justify-center items-center space-x-6">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.link}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#E7C85B] transition-colors duration-300"
              >
                {typeof social.icon === "function" ? (
                  social.icon({ className: "w-5 h-5" })
                ) : (
                  <social.icon className="w-5 h-5" />
                )}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
