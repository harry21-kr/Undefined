import { reviewCnt, reviewContainer, errorMsgPar } from "./domElements.js";

export const handleSubmit = (e) => {
  let review = {};
  let errorMessage = "";
  const reviewInputs = document.querySelectorAll(".review-input");
  e.preventDefault();

  for (const tag of reviewInputs.values()) {
    const value = tag.value.trim();

    if (tag.id === "username") {
      if (value.length < 2) {
        errorMessage = "작성자를 두 글자 이상 입력해 주세요.";
        break;
      } else {
        review[tag.id] = value;
      }
    }
    if (tag.id === "password") {
      if (value.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
        errorMessage = "비밀번호를 특수문자를 포함한 8자 이상 입력해 주세요.";
        break;
      } else {
        review[tag.id] = value;
      }
    }
    if (tag.id === "review") {
      if (value.length < 10) {
        errorMessage = "리뷰를 10자 이상 작성해 주세요.";
        break;
      } else {
        review[tag.id] = value;
      }
    }
  }

  if (!errorMessage) {
    const date = new Date();
    const submittedAt = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
    review = { ...review, submittedAt, movieId: "/" };
    const key = date.getTime();

    localStorage.setItem(key, JSON.stringify(review));
    addReview(review, key);
    reviewInputs.forEach((e) => (e.value = ""));
  } else {
    errorMsgPar.innerHTML = errorMessage;
  }
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
                      <button id="edit-review-btn">수정</button>
                      <button id="delete-review-btn" data-key=${key}>삭제</button>
                    </div>
                  </div>
                  <div id="review-box-bottom">
                    <div id="review-content-box">
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
