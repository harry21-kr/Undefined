import useMovieDetailData from "./hook/useMovieDetailData.js";
import displayActors from "./displayActors.js";
import displayTrailer from "./displayTrailer.js";

const { getActorsData, getWatchProvidersData, getVideoData } =
  useMovieDetailData();

const movieId = JSON.parse(sessionStorage.getItem("movie")).id;

// const [actors, providers, trailer] = await Promise.all([
const [actors, trailer] = await Promise.all([
  getActorsData(movieId),
  // getWatchProvidersData(movieId),
  getVideoData(movieId),
]);

const actorsWrap = document.getElementById("actor-row");
const trailerWrap = document.getElementById("trailer-wrapper");

const actorElements = displayActors(actors);
const trailerElement = displayTrailer(trailer);

actorsWrap.innerHTML = actorElements;
trailerWrap.innerHTML = trailerElement;
