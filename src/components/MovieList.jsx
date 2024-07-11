import React, { useEffect, useRef } from "react";
import MovieCard from "./MovieCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const MovieList = ({ title, movies }) => {
  //code to handle scroll when on card so that horizontal scroll is performed
  const scrollableRef = useRef(null);

  useEffect(() => {
    const handleWheel = (event) => {
      if (event.deltaY !== 0) {
        event.preventDefault();
        scrollableRef.current.scrollBy({
          left: event.deltaY * 5, // Increase sensitivity by multiplying deltaY
          behavior: "smooth", // Enable smooth scrolling
        });
      }
    };

    const scrollableElement = scrollableRef.current;
    scrollableElement?.addEventListener("wheel", handleWheel);

    return () => {
      scrollableElement?.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const scrollLeft = () => {
    scrollableRef.current.scrollBy({
      left: -300, // Adjust this value as needed
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollableRef.current.scrollBy({
      left: 300, // Adjust this value as needed
      behavior: "smooth",
    });
  };

  return (
    movies && (
      <div className="relative px-4 sm:px-6 lg:px-8 py-2 sm:py-4">
        <h1 className="text-xl sm:text-2xl lg:text-3xl py-2 tracking-widest font-semibold text-white">
          {title.toUpperCase()}
        </h1>
        <div className="relative flex items-center">
          <button
            onClick={scrollLeft}
            className="absolute left-0 ml-2 sm:mr-4 transform -translate-y-1/2 z-10 p-2 hover:scale-110 transition-transform rounded-full"
            style={{ top: "50%" }}
          >
            <FaArrowLeft className="text-white" size={15} />
          </button>
          <div
            ref={scrollableRef}
            className="flex overflow-x-scroll sm:overflow-x-auto scroll-smooth overflow-y-hidden no-scrollbar cursor-move ml-2 sm:mx-8"
          >
            <div className="flex ml-2">
              {movies?.map((movie, index) => (
                <MovieCard key={movie.id} posterPath={movie.poster_path} />
              ))}
            </div>
          </div>
          <button
            onClick={scrollRight}
            className="absolute right-0 mr-2 sm:ml-4 transform -translate-y-1/2 z-10 p-2 hover:scale-110 transition-transform rounded-full"
            style={{ top: "50%" }}
          >
            <FaArrowRight className="text-white" size={15} />
          </button>
        </div>
      </div>
    )
  );
};

export default MovieList;
