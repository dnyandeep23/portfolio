import React from "react";

function SkillContainer({ image, text, percentage ,shadow }) {
  return (
    <div className="relative group">
      <div
        className={`container bg-slate-400 bg-opacity-25 mx-auto sm:w-52 max-w-sm md:w-80 lg:w-80 xl:w-80 h-60 sm:h-30 md:h-30 lg:h-52 xl:h-52 flex items-center justify-center rounded-xl text-xl font-courier font-bold overflow-hidden shadow-xl ${shadow} relative`}
      >
        <div className="w-44 h-12 flex items-center justify-center p-6">
          <img src={image} alt="" className="w-full" />
        </div>

        <div className="absolute bg-black bg-opacity-0 h-full w-full top-0 left-0 flex justify-center items-center flex-col hover:bg-opacity-80 translate-y-40 hover:translate-y-0 transition-all ease-in text-white font-courier px-8">
          <div className="flex text-2xl justify-center items-center mx-auto tracking-wide mb-6">
            {text}
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className={`bg-yellow-600 h-2.5 rounded-full w-[${percentage}]`}
            ></div>
          </div>
          <div className="absolute right-4 bottom-4 sm:right-4 sm:bottom-4 flex justify-start text-white text-lg">
            {percentage}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillContainer;
