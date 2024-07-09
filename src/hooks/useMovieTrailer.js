import { useEffect } from "react";
import { TMBD_API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {
  //fetch trailer video & updating store with video data:
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "/videos?language=en-US",
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
};

export default useMovieTrailer;
