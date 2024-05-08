import {
  DEFAULT_MOVIE_IMAGE,
  TMDB_IMAGE_URL,
} from "../config/constants/index.js";

export default function displaySimilarMovies(data) {
  if (data) {
    const similarMovieElements = data
      .map((similarMovie) => {
        delete similarMovie.original_title;
        const encodedMovie = encodeURIComponent(JSON.stringify(similarMovie));
        return `
          <div style="cursor: pointer;" onclick="sessionStorage.setItem('movie', decodeURIComponent('${encodedMovie}')); location.reload()">
            <img id="similar-movie-img" src="${TMDB_IMAGE_URL}${similarMovie.poster_path}" onerror="this.src='${DEFAULT_MOVIE_IMAGE}';" />
            <p id="similar-movie-title">${similarMovie.title}</p>
          </div>
          `;
      })
      .reduce((acc, cur) => acc + cur, []);

    return similarMovieElements;
  }
}
