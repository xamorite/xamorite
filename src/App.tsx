import { useState, useEffect } from 'react';
import './App.css';
import ExperienceSection from './ExperienceSection';
import Profile from './assets/profile.jpg'; 
import Html from './assets/html.svg';
import Css from './assets/css.svg';
import Flutter from './assets/flutter.svg';
import Java from './assets/java.svg';
import Tailwind from './assets/tailwind.svg'; // Import your profile image

// Main App component
function App() {
  // State for active navigation link (for future scroll-spy or active highlighting)
  const [activeSection, setActiveSection] = useState('home');
  // State to manage the currently displayed skill explanation
  const [skillExplanation, setSkillExplanation] = useState<{ skill: string; explanation: string } | null>(null);
  // State for loading indicator during API call
  // State for API error messages
  const [apiError, setApiError] = useState<string | null>(null);
  // State for mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  // Placeholder for the profile image. You can replace this with your actual image URL.
const handleDownloadCV = () => {
    const cvFilePath = '/Ogunneye_Emmanuel_CV.docx'; 

    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = cvFilePath;
    link.download = 'Ogunneye_Emmanuel_CV.docx'; // Suggested filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to scroll to a section (for navigation buttons)
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id); // Update active section on click
      setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
    }
  };

  //for the mail
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: ''
  // });
  // // State for contact form submission status
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  // Function to fetch skill explanation using Gemini API


  // Optional: Effect to update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Added 'experience' to the sections array
      const sections = ['home', 'about', 'services', 'skills', 'experience', 'contact'];
      let currentActive = 'home';
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if the section is mostly in view
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentActive = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define skills with their logos
  const skills = [
    { name: 'HTML', logo: Html },
    { name: 'CSS', logo: Css },
    { name: 'Bootstrap CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg' },
    { name: 'Tailwind CSS', logo: Tailwind },
    { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' },
    { name: 'TypeScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' },
    { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { name: 'Next.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg' },
    { name: 'Vite', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg' },
    { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
    { name: 'Supabase', logo: 'https://icon.horse/icon/supabase.com' },
    { name: 'Firebase', logo: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg' },
    { name: 'Java', logo: Java },
    { name: 'Flutter', logo: Flutter },
    { name: 'Provider', logo: 'https://seeklogo.com/images/F/flutter-logo-5086DD1C5B-seeklogo.com.png' }, // Using Flutter logo as a placeholder for Provider
  ];


  return (
    <div className="min-h-screen bg-black bg-gradient-to-r from-black to-green-950 text-gray-100 font-inter">
      {/* Navbar */}
      <nav className="fixed w-full bg-black bg-opacity-90 z-50 py-4 px-6 md:px-12 flex justify-between items-center shadow-lg">
        <div className="text-2xl font-bold text-gray-100">XAMORITE</div>
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-300 hover:text-green-400 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
        <ul className="hidden md:flex space-x-6 md:space-x-10">
          {/* Added 'experience' to the navigation links */}
          {['home', 'about', 'services', 'skills', 'experience', 'contact'].map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className={`text-lg font-medium relative group transition-all duration-300 ease-in-out
                  ${activeSection === section ? 'text-green-400' : 'text-gray-300 hover:text-green-400'}
                `}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {/* Green underline on hover/active */}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-500 to-green-700 transition-all duration-300 ease-in-out transform ${activeSection === section ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-8 md:hidden animate-fadeIn">
          <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-6 right-6 text-gray-300 hover:text-green-400 focus:outline-none">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <ul className="flex flex-col space-y-6">
            {['home', 'about', 'services', 'skills', 'experience', 'contact'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`text-3xl font-bold transition-colors duration-300
                    ${activeSection === section ? 'text-green-400' : 'text-gray-300 hover:text-green-400'}
                  `}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="relative h-screen max-w-7xl mx-auto  flex flex-col md:flex-row items-center justify-center text-center md:text-left p-4 md:p-12 overflow-hidden">
        {/* Background gradient circles for subtle animation */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-700 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start max-w-6xl mx-auto w-full">
          {/* Text Content */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
              Hi, I am <br /><span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">Ogunneye Emmaneul</span>
            </h1>
            <p className="text-lg md:text-xl font-light text-gray-300 mb-8">
              Full-Stack Web & Flutter Developer
            </p>
            <div className="flex space-x-4">
              
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 border border-gradient-to-r shadow-green-500 animate-bounce from-green-400 to-green-700 text-green-400 font-bold rounded-full shadow-lg hover:bg-green-700 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Learn More
              </button>
              <button
                onClick={handleDownloadCV} // Changed to projects section
                className="px-6 shadow-green-500 animate-bounce py-3 bg-gradient-to-r from-green-400 to-green-700 text-white font-bold rounded-full shadow-lg hover:from-green-600 hover:to-green-800 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Download CV
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0 animate-fadeInRight">
            <div className=" w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-green-600 shadow-2xl shadow-green-500">
              <img
                src={Profile}
                alt="Ogunneye Emmanuel" // Changed alt text
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "https://placehold.co/320x320/333333/ffffff?text=Profile+Image";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-12 max-w-5xl mx-auto text-left  animate-fadeIn">
        <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">About</h2>
        <p className="text-lg leading-relaxed mb-12 text-gray-300  mx-auto">
          I'm Ogunneye Emmanuel, an enthusiastic and fast-learning Software Engineer and Business Intelligence student at Middlesex University Dubai, set to graduate in February 2026. <p className='my-3'>I specialize in front-end (React, Next.js, Flutter), back-end (Node.js, Nest.js), and database technologies (PostgreSQL, MongoDB, Supabase), thriving in collaborative, solution-oriented environments. </p> Currently, I'm a Web Developer at Mopcare, dedicated to combating social isolation among the elderly, and I've also engineered Musix, a full-stack music platform. I'm always ready to tackle new challenges and eager to contribute to dynamic teams.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info Cards */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-green-700 transform transition-transform duration-300 hover:scale-105 hover:shadow-green-500/30 hover:-translate-y-1">
            <p className="text-xl font-semibold text-green-400 mb-2">Full Name</p>
            <p className="text-gray-300">Ogunneye Emmanuel</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-green-700 transform transition-transform duration-300 hover:scale-105 hover:shadow-green-500/30 hover:-translate-y-1">
            <p className="text-xl font-semibold text-green-400 mb-2">Email Address</p>
            <p className="text-gray-300">xamorite@gmail.com</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-green-700 transform transition-transform duration-300 hover:scale-105 hover:shadow-green-500/30 hover:-translate-y-1">
            <p className="text-xl font-semibold text-green-400 mb-2">Twitter</p>
            <p className="text-gray-300">x.com/xamorite</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-green-700 transform transition-transform duration-300 hover:scale-105 hover:shadow-green-500/30 hover:-translate-y-1">
            <p className="text-xl font-semibold text-green-400 mb-2">Phone</p>
            <p className="text-gray-300">+2347047396999</p>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section id="services" className="py-20 px-6 md:px-12 max-w-5xl mx-auto text-center animate-fadeIn">
        <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">What I do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-green-700 transform transition-transform duration-300 hover:scale-105 hover:shadow-green-500/30 hover:-translate-y-1 flex flex-col items-center">
            {/* Software Development Icon */}
            <div className="text-5xl text-green-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75A2.25 2.25 0 0 0 15.75 1.5H13.5m-3 0V3.75m3-2.25V3.75M9 15.75h3m-3 3h3m-3-6h3m-9-3h12a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 18 4.5H6A2.25 2.25 0 0 0 3.75 6.75v6.75A2.25 2.25 0 0 0 6 15.75Z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-green-400">Software Development</h3>
            <p className="text-gray-300 text-center">
              Crafting robust and scalable software solutions for various platforms.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-green-700 transform transition-transform duration-300 hover:scale-105 hover:shadow-green-500/30 hover:-translate-y-1 flex flex-col items-center">
            {/* Web Development Icon */}
            <div className="text-5xl text-green-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21v-4.5m0 0H3.75m0 0h-.008v.008H3.75ZM12 16.5V3.75m0 0h.008v.008H12ZM12 3.75H8.25m0 0h-.008v.008H8.25ZM12 3.75v3.75m0 0H3.75m0 0A2.25 2.25 0 0 0 1.5 9.75v.008H1.5ZM12 12.75h3.75m0 0h.008v.008H15.75ZM12 12.75V3.75m0 0h-.008v.008H12ZM12 3.75v3.75m0 0A2.25 2.25 0 0 0 22.5 9.75v.008H22.5Z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-green-400">Web Development</h3>
            <p className="text-gray-300 text-center">
              Building dynamic and responsive web applications with modern frameworks.
            </p>
          </div>

          {/* Service Card 3 - Mobile App Dev */}
          <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-green-700 transform transition-transform duration-300 hover:scale-105 hover:shadow-green-500/30 hover:-translate-y-1 flex flex-col items-center">
            {/* Mobile App Icon (from Lucide React or similar) */}
            <div className="text-5xl text-green-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-green-400">Mobile App Development</h3>
            <p className="text-gray-300 text-center">
              Developing cross-platform mobile applications with modern frameworks like Flutter.
            </p>
          </div>
        </div>
      </section>

      {/* My Skills Section */}
      <section id="skills" className="py-20 px-6 md:px-12 max-w-5xl mx-auto text-center animate-fadeIn">
        <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {skills.map((skill) => (
            <div key={skill.name} className="bg-gray-900 p-6 rounded-xl shadow-lg border border-green-700 transform transition-transform duration-300 hover:scale-105 hover:shadow-green-500/30 hover:-translate-y-1 flex flex-col justify-between items-center relative">
              <img src={skill.logo} alt={`${skill.name} Logo`} className="w-16 h-16 mb-2 mx-auto" />
              <p className="text-gray-300 mb-4">{skill.name}</p>
            </div>
          ))}
        </div>

        {/* Skill Explanation Modal/Display */}
        {skillExplanation && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-green-700 max-w-lg w-full relative">
              <button
                onClick={() => setSkillExplanation(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-100 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h3 className="text-2xl font-bold text-green-400 mb-4">{skillExplanation.skill}</h3>
              <p className="text-gray-300 leading-relaxed">{skillExplanation.explanation}</p>
            </div>
          </div>
        )}

        {apiError && (
          <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-red-700 text-white p-3 rounded-lg shadow-lg z-50 animate-bounceIn">
            {apiError}
            <button onClick={() => setApiError(null)} className="ml-4 text-white font-bold">X</button>
          </div>
        )}
      </section>

      {/* Experience Section - Integrated here */}
      <ExperienceSection />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-12 max-w-5xl mx-auto text-center animate-fadeIn">
        <span className='flex flex-row justify-center'>   <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">Get in touch</h2>
          <div className="flex flex-row gap-2">
            <div className="w-4 h-4 rounded-full bg-green-700 animate-bounce [animation-delay:.7s]"></div>
            <div className="w-4 h-4 rounded-full bg-green-700 animate-bounce [animation-delay:.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-green-700 animate-bounce [animation-delay:.7s]"></div>
          </div></span>
        <p className="text-lg leading-relaxed mb-8 text-gray-300">
          Have a project in mind, a question, or just want to say hello? Feel free to reach out! I'm always open to new opportunities and collaborations.
        </p>

        <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-green-700 mb-10">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contact-name" className="sr-only">Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50 text-white placeholder-gray-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="sr-only">Email</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-green-500  focus:ring-opacity-50 text-white placeholder-gray-500"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-message" className="sr-only">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50 text-white placeholder-gray-500"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-bold rounded-full shadow-lg hover:from-green-600 hover:to-green-800 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Ogunneye Emmanuel. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
