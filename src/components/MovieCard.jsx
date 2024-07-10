import React from "react";
import { IMG_CDN_URL } from "../utils/constants.js";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4 hover:scale-105 transition-transform">
      <img
        src={IMG_CDN_URL + posterPath}
        alt="Movie Poster"
        className="rounded"
      />
    </div>
  );
};

export default MovieCard;
