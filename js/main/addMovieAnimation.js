export default function addMovieAnimation(wrapper, nextBtn, prevBtn) {
  let x = 0;
  let animationCount = 0;

  prevBtn.addEventListener("click", () => {
    if (animationCount) {
      x += 1212;
      --animationCount;
      const keyframes = [
        { filter: "blur(0px)" },
        { filter: "blur(3px)" },
        { filter: "blur(0px)", transform: `translate(${x}px , 0)` },
      ];
      const options = {
        duration: 500,
        easing: "ease-in-out",
        fill: "forwards",
      };
      wrapper.animate(keyframes, options);
    }
  });

  nextBtn.addEventListener("click", () => {
    if (animationCount < 3) {
      x -= 1212;
      ++animationCount;
      const keyframes = [
        { filter: "blur(0px)" },
        { filter: "blur(3px)" },
        { filter: "blur(0px)", transform: `translate(${x}px , 0)` },
      ];
      const options = {
        duration: 500,
        easing: "ease-in-out",
        fill: "forwards",
      };
      wrapper.animate(keyframes, options);
    }
  });
}
