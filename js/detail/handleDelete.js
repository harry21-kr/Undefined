import { checkPassword } from "./checkPassword.js";

export const handleDelete = (e) => {
  if (e.target.id === "delete-review-btn") {
    const localStorageKey = e.target.dataset.key;

    if (checkPassword(localStorageKey)) {
      localStorage.removeItem(localStorageKey);
      deleteReview(localStorageKey);
    } else {
      alert("일치하지 않습니다");
    }
  }
};

function deleteReview(localStorageKey) {
  const toBeDeleted = document.querySelector(
    `#review-row[data-key="${localStorageKey}"]`
  );
  toBeDeleted.remove();
}
