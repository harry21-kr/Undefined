import { checkPassword } from "./checkPassword.js";
import { passwordErrorModal, reviewCnt } from "./domElements.js";

export const handleDelete = async (e) => {
  if (e.target.id === "delete-review-btn") {
    const localStorageKey = e.target.dataset.key;
    const isCorrect = await checkPassword(localStorageKey);
    if (isCorrect) {
      deleteReview(localStorageKey);
    } else {
      passwordErrorModal.showModal();
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
