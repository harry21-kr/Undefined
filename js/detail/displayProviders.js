import { TMDB_IMAGE_URL } from "../config/constants/index.js";

export default function displayProviders(data) {
  console.log(data);
  if (data) {
    const providerElements = data
      .map((provider) => {
        return `
            <img id="provider-img" src="${TMDB_IMAGE_URL}${provider.logo_path}" />
          `;
      })
      .reduce((acc, cur) => acc + cur, []);

    return providerElements;
  } else {
    return "아직 한국에서 시청 가능한 플랫폼이 없습니다.";
  }
}
