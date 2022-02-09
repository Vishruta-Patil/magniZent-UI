const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

const nameInput = document.querySelector("#name-form-input");
const emailInput = document.querySelector("#email-input");
const termsCheckbox = document.querySelector("#terms-checkbox");

const nameErrorMsg = document.querySelector(".name-err-msg");
const emailErrorMsg = document.querySelector(".email-err-msg");
const checkboxErrorMsg = document.querySelector(".checkbox-err-msg");

const ErrorMsgHandler = (input, msg) => {
  if (input === "nameInput") {
    nameErrorMsg.innerText = msg
  }
  if (input === "emailInput") {
    emailErrorMsg.innerText = msg
  }

  if (input === "termsCheckbox") {
    checkboxErrorMsg.innerText = msg
  }
};

const checkInputs = () => {
  const nameInputvalue = nameInput.value;
  const emailInputvalue = emailInput.value;
  const termsCheckboxValue = termsCheckbox.checked;

  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (nameInputvalue === "") {
    ErrorMsgHandler("nameInput", "Enter Your name");
  }

  if (emailInputvalue === "") {
    ErrorMsgHandler("emailInput", "Enter Your email id");
  } 
  else if (!emailInputvalue.match(mailformat)) {
    ErrorMsgHandler("emailInput", "Email is not correct. Enter correct email id");
  } 
 

  if (!termsCheckboxValue) {
    ErrorMsgHandler(
      "termsCheckbox",
      "You must agree terms and conditions before submitting"
    );
  }
};


btn.addEventListener("click", () => {
  checkInputs();
});
