import { YOUTUBE_VIDEO_URL } from "../config/constants/index.js";

export default function displayTrailer(data) {
  const trailerElement = `
    <iframe id="trailer-video" src="${YOUTUBE_VIDEO_URL}${data.key}?autoplay=1&mute=1"></iframe>
  `;

  return trailerElement;
}
