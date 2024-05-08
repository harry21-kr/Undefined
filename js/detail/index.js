import useMovieDetailData from "./hook/useMovieDetailData.js";
import addSearchEvent from "../search/addSearchEvent.js";
import displayActors from "./display/displayActors.js";
import displayProviders from "./display/displayProviders.js";
import displayTrailer from "./display/displayTrailer.js";
import displaySimilarMovies from "./display/displaySimilarMovies.js";
import displayMovieDetail from "./display/displayMovieDetail.js";
import initReviews from "./review/initReviews.js";

const {
  getActorsData,
  getWatchProvidersData,
  getVideoData,
  getSimilarMoviesData,
} = useMovieDetailData();

export const movieId = JSON.parse(sessionStorage.getItem("movie")).id;

const [actors, providers, trailer, similarMovies] = await Promise.all([
  getActorsData(movieId),
  getWatchProvidersData(movieId),
  getVideoData(movieId),
  getSimilarMoviesData(movieId),
]);

const actorsWrap = document.getElementById("actor-row");
const providersWrap = document.getElementById("provider-row");
const trailerWrap = document.getElementById("trailer-wrapper");
const similarMoviesWrap = document.getElementById("similar-movie-row");

const actorElements = displayActors(actors);
const providerElements = displayProviders(providers);
const trailerElement = displayTrailer(trailer);
const similarMovieElements = displaySimilarMovies(similarMovies);

displayMovieDetail();

actorsWrap.innerHTML = actorElements;
if (providerElements) {
  providersWrap.innerHTML = providerElements;
}
trailerWrap.innerHTML = trailerElement;
similarMoviesWrap.innerHTML = similarMovieElements;

addSearchEvent();

initReviews();
