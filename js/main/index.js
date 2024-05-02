import MoviesInfo from "./components/MoviesInfo.js";
import useMovieData from "./hook/useMovieData.js";

const { getPopularMovies, getTopRatedMovies, getUpcomingMovies } =
  useMovieData();

const [popularMovies, topRatedMovies, upcomingMovies] = await Promise.all([
  getPopularMovies(1),
  getTopRatedMovies(1),
  getUpcomingMovies(1),
]);

const topRatedMovieElements = MoviesInfo(topRatedMovies);
const popularMovieElements = MoviesInfo(popularMovies);
const upcomingMovieElements = MoviesInfo(upcomingMovies);

const topRatedMoviesWrap = document.getElementById("top-rated-movies-wrap");
const popularMoviesWrap = document.getElementById("popular-movies-wrap");
const upcomingMoviesWrap = document.getElementById("upcoming-movies-wrap");

topRatedMoviesWrap.innerHTML = topRatedMovieElements;
popularMoviesWrap.innerHTML = popularMovieElements;
upcomingMoviesWrap.innerHTML = upcomingMovieElements;
