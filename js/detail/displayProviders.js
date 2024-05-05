import { TMDB_IMAGE_URL } from "../config/constants/index.js";

export default function displayProviders(data) {
  if (data) {
    const providerElements = data
      .map((provider) => {
        return `
            <img id="provider-img" src="${TMDB_IMAGE_URL}${provider.logo_path}" />
          `;
      })
      .reduce((acc, cur) => acc + cur, []);

    return providerElements;
  }
}
