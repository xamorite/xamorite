import Musix from './assets/musix.jpg';
import Mopcare from './assets/mopcare.jpg';
import BJT from './assets/Bibletalk.png';
import Java from './assets/Java.png';


const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6 md:px-12 max-w-5xl mx-auto text-center animate-fadeIn">
      <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
        Experience & Projects
      </h2>

      {/* Changed to grid layout for medium screens and up */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        {/* MOPCARE Experience */}
        <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-green-700 transform transition-transform duration-300 hover:scale-[1.01] hover:shadow-green-500/30">
          <div className="mb-4"> {/* Added a div to wrap image and text for better layout */}
            <img
              src={Mopcare}
              alt="MOPCARE Project Image"
              className="w-full h-auto rounded-lg mb-4"
            />
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-2xl font-semibold text-green-400">MOPCARE</h3>
                <p className="text-lg text-gray-300">Web Developer</p>
              </div>
              <span className="text-gray-400 text-sm">12/2023 - Current</span>
            </div>
          </div>
          <p className="text-gray-400 mb-4 leading-relaxed">
            As a Web Developer at Mopcare, an organization dedicated to combating social isolation among the elderly, I contribute to a mission that has significantly impacted hundreds of seniors through various programs and consultations.
          </p>
          <p className="text-gray-400 mb-2">
            <span className="font-medium text-green-300">Technologies:</span> Next.js, TypeScript, Tailwind CSS, Supabase
          </p>
          <a
            href="https://Mopcare.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 transition-colors duration-200 inline-flex items-center"
          >
            View Website
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-6h6m0 0l-7 7"></path></svg>
          </a>
        </div>

        {/* MUSIX Project */}
        <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-green-700 transform transition-transform duration-300 hover:scale-[1.01] hover:shadow-green-500/30">
          <div className="mb-4"> {/* Added a div to wrap image and text for better layout */}
            <img
              src={Musix}
              alt="MUSIX Project Image"
              className="w-full h-auto rounded-lg mb-4"
            />
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-2xl font-semibold text-green-400">MUSIX</h3>
                <p className="text-lg text-gray-300">Full-Stack Web Engineer</p>
              </div>
              <span className="text-gray-400 text-sm">03/2025 - Current</span>
            </div>
          </div>
          <p className="text-gray-400 mb-4 leading-relaxed">
            Inspired by my passion for music, I built Musix, a multi-view web application designed to provide a seamless experience for music search, employer, and admin users.
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
            <li>Developed the front-end with React, HTML5, and Tailwind CSS, ensuring responsive and user-friendly experiences.</li>
            <li>Engineered a scalable back-end with Supabase, integrated with PostgreSQL, for robust data management, leveraging Agile development and rigorous testing.</li>
          </ul>
          <p className="text-gray-400">
            <span className="font-medium text-green-300">Technologies:</span> React, HTML5, Tailwind CSS, Supabase, PostgreSQL
          </p>
        </div>
        {/* Bible Talk with judah*/}
         <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-green-700 transform transition-transform duration-300 hover:scale-[1.01] hover:shadow-green-500/30">
          <div className="mb-4"> {/* Added a div to wrap image and text for better layout */}
            <img
              src={BJT}
              alt="MOPCARE Project Image"
              className="w-full h-auto rounded-lg mb-4"
            />
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-2xl font-semibold text-green-400">BTJ</h3>
                <p className="text-lg text-gray-300">Web Developer</p>
              </div>
              <span className="text-gray-400 text-sm">12/2023 - Current</span>
            </div>
          </div>
          <p className="text-gray-400 mb-4 leading-relaxed">
            Built a landing page for BTJ, a community of belivers who gather to discuss the truth about the Gospel of Jesus Christ.
          </p>
          <p className="text-gray-400 mb-2">
            <span className="font-medium text-green-300">Technologies:</span> HTML, CSS, TailwindCss, JavaScript
          </p>
          <a
            href="https://bibletalkwithjudah.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 transition-colors duration-200 inline-flex items-center"
          >
            View Website
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-6h6m0 0l-7 7"></path></svg>
          </a>
        </div>
        <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-green-700 transform transition-transform duration-300 hover:scale-[1.01] hover:shadow-green-500/30">
          <div className="mb-4"> {/* Added a div to wrap image and text for better layout */}
            <img
              src={Java}
              alt="Employee Record System Project Image"
              className="w-full h-auto rounded-lg mb-4"
            />
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-2xl font-semibold text-green-400">Employee Record Management</h3>
                <p className="text-lg text-gray-300">Java Development</p>
              </div>
              <span className="text-gray-400 text-sm">2023</span>
            </div>
          </div>
          <p className="text-gray-400 mb-4 leading-relaxed">
           Build a Java System for Employee Record System that allows users to add, view, update, and delete employee records. The system uses file handling to store employee data in a text file.
          </p>
          <p className="text-gray-400 mb-2">
            <span className="font-medium text-green-300">Technologies:</span> Java, File Handling, OOP, Gui
          </p>
          <a
            href="https://github.com/xamorite/EmployeeRecordMangement"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 transition-colors duration-200 inline-flex items-center"
          >
            Check out My Repo
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-6h6m0 0l-7 7"></path></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
