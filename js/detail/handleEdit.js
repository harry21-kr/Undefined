import { verifyAndExecute } from "./checkPassword.js";

export const handleEdit = async (e) => {
  if (e.target.id === "edit-review-btn") {
    await verifyAndExecute(e, editReview);
  }
};

const editReview = (localStorageKey) => {
  const reviewContentBox = document.querySelector(
    `#review-row[data-key="${localStorageKey}"] #review-content-box`
  );
  const paragraph = reviewContentBox.querySelector("#review-display");
  const textContent = paragraph.innerText;
  displayEditInput(reviewContentBox, textContent, localStorageKey);
};

const displayEditInput = (reviewContentBox, textContent, localStorageKey) => {
  reviewContentBox.innerHTML = `<textarea id="edit-review-input">${textContent}</textarea>
  <button id="edit-review-confirm-btn">확인</button>
  `;

  setupEditConfirm(reviewContentBox, localStorageKey);
};

const setupEditConfirm = (reviewContentBox, localStorageKey) => {
  const handleEditConfirm = () => {
    const editReviewInput = document.querySelector("#edit-review-input");
    const editedReview = editReviewInput.value;
    reviewContentBox.innerHTML = `
    <p id="review-display">${editedReview}</p>
`;
    const review = JSON.parse(localStorage.getItem(localStorageKey));
    review.review = editedReview;
    localStorage.setItem(localStorageKey, JSON.stringify(review));
  };
  document
    .querySelector("#edit-review-confirm-btn")
    .addEventListener("click", handleEditConfirm);
};
