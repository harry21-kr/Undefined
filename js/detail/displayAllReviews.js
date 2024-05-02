import { createReviewElement } from "./handleAdd.js";
import { reviewContainer } from "./domElements.js";

export const displayAllReviews = () => {
  // reviewContainer.innerHTML = "";
  const keys = [];
  const allReviews = localStorage.length;
  for (let i = 0; i < allReviews; i++) {
    keys.push(localStorage.key(i));
  }
  const sortedKeys = keys.map((key) => Number(key)).sort((a, b) => a - b);
  sortedKeys.forEach((key) => {
    {
      const reviewContent = JSON.parse(localStorage.getItem(key));
      if (reviewContent) {
        const reviewRow = createReviewElement(reviewContent, key);
        reviewContainer.appendChild(reviewRow);
      }
    }
  });
};
