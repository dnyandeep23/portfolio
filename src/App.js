import "./App.css";
import Banner from "./components/banner";
import Header from "./components/header";
import Skill from "./components/skill";
import About from "./components/About";
import Project from "./components/project";
import Education from "./components/Education";
import Contact from "./components/contact";
import lightbg from "./Assets/lightbgcircle.png";
import React, { useState, useRef, useCallback, useEffect } from "react";
import skill from "./components/skill";
import Particles, { initParticlesEngine } from "@tsparticles/react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const aboutSectionRef = useRef(null);
  const homeSectionRef = useRef(null);
  const skillSectionRef = useRef(null);
  const educationSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  const handleChildValueChange = (newValue) => {
    setDarkMode(newValue);
    console.log(darkMode);
  };

  const scrollToAboutSection = () => {
    if (window.innerWidth <= 1024) {
      if (aboutSectionRef.current) {
        aboutSectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start", // You can also use 'end' or 'center'

          inline: "nearest",
        });
      }
    } else {
      if (aboutSectionRef.current) {
        aboutSectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center", // You can also use 'end' or 'center'

          inline: "nearest",
        });
      }
    }
  };

  const scrollToHome = () => {
    // Check if the ref is available
    if (homeSectionRef.current) {
      homeSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center", // You can also use 'end' or 'center'

        inline: "nearest",
      });
    }
  };
  const scrollToSkill = () => {
    // Check if the ref is available
    if (skillSectionRef.current) {
      skillSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start", // You can also use 'end' or 'center'

        inline: "nearest",
      });
    }
  };
  const scrollToEducation = () => {
    // Check if the ref is available
    if (educationSectionRef.current) {
      educationSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start", // You can also use 'end' or 'center'

        inline: "nearest",
      });
    }
  };
  const scrollToContact = () => {
    // Check if the ref is available
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start", // You can also use 'end' or 'center'

        inline: "nearest",
      });
    }
  };

  return (
    <>
      <div
        className={`main ${
          !darkMode ? "dark" : "light"
        } bg-gray-300 dark:bg-black h-full`}
      >
        <div className="flex flex-col  bg-gray-300 dark:bg-black light:bg-gray-300">
          <div className="dark:bg-black light:bg-gray-300 bg-gray-300 h-[10vh] z-30">
            <Header
              onValueChange={handleChildValueChange}
              darkMode={darkMode}
              scrollToAbout={scrollToAboutSection}
              scrollToHome={scrollToHome}
              scrollToSkill={scrollToSkill}
              scrollToEducation={scrollToEducation}
              scrollToContact={scrollToContact}
            />
          </div>
          <div
            className="dark:bg-black  bg-gray-300 flex-grow z-0"
            ref={homeSectionRef}
          >
            <Banner darkMode={darkMode} />
          </div>
        </div>

        <div className="fill-black z-50">
          <div
            className="dark:bg-black bg-gray-300  pb-10 z-30 pt-10  "
            id="about"
            ref={aboutSectionRef}
          >
            <About darkMode={darkMode} />
          </div>
          <div
            className="dark:bg-black bg-gray-300  z-30 pt-10  "
            id="skill"
            ref={skillSectionRef}
          >
            <Skill />
          </div>
          <div
            className="dark:bg-black bg-gray-300   z-30 pt-10  "
            id="project"
          >
            <Project />
          </div>
          <div
            className="dark:bg-black bg-gray-300   z-30 pt-10  "
            id="education"
            ref={educationSectionRef}
          >
            <Education />
          </div>
          <div
            className="dark:bg-black bg-gray-300   z-30 pt-10  "
            id="contact"
            ref={contactSectionRef}
          >
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
