import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    website: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const form = useRef();
  const phoneNumber = "+918097228253"; // Replace with the desired phone number

  const [copySuccess, setCopySuccess] = useState(null);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        toast.success("Contact copied to clip board", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setCopySuccess("Copied to clipboard!");
        setTimeout(() => setCopySuccess(null), 2000); // Reset success message after 2 seconds
      })
      .catch((err) => {
        console.error("Error copying text to clipboard:", err);
        setCopySuccess("Copy failed. Please try again.");
        setTimeout(() => setCopySuccess(null), 2000); // Reset error message after 2 seconds
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    if (Object.keys(newErrors).length === 0) {
      // Form is valid, submit the data or perform any other actions
      console.log("Form submitted:", formData);
      emailjs
        .sendForm(
          "service_2ccmtja",
          "template_g53nnao",
          form.current,
          "C1sPLQjwtgWp-Wvk1"
        )
        .then(
          (result) => {

            if (result.status == 200) {
              toast.success("Email sent successfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            } else {
              toast.warn("There might be some issue", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            }
          },
          (error) => {
            console.log(error.text);
            toast.error("Failed to sent Email", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }
        );
    } else {
      setErrors(newErrors);
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.firstName.trim()) {
      errors.firstName = "First name is required";
    }

    if (!data.lastName.trim()) {
      errors.lastName = "Last name is required";
    }

    if (!data.email.trim()) {
      errors.email = "Email address is required";
    } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      errors.email = "Invalid email address";
    }

    if (!data.message.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };

  return (
    <div className="m-auto pb-16">
      <div className="pb-16 mx-20 pt-10 w-auto relative">
        <p className="font-semibold font-serif text-gray-800 text-4xl dark:text-slate-300">
          Contact
        </p>
        <div className="absolute  transform -translate-x-1/2  w-24 border-b-[12px] mt-4 border-yellow-500 " />
      </div>
      <div className="m-auto w-[92%] md:w-[70%] xl:w-[75%]  bg-slate-700 bg-opacity-50 p-6 md:p-12 xl:p-12 rounded-xl">
        <form onSubmit={handleSubmit} ref={form}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="firstName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="user_name"
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                  errors.firstName ? "border-red-500" : ""
                }`}
                placeholder="Dnyandeep"
                onChange={handleChange}
                value={formData.firstName}
                required
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                  errors.lastName ? "border-red-500" : ""
                }`}
                placeholder="Gaonkar"
                onChange={handleChange}
                value={formData.lastName}
                required
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                  errors.phone ? "border-red-500" : ""
                }`}
                placeholder="99999-99999 ( Optional )"
                pattern="[0-9]{10}"
                onChange={handleChange}
                value={formData.phone}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="website"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Website URL
              </label>
              <input
                type="url"
                id="website"
                name="website"
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                  errors.website ? "border-red-500" : ""
                }`}
                placeholder="www.example.com ( Optional )"
                onChange={handleChange}
                value={formData.website}
              />
              {errors.website && (
                <p className="text-red-500 text-sm mt-1">{errors.website}</p>
              )}
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email address
            </label>
            <input
              type="email"
              name="user_email"
              id="email"
              className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="example@company.com"
              onChange={handleChange}
              value={formData.email}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                errors.message ? "border-red-500" : ""
              }`}
              placeholder="Your Message here..."
              onChange={handleChange}
              value={formData.message}
              required
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          <div className="flex justify-center">
            <button type="submit">
              <div
              
                className="relative inline-flex items-center justify-center p-4 px-20 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500 "
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-yellow-600 via-orange-600 to-pink-700"></span>
                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-amber-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                <span className="relative text-white">Submit</span>
              </div>
            </button>
          </div>
        </form>
        <div className="w-full h-0.5 bg-white bg-opacity-20 my-10"></div>
        <div>
          <div className="font-courier text-xl uppercase  ">
            <p className="text-white ">Connect with me</p>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap justify-center">
            <button class="m-4 p-1 rounded-lg from-rose-400 via-fuchsia-500 to-indigo-500 bg-gradient-to-r ">
              <a href="https://github.com/dnyandeep23 ">
                <span class=" md:w-[15rem] px-[4.5rem] py-6 font-semibold rounded-md bg-slate-700 hover:bg-transparent text-white transition flex justify-between items-center">
                  <FaGithub size={30} /> <p>Github</p>
                </span>
              </a>
            </button>

            <button class="m-4 p-1 rounded-lg from-blue-400 via-sky-500 to-violet-600 bg-gradient-to-r">
              <a href="https://www.linkedin.com/in/dnyandeep-gaonkar-136662252/">
                <span class=" md:w-[15rem] px-[4rem] py-6 font-semibold rounded-md bg-slate-700 hover:bg-transparent text-white transition flex justify-between items-center">
                  <IoLogoLinkedin size={30} /> <p>LinkedIn</p>
                </span>
              </a>
            </button>

            <button class="m-4 p-1 rounded-lg from-blue-400 via-sky-500 to-cyan-600 bg-gradient-to-r">
              <a href="https://twitter.com/DNYANDEEPG82304">
                <span class=" md:w-[15rem] px-[4rem] py-6 font-semibold rounded-md bg-slate-700 hover:bg-transparent text-white transition flex justify-between items-center">
                  <BsTwitterX size={30} /> <p>Twitter</p>
                </span>
              </a>
            </button>

            <button class="m-4 p-1 rounded-lg from-lime-400 via-lime-500 to-lime-400 bg-gradient-to-r">
              <a href="https://wa.me/+918097228253">
                <span class=" md:w-[15rem] px-[3rem] py-6 font-semibold rounded-md bg-slate-700 hover:bg-transparent text-white transition flex justify-between items-center">
                  <FaWhatsapp size={30} /> <p>Whats App</p>
                </span>
              </a>
            </button>

            <button
              class="m-4 p-1 rounded-lg from-stone-700 via-stone-800 to-stone-900 bg-gradient-to-r"
              onClick={copyToClipboard}
            >
              <span class=" md:w-[15rem] px-[3rem] py-6 font-semibold rounded-md bg-slate-700 hover:bg-transparent text-white transition flex justify-between items-center">
                <FaPhoneAlt size={30} /> <p>Contact No</p>
              </span>
            </button>
          </div>
        </div>
      </div>
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
    </div>
  );
}

export default Contact;
