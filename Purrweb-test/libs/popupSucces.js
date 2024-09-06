import popup from "./utils/popup.js";

const popupSuccess = popup({
  popup: document.querySelector(".popup.success"),
  closePopupBtn: document.querySelector(".popup-close.successBtn"),
});

popupSuccess.useCallback(
  document.querySelector(".primary.close-modalBtn"),
  popupSuccess.toRemoveClassActive
);
