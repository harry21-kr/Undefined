import { TMDB_IMAGE_URL } from "../config/constants/index.js";

export default function displaySimilarMovies(data) {
  if (data) {
    const similarMovieElements = data
      .map((similarMovie) => {
        return `
            <img id="similar-movie-img" src="${TMDB_IMAGE_URL}${similarMovie.poster_path}" />
            <p id="similar-movie-title">${similarMovie.title}</p>
          `;
      })
      .reduce((acc, cur) => acc + cur, []);

    return similarMovieElements;
  }
}
