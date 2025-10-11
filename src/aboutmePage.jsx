// src/AboutPage.jsx (Reconfirmed for simplicity)

import React from 'react';

const AboutPage = () => {
  return (
    <div id="about" className="w-full max-w-6xl px-4 py-16 text-left mx-auto">
      <h2 className="ps-8 text-5xl font-extrabold my-12 font-display ">
       About Me
      </h2>

      {/* Main Bio Section (Expanded) */}
      <div className="p-8 mb-16 shadow-lg">
    
        <p className="text-gray-300 mb-6 text-lg leading-relaxed">
          I am Emmanuel Ogunneye, a highly motivated Information Technology & Business Intelligence student with a core focus on delivering efficient software solutions. My academic journey Started with at Aptech Computer Education, where i got my (A.D.S.E) Advanced Diploma in Software Engineering then i furthered my learning at Middlesex University Dubai where I was equipped  with a strong analytical foundation, which I directly apply to challenging development problems.
        </p>
        <p className="text-gray-300 mb-6 text-lg leading-relaxed">
          WI specialize in full-stack Web and development, and Mobile development with Flutter, My core proficiency lies in working with (Java, JavaScript, Dart), where I enjoy bridging the gap betweeen complex technical requirements and user experience
        </p>
        <p className="text-gray-300 mb-6 text-lg leading-relaxed">
          I beleive the best Systems are maintainable scalable and focused on delivering tangible business value I'm always eager to take on projects that involves critical thinking. 
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Asides From tech I enjoy doing music and playing games, I play a little bit on the drumset, the keyboards but in all my musical adventures the Trumpet has been my favorite.
        </p>
      </div>
      
      {/* Soft Skills Section (Optional but good) */}
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-6 font-display">Soft Skills</h3>
        <ul className="flex flex-wrap justify-center gap-4 text-gray-400">
            <li className="px-4 py-2 border border-gray-700 rounded-full hover:border-[#E7C85B] transition-colors">Problem Solving</li>
            <li className="px-4 py-2 border border-gray-700 rounded-full hover:border-[#E7C85B] transition-colors">Cross-functional Teamwork</li>
            <li className="px-4 py-2 border border-gray-700 rounded-full hover:border-[#E7C85B] transition-colors">Rapid Learning</li>
            <li className="px-4 py-2 border border-gray-700 rounded-full hover:border-[#E7C85B] transition-colors">System Analysis</li>
            <li className="px-4 py-2 border border-gray-700 rounded-full hover:border-[#E7C85B] transition-colors">Effective Communication</li>
        </ul>
      </div>

    </div>
  );
};

export default AboutPage;