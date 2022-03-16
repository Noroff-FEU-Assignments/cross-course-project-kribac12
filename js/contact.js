const form = document.querySelector("#contactForm");

const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const contactButton = document.querySelector("#contactButton");

function validateForm(event) {
  event.preventDefault();

  if (checkLength(fullName.value, 3) === true) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }

  if (checkLength(subject.value, 8) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }
  if (checkLength(message.value, 30) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  form.reset();
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /^[A-Za-z0-9!#$%&'"“”+/\=?^_`{}|~,():;<>[]\-.]*@[A-Za-z0-9-]*\.[A-Za-z]+(?:\.[A-Za-z]+)?(?:\.[A-Za-z]+)?$/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
