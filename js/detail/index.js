import useMovieDetailData from "./hook/useMovieDetailData.js";
import displayActors from "./displayActors.js";
import displayProviders from "./displayProviders.js";
import displayTrailer from "./displayTrailer.js";

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

const actorElements = displayActors(actors);
const providerElements = displayProviders(providers);
const trailerElement = displayTrailer(trailer);

actorsWrap.innerHTML = actorElements;
if (providerElements) {
  providersWrap.innerHTML = providerElements;
}
trailerWrap.innerHTML = trailerElement;
