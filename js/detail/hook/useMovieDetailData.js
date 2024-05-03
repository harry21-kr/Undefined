import { API_KEY, TMDB_API_URL } from "../../config/constants/index.js";
import { get } from "../../utils/index.js";

const useMovieDetailData = () => {
  const getActorsData = async (id) => {
    const res = await get(
      `${TMDB_API_URL}/movie/${id}/credits?language=ko-KR&api_key=${API_KEY}`
    );
    return res.cast.filter((v) => v.known_for_department === "Acting");
  };

  const getWatchProvidersData = async (id) => {
    const res = await get(
      `${TMDB_API_URL}/movie/${id}/watch/providers?api_key=${API_KEY}`
    );
    return res.results.KR;
  };

  return { getActorsData, getWatchProvidersData };
};

export default useMovieDetailData;
