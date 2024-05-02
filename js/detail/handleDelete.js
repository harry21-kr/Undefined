export const handleDelete = (e) => {
  if (e.target.className === "delete__btn") {
    const localStorageKey = e.target.dataset.key;
    localStorage.removeItem(localStorageKey);
    deleteReview(localStorageKey);
  }
};

function deleteReview(localStorageKey) {
  const toBeDeleted = document.querySelector(
    `.review__row[data-key="${localStorageKey}"]`
  );
  toBeDeleted.remove();
}
