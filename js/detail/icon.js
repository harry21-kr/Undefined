export default function likeIcon(key) {
  document.onselectstart = function () {
    return false;
  };

  const icon = document.querySelector(`#fa-regular${key}`);
  const iconSolid = document.querySelector(`#fa-solid${key}`);
  const select = document.getElementById(`${key}`);
  const count = document.getElementById(`count${key}`);

  // default 값
  select.style.display = "inline-block";
  select.style.cursor = "pointer";
  iconSolid.style.display = "none";
  icon.style.display = "inline-block";
  count.style.display = "inline-block";

  // 카운트
  let num = 0;
  count.textContent = `좋아요 : ${num}`;

  // click 이벤트
  select.addEventListener("click", clickEvent);

  // click 함수선언
  function clickEvent() {
    iconSolid.style.display = "inline-block";
    icon.style.display = "none";
    setTimeout(() => {
      iconSolid.style.display = "none";
      icon.style.display = "inline-block";
    }, 200);
    num += 1;
    count.textContent = `좋아요 : ${num}`;
  }
}

// likeIcon();
