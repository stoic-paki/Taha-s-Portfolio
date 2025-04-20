import React from "react";
import TitleHeader from "../components/TitleHeader";
import { techStack2, techStackIcons } from "../constants";
import "./../index.css"
// import Tech from "../components/Models/techlogo/TechIcon";

const TechStack = () => {
  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="My preferred Tech Stack" sub="The Skills" />
        <div className="my-8 md:my-15 min-h-[60vh] gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full px-4 sm:px-6 
               flex flex-col md:flex-row flex-wrap justify-center items-center">
  {techStack2.map((tech) => (
    <div
      key={tech.name}
      className="group relative flex flex-col items-center justify-evenly 
                w-full sm:w-[45%] md:w-[30%] lg:w-[22%] h-64 sm:h-72 md:h-80
                transition-all duration-300 ease-in-out
                hover:scale-[1.02] hover:shadow-lg
                overflow-hidden
                p-[2px] mx-2 my-2" // Added margin for better spacing
    >
      {/* Glowing Border (Animated) */}
      <div className="absolute inset-0 rounded-lg bg-white opacity-0 
                     group-hover:opacity-20 group-hover:animate-[pulse_2s_infinite]
                     transition-opacity duration-500 ease-in-out">
      </div>
  
      {/* Inner Card Content (Responsive) */}
      <div className="relative w-full h-full bg-black-50 rounded-[calc(0.5rem-2px)]
                    flex flex-col items-center justify-evenly p-4 z-10">
        {/* Tech Logo (Scales on hover, responsive size) */}
        <img
          src={tech.imgPath}
          alt={tech.name}
          className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 
                    transition-all duration-300 ease-in-out 
                    group-hover:scale-110"
        />
  
        {/* Tech Name (Responsive font size + gradient hover) */}
        <h2 className="text-xl sm:text-2xl md:text-3xl text-center text-white-50 
                      transition-all duration-300 ease-in-out
                      group-hover:text-transparent group-hover:bg-clip-text 
                      group-hover:bg-gradient-to-r from-cyan-400 to-blue-500">
          {tech.name}
        </h2>
      </div>
    </div>
  ))}
</div>
      </div>
    </div>
  );
};

export default TechStack;
