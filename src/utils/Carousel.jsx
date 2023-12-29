import React, { useState, useEffect } from "react";
import school from "../Assets/school.png";
import college from "../Assets/college.jpg";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const Carousel = ({ images }) => {
  // const images = [school, college];
  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 5000); // Adjust the interval timing as needed

    return () => clearInterval(intervalId);
  }, [currentImage]);

  return (
    <div className="w-full max-w-2xl mx-auto my-8 relative overflow-hidden ">
      <div
        className="flex transition-transform ease-in-out duration-500 rounded-xl "
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full xl:h-52 h-auto object-cover rounded-xl"
          />
        ))}
      </div>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer">
        <button
          onClick={prevImage}
          className="text-white opacity-40 hover:opacity-100 text-xl focus:outline-none"
        >
          <GrFormPrevious size={35} /> {/* Left arrow */}
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer">
        <button
          onClick={nextImage}
          className="text-white opacity-40 hover:opacity-100 text-xl focus:outline-none"
        >
          <MdOutlineNavigateNext size={35} /> {/* Right arrow */}
        </button>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`mx-1 h-2 w-2 rounded-full opacity-25 hover:opacity-80 cursor-pointer ${
              index === currentImage ? "bg-white" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
