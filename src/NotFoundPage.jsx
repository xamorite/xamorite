import React from "react";
import { Link } from "react-router-dom";
import { Home, Folder, User, Mail, ArrowLeft, Search } from "lucide-react";

const NotFoundPage = () => {
  const quickLinks = [
    { title: "Home", icon: Home, link: "/" },
    { title: "My Projects", icon: Folder, link: "/projects" },
    { title: "About Me", icon: User, link: "/about" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center mt-12 md:mt-0">
      {/* 404 Illustration / Icon Group */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-[#E7C85B] blur-[100px] opacity-20 rounded-full"></div>
        <h1 className="text-9xl md:text-[12rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800 leading-none select-none">
          404
        </h1>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full border border-gray-700/50 bg-[#1A1A1A]/80 backdrop-blur-md shadow-2xl">
          <Search className="w-10 h-10 md:w-16 md:h-16 text-[#E7C85B] animate-pulse" />
        </div>
      </div>

      {/* Message Header */}
      <h2 className="text-3xl md:text-5xl font-extrabold mb-4 font-display text-white">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-400 text-lg mb-12 max-w-md mx-auto leading-relaxed">
        The link you followed might be broken, or the page may have been
        removed. Let's get you back on track.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-16">
        <Link
          to="/"
          className="flex items-center justify-center px-8 py-3 bg-[#E7C85B] text-black font-semibold rounded-lg shadow-lg hover:bg-[#D5B64E] transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          <Home className="w-5 h-5 mr-2" />
          Go Back Home
        </Link>
        <a
          href="mailto:eogunneye@gmail.com"
          className="flex items-center justify-center px-8 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-lg border border-gray-700 hover:bg-gray-700 transition-all duration-300"
        >
          <Mail className="w-5 h-5 mr-2" />
          Contact Me
        </a>
      </div>

      {/* Quick Links Header */}
      <div className="w-full max-w-lg">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-grow bg-gray-800"></div>
          <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">
            Quick Navigation
          </p>
          <div className="h-px flex-grow bg-gray-800"></div>
        </div>

        {/* Quick Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {quickLinks.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-800 bg-gray-900/40 hover:border-[#E7C85B]/50 hover:bg-gray-800/80 transition-all duration-300 group"
            >
              <item.icon className="w-6 h-6 mb-2 text-gray-500 group-hover:text-[#E7C85B] transition-colors" />
              <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
