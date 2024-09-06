import popup from "./utils/popup.js";

const openFormBtn = document.querySelectorAll(".openForm");

const popupForm = popup({
  popup: document.querySelector(".popup.form"),
  closePopupBtn: document.querySelector(".popup-close.form"),
});

const contactSuccsessBtn = document.querySelector(".primary.closeForm");

popupForm.useCallback(contactSuccsessBtn, popupForm.toRemoveClassActive);

contactSuccsessBtn.addEventListener("click", () => {
  document.querySelector(".popup.success").classList.add("active");
});

openFormBtn.forEach((btn) => {
  btn.addEventListener("click", popupForm.showPopUp);
});

popupForm.popup.addEventListener("mousedown", (e) => {
  if (e.target === popupForm.popup) {
    popupForm.toRemoveClassActive();
  }
});

const inputs = popupForm.popup.querySelectorAll("input[required]");
const btnSubmit = popupForm.popup.querySelector("button");

const name = popupForm.popup.querySelector("#name");
const email = popupForm.popup.querySelector("#email");
const phone = popupForm.popup.querySelector("#phone");

function validation() {
  let countOfValidInput = 0;
  inputs.forEach((input) => {
    input.oninput = () => {
      if (input.type === "tel") {
        input.value = textToTel(input.value);
      }

      if (input.value.length <= 0 || input.validity.valid) {
        input.parentElement.classList.add("error");
        countOfValidInput--;
      }

      if (input.value.length > 0) {
        input.parentElement.classList.remove("error");
        countOfValidInput++;
      }

      if (name.value != "" && email.value != "" && phone.value != "") {
        btnSubmit.disabled = false;
      } else {
        btnSubmit.disabled = true;
      }

      validation();
    };
  });
}

validation();

function textToTel(string) {
  return (
    "+" +
    string
      .replace(/\+|\-/gi, "")
      .replace(/(\d{1,1})?(\d{3})?(\d{3})?(\d{2})?(\d{2})/, (...args) => {
        const tel = [args[1], args[2], args[3], args[4], args[5]].filter(
          (item) => item != undefined
        );
        return tel.join("-");
      })
  );
}
// btnSubmit.addEventListener("click", validation);

// popupForm.showPopUp(5000);
