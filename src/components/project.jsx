import React from "react";
import ProjectElement from "../utils/projectElement";
import mango1 from "../Assets/mangoweb1.png";
import mango2 from "../Assets/mangoweb2.png";
import mango3 from "../Assets/mangoweb3.png";
import mango4 from "../Assets/mangoweb4.png";
import mango5 from "../Assets/mangoweb5.png";
import attend1 from "../Assets/attendance1.png";
import attend2 from "../Assets/attendance2.png";
import attend3 from "../Assets/attendance3.png";
import tech1 from "../Assets/TechHub1.png";
import tech2 from "../Assets/TechHub2.png";
import tech3 from "../Assets/TechHub3.png";
import tech4 from "../Assets/TechHub4.png";
import tech5 from "../Assets/TechHub5.png";
import tech6 from "../Assets/TechHub6.png";
import tech7 from "../Assets/TechHub7.png";
import tech8 from "../Assets/TechHub8.png";
// import attend3 from '../Assets/attendance3.png'
function project() {
  return (
    <div>
      <div className="pb-16 mx-20 pt-56 w-auto relative ">
        <p className="font-semibold font-serif text-gray-800 text-4xl dark:text-slate-300">
          Project
        </p>
        <div className="absolute  transform -translate-x-1/2  w-24 border-b-[12px] mt-4 border-yellow-500 " />
      </div>

      <div className="flex flex-wrap gap-10 p-10 mx-auto justify-center">
        <ProjectElement
          title={"Mango Web-Application"}
          desc={
            "Our Mango eCommerce website utilizes the latest technologies to provide you with an exceptional user experience. Our website is fast, responsive, and secure, with robust security measures in place to protect your data."
          }
          link={"https://github.com/dnyandeep23/mango"}
          images={[mango1, mango2, mango3, mango4, mango5]}
        />

        <ProjectElement
          title={"Attendance Go - Attendance Management System"}
          desc={
            "Attendance management system for students with geofencing and one-time codes. Students mark attendance within a time limit using unique codes and location verification. Teachers track attendance, manage courses, and approve device change requests."
          }
          link={"https://github.com/dnyandeep23/attendance"}
          images={[attend1, attend2, attend3]}
        />
        <ProjectElement
          title={"TechHub - Ecommerce Application"}
          desc={
            "TechHub, a dynamic Flutter-based application, redefines electronic gadget shopping. Enjoy secure transactions,interactive previews, and a vibrant tech community at yourfingertips."
          }
          link={"https://github.com/dnyandeep23/TechHub"}
          images={[tech1,tech2,tech3,tech4,tech5,tech6,tech7,tech8]}
        />
      </div>
    </div>
  );
}

export default project;
