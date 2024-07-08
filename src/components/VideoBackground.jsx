import React, { useEffect } from "react";
import { TMBD_API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const VideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  //fetch trailer video:
  const getMovieVideos = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/1022789/videos?language=en-US",
        TMBD_API_OPTIONS
      );
      const json = await data.json();
      //   console.log(json);
      const filterData = json.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filterData.length ? filterData[0] : json.results[0]; //we are taking 1st trailer
      //   console.log(trailer);
      dispatch(addTrailerVideo(trailer));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

  return (
    <div>
      {/* trailer video on youtube's embed code: */}
      <iframe
        src={"https://www.youtube.com/embed/" + trailerVideo?.key}
        title="Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
