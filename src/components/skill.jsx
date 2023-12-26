import SkillContainer from "../utils/SkillContainer";
import React, { useCallback, useEffect, useState } from "react";
import htmllogo from "../Assets/html.svg";
import reactlogo from "../Assets/react.svg";
import jslogo from "../Assets/javascript.png";
import firebase from "../Assets/firebase.png";
import csslogo from "../Assets/css.png";
import nodelogo from "../Assets/nodejs.svg";
import tailwindlogo from "../Assets/Tailwind CSS.svg";
import bootstraplogo from "../Assets/bootstrap.svg";
import androidlogo from "../Assets/android.png";
import flutterlogo from "../Assets/Flutter.svg";
import figmalogo from "../Assets/Figmalogo.svg";
import express from "../Assets/express.svg";
import socketlogo from "../Assets/socket.png";
import { Tilt } from "react-tilt";


function Skill() {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  return (
    <div className="pt-36">
      <div className="dark:text-slate-300 font-courier text-center text-5xl font-bold ">
        MY SKILLS
      </div>
      <div className="bg-white dark:bg-gray-800  mx-auto my-5 w-[90%] h-[2px]"></div>

      <div className="flex flex-wrap gap-10 mx-auto justify-center ">
        <Tilt options={defaultOptions}>
          {" "}
          <SkillContainer
            image={htmllogo}
            text="HTML"
            percentage="95%"
            shadow="shadow-cyan-500"
          />
        </Tilt>
        <Tilt options={defaultOptions}>
          {" "}
          <SkillContainer
            image={jslogo}
            text="Java-Script"
            percentage="90%"
            shadow="shadow-cyan-500"
          />
        </Tilt>

        <Tilt options={defaultOptions}>
          {" "}
          <SkillContainer
            image={csslogo}
            text="CSS"
            percentage="95%"
            shadow="shadow-cyan-500"
          />
        </Tilt>
        <Tilt options={defaultOptions}>
          {" "}
          <SkillContainer
            image={tailwindlogo}
            text="Tailwind CSS"
            percentage="98%"
            shadow="shadow-cyan-500"
          />
        </Tilt>
        <Tilt options={defaultOptions}>
          {" "}
          <SkillContainer
            image={reactlogo}
            text="REACTJS"
            percentage="95%"
            shadow="shadow-cyan-500"
          />
        </Tilt>
        <Tilt options={defaultOptions}>
          {" "}
          <SkillContainer
            image={nodelogo}
            text="NodeJS"
            percentage="85%"
            shadow="shadow-cyan-500"
          />
        </Tilt>
        {/* <Tilt options={defaultOptions}>
          {" "}
          <SkillContainer
            image={socketlogo}
            text="Socket IO"
            percentage="90%"
            shadow="shadow-cyan-500"
          />
        </Tilt> */}
        <Tilt options={defaultOptions}>
          {" "}
          <SkillContainer
            image={express}
            text="Express"
            percentage="85%"
            shadow="shadow-cyan-500"
          />
        </Tilt>
        <Tilt options={defaultOptions}>
          {" "}
          <SkillContainer
            image={flutterlogo}
            text="Flutter"
            percentage="98%"
            shadow="shadow-cyan-500"
          />
        </Tilt>
        <Tilt options={defaultOptions}>
          {" "}
          <SkillContainer
            image={androidlogo}
            text="Android"
            percentage="95%"
            shadow="shadow-cyan-500"
          />
        </Tilt>
        <Tilt options={defaultOptions}>
          {" "}
          <SkillContainer
            image={firebase}
            text="Firebase"
            percentage="98%"
            shadow="shadow-cyan-500"
          />
        </Tilt>
        <Tilt options={defaultOptions}>
          {" "}
          <SkillContainer
            image={bootstraplogo}
            text="Boot-Strap"
            percentage="100%"
            shadow="shadow-cyan-500"
          />
        </Tilt>
        <Tilt options={defaultOptions}>
          {" "}
          <SkillContainer
            image={figmalogo}
            text="Figma"
            percentage="95%"
            shadow="shadow-cyan-500"
          />
        </Tilt>
      </div>
    </div>
  );
}

export default Skill;
