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
  const reviewDetailBox = document.querySelector(
    `#review-row[data-key="${localStorageKey}"] #review-detail-box`
  );
  const reviewBtnBox = document.querySelector(
    `#review-row[data-key="${localStorageKey}"] #review-btn-box`
  );

  reviewBtnBox.style.display = "none";
  reviewDetailBox.style.display = "none";

  reviewContentBox.innerHTML = `<textarea id="edit-review-input" class="review-input">${textContent}</textarea>
  <div id="edit-review-confirm-btn-container">
  <button id="edit-review-confirm-btn" class="detail-btn">확인</button>
  </div>
  `;

  setupEditConfirm(
    reviewContentBox,
    reviewDetailBox,
    reviewBtnBox,
    localStorageKey
  );
};

const setupEditConfirm = (
  reviewContentBox,
  reviewDetailBox,
  reviewBtnBox,
  localStorageKey
) => {
  const handleEditConfirm = () => {
    const editReviewInput = document.querySelector("#edit-review-input");
    const editReviewErrorMessage = document.querySelector(
      `#review-row[data-key="${localStorageKey}"] #edit-review-error-message`
    );
    const editedReview = editReviewInput.value;

    if (editedReview.trim().length > 10) {
      reviewContentBox.innerHTML = `
<p id="review-display">${editedReview}</p>
`;

      const review = JSON.parse(localStorage.getItem(localStorageKey));
      review.review = editedReview;
      localStorage.setItem(localStorageKey, JSON.stringify(review));

      reviewBtnBox.style.display = "flex";
      reviewDetailBox.style.display = "flex";
      editReviewErrorMessage.innerText = "";
    } else {
      editReviewErrorMessage.innerText = "리뷰를 10자 이상 작성해 주세요.";
    }
  };
  document
    .querySelector("#edit-review-confirm-btn")
    .addEventListener("click", handleEditConfirm);
};
