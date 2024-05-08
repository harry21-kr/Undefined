import { TMDB_IMAGE_URL } from "../../config/constants/index.js";

export default function displayActors(data) {
  const actorElements = data
    .map((actor) => {
      return `
          <div id="actor-wrapper">
            <img id="actor-img" src="${TMDB_IMAGE_URL}${actor.profile_path}" />
            <p id="actor-name">${actor.name}</p>
          </div>
          `;
    })
    .reduce((acc, cur) => acc + cur, []);

  return actorElements;
}
