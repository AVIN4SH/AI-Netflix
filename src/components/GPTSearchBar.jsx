import React, { useState } from "react";

const GPTSearchBar = () => {
  const [clicked, setCLicked] = useState(false);

  const handleSearchClick = (event) => {
    event.preventDefault();
    setCLicked(!clicked);
  };

  return (
    <div className="mx-auto mt-10 flex flex-col">
      <form className="flex- flex-row  ">
        <input
          onChange={handleSearchClick}
          type="text"
          placeholder="What you like to watch today?"
          className="px-4 py-2 border-2  shadow-lg border-black mx-auto rounded-full w-[70vw] lg:w-[40vw] text-center bg-black text-white focus:bg-black focus:text-white"
        />
        <button
          onClick={handleSearchClick}
          className="bg-red-600 border-2 shadow-lg  border-red-500 px-4 py-1 m-2 rounded-full text-white hover:scale-105 transition-transform"
        >
          Search
        </button>
        {clicked && (
          <div className="text-3xl mt-10 m-4 p-4k">
            <span className=" bg-black/80 font-semibold text-red-500 m-2 p-2 rounded">
              Feature Coming Soon
            </span>
          </div>
        )}
      </form>
    </div>
  );
};

export default GPTSearchBar;
