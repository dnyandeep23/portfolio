import React from 'react'
import ProjectElement from '../utils/projectElement';
import mango1 from '../Assets/mangoweb1.png'
import mango2 from '../Assets/mangoweb2.png'
import mango3 from '../Assets/mangoweb3.png'
import mango4 from '../Assets/mangoweb4.png'
import mango5 from '../Assets/mangoweb5.png'
import attend1 from '../Assets/attendance1.png'
import attend2 from '../Assets/attendance2.png'
import attend3 from '../Assets/attendance3.png'
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
          link={"https://github.com/ITS-DNY/mango"}
          images={[mango1, mango2, mango3, mango4, mango5]}
        />

        <ProjectElement
          title={"Attendance Go - Attendance Management System"}
          desc={
            "Attendance management system for students with geofencing and one-time codes. Students mark attendance within a time limit using unique codes and location verification. Teachers track attendance, manage courses, and approve device change requests."
          }
          link={"https://github.com/ITS-DNY/attendance"}
          images={[attend1,attend2,attend3]}
        />
        {/* <ProjectElement
          title={"TechHub - Ecommerce Application"}
          desc={
            "Your one-stop destination for the latest gadgets and tech essentials. Explore a curated collection of cutting-edge products for a smarter, connected lifestyle."
          }
          link={"https://github.com/ITS-DNY/attendance"}
          images={[mango1, mango2, mango3, mango4]}
        /> */}
      </div>
    </div>
  );
}

export default project