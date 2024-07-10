import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const randomNum = () => {
    return Math.floor(Math.random() * 15);
  };

  const mainMovie = movies[randomNum()];
  //we can hardcode this value to movies[0] to always show trailer of 1st movie only all the time
  //this is the main movies whose video will be shown
  // console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;

  return (
    mainMovie && (
      <div className="relative min-h-screen overflow-hidden">
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id} />
      </div>
    )
  );
};

export default MainContainer;
