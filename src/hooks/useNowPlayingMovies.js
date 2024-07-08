import React, { useEffect } from "react";
import { TMBD_API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  //fetching data from TMDB API and update movie slice in store
  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        TMBD_API_OPTIONS
      );
      const json = await data.json();
      // console.log(json.results);
      dispatch(addNowPlayingMovies(json.results)); //adding movie list to movieSlice store
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
