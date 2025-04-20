import React from "react";
// import background from "./../assets/bg.png";
import { words } from "../constants/index.js";
import Button from "../components/Button.jsx";
import HeroExperience from "../components/hero models/HeroExperience.jsx";
import {useGSAP} from "@gsap/react"
import gsap from "gsap"
import "./../index.css"
import AnimatedCounter from "../components/AnimatedCounter.jsx";

function Hero() {

  useGSAP(()=>{
    gsap.fromTo('.hero-text h1', {
      y:50,
      opacity:0
    }, {
      y:0,
      opacity:1,
      stagger:.2,
      duration:1,
      ease:"power2.inOut"
    },
  )
  })

  return (
    <section id="hero" className="section1 relative overflow-hidden">
      {/* <div className="absolute top-0 left-0 z-10">
        <img src="./assets/bg.png" alt="background" />
      </div> */}

      <div className="hero-layout h-[100%] w-[95%] mx-auto md:mt-0 mt-[15vh]">
        {/* left hero content */}
        <header className=" h-[50vh] md:h-[90vh] flex flex-col justify-evenly md:w-[50%] w-full">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping{" "}
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word)=>(
                      <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                        <img src={word.imgPath} alt="{word.text}" className="xl:size-12 md:size-10 sie-7 md:p-2 p-1 rounded-full bg-white-50" />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Project</h1>
              <h1>that Deliver results</h1>
            </div>
              <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">Hello my name is Taha, I am a web dev from Pakistan</p>
              <Button className="md:w-80 md:h-16 w-60 h-12" id="button" text="See my Work"/>
          </div>
        </header>
        {/* right side 3d model */}

            <figure  className="mb-20 w-full md:w-[50%] md:h-[90vh] h-[50vh] flex justify-center items-center">
              <div className=" cursor-grab hero-3d-layout w-[100%] h-[100%]">
                    <HeroExperience/>
              </div>
            </figure>

      </div>

      <AnimatedCounter/>
    </section>
  );
}

export default Hero;
