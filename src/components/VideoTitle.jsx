import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute  py-12 px-6 sm:px-10 lg:px-20 bg-gradient-to-r from-black/70 text-white pt-[15%] lg:w-3/4 h-full flex flex-col items-start justify-center z-20">
      <h1
        className="text-4xl lg:-mt-40   sm:text-5xl lg:text-6xl ml-3 font-semibold tracking-wide"
        style={{ textTransform: "capitalize" }}
      >
        {title}
      </h1>
      <p className="text-sm sm:text-md lg:text-lg py-4 sm:py-6 ml-3 lg:w-1/2">
        {overview}
      </p>
      <div className="flex flex-col sm:flex-row">
        <button className="rounded border ml-3 mb-3 sm:mb-0 border-gray-800 px-6 py-2 bg-white text-black hover:scale-105 transition-transform font-semibold">
          Play
        </button>
        <button className="rounded border ml-3 border-gray-800 px-6 py-2 bg-[#535353] text-white hover:scale-105 transition-transform font-semibold">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
