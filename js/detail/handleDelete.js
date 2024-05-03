import { checkPassword } from "./checkPassword.js";
import { reviewCnt } from "./domElements.js";

export const handleDelete = async (e) => {
  if (e.target.id === "delete-review-btn") {
    const localStorageKey = e.target.dataset.key;
    const isCorrect = await checkPassword(localStorageKey);
    if (isCorrect) {
      deleteReview(localStorageKey);
    } else {
      alert("일치하지 않습니다");
      throw new Error();
    }
  }
};

function deleteReview(localStorageKey) {
  localStorage.removeItem(localStorageKey);
  reviewCnt.innerHTML = `댓글 ${localStorage.length}개`;

  const toBeDeleted = document.querySelector(
    `#review-row[data-key="${localStorageKey}"]`
  );
  toBeDeleted.remove();
}
