import { API_KEY, TMDB_API_URL } from "../../config/constants/index.js";
import { get } from "../../utils/index.js";

const useMovieDetailData = () => {
  // 배우 정보 받아오기
  const getActorsData = async (id) => {
    const res = await get(
      `${TMDB_API_URL}/movie/${id}/credits?language=ko-KR&api_key=${API_KEY}`
    );
    return res.cast
      .filter((v) => v.known_for_department === "Acting")
      .slice(0, 4);
  };

  // 스트리밍 사이트 정보 받아오기
  const getWatchProvidersData = async (id) => {
    const res = await get(
      `${TMDB_API_URL}/movie/${id}/watch/providers?api_key=${API_KEY}`
    );
    return res.results.KR.flatrate;
  };

  // 영화 예고편 받아오기
  const getVideoData = async (id) => {
    const res = await get(
      `${TMDB_API_URL}/movie/${id}/videos?language=en-EN&api_key=${API_KEY}`
    );

    return res.results[0];
  };

  return { getActorsData, getWatchProvidersData, getVideoData };
};

export default useMovieDetailData;
