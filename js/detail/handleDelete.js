import { verifyAndExecute } from "./checkPassword.js";
import { decrementReviewCount, reviewCount } from "./reviewCount.js";
import { reviewCnt } from "./domElements.js";
import { displayEmptyMessage } from "./displayAllReviews.js";

export const handleDelete = async (e) => {
  if (e.target.id === "delete-review-btn") {
    await verifyAndExecute(e, deleteReview);
  }
};

const deleteReview = (localStorageKey) => {
  localStorage.removeItem(localStorageKey);
  const toBeDeleted = document.querySelector(
    `#review-row[data-key="${localStorageKey}"]`
  );
  toBeDeleted.remove();

  decrementReviewCount();
  if (reviewCount === 0) {
    reviewCnt.innerHTML = "";
    displayEmptyMessage();
  } else {
    reviewCnt.innerHTML = `댓글 ${reviewCount}개`;
  }
};
