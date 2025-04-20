// import React, { useEffect } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
    // const [scrolled, setScrolled] = useState(false)

    // useEffect(()=>{
    //     const handleScroll = ()=>{
    //         const isScrolled = window.scrollY > 10;
    //         setScrolled(true)
    //     }

    //     window.addEventListener("scroll", handleScroll)

    //     return ()=> window.removeEventListener("scroll", handleScroll)

    // }, [])



  return (
    <div className=" h-[10vh] w-[100%] bg-black-100 fixed left-[50%] transform translate-x-[-50%] z-99 flex justify-center items-center">
      <header className={`w-[95%] mx-auto navbar`}>
        <div className="inner">
          <a href="#hero" className="logo">
            Taha | WEB
          </a>

          <nav className="desktop">
            <ul>
                {navLinks.map(({link, name}) => (
                    <li key={name} className="group">
                        <a href={link}>
                            <span>{name}</span>
                            <span className="underline"/>
                        </a>
                    </li>
                ))}
            </ul>
          </nav>

          <a href="#contact" className="contact-btn group">
            <div className="inner">
              <span>Contact Me</span>
            </div>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
