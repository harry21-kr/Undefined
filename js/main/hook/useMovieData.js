import { get } from "../../utils/index.js";
import { API_KEY, TMDB_API_URL } from "../../config/constants/index.js";

const useMovieData = () => {
  const getPopularMovies = async (page = 1) => {
    const res = await get(
      `${TMDB_API_URL}/movie/popular?language=ko-KR&page=${page}&api_key=${API_KEY}`
    );
    return res.results;
  };

  const getTopRatedMovies = async (page = 1) => {
    const res = await get(
      `${TMDB_API_URL}/movie/top_rated?language=ko-KR&page=${page}&api_key=${API_KEY}`
    );
    return res.results;
  };

  const getTrendingMovies = async (page = 1) => {
    const res = await get(
      `${TMDB_API_URL}/trending/movie/day?language=ko-KR&page=${page}&api_key=${API_KEY}`
    );
    return res.results;
  };

  return {
    getPopularMovies,
    getTopRatedMovies,
    getTrendingMovies,
  };
};

export default useMovieData;
