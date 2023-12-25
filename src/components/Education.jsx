import React from 'react';
import { FaSchool } from "react-icons/fa6";
import school from "../Assets/school.png";
import college from "../Assets/college.jpg";
import { HiAcademicCap } from "react-icons/hi2";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import reactlogo from "../Assets/firebase.png";
function Education() {
  return (
    <div className="timeline">
      <div className="font-bold flex items-center justify-center text-5xl p-8 mt-10">
        <p className="text-white font-courier ">Education</p>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education rounded-xl"
          contentStyle={{ background: "rgb(255, 154, 0)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(255, 154, 0)" }}
          date="2019 - 2020"
          iconStyle={{ background: "rgb(255, 184, 60)", color: "#fff" }}
          icon={<FaSchool />}
        >
          <div className="">
            <div className="h-1/3 rounded-lg overflow-hidden">
              <img
                src={school}
                alt=""
                className="rounded-lg transition-transform transform hover:scale-125"
              />
            </div>

            <div className="my-4 ml-4  text-lg flex flex-col ">
              <h1 className="text-2xl font-courier font-bold">
                Secondary Education
              </h1>
              <p className="text-lg  font-normal">
                I excelled academically at Anuyog Vidyalaya, scoring 81.20% in
                my 10th standard (SSC) exams in 2019 - 2020.
              </p>
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education rounded-xl"
          contentStyle={{ background: "rgb(255, 154, 0)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(255, 154, 0)" }}
          date="2021 - 2022"
          iconStyle={{ background: "rgb(255, 184, 60)", color: "#fff" }}
          icon={<HiAcademicCap />}
        >
          <div className="">
            <div className="h-1/3 rounded-lg overflow-hidden">
              <img
                src={college}
                alt=""
                className="rounded-lg transition-transform transform hover:scale-125"
              />
            </div>

            <div className="my-4 ml-4  text-lg flex flex-col ">
              <h1 className="text-2xl font-courier font-bold">
                Diploma in Computer Engineering
              </h1>
              <p className="text-lg  font-normal">
                Pursuing Diploma in 3rd year of computer engineering, Government
                Polytechnic Mumbai Sep 2021 - Dec 2023.
              </p>
            </div>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Education