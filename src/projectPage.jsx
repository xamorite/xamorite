import React, { useState, useEffect, useCallback } from "react";
import {
  Github,
  Folder,
  Globe,
  Smartphone,
  Code,
  Server,
  BookOpen,
  X,
  Users,
  GraduationCap,
  Heart,
  Church,
  Briefcase,
  Brain,
  Shield,
} from "lucide-react";

import desktopImg from "./assets/desktop.png";
import mobileImg from "./assets/mobile.png";
import riotImg from "./assets/riot.png";

// --- Generic Story Modal Component ---
const StoryModal = ({ isOpen, onClose, story }) => {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !story) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-gray-700 bg-[#1A1A1A] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-4 float-right mr-4 mt-4 z-10 p-2 rounded-full bg-gray-800/80 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors duration-200"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              {story.icon && <story.icon className="w-7 h-7 text-[#E7C85B]" />}
              <h2 className="text-3xl md:text-4xl font-extrabold text-white font-display">
                {story.title}
              </h2>
            </div>
            <div className="w-16 h-1 bg-[#E7C85B] rounded-full"></div>
          </div>

          {/* Story Text */}
          <div className="space-y-5 text-gray-300 leading-relaxed mb-12">
            {story.paragraphs.map((paragraph, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </div>

          {/* Screenshots (optional) */}
          {story.screenshots && (
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-6 font-display">
                {story.screenshotTitle || "Screenshots"}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {story.screenshots.map((screenshot, index) => (
                  <div className="group" key={index}>
                    <div className="overflow-hidden rounded-xl border border-gray-700 hover:border-[#E7C85B] transition-colors duration-300">
                      <img
                        src={screenshot.src}
                        alt={screenshot.alt}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                    <p className="text-center text-sm text-gray-500 mt-3">
                      {screenshot.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Story Data ---
const stories = {
  nudge: {
    title: "The Nudge Story",
    icon: Smartphone,
    paragraphs: [
      `Nudge was born out of a personal frustration — I kept losing track of my daily priorities. I had tasks scattered across Notion, Slack messages tagging me for follow-ups, and Google Calendar events I'd forget about until the reminder popped up five minutes before. Nothing felt unified or intentional.`,
      `So I decided to build an app that would give me a <span class="text-[#E7C85B] font-semibold">Daily Planning Ritual</span> — a structured morning flow where I could pull in tasks from all my tools, pick my top priorities for the day, and stay accountable through gentle nudge reminders. The idea was simple: one focused moment each morning to set the tone for the whole day.`,
      `I chose Flutter because I wanted a single codebase for both Android and iOS, coupled with an offline-first architecture using Hive so the app would always be fast and available — even without internet. Firebase handles authentication and cloud sync, while Riverpod keeps the state management clean and testable.`,
      `One of the most satisfying challenges was building the <span class="text-[#E7C85B] font-semibold">universal task integration layer</span>. Pulling in data from Slack, Notion, and Google Calendar required OAuth flows and background isolate processing so the main UI thread never stuttered. Getting that smooth experience was a turning point.`,
      `The accountability partner feature was inspired by how I actually stay productive — by telling a friend what I'm working on. Nudge lets you pair up with someone and send nudge reminders to each other, turning productivity into a shared habit rather than a solo grind.`,
    ],
    screenshots: [
      { src: desktopImg, alt: "Nudge — Desktop view", label: "Desktop View" },
      { src: mobileImg, alt: "Nudge — Mobile view", label: "Mobile View" },
    ],
    screenshotTitle: "App Screenshots",
  },
  mopcare: {
    title: "The MOPCARE Story",
    icon: Heart,
    paragraphs: [
      `MOPCARE is a project that is deeply close to my heart. I joined the organization as the <span class="text-[#E7C85B] font-semibold">Lead Front-End Engineer</span> over two years ago, and it has been one of the most rewarding professional experiences of my career. MOPCARE is dedicated to combating social isolation among the elderly — a cause that resonated with me personally, having seen its effects on people I care about.`,
      `Over these two years, I've been responsible for architecting and maintaining the entire front-end ecosystem. The platform is far more than just a website — it's a <span class="text-[#E7C85B] font-semibold">comprehensive digital hub</span> that serves multiple audiences. At its core, it features a rich course management system with different learning modules designed to educate volunteers and caregivers on best practices for elderly care, mental health awareness, and community outreach strategies.`,
      `One of the most complex features I built was the <span class="text-[#E7C85B] font-semibold">volunteer management dashboard</span>. This system allows administrators to onboard, track, and coordinate hundreds of volunteers across different programs and regions. It includes scheduling tools, progress tracking, activity logs, and communication channels — all woven into a clean, intuitive interface that even non-technical staff can navigate with ease.`,
      `Beyond the dashboards and course platforms, I also <span class="text-[#E7C85B] font-semibold">managed and maintained the public-facing website</span> — ensuring it stays performant, accessible, and up-to-date with the organization's latest programs, events, and impact stories. From SEO optimization to responsive design, I've owned every pixel of the MOPCARE web presence.`,
      `Working at MOPCARE taught me that great software isn't just about clean code — it's about the lives it touches. Every volunteer onboarded through the dashboard, every caregiver who completed a course, and every senior who felt a little less alone because of our programs is a reminder of why I do what I do.`,
    ],
  },
  musix: {
    title: "The MUSIX Story",
    icon: Server,
    paragraphs: [
      `MUSIX was born from my deep love for music and a curiosity about how streaming platforms work under the hood. I wanted to go beyond just listening and actually <span class="text-[#E7C85B] font-semibold">build the experience</span> — from search and discovery to user role management.`,
      `The app is a multi-view web application that serves three distinct user types: <span class="text-[#E7C85B] font-semibold">music searchers, employers, and administrators</span>. Each role has its own tailored interface. Regular users can search and explore music catalogs, employers can manage artist and content relationships, and admins have full oversight with analytics and content moderation tools.`,
      `I built the front-end with React and Tailwind CSS for rapid, responsive UI development, while the backend is powered by Supabase with a PostgreSQL database. The real challenge was designing a flexible data model that could handle different user permissions, playlist management, and search indexing — all while keeping the interface fast and intuitive.`,
      `MUSIX was also a playground for me to experiment with <span class="text-[#E7C85B] font-semibold">component-driven architecture</span> and reusable design patterns. It solidified my understanding of state management, API integration, and how to build applications that feel cohesive even with complex, role-based access control.`,
    ],
  },
  btj: {
    title: "The BTJ Story",
    icon: Church,
    paragraphs: [
      `BTJ — <span class="text-[#E7C85B] font-semibold">Bible Talk with Judah</span> — is a project that holds a special place in my life because it sits at the intersection of faith and craft. BTJ is a growing community of believers who gather to explore, discuss, and share the truth about the Gospel of Jesus Christ, and I had the privilege of building their digital home.`,
      `The brief was clear but meaningful: create a <span class="text-[#E7C85B] font-semibold">landing page that reflects the warmth, sincerity, and depth of the community</span>. I wanted visitors to immediately feel welcomed — not overwhelmed by flashy gimmicks, but drawn in by thoughtful design, clean typography, and a clear call to join the conversation.`,
      `I built the site with HTML, CSS, Tailwind CSS, and vanilla JavaScript — keeping it lightweight, fast-loading, and accessible. Every section was carefully crafted: from the hero banner that introduces the mission, to the about section that shares the heart behind BTJ, to the event schedule and community testimonials that bring the story to life.`,
      `What made this project special wasn't just the code — it was the conversations. Working closely with the BTJ community to understand their values and translate them into a visual language taught me that <span class="text-[#E7C85B] font-semibold">design is an act of listening</span>. The result is a page that doesn't just look good — it feels authentic.`,
    ],
  },
  employeeRecord: {
    title: "The Employee Record Manager Story",
    icon: GraduationCap,
    paragraphs: [
      `The Employee Record Management System is more than just a CRUD application — it's the project that <span class="text-[#E7C85B] font-semibold">introduced me to the world of Java</span> and marked a pivotal turning point in my programming journey. This was my capstone project for my <span class="text-[#E7C85B] font-semibold">Aptech Certificate</span>, and I poured everything I had learned into it.`,
      `Coming from a front-end background where I was comfortable with JavaScript and React, diving into Java was both humbling and exhilarating. I had to wrap my head around strict typing, object-oriented programming principles in a much more rigid environment, and the intricacies of Java's I/O system for file handling. The learning curve was steep, but every challenge pushed me to become a more well-rounded developer.`,
      `The system allows users to <span class="text-[#E7C85B] font-semibold">add, view, update, and delete employee records</span> through a graphical user interface. Under the hood, it uses file handling to persist data to text files — no database required. I implemented features like search and filtering, data validation, and a clean, tabular display of all records. The GUI was built using Java Swing, which taught me a lot about event-driven programming and layout management.`,
      `What I'm most proud of is how this project forced me to think about <span class="text-[#E7C85B] font-semibold">software architecture from scratch</span>. Designing the class hierarchy, planning the data flow, and handling edge cases like duplicate entries or corrupt file data gave me an appreciation for the kind of thoughtful engineering that separates hobby projects from professional software.`,
      `This project earned me my Aptech certification and, more importantly, gave me the confidence that I could learn any language or framework if I committed to the process. It remains a milestone I look back on fondly — the project that proved I was more than just a front-end developer.`,
    ],
  },
  psychgen: {
    title: "The PsychGen Portal Story",
    icon: Brain,
    paragraphs: [
      `The Psychiatric Genomics Africa Portal — <span class="text-[#E7C85B] font-semibold">PsychGenAfrica</span> — is a pioneering initiative from the PGCAfrica working group, and I had the honor of building its web presence. This platform serves as a centralized hub for psychiatric genomics research focused specifically on the African population, an area that has historically been underrepresented in global genomics research.`,
      `The portal was designed to be a <span class="text-[#E7C85B] font-semibold">professional, research-grade platform</span> that connects scientists, researchers, and institutions across Africa and beyond. I built it with Next.js and Tailwind CSS, leveraging ShadCn components for a polished, accessible interface that meets the high standards expected in the scientific community.`,
      `Every design decision was intentional — from the information architecture that makes complex research data navigable, to the responsive layouts that ensure researchers can access resources on any device, to the color palette that conveys trust and scientific rigor. The goal was to make the portal feel as authoritative and forward-thinking as the research it represents.`,
    ],
  },
  valorant: {
    title: "The Valorant Story",
    icon: Globe,
    paragraphs: [
      `The Valorant Agent Concept project was born from a desire to create a high-fidelity, immersive fan experience for one of my favorite games. I wanted to build something that felt cinematic and professional, pushing the boundaries of what a fan site could be.`,
      `I architected the platform using <span class="text-[#E7C85B] font-semibold">React 18 and Vite</span> for a blazing-fast development experience and production performance. The core of the site is powered by the <span class="text-[#E7C85B] font-semibold">Valorant API</span>, which I used to dynamically fetch and display agent portraits, ability data, and weapon stats. This ensures the site stays up-to-date with the latest game content automatically.`,
      `For the design, I took inspiration from the official Valorant aesthetic—dark tactical backgrounds, sharp diagonal lines, and the signature red (#FF4655) accents. I used <span class="text-[#E7C85B] font-semibold">Tailwind CSS</span> for precise styling and <span class="text-[#E7C85B] font-semibold">Framer Motion</span> to add smooth, cinematic transitions between pages and interactive elements like the agents carousel and ability previews.`,
      `One of the most fun features to build was the <span class="text-[#E7C85B] font-semibold">Jinx-themed 404 page</span>. It was a chance to add some personality and a nod to the wider Riot Games universe while ensuring even the "broken" parts of the site felt intentional and polished.`,
      `This project solidified my skills in <span class="text-[#E7C85B] font-semibold">client-side routing with React Router</span> and managing complex interactive components. It’s a testament to how API integration and thoughtful UI/UX can bring a gaming concept to life.`,
    ],
    screenshots: [
      {
        src: riotImg,
        alt: "Valorant Agent Page",
        label: "Agent Concept Design",
      },
    ],
  },
};

// --- Project Data ---
const projectsData = [
  {
    title: "Nudge",
    description:
      "A powerful productivity and accountability app built with Flutter. Features a guided Daily Planning Ritual, universal task integration (Slack, Notion, Google Calendar), accountability partners with nudge reminders, and an offline-first architecture with background isolate processing.",
    tech: ["Flutter", "Dart", "Firebase", "Riverpod", "Firestore", "Hive"],
    githubLink: "https://github.com/xamorite/nudge",
    liveLink: null,
    Icon: Smartphone,
    storyKey: "nudge",
  },
  {
    title: "MOPCARE Website",
    description:
      "As the Lead Front-End Engineer at MOPCARE for over two years, I architected and maintain the platform's comprehensive digital ecosystem — from course management modules and volunteer dashboards to the public-facing website — all in service of combating social isolation among the elderly.",
    tech: ["Next.js", "TypeScript", "Tailwind", "CSS", "Supabase"],
    githubLink: null,
    liveLink: null,
    Icon: Heart,
    storyKey: "mopcare",
  },
  {
    title: "MUSIX (A Music Streaming Site)",
    description:
      "Inspired by my passion for music, I built Musix — a multi-view web application with role-based interfaces for music search, employer management, and admin oversight, powered by Supabase and PostgreSQL.",
    tech: ["React", "HTML5", "Tailwind", "CSS", "Supabase", "PostgreSQL"],
    githubLink: "https://github.com/xamorite/musicweb.git",
    liveLink: null,
    Icon: Server,
    storyKey: "musix",
  },
  {
    title: "BTJ",
    description:
      "Built a landing page for BTJ (Bible Talk with Judah), a community of believers who gather to explore and discuss the truth about the Gospel of Jesus Christ. A thoughtful, faith-driven design built to welcome and inspire.",
    tech: ["HTML", "CSS", "TailwindCss", "JavaScript"],
    githubLink: null,
    liveLink: "https://bibletalkwithjudah.vercel.app/",
    Icon: Church,
    storyKey: "btj",
  },
  {
    title: "Employee Record Management System",
    description:
      "My introduction to Java and my Aptech Certificate capstone project — a full-featured desktop application for managing employee records with a Swing GUI, file-based persistence, and comprehensive CRUD operations.",
    tech: ["Java", "File Handling", "OOP", "GUI"],
    githubLink: "https://github.com/xamorite/EmployeeRecordMangement.git",
    liveLink: null,
    Icon: GraduationCap,
    storyKey: "employeeRecord",
  },
  {
    title: "Psychgen Portal Website",
    description:
      "The Psychiatric Genomics Africa Portal (PsychGenAfrica) is a pioneering research platform from the PGCAfrica working group — a centralized hub for psychiatric genomics research focused on the African population.",
    tech: ["Next.Js", "HTML5", "Tailwind", "CSS", "ShadCn"],
    githubLink: "https://github.com/xamorite/psy ",
    liveLink: "https://psychgenportal.netlify.app/",
    Icon: Brain,
    storyKey: "psychgen",
  },
  {
    title: "Valorant // Agent Concept",
    description:
      "A premium, Figma-inspired Valorant fan site built with React, featuring agent profiles, weapon arsenals, and the latest news — all powered by the Valorant API.",
    tech: [
      "React",
      "Framer Motion",
      "Tailwind CSS",
      "Vite",
      "Lucide React",
      "Valorant API",
    ],
    githubLink: "https://github.com/xamorite/valorant",
    liveLink: "https://valorrent.netlify.app/",
    Icon: Shield,
    storyKey: "valorant",
  },
];

// --- Project Card Component ---
const ProjectCard = ({
  title,
  description,
  tech,
  githubLink,
  liveLink,
  Icon,
  storyKey,
  onStoryClick,
}) => (
  <div className="p-6 border border-gray-700 rounded-xl bg-gray-900/50 hover:border-[#E7C85B] transition-colors duration-300">
    <div className="flex justify-between items-start mb-4">
      <div className="flex items-center space-x-3">
        <Icon className="w-6 h-6 text-[#E7C85B]" />
        <h3 className="text-xl font-bold text-white font-display">{title}</h3>
      </div>
      <div className="flex space-x-4">
        {storyKey && (
          <button
            onClick={() => onStoryClick(storyKey)}
            aria-label={`Read the story behind ${title}`}
            className="text-gray-400 hover:text-[#E7C85B] transition-colors cursor-pointer"
            title="Read the story"
          >
            <BookOpen className="w-5 h-5" />
          </button>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub link for ${title}`}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
        )}
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Live link for ${title}`}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Globe className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
    <p className="text-gray-400 mb-4 text-sm">{description}</p>
    <div className="flex flex-wrap gap-2 pt-2">
      {tech.map((t) => (
        <span
          key={t}
          className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 font-mono-tech"
        >
          {t}
        </span>
      ))}
    </div>
  </div>
);

// --- Projects Page ---
const ProjectsPage = () => {
  const [activeStory, setActiveStory] = useState(null);

  return (
    <>
      <div id="projects" className="w-full max-w-6xl px-4 py-16 text-left">
        <h2 className="text-5xl font-extrabold my-12 font-display ">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              onStoryClick={(key) => setActiveStory(key)}
            />
          ))}
        </div>
        <p className="text-center text-gray-400 mt-16 text-sm">
          More projects are available on my{" "}
          <a
            href="https://github.com/xamorite"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E7C85B] hover:underline"
          >
            GitHub profile
          </a>
          .
        </p>
      </div>

      <StoryModal
        isOpen={!!activeStory}
        onClose={() => setActiveStory(null)}
        story={activeStory ? stories[activeStory] : null}
      />
    </>
  );
};

export default ProjectsPage;
