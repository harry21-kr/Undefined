import useMovieDetailData from "./hook/useMovieDetailData.js";

const { getActorsData, getWatchProvidersData, getVideoData } =
  useMovieDetailData();

const movieId = JSON.parse(sessionStorage.getItem("movie")).id;

const [actors, providers, trailer] = await Promise.all([
  getActorsData(movieId),
  getWatchProvidersData(movieId),
  getVideoData(movieId),
]);

console.log(actors);
console.log(providers);
console.log(trailer);
