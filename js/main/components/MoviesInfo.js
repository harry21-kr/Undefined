import { TMDB_IMAGE_URL } from "../../config/constants";

export default function MoviesInfo(data) {
  const movieElements = data
    .map((movie, idx) => {
      return `
      <div id="movie-item-${movie.id}" class="movie-content-wrap">
        <img src="${TMDB_IMAGE_URL}${movie.poster_path}" />
        <h4>${movie.title}</h4>
        <p class="movie-vote-average-text">
          평점: ${movie.vote_average.toFixed(1)}점
        </p>
        <p class="movie-release-date-text">
         개봉 일자: ${movie.release_date.replace(/-/gi, ".")}
        </p>
        <p class="movie-rank-text">${idx + 1}</p>
    </div>`;
    })
    .reduce((acc, cur) => acc + cur, []);

  return movieElements;
}
