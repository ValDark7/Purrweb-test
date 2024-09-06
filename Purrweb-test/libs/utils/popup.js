export default function closePopup(props, isRemoveDomEl = false) {
  function showPopUp(delay) {
    const cookie = setTimeout(() => {
      props.popup.classList.add("active");
      clearInterval(cookie);
    }, delay);
  }

  function toRemovePopUp() {
    props.popup.remove();
  }

  function toRemoveClassActive() {
    props.popup.classList.remove("active");
  }

  function useCallback(domEl, callback) {
    domEl.addEventListener("click", callback);
  }

  useCallback(
    props.closePopupBtn,
    isRemoveDomEl ? toRemovePopUp : toRemoveClassActive
  );

  return {
    toRemovePopUp,
    toRemoveClassActive,
    useCallback,
    showPopUp,
    ...props,
  };
}
