import useMovieDetailData from "./hook/useMovieDetailData.js";

const { getActorsData, getWatchProvidersData, getVideoData } =
  useMovieDetailData();

const movieId = JSON.parse(sessionStorage.getItem("movie")).id;

const actors = await getActorsData(movieId);
const providers = await getWatchProvidersData(movieId);
const trailer = await getVideoData(movieId);

console.log(actors);
console.log(providers);
console.log(trailer);
