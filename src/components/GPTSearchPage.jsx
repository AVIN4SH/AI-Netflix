import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import BGBANNER from "../assets/BG-BANNER.jpg";

const GPTSearchPage = () => {
  return (
    <div
      style={{ backgroundImage: `url(${BGBANNER})` }}
      className="bg-cover -z-10  bg-center h-[100vh] w-full"
    >
      <div className="absolute  flex flex-col w-[100vw] h-[100vh]  text-center py-24 px-16">
        <div className=" ">
          <GPTSearchBar />
          <GPTMovieSuggestion />
        </div>
      </div>
    </div>
  );
};

export default GPTSearchPage;
