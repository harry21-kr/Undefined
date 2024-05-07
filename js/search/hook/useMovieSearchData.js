import { API_KEY, TMDB_API_URL } from "../../config/constants/index.js";
import { get } from "../../utils/index.js";

const useMovieSearchData = () => {
  const getSearchedMoviesData = async (page = 1, query) => {
    const queryToUnicode = encodeURIComponent(query);
    const res = await get(
      `${TMDB_API_URL}/search/movie?query=${queryToUnicode}&include_adult=false&language=ko-KR&page=${page}&api_key=${API_KEY}`
    );
    return res.results;
  };

  return { getSearchedMoviesData };
};

export default useMovieSearchData;
