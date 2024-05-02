import MoviesInfo from "./components/MoviesInfo.js";
import useMovieData from "./hook/useMovieData.js";
import addMovieAnimation from "./addMovieAnimation.js";

const { getPopularMovies, getTopRatedMovies, getUpcomingMovies } =
  useMovieData();

const [popularMovies, topRatedMovies, upcomingMovies] = await Promise.all([
  getPopularMovies(1),
  getTopRatedMovies(1),
  getUpcomingMovies(1),
]);

const topRatedMoviesWrap = document.getElementById("top-rated-movies-wrap");
const popularMoviesWrap = document.getElementById("popular-movies-wrap");
const upcomingMoviesWrap = document.getElementById("upcoming-movies-wrap");

const topRatedMoviesPrevBtn = document.getElementById(
  "top-rated-movies-previous-button"
);
const topRatedMoviesNextBtn = document.getElementById(
  "top-rated-movies-next-button"
);
const popularMoviesPrevBtn = document.getElementById(
  "popular-movies-previous-button"
);
const popularMoviesNextBtn = document.getElementById(
  "popular-movies-next-button"
);
const upcomingMoviesPrevBtn = document.getElementById(
  "upcoming-movies-previous-button"
);
const upcomingMoviesNextBtn = document.getElementById(
  "upcoming-movies-next-button"
);

const topRatedMovieElements = MoviesInfo(topRatedMovies);
const popularMovieElements = MoviesInfo(popularMovies);
const upcomingMovieElements = MoviesInfo(upcomingMovies);

topRatedMoviesWrap.innerHTML = topRatedMovieElements;
popularMoviesWrap.innerHTML = popularMovieElements;
upcomingMoviesWrap.innerHTML = upcomingMovieElements;

addMovieAnimation(
  topRatedMoviesWrap,
  topRatedMoviesNextBtn,
  topRatedMoviesPrevBtn
);
addMovieAnimation(
  popularMoviesWrap,
  popularMoviesNextBtn,
  popularMoviesPrevBtn
);
addMovieAnimation(
  upcomingMoviesWrap,
  upcomingMoviesNextBtn,
  upcomingMoviesPrevBtn
);
