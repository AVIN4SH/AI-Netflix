import React from "react";

const GPTSearchBar = () => {
  return (
    <div className="mx-auto mt-10 ">
      <form className="flex- flex-row ">
        <input
          type="text"
          placeholder="What you like to watch today?"
          className="px-4 py-2 mx-auto rounded-full w-[70vw] lg:w-[40vw] text-center bg-[#fff] text-black focus:bg-black focus:text-white"
        />
        <button className="bg-red-600 px-4 py-1 m-2 rounded-full text-white hover:scale-105 transition-transform">
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
