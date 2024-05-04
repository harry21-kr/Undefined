import useMovieDetailData from "./hook/useMovieDetailData.js";
import displayActors from "./displayActors.js";

const { getActorsData, getWatchProvidersData, getVideoData } =
  useMovieDetailData();

const movieId = JSON.parse(sessionStorage.getItem("movie")).id;

const [actors, providers, trailer] = await Promise.all([
  getActorsData(movieId),
  // getWatchProvidersData(movieId),
  // getVideoData(movieId),
]);

const actorsWrap = document.getElementById("actor-row");

const actorElements = displayActors(actors);

actorsWrap.innerHTML = actorElements;
