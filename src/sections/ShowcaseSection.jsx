// import React from "react";
// import {gsap} from 'gsap';
// import {ScrollTrigger} from "gsap/ScrollTrigger"
// import { useGSAP } from "@gsap/react";
// import { useRef } from "react";

// const ShowcaseSection = () => {
//   const sectionRef = useRef(null);
//   const project1Ref = useRef(null);
//   const project2Ref = useRef(null);
//   const project3Ref = useRef(null);

  
  
//   useGSAP(()=>{
      
//       const projects = [project1Ref.current, project2Ref.current, project3Ref.current ]
//       projects.forEach((card, index)=>{
//         gsap.fromTo(
//             card, {
//                 y:50, opacity:0
//             },
//             {
//                 y:0,
//                 opacity:1,
//                 duration:1,
//                 delay: 0.3 * (index + 1),
//                 scrollTrigger: {
//                 trigger: card, 
//                 start: "top bottom-=100"
//                 }
//             }
//         )
//       })

//     gsap.fromTo(sectionRef.current, {opacity:0}, {opacity:1, duration:1.5})
//   }, [])

//   return (
//     <section id="work" ref={sectionRef} className="app-showcase bordr-2">
//       <div className="w-[95%] mx-auto">
//         <div className="showcaselayout">
//           {/* left */}
//           <div className="first-project-wrapper" ref={project1Ref}>
//             <div className="image-wrapper">
//               <img src="/assets/public/images/project1.png" alt="Ryde" />
//             </div>
//             <div className="text-content">
//               <h2>
//                 On-demand rides Made Simple with a powerful user friendly app
//                 called ride
//               </h2>
//               <p className="text-white-50 md:text-x/">
//                 {" "}
//                 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                 Asperiores sed ad aliquam, assumenda minus quibusdam.
//               </p>
//             </div>
//           </div>

//           {/* Right */}
//           <div className="project-list-wrapper overflow-hidden">
//             <div className="project" ref={project2Ref}>
//               <div className="image-wrapper bg-[#ffefdb]">
//                 <img
//                   src="/assets/public/images/project2.png"
//                   alt="Library Management"
//                 />
//               </div>
//               <h2>Library Management Platform</h2>
//             </div>
//             <div className="project" ref={project3Ref}>
//               <div className="image-wrapper bg-[#ffe7eb]">
//                 <img
//                   src="/assets/public/images/project3.png"
//                   alt="YC Management"
//                 />
//               </div>
//               <h2>YC Directory - A Startup Showcase App</h2>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ShowcaseSection;


import React from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // Ensure all refs are available
    if (!project1Ref.current || !project2Ref.current || !project3Ref.current) return;

    const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
    
    projects.forEach((card, index) => {
      gsap.fromTo(
        card, 
        {
          y: 50, 
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * index, // Reduced delay multiplier
          scrollTrigger: {
            trigger: card,
            start: "top 80%", // Adjusted start position
            end: "top 20%",
            toggleActions: "play none none none", // Only play once
         // Add markers for debugging (remove in production)
          }
        }
      );
    });

    // Section fade-in animation
    gsap.fromTo(
      sectionRef.current, 
      { opacity: 0 }, 
      {
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
          // Remove this in production
        }
      }
    );

  }, []); // Empty dependency array ensures this runs once

  return (
    <section id="work" ref={sectionRef} className="app-showcase bordr-2">
      <div className="w-[95%] mx-auto">
        <div className="showcaselayout">
          {/* left */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/assets/public/images/project1.png" alt="Ryde" />
            </div>
            <div className="text-content">
              <h2>
                On-demand rides Made Simple with a powerful user friendly app
                called ride
              </h2>
              <p className="text-white-50 md:text-x/">
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Asperiores sed ad aliquam, assumenda minus quibusdam.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img
                  src="/assets/public/images/project2.png"
                  alt="Library Management"
                />
              </div>
              <h2>Library Management Platform</h2>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img
                  src="/assets/public/images/project3.png"
                  alt="YC Management"
                />
              </div>
              <h2>YC Directory - A Startup Showcase App</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;