import { Code } from 'lucide-react'; // <-- FIX: Import the Code icon

const SkillCard = ({ title, Icon, highlight }) => {
  const highlightClasses = highlight 
    ? "border-accent-yellow text-accent-yellow bg-gray-900 shadow-md shadow-accent-yellow/10" 
    : "border-gray-700 text-gray-400 hover:border-accent-yellow hover:text-accent-yellow transition-colors duration-300";

  return (
    <div 
      className={`p-6 border rounded-xl text-center flex flex-col justify-between h-40  ${highlightClasses}`}
    >
      <div className="flex justify-center space-x-2 mb-4">
        {/* FIX: Ensure Icon is rendered as a component, and Code is available */}
        {Icon && <Icon className="w-6 h-6" />}
        {/* Placeholder for dual icons (e.g., in Mobile Dev) - using simple icons for now */}
        {title === "Mobile App Development" && <Code className="w-6 h-6 opacity-70" />}
      </div>
      <p className="text-sm font-medium">{title}</p>
    </div>
  );
};


export default SkillCard;
