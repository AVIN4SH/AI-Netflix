import React, { useEffect } from "react";
import Header from "./Header";
import { TMBD_API_OPTIONS } from "../utils/constants";

const Browse = () => {
  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        TMBD_API_OPTIONS
      );
      const json = await data.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return (
    <div>
      <Header />
      Browse
    </div>
  );
};

export default Browse;
