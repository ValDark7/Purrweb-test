// function closePopup({ popup, closePopupBtn }) {
//   function showPopUp(delay) {
//     const cookie = setTimeout(() => {
//       popup.classList.add("active");
//       clearInterval(cookie);
//     }, delay);
//   }

//   function handleRemovePopUp() {
//     popup.classList.remove("active");
//   }

//   function useCallback(domEl, callback) {
//     domEl.addEventListener("click", callback);
//   }

//   useCallback(closePopupBtn, handleRemovePopUp);
//   return { handleRemovePopUp, useCallback, showPopUp };
// }

// const popupCoockie = closePopup({
//   popup: document.querySelector(".popup.cookie"),
//   closePopupBtn: document.querySelector(".popup-close.cookie"),
// });

// popupCoockie.showPopUp(5000);
// popupCoockie.useCallback(
//   document.querySelector(".accept-cookie"),
//   popupCoockie.handleRemovePopUp
// );

// popupCoockie.useCallback(
//   document.querySelector(".decline-cookie"),
//   popupCoockie.handleRemovePopUp
// );

// const popupForm = closePopup({
//   popup: document.querySelector(".popup.form"),
//   closePopupBtn: document.querySelector(".popup-close.form"),
// });

// // popupCoockie.handleRemovePopUp();
// // popupForm.handleRemovePopUp();
