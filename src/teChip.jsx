const TechChip = ({ name, highlight }) => {
  const highlightClasses = highlight 
    ? "border-accent-yellow text-accent-yellow" 
    : "border-gray-700 text-gray-400 hover:border-accent-yellow hover:text-white transition-colors duration-300";
  
  return (
    <div 
      className={`px-4 py-3 border rounded-lg text-center font-mono-tech text-sm ${highlightClasses}`}
    >
      {name}
    </div>
  );
};


export default TechChip;