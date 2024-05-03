function likeRender() {
  // let num = 0;
  const iconBtn = document.querySelector(".i_btn");
  const regularLike = document.querySelector(".fa-regular");
  const solidLike = document.querySelector(".fa-solid");
  // const counts = document.createElement("p");
  // iconBtn.after(counts);
  iconBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const changeTarget = e.target.className;
    console.log(changeTarget);
    if (changeTarget === "fa-regular fa-heart") {
      regularLike.style.display = "none";
      solidLike.style.display = "block";
      setTimeout(() => {
        solidLike.style.display = "none";
        regularLike.style.display = "block";
      }, 500);
    }
    // counts.textContent = `좋아요 : ${++num}`;
  });
}
export default likeRender;
