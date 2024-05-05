import { reviewCnt, reviewContainer } from "./domElements.js";

export const handleSubmit = (e) => {
  let review = {};
  let isValid = true;
  let errorMessage = "";
  const reviewInputs = document.querySelectorAll(".review-input");
  e.preventDefault();

  reviewInputs.forEach((input) => {
    const value = input.value.trim();
    input.value = "";
    switch (input.id) {
      case "username":
        if (value.length < 2) {
          isValid = false;
          errorMessage = "작성자 두 글자 이상~";
        }
        break;
      case "password":
        if (value.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
          isValid = false;
          errorMessage = "비밀번호는 특수문자를 포함한 8자 이상~";
        }
        break;
      case "review":
        if (value.length < 10) {
          isValid = false;
          errorMessage = "리뷰 10자이상~";
        }
        break;
    }
    if (isValid) {
      review[input.id] = value;
    }
  });
  if (!isValid) {
    alert(errorMessage);
    return;
  }
  const date = new Date();
  const submittedAt = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
  review = { ...review, submittedAt, movieId: "/" };
  const key = date.getTime();

  localStorage.setItem(key, JSON.stringify(review));
  addReview(review, key);
};

function addReview(review, key) {
  const reviewRow = createReviewElement(review, key);
  reviewContainer.appendChild(reviewRow);
}

export function createReviewElement(reviewContent, key) {
  const reviewCount = localStorage.length;
  const { username, review, submittedAt } = reviewContent;
  reviewCnt.innerHTML = `댓글 ${reviewCount}개`;
  const reviewRow = document.createElement("li");
  reviewRow.setAttribute("id", "review-row");
  reviewRow.setAttribute("data-key", key);
  reviewRow.innerHTML = `
  <div id="review-box-top">
                    <p id="username-display">${username}</p>
                    <div id="review-btn-box">
                      <button id="edit-review-btn" data-key=${key}>수정</button>
                      <button id="delete-review-btn" data-key=${key}>삭제</button>
                    </div>
                  </div>
                  <div id="review-box-bottom">
                    <div id="review-content-box" data-key=${key}>
                      <p id="review-display">
                      ${review}
                      </p>
                    </div>
                    <div id="review-detail-box">
                      <p id="review-time">${submittedAt}</p>
                      <p id="like-count">♥ 7</p>
                    </div>
                  </div>
  `;
  return reviewRow;
}
