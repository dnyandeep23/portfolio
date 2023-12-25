import React from "react";
import aboutimg from "../Assets/aboutbg.png";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
function About() {
  const email = "dnyandeepgaonkar23@gmail.com";
  const copyEmail = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        toast.success("Email copied to clip board", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      
       // Reset success message after 2 seconds
      })
      .catch((err) => {
        console.error("Error copying text to clipboard:", err);
        
        // Reset error message after 2 seconds
      });
  };
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="pb-16 mx-20 mt-56 w-auto relative ">
        <p className="font-semibold font-serif text-gray-800 text-4xl dark:text-slate-300">
          About
        </p>
        <div className="absolute  transform -translate-x-1/2  w-24 border-b-[12px] mt-4 border-yellow-500 " />
      </div>

      <div className="flex flex-col sm:flex-col md:flex-col xl:flex-row just m-auto w-[95%] md:w-[80%] xl:w-[80%]   border-2 border-none bg-slate-400 dark:bg-gray-900 bg-opacity-10 dark:bg-opacity-50  rounded-t-2xl rounded-b-xl shadow-xl shadow-slate-500 p-4">
        <div className="left flex flex-col w-full xl:w-[45%]  ">
          <div className="social-icons flex flex-row gap-4 md:gap-14  rounded-3xl m-auto w-[50%] md:w-[80%] xl:w-[80%] items-center justify-center py-4">
            <a
              href="https://twitter.com/DNYANDEEPG82304"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-full bg-white dark:bg-gray-900 dark:text-white transition duration-300 hover:bg-gray-900 hover:text-white dark:hover:text-black 
              dark:hover:bg-white"
            >
              <BsTwitterX size={28} />
            </a>
            <a
              href="https://github.com/dnyandeep23"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-full bg-white dark:bg-gray-900 dark:text-white transition duration-300 hover:bg-gray-900 hover:text-white dark:hover:text-black 
              dark:hover:bg-white "
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/dnyandeep-gaonkar-136662252/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-full bg-white dark:bg-gray-900 dark:text-white transition duration-300 hover:bg-gray-900 hover:text-white dark:hover:text-black 
              dark:hover:bg-white"
            >
              <FaLinkedin size={28} />
            </a>
            <div
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-full bg-white dark:bg-gray-900 dark:text-white transition duration-300 hover:bg-gray-900 hover:text-white dark:hover:text-black 
              dark:hover:bg-white"
              onClick={copyEmail}
            >
              <IoMail size={28} />
            </div>
          </div>

          <img src={aboutimg} alt="" className="mx-auto self-end" />
        </div>
        <div className="right w-full md:full xl:w-[55%] m-auto flex flex-col items-center justify-center p-4">
          <div className="professional-intro flex flex-col justify-center px-auto dark:text-white font-bold dark:font-normal text-black text-lg font-courier pr-20">
            <p>
              Experienced full-stack web and Flutter developer with a focus on
              intuitive design and high-performance coding.
            </p>
            <br />
            <p>
              Thriving on delivering excellence in every project, my portfolio
              includes successful web ventures and contributions to mobile
              applications.
            </p>
            <br />
            <p>
              Eager to collaborate on innovative solutions in web development
              and Flutter applications. Feel free to reach out for potential
              collaborations or to explore more about my work!
            </p>
          </div>
          <div className="flex justify-end my-6 w-[100%] md:w-[85%]">
            <button className="self-end ">
              <a
                href="#_"
                class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
              >
                <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-yellow-600 via-orange-600 to-pink-700"></span>
                <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-amber-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                <span class="relative text-white">Download Resume</span>
              </a>
            </button>
          </div>
        </div>
      </div>
      {/* <div className="">
        <div className="flex just m-auto w-[80%] h-[70vh] border-2 border-slate-400 rounded-xl">
          <div className="left w-1/2 h-full"></div>
          <div className="relative right w-1/2 h-full rounded-xl border-2 border-slate-400 box overflow-hidden">
            <img
              src={aboutimg}
              className="w-full h-full object-cover rounded-xl z-10"
              alt=""
            />
            <div className="absolute inset-0 flex items-end pb-4 pr-4 justify-end gap-5 z-30">
              <IoCaretBackCircleOutline className="text-white" size={35} />
              <IoCaretForwardCircleOutline className="text-white" size={35} />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default About;
