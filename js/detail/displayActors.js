import { TMDB_IMAGE_URL } from "../config/constants/index.js";

export default function displayActors(data) {
  const actorElements = data
    .map((actor) => {
      return `
            <img id="actor-img" src="${TMDB_IMAGE_URL}${actor.profile_path}" />
            <p id="actor-name">${actor.name}</p>
          `;
    })
    .reduce((acc, cur) => acc + cur, []);

  return actorElements;
}
