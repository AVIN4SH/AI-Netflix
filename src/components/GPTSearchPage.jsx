import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import BGBANNER from "../assets/BG-BANNER.jpg";

const GPTSearchPage = () => {
  return (
    <div
      style={{ backgroundImage: `url(${BGBANNER})` }}
      className="bg-cover bg-center h-screen lg:h-screen w-full"
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center py-24 px-4 sm:px-8">
        <div className="w-full max-w-lg">
          <GPTSearchBar />
          <GPTMovieSuggestion />
        </div>
      </div>
    </div>
  );
};

export default GPTSearchPage;
