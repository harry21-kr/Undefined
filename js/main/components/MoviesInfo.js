import {
  DEFAULT_MOVIE_IMAGE,
  TMDB_IMAGE_URL,
} from "../../config/constants/index.js";

export default function MoviesInfo(data) {
  const movieElements = data
    .map((movie, idx) => {
      delete movie.original_title;
      const encodedMovie = encodeURIComponent(JSON.stringify(movie));
      const encodedDetailPageLink = encodeURIComponent("detail.html");

      return `
        <div
          id="movie-item-${movie.id}"
          class="movie-content-wrap"
          onclick="sessionStorage.setItem('movie', decodeURIComponent('${encodedMovie}')); location.href=decodeURIComponent('${encodedDetailPageLink}')"
        >
        <img src="${TMDB_IMAGE_URL}${
        movie.poster_path
      }" onerror="this.src='${DEFAULT_MOVIE_IMAGE}';"
     />
          <h4 class="movie-title">${movie.title}</h4>
          <p class="movie-vote-average-text">
            평점: ${movie.vote_average.toFixed(1)}점
          </p>
          <p class="movie-rank-text">${idx + 1}</p>
        </div>
    `;
    })
    .reduce((acc, cur) => acc + cur, []);

  return movieElements;
}
