import useMovieData from "./hook/useMovieData.js";

const { getPopularMovies, getTopRatedMovies, getUpcomingMovies } =
  useMovieData();

const [popularMovies, topRatedMovies, upcomingMovies] = await Promise.all([
  getPopularMovies(1),
  getTopRatedMovies(1),
  getUpcomingMovies(1),
]);
