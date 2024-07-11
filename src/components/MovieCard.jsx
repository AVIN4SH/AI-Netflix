import React from "react";
import { IMG_CDN_URL } from "../utils/constants.js";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-36 sm:w-48 lg:w-56 xl:w-64 pr-2 sm:pr-4 hover:scale-105 transition-transform">
      <img
        src={IMG_CDN_URL + posterPath}
        alt="Movie Poster"
        className="rounded w-full"
      />
    </div>
  );
};

export default MovieCard;
