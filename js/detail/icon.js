export default function likeIcon(key) {
  document.onselectstart = function () {
    return false;
  };

  const likeWrapper = document.querySelector(`#like-wrapper-${key}`);
  const emptyHeart = document.querySelector(`#fa-regular-${key}`);
  const filledHeart = document.querySelector(`#fa-solid-${key}`);
  const likeCount = document.querySelector(`#like-count-${key}`);

  // default 값
  likeWrapper.style.display = "inline-block";
  likeWrapper.style.cursor = "pointer";
  emptyHeart.style.display = "inline-block";
  filledHeart.style.display = "none";
  likeCount.style.display = "inline-block";

  const review = JSON.parse(localStorage.getItem(key));

  // 좋아요 수 가져오기
  let num = 0;
  if (review) {
    num = review["likeCount"];
  }
  likeCount.innerHTML = `${num}`;

  // click 이벤트
  likeWrapper.addEventListener("click", clickEvent);

  // click 함수선언
  function clickEvent() {
    emptyHeart.style.display = "none";
    filledHeart.style.display = "inline-block";

    setTimeout(() => {
      likeCount.innerHTML = `${num}`;
      emptyHeart.style.display = "inline-block";
      filledHeart.style.display = "none";
    }, 200);

    // 로컬스토리지에서 해당 리뷰의 좋아요 수 올리기
    review["likeCount"] = num += 1;
    localStorage.setItem(key, JSON.stringify(review));
  }
}
