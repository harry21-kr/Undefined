import MoviesInfo from "./components/MoviesInfo.js";
import useMovieData from "./hook/useMovieData.js";
import addMovieAnimation from "./addMovieAnimation.js";

const { getPopularMovies, getTopRatedMovies, getTrendingMovies } =
  useMovieData();

const [popularMovies, topRatedMovies, trendingMovies] = await Promise.all([
  getPopularMovies(1),
  getTopRatedMovies(1),
  getTrendingMovies(1),
]);

const topRatedMoviesWrap = document.getElementById("top-rated-movies-wrap");
const popularMoviesWrap = document.getElementById("popular-movies-wrap");
const trendingMoviesWrap = document.getElementById("trending-movies-wrap");

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
const trendingMoviesPrevBtn = document.getElementById(
  "trending-movies-previous-button"
);
const trendingMoviesNextBtn = document.getElementById(
  "trending-movies-next-button"
);

const topRatedMovieElements = MoviesInfo(topRatedMovies);
const popularMovieElements = MoviesInfo(popularMovies);
const trendingMovieElements = MoviesInfo(trendingMovies);

topRatedMoviesWrap.innerHTML = topRatedMovieElements;
popularMoviesWrap.innerHTML = popularMovieElements;
trendingMoviesWrap.innerHTML = trendingMovieElements;

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
  trendingMoviesWrap,
  trendingMoviesNextBtn,
  trendingMoviesPrevBtn
);
