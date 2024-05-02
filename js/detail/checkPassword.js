export function checkPassword(localStorageKey) {
  const review = JSON.parse(localStorage.getItem(localStorageKey));
  const submittedPassword = prompt("password"); // prompt는 비밀번호를 숨길 수가 없음
  return review.password === submittedPassword;
}
