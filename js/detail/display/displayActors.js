import { TMDB_IMAGE_URL } from "../../config/constants/index.js";

export default function displayActors(data) {
  const actorElements = data
    .map((actor) => {
      return `
          <div class="actor-wrapper">
            <img class="actor-img" src="${TMDB_IMAGE_URL}${actor.profile_path}" />
            <p class="actor-name">${actor.name}</p>
          </div>
          `;
    })
    .reduce((acc, cur) => acc + cur, []);

  return actorElements;
}
