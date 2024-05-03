import useMovieDetailData from "./hook/useMovieDetailData.js";

const { getActorsData, getWatchProvidersData } = useMovieDetailData();

const movieId = JSON.parse(sessionStorage.getItem("movie")).id;

const actors = await getActorsData(movieId);
const providers = await getWatchProvidersData(movieId);

console.log(actors);
console.log(providers);
