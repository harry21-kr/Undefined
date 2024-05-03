import {
  passwordErrorModal,
  passwordModal,
  passwordModalCancelBtn,
  passwordModalInput,
} from "./domElements.js";

export function checkPassword(localStorageKey) {
  return new Promise((resolve, reject) => {
    openModal();

    const handlePasswordSubmit = (e) => {
      e.preventDefault();
      const submittedPassword = passwordModalInput.value;
      try {
        const review = JSON.parse(localStorage.getItem(localStorageKey));
        passwordModal.removeEventListener("submit", handlePasswordSubmit);
        closeModal();

        resolve(review.password === submittedPassword);
      } catch (e) {
        passwordModal.removeEventListener("submit", handlePasswordSubmit);
        closeModal();
        reject(new Error(e));
      }
    };
    const handleOutsideClick = (e) => {
      if (e.target === passwordModal || e.target === passwordModalCancelBtn) {
        closeModal();
      }
    };

    passwordModal.addEventListener("submit", handlePasswordSubmit);
    passwordModal.addEventListener("click", handleOutsideClick);
  });
}
function closeModal() {
  passwordModal.close();
}
function openModal() {
  passwordModalInput.value = "";
  passwordModal.showModal();
}

passwordErrorModal.addEventListener("click", () => passwordErrorModal.close());
