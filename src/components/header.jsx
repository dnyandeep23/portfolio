import React, { useState, useEffect, useRef } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { IoMdPartlySunny } from "react-icons/io";
import { RiMoonClearFill } from "react-icons/ri";
import "./header.css";
function Header({
  onValueChange,
  darkMode,
  scrollToAbout,
  scrollToHome,
  scrollToSkill,
  scrollToEducation,
  scrollToContact,
}) {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const [firstClick, setFirstClick] = useState(false);
  const handlechange = () => {
    setIsDarkMode(!isDarkMode);
    onValueChange(isDarkMode);
  };
  const [open, setOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position
      const isScrolled = window.scrollY > 0;

      // Update the state based on the scroll position
      setScrolled(isScrolled);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleclick = () => {
          setFirstClick(true);
          setOpen(!open);
    console.log(open);
  };

  const menuRef = useRef(null);
  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleScroll = () => {
      if (scrolled) {
        console.log("called");
        // Update the ref position when scrolling
        if (menuRef.current) {
          const { top, bottom } = menuRef.current.getBoundingClientRect();
          if (bottom < 0 || top > window.innerHeight) {
            setOpen(false);
          }
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setOpen, scrolled]);

  // Add a click event listener to close the menu when clicking outside of it
  

  return (
    <div
      className={`header  ${
        !darkMode ? "dark" : "light"
      } py-4 px-8  w-full h-auto bg-opacity-60 dark:bg-opacity-80 dark:bg-black bg-slate-300 ${
        scrolled ? "sticky-header" : "nonsticky-header"
      } `}
    >
      <div className="flex flex-row justify-between font-courier font-extrabold items-center">
        <ul className="light:text-gray-800 dark:text-white uppercase text-3xl ">
          Portfolio
        </ul>
        {!isMobile ? (
          <div className="flex gap-16 flex-row item-center justify-end text-xl uppercase font-courier font-semibold cursor-pointer">
            {darkMode ? (
              <IoMdPartlySunny
                className="day text-gray-500 hover:text-gray-800  dark:hover:text-white transition duration-300 border-b-4 border-spacing-2 border-transparent hover:border-gray-600 dark:hover:border-slate-300"
                onClick={handlechange}
                size={35}
              />
            ) : (
              <RiMoonClearFill
                className="day text-gray-500 hover:text-gray-800  dark:hover:text-white transition duration-300 border-b-4 border-spacing-2 border-transparent hover:border-gray-600 dark:hover:border-slate-300"
                onClick={handlechange}
                size={35}
              />
            )}

            <ul
              className="text-gray-500 hover:text-gray-800  dark:hover:text-white transition duration-300 border-b-4 border-transparent hover:border-gray-600 dark:hover:border-slate-300"
              onClick={scrollToHome}
            >
              Home
            </ul>
            <ul
              className="text-gray-500 hover:text-gray-800  dark:hover:text-white transition duration-300 border-b-4 border-transparent hover:border-gray-600 dark:hover:border-slate-300"
              onClick={scrollToAbout}
            >
              About
            </ul>
            <ul
              className="text-gray-500 hover:text-gray-800  dark:hover:text-white transition duration-300 border-b-4 border-transparent hover:border-gray-600 dark:hover:border-slate-300"
              onClick={scrollToSkill}
            >
              Skills
            </ul>
            <ul
              className="text-gray-500 hover:text-gray-800  dark:hover:text-white transition duration-300 border-b-4 border-transparent hover:border-gray-600 dark:hover:border-slate-300"
              onClick={scrollToEducation}
            >
              Education
            </ul>
            <ul
              className="text-gray-500 hover:text-gray-800  dark:hover:text-white transition duration-300 border-b-4 border-transparent hover:border-gray-600 dark:hover:border-slate-300"
              onClick={scrollToAbout}
            >
              Resume
            </ul>
            <ul
              className="text-gray-500 hover:text-gray-800  dark:hover:text-white transition duration-300 border-b-4 border-transparent hover:border-gray-600 dark:hover:border-slate-300"
              onClick={scrollToContact}
            >
              Contact
            </ul>
          </div>
        ) : (
          <div className="flex flex-row items-center gap-4">
            {darkMode ? (
              <IoMdPartlySunny
                className="day text-gray-500 hover:text-gray-800  dark:hover:text-white transition duration-300 border-b-4 border-spacing-4 border-transparent hover:border-gray-600 dark:hover:border-slate-300"
                onClick={handlechange}
                size={40}
              />
            ) : (
              <RiMoonClearFill
                className="day text-gray-500 hover:text-gray-800  dark:hover:text-white transition duration-300 border-b-4 border-spacing-4 border-transparent hover:border-gray-600 dark:hover:border-slate-300"
                onClick={handlechange}
                size={40}
              />
            )}
            <button class="relative group" onClick={handleclick}>
              <div class="relative flex items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 group-focus:-rotate-[45deg] origin-center">
                  <div class="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-right delay-75 group-focus:-translate-y-[1px]"></div>
                  <div class="bg-white h-[1px] rounded"></div>
                  <div class="bg-white h-[2px] w-1/2 rounded self-end transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-left delay-75 group-focus:translate-y-[1px]"></div>
                </div>
              </div>
            </button>
          </div>
        )}
      </div>
      {open ? (
        <div
          className="flex flex-col  z-50 absolute top-0 right-0 mt-12 ml-4 w-[98%] mx-auto bg-gray-500 text-black dark:text-white rounded-lg px-4 py-8 space-y-4"
          ref={menuRef}
        >
          <ul>
            <div
              className="flex justify-center hover:bg-yellow-500 py-2  px-20 rounded-lg"
              onClick={() => {
                scrollToHome();
                setOpen(false);
              }}
            >
              Home
            </div>
          </ul>
          <ul>
            <div
              className="flex justify-center hover:bg-yellow-500 py-2  px-20 rounded-lg"
              onClick={() => {
                scrollToAbout();
                setOpen(false);
              }}
            >
              About
            </div>
          </ul>
          <ul>
            <div
              className="flex justify-center hover:bg-yellow-500 py-2  px-20 rounded-lg"
              onClick={() => {
                scrollToSkill();
                setOpen(false);
              }}
            >
              Skill
            </div>
          </ul>
          <ul>
            <div
              className="flex justify-center hover:bg-yellow-500 py-2  px-20 rounded-lg"
              onClick={() => {
                scrollToEducation();
                setOpen(false);
              }}
            >
              Education
            </div>
          </ul>
          <ul>
            <div
              className="flex justify-center hover:bg-yellow-500 py-2  px-20 rounded-lg"
              onClick={() => {
                scrollToAbout();
                setOpen(false);
              }}
            >
              Resume
            </div>
          </ul>
          <ul>
            <div
              className="flex justify-center hover:bg-yellow-500 py-2  px-20 rounded-lg"
              onClick={() => {
                scrollToContact();
                setOpen(false);
              }}
            >
              Contact
            </div>
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default Header;
