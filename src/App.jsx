import React from "react";
import {
  Download,
  Folder,
  User,
  Edit3,
  Mail,
  Twitter,
  Linkedin,
  Github,
  Globe,
  Smartphone,
  Server,
  PenTool,
  Monitor,
  Code, // <-- Keep Code here for use in SkillCard mapping if needed
  Layout,
  GitBranch,
  Zap,
  Layers,
} from "lucide-react";
import SkillCard from "./skillCard";
import TechChip from "./teChip";
import resume from "./assets/Resume.pdf"; // Ensure the image is in the correct path

function App() {
  const navItems = [
    { title: "My Projects", icon: Folder, link: "#projects" },
    { title: "About me", icon: User, link: "#about" },
    { title: "Contact me", icon: Mail, link: "#contact" },
  ];

  const skillsData = [
    { title: "Web Development", Icon: Globe, highlight: false },
    { title: "Mobile App Development", Icon: Smartphone, highlight: false },
    { title: "Backend", Icon: Server, highlight: false },
    { title: "UI/UX Design", Icon: PenTool, highlight: false },
    {
      title: "Desktop Application Development",
      Icon: Monitor,
      highlight: false,
    },
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
    "GraphQL",
    "MongoDB",
    "React",
    "Java",
    "Python",
    "Git",
    "GitHub",
    "Expo",
    "Figma",
    "Firebase",
    "SupaBase",
  ];

  // Data for the social icons
  const socialIcons = [
    { icon: Twitter, link: "https://twitter.com/xamorite", label: "Twitter" },
    {
      icon: Linkedin,
      link: "https://linkedin.com/ipaoluwa",
      label: "LinkedIn",
    },
    { icon: Github, link: "https://github.com/xamorite", label: "GitHub" },
    // I'm adding a general icon for 'Bio' or similar, represented by the custom 'B' used in the original image
    {
      // Using a function that returns the custom span for the 'Bē' icon
      icon: (props) => (
        <span className="font-serif font-black text-lg" {...props}>
          Bē
        </span>
      ),
      link: "#bio",
      label: "Bio",
    },
  ];

  return (
    // The main container class should use 'font-mono-tech' and 'bg-dark-bg' for the dark theme
    <div className="min-h-screen bg-[#1A1A1A] text-white font-mono-tech flex flex-col items-center p-4">
      {/* Header and Logo */}
      <header className="w-full max-w-6xl py-8 ">
        {/* Use font-display for the title */}
        <h1 className="text-xl font-semibold tracking-wider text-gray-200 font-display">
          Xamorite
        </h1>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow w-full max-w-6xl flex items-center justify-center py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full px-4">
          {/* Left Side: Hero Text and Action Button */}
          <div className="flex flex-col justify-center text-left">
            <p className="text-xl text-gray-400 mb-2 font-light">Hello 👋</p>
            {/* Use font-display for the main name */}
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
          <div className="grid  grid-cols-2 gap-6 w-full max-w-lg mx-auto lg:mx-0">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="group flex flex-col items-center justify-center p-6 sm:p-8 md:p-10 border border-gray-600 rounded-xl transition-all duration-300 
                           hover:bg-gray-800 hover:border-gray-400 hover:shadow-xl cursor-pointer aspect-square"
              >
                {/* Icons from lucide-react should be rendered as components */}
                <item.icon className="w-12 h-12 mb-3 text-gray-400 group-hover:text-[#E7C85B] transition-colors duration-300" />
                <p className="text-base font-medium text-gray-200">
                  {item.title}
                </p>
              </a>
            ))}
          </div>
        </div>
      </main>
      {/* Separator for new sections */}
      <div className="w-full max-w-6xl h-px bg-gray-700/50 my-16"></div>

      {/* 2. SKILLS SECTION */}
      <section className="w-full max-w-6xl px-4 py-16">
        {/* Use font-display for section headers */}
        <h2 className="text-4xl font-extrabold mb-4 font-display">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          {skillsData.map((skill, index) => (
            // Ensure SkillCard receives the icon as 'Icon' prop
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </section>
      <section className="w-full max-w-6xl px-4 py-16">
        {/* Use font-display for section headers */}
        <h2 className="text-4xl font-extrabold mb-2 font-display">
          Technologies
        </h2>
        <p className="text-gray-400 mb-10">
          The list of technologies I've learnt and worked with.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {technologiesData.map((tech, index) => (
            <TechChip key={index} name={tech} highlight={tech === "Python"} />
          ))}
        </div>
      </section>

      {/* Separator for CTA */}
      <div className="w-full max-w-6xl h-px bg-gray-700/50 my-16"></div>

      {/* 4. CALL TO ACTION (CTA) SECTION */}
      <section id="contact" className="w-full max-w-6xl px-4 py-16 text-center">
        {/* Use font-display for CTA header */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 font-display">
          Interested in working with me?
        </h2>
        <p className="text-gray-400 mb-10 text-lg">
          I'm currently looking to join a team of creative designers and
          developers.
        </p>

        <a
          href="mailto:eogunneye@gmail.com"
          className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-[#232323] hover:bg-[#2c2c2c] text-[#E7C85B] font-semibold shadow transition-all duration-300 focus:outline-none  focus:ring-[#E7C85B]"
          aria-label="Send me an email"
        >
          <Mail className="w-5 h-5" />
          <span className="relative">
            Send me an e-mail
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#E7C85B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </span>
        </a>
      </section>

      {/* Footer and Social Icons */}
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
            ></a>
          ))}
        </div>
      </footer>
    </div>
  );
}

export default App;
