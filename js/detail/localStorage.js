const reviewForm = document.querySelector(".review__form");
const reviewContainer = document.querySelector(".review__container");

const handleSubmit = (e) => {
  let review = {};
  const reviewInputs = document.querySelectorAll("input");
  e.preventDefault();
  reviewInputs.forEach((input) => {
    review[input.id] = input.value;
  });
  review = { ...review, movieId: "/" };
  const id = Date.now();

  localStorage.setItem(id, JSON.stringify(review));
  console.log("asd");
  displayReview();
};

const handleDelete = (e) => {
  if (e.target.className === "delete__btn") {
    const localStorageKey = e.target.dataset.key;
    localStorage.removeItem(localStorageKey);
    const toBeDeleted = document.querySelector(
      `.review__row[data-key="${localStorageKey}"]`
    );
    toBeDeleted.remove();
  }
};

const displayReview = () => {
  reviewContainer.innerHTML = "";
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    keys.push(localStorage.key(i));
  }
  const sortedKeys = keys.map(Number).sort((a, b) => a - b);
  sortedKeys.forEach((key) => {
    {
      const reviewContent = JSON.parse(localStorage.getItem(key));
      const { username, review } = reviewContent;
      const reviewRow = document.createElement("li");
      reviewRow.setAttribute("class", "review__row");
      reviewRow.setAttribute("data-key", key);
      reviewRow.innerHTML = `${username}: ${review}
        <button class="delete__btn" data-key=${key}>❌</button>
        `;
      reviewContainer.appendChild(reviewRow);
    }
  });
};

reviewForm.addEventListener("submit", handleSubmit);
reviewContainer.addEventListener("click", handleDelete);

displayReview();

// 유효성 검사
// localStorage 받아올때 순서 정렬하기
// 수정기능
