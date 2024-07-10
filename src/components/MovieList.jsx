import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    movies && (
      <div className="px-6 py-4">
        <h1 className="text-3xl py-2 tracking-widest font-semibold text-white">
          {title.toUpperCase()}
        </h1>
        <div className="flex overflow-x-scroll overflow-y-hidden">
          <div className="flex">
            {movies?.map((movie, index) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default MovieList;
