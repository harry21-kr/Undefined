import { reviewContainer } from "./domElements.js";

export const handleSubmit = (e) => {
  let review = {};
  let isValid = true;
  let errorMessage = "";
  const reviewInputs = document.querySelectorAll("input");
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
  review = { ...review, movieId: "/" };
  const key = Date.now();
  console.log(key);

  localStorage.setItem(key, JSON.stringify(review));
  addReview(review, key);
};

function addReview(review, key) {
  const reviewRow = createReviewElement(review, key);
  reviewContainer.appendChild(reviewRow);
}

export function createReviewElement(reviewContent, key) {
  console.log(reviewContent);
  const { username, review } = reviewContent;
  const reviewRow = document.createElement("li");
  reviewRow.setAttribute("class", "review__row");
  reviewRow.setAttribute("data-key", key);
  reviewRow.innerHTML = `${username}: ${review}
        <button class="delete__btn" data-key=${key}>❌</button>
        `;
  return reviewRow;
}
