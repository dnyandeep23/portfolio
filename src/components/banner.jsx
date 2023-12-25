import React, { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { TypeAnimation } from "react-type-animation";
import logo from "../Assets/Profile.png";
import lightbg from "../Assets/lightbgcircle.png";
import ring from "../Assets/Ellipse 5.png";
import l from "../Assets/Group 1.png";
import lm from "../Assets/mobile_light.png";
import d from "../Assets/Group 2.png";
import dm from "../Assets/mobile_dark.png";

function Banner({ darkMode }) {
  
  const [init, setInit] = useState(false);
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
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <>
      <div className="absolute bg-no-repeat z-0 text-transparent">
        {init &&
        <Particles
          width="100%"
          height="50%"
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            // background: {
            //   color: {
            //     value: "#0d47a1",
            //   },
            // },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 2,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 200,
                },
                value: 200,
              },
              opacity: {
                value: 0.7,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 4 },
              },
            },
            detectRetina: true,
            fullScreen: {
              enable: false,
              zIndex: 1,
            },
          }}
        />}
      </div>
      <div className="flex px-4 md:px-28  dark:bg-black h-full w-full">
        <div className=" lpt z-30 font-courier font-semibold w-full md:w-1/2 xl:w-1/2 ">
          <div className="md:space-y-5 text-xl md:text-4xl xl:text-4xl text-gray-600 dark:text-slate-300 mt-[22rem] md:mt-24 ">
            <p>Hey,I am</p>
            <p className="text-2xl md:text-5xl xl:text-5xl  text-gray-950 dark:text-white">
              Dnyandeep Gaonkar
            </p>
          </div>
          <div className="flex-row md:flex-col space-y-5 text-xl md:text-4xl xl:text-4xl text-gray-600 dark:text-slate-300 mt-8 md:mt-24">
            <p className="">And I'm Looking for</p>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Web Developer",
                5000, // wait 1s before replacing "Mice" with "Hamsters"
                "UI/UX Designer",
                5000,
                "Flutter Developer",
                5000,
                "Full - Stack Developer",
                5000,
              ]}
              wrapper="span"
              speed={30}
              style={{
                fontSize: "1.5em",
                display: "inline-block",
              }}
              repeat={Infinity}
              className="text-black dark:text-white font-serif font-extrabold"
            />

            <div className=" text-base md:text-lg  ">
              <p className="mt-8 md:mt-20">
                "Experienced full-stack developer with expertise in web, UI/UX
                design, and Flutter app development.".
              </p>
            </div>
          </div>
        </div>
        <div></div>

        {!darkMode ? (
          <img
            src={isMobile ? dm : d}
            width={50}
            alt=""
            className="absolute bottom-0 left-0  h-[93%] w-screen z-0  bg-transparent"
          />
        ) : (
          <img
            src={isMobile ? lm : l}
            width={50}
            alt=""
            className="absolute bottom-0 left-0  h-[93%] w-screen z-0  bg-transparent"
          />
        )}
      </div>
    </>
  );
}

export default Banner;
