import popup from "./utils/popup.js";

const popupCoockie = popup({
  popup: document.querySelector(".popup.cookie"),
  closePopupBtn: document.querySelector(".popup-close.cookie"),
});

popupCoockie.useCallback(
  document.querySelector(".accept-cookie"),
  popupCoockie.toRemovePopUp
);

popupCoockie.useCallback(
  document.querySelector(".decline-cookie"),
  popupCoockie.toRemovePopUp
);

popupCoockie.showPopUp(5000);
