document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.querySelector(".signupForm");
  if (signupForm) {
    const inputs = signupForm.querySelectorAll("input");
    const signupButton = signupForm.querySelector('button[type="submit"]');

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        const phoneOrEmail = signupForm.querySelector(".phoneOrEmail").value;
        const password = signupForm.querySelector(".password").value;

        if (validateEmail(phoneOrEmail) && password.length >= 7) {
          signupButton.disabled = false;
          signupButton.classList.remove("disabled");
          signupButton.classList.add("enabled");
        } else {
          signupButton.disabled = true;
          signupButton.classList.remove("enabled");
          signupButton.classList.add("disabled");
        }
      });
    });

    signupButton.addEventListener("click", function (event) {
      event.preventDefault();
      alert("가입이 완료되었습니다.");
    });
  }
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
