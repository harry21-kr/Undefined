import { createReviewElement } from "./handleAdd.js";
import { reviewContainer } from "./domElements.js";
import { movieId } from "./index.js";

export let reviewCount = 0;
export function incrementReviewCount() {
  reviewCount++;
}
export function decrementReviewCount() {
  reviewCount--;
}

export const displayAllReviews = () => {
  const keys = [];
  reviewCount = 0;
  const allReviews = localStorage.length;
  for (let i = 0; i < allReviews; i++) {
    keys.push(localStorage.key(i));
  }
  const sortedKeys = keys.map((key) => Number(key)).sort((a, b) => a - b);
  sortedKeys.forEach((key) => {
    {
      const reviewContent = JSON.parse(localStorage.getItem(key));
      if (reviewContent.movieId === movieId) {
        reviewCount++;
        const reviewRow = createReviewElement(reviewContent, reviewCount, key);
        reviewContainer.appendChild(reviewRow);
      }
    }
  });
};
