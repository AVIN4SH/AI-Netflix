import React, { useState } from "react";

const GPTSearchBar = () => {
  const [clicked, setCLicked] = useState(false);

  const handleSearchClick = (event) => {
    event.preventDefault();
    setCLicked(!clicked);
  };

  return (
    <div className="mx-auto mt-10 flex flex-col gap-8">
      <form className="flex flex-col sm:flex-row items-center">
        <input
          onChange={handleSearchClick}
          type="text"
          placeholder="What you like to watch today?"
          className="px-4 py-2 border-2 shadow-lg border-black rounded-full w-full sm:w-[70vw] lg:w-[40vw] text-center bg-black text-white focus:bg-black focus:text-white"
        />
        <button
          onClick={handleSearchClick}
          className="bg-red-600 border-2 shadow-lg border-red-500 px-4 py-1 m-2 rounded-full text-white hover:scale-105 transition-transform"
        >
          Search
        </button>
      </form>
      {clicked && (
        <div className="text-xl sm:text-3xl mt-10 sm:mt-0 ml-0 sm:ml-4 p-2">
          <span className="bg-black/80 font-semibold text-red-500 p-2 rounded">
            Feature Coming Soon
          </span>
        </div>
      )}
    </div>
  );
};

export default GPTSearchBar;
