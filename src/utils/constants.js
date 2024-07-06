export const TMBD_API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.${
      import.meta.env.VITE_REACT_APP_TMDB_ACCESS_TOKEN_PART2
    }.PBz4WHJb9N1DYezT0413BQhFmdCvL8FGMG1nrRwroSQ`,
  },
};
