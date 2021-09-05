const MAIN = (function () {
  const inputForm = document.querySelector(".input-form");
  const email = document.querySelector(".email-input");
  const country = document.querySelector(".country-input");
  const zip = document.querySelector(".zip-input");
  const password = document.querySelector(".password");
  const passConf = document.querySelector(".password-conf");
  const submitBtn = document.querySelector(".submitBtn");

  const validityTester = function (e) {
    if (e.target.validity.typeMismatch) {
      switch (e.target) {
        case email:
          email.setCustomValidity("Please enter an email address!");
        case country:
          country.setCustomValidity("Please enter a valid Country!");
        case zip:
          zip.setCustomValidity("Please enter a valid Zip code!");
        case password:
          break;
      }
    } else {
      e.target.setCustomValidity("");
    }
  };

  inputForm.addEventListener("input", validityTester);
  submitBtn.addEventListener("click", (e) => {
    if (password.validity.patternMismatch) {
      password.setCustomValidity(
        "1 Number, 1 Uppercase letter, 1 Lowercase letter, 6 characters long, only alpha and numeric numbers"
      );
    } else {
      password.setCustomValidity("");
    }
    if (passConf.value != password.value) {
      passConf.classList.toggle("badPass");
      passConf.setCustomValidity("Passwords must be the same");
    } else if (password.value != "") {
      passConf.classList.remove("badPass");
      passConf.classList.toggle("validPass");
    }
  });

  return {};
})();
