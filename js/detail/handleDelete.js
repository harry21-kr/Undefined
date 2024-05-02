import { checkPassword } from "./checkPassword.js";

export const handleDelete = (e) => {
  if (e.target.className === "delete__btn") {
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
    `.review__row[data-key="${localStorageKey}"]`
  );
  toBeDeleted.remove();
}
