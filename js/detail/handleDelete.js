import { verifyAndExecute } from "./checkPassword.js";
import { reviewCnt } from "./domElements.js";

export const handleDelete = async (e) => {
  if (e.target.id === "delete-review-btn") {
    await verifyAndExecute(e, deleteReview);
  }
};

const deleteReview = (localStorageKey) => {
  localStorage.removeItem(localStorageKey);
  reviewCnt.innerHTML = `댓글 ${localStorage.length}개`;

  const toBeDeleted = document.querySelector(
    `#review-row[data-key="${localStorageKey}"]`
  );
  toBeDeleted.remove();
};
