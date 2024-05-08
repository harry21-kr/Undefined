import {
  DEFAULT_MOVIE_IMAGE,
  TMDB_IMAGE_URL,
} from "../../config/constants/index.js";

export default function displayMovieDetail() {
  const movieData = JSON.parse(sessionStorage.getItem("movie"));
  const moviePoster = document.querySelector("#poster-wrapper");
  const movieElementChildren = moviePoster.children;
  const movieTitle = document.getElementById("movie-title");
  const movieFeature = document.getElementById("movie-feature");
  const movieOverview = document.getElementById("movie-overview");
  const movieRate = document.getElementById("movie-rate");
  movieElementChildren[0].src = `${TMDB_IMAGE_URL}${movieData.poster_path}`;
  movieElementChildren[0].onerror = function () {
    this.src = `${DEFAULT_MOVIE_IMAGE}`;
  };

  movieRate.textContent = `평점 : ${movieData.vote_average.toFixed(1)}`;
  movieTitle.textContent = `${movieData.title}`;
  movieFeature.textContent = `${movieData.release_date}`;
  movieOverview.textContent = `${movieData.overview}`;
  movieOverview.style.fontSize = "16px";
  movieOverview.style.lineHeight = "23px";
}
