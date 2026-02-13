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
} from "lucide-react";

import desktopImg from "./assets/desktop.png";
import mobileImg from "./assets/mobile.png";

// --- Story Modal Component ---
const NudgeStoryModal = ({ isOpen, onClose }) => {
  // Close on Escape key
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

  if (!isOpen) return null;

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
              <Smartphone className="w-7 h-7 text-[#E7C85B]" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-white font-display">
                The Nudge Story
              </h2>
            </div>
            <div className="w-16 h-1 bg-[#E7C85B] rounded-full"></div>
          </div>

          {/* Story Text */}
          <div className="space-y-5 text-gray-300 leading-relaxed mb-12">
            <p>
              Nudge was born out of a personal frustration — I kept losing track
              of my daily priorities. I had tasks scattered across Notion, Slack
              messages tagging me for follow-ups, and Google Calendar events I'd
              forget about until the reminder popped up five minutes before.
              Nothing felt unified or intentional.
            </p>
            <p>
              So I decided to build an app that would give me a{" "}
              <span className="text-[#E7C85B] font-semibold">
                Daily Planning Ritual
              </span>{" "}
              — a structured morning flow where I could pull in tasks from all
              my tools, pick my top priorities for the day, and stay accountable
              through gentle nudge reminders. The idea was simple: one focused
              moment each morning to set the tone for the whole day.
            </p>
            <p>
              I chose Flutter because I wanted a single codebase for both
              Android and iOS, coupled with an offline-first architecture using
              Hive so the app would always be fast and available — even without
              internet. Firebase handles authentication and cloud sync, while
              Riverpod keeps the state management clean and testable.
            </p>
            <p>
              One of the most satisfying challenges was building the{" "}
              <span className="text-[#E7C85B] font-semibold">
                universal task integration layer
              </span>
              . Pulling in data from Slack, Notion, and Google Calendar required
              OAuth flows and background isolate processing so the main UI
              thread never stuttered. Getting that smooth experience was a
              turning point.
            </p>
            <p>
              The accountability partner feature was inspired by how I actually
              stay productive — by telling a friend what I'm working on. Nudge
              lets you pair up with someone and send nudge reminders to each
              other, turning productivity into a shared habit rather than a solo
              grind.
            </p>
          </div>

          {/* Screenshots */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-6 font-display">
              App Screenshots
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Desktop View */}
              <div className="group">
                <div className="overflow-hidden rounded-xl border border-gray-700 hover:border-[#E7C85B] transition-colors duration-300">
                  <img
                    src={desktopImg}
                    alt="Nudge — Desktop view"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <p className="text-center text-sm text-gray-500 mt-3">
                  Desktop View
                </p>
              </div>

              {/* Mobile View */}
              <div className="group">
                <div className="overflow-hidden rounded-xl border border-gray-700 hover:border-[#E7C85B] transition-colors duration-300">
                  <img
                    src={mobileImg}
                    alt="Nudge — Mobile view"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <p className="text-center text-sm text-gray-500 mt-3">
                  Mobile View
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
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
    storyAvailable: true,
  },
  {
    title: "MOPCARE Website",
    description:
      "As a Web Developer at Mopcare, an organization dedicated to combating social isolation among the elderly, I contribute to a mission that has significantly impacted hundreds of seniors through various programs and consultations.",
    tech: ["Next.js", "TypeScript", "Tailwind", "CSS", "Supabase"],
    githubLink: "https://github.com/xamorite/mopcare",
    liveLink: "https://mopcare.netlify.app",
    Icon: Globe,
  },
  {
    title: "MUSIX (A music Streaming Site)",
    description:
      "Inspired by my passion for music, I built Musix, a multi-view web application designed to provide a seamless experience for music search, employer, and admin users.",
    tech: ["React", "HTML5", "Tailwind", "CSS", "Supabase", "PostgreSQL"],
    githubLink: "https://github.com/xamorite/musicweb.git",
    liveLink: null,
    Icon: Server,
  },
  {
    title: "BTJ",
    description:
      "Built a landing page for BTJ, a community of belivers who gather to discuss the truth about the Gospel of Jesus Christ.",
    tech: ["HTML", "CSS", "TailwindCss", "JavaScript"],
    githubLink: "https://github.com/xamorite/bibletalkwithjudah.git",
    liveLink: "https://bibletalkwithjudah.netlify.app",
    Icon: Server,
  },
  {
    title: "Employee Record Management System",
    description:
      "Build a Java System for Employee Record System that allows users to add, view, update, and delete employee records. The system uses file handling to store employee data in a text file.",
    tech: ["Java", "File Handling", "OOP", "GUI"],
    githubLink: "https://github.com/xamorite/EmployeeRecordMangement.git",
    liveLink: null,
    Icon: Server,
  },
  {
    title: "Psychgen Portal Website",
    description:
      "The Psychiatric Genomics Africa Portal (PsychGenAfrica)is a pioneering initiative from the PGCAfrica working group, designed to serve as a centralized platform for psychiatric genomics research focused on the African population.",
    tech: ["Next.Js", "HTML5", "Tailwind", "CSS", "ShadCn"],
    githubLink: "https://github.com/xamorite/psy ",
    liveLink: "https://psychgenportal.netlify.app/",
    Icon: Server,
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
  storyAvailable,
  onStoryClick,
}) => (
  <div className="p-6 border border-gray-700 rounded-xl bg-gray-900/50 hover:border-[#E7C85B] transition-colors duration-300">
    <div className="flex justify-between items-start mb-4">
      <div className="flex items-center space-x-3">
        {/* Placeholder Icon */}
        <Icon className="w-6 h-6 text-[#E7C85B]" />
        <h3 className="text-xl font-bold text-white font-display">{title}</h3>
      </div>
      <div className="flex space-x-4">
        {storyAvailable && (
          <button
            onClick={onStoryClick}
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
  const [storyOpen, setStoryOpen] = useState(false);

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
              onStoryClick={() => setStoryOpen(true)}
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

      <NudgeStoryModal isOpen={storyOpen} onClose={() => setStoryOpen(false)} />
    </>
  );
};

export default ProjectsPage;
