import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className=" w-screen h-full overflow-hidden">
      {/* trailer video on youtube's embed code: */}
      <iframe
        className="absolute top-0 left-0 w-full h-full overflow-hidden  object-cover z-0 pointer-events-none "
        // className="w-[99vw] aspect-video h-auto "
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1&loop=1&playlist=" +
          trailerVideo?.key
        }
        style={{ transform: "scale(1.3)", transformOrigin: "center" }}
        title="Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
