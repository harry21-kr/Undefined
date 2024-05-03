import { TMDB_IMAGE_URL } from "../config/constants/index.js";
function movieData() {
  const movieData = JSON.parse(sessionStorage.getItem("movie"));

  const moviePoster = document.querySelector("#poster-wrapper");
  const movieElementChildren = moviePoster.children;

  movieElementChildren[0].src = `${TMDB_IMAGE_URL}${movieData.poster_path}`;
  movieElementChildren[1].textContent = `평점 : ${movieData.vote_average}`;

  console.log(sessionStorage.getItem("movie"));
}
movieData();
// 영화제목 영화설명//
export default movieData;
