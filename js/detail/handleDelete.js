import { verifyAndExecute } from "./checkPassword.js";
import { decrementReviewCount, reviewCount } from "./displayAllReviews.js";
import { reviewCnt } from "./domElements.js";

export const handleDelete = async (e) => {
  if (e.target.id === "delete-review-btn") {
    await verifyAndExecute(e, deleteReview);
  }
};

const deleteReview = (localStorageKey) => {
  localStorage.removeItem(localStorageKey);
  decrementReviewCount();
  reviewCnt.innerHTML = `댓글 ${reviewCount}개`;

  const toBeDeleted = document.querySelector(
    `#review-row[data-key="${localStorageKey}"]`
  );
  toBeDeleted.remove();
};
