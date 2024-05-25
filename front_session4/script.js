document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const signupButton = document.getElementById("signupButton");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateInputs = () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = password.length >= 7;

    signupButton.disabled = !(isEmailValid && isPasswordValid);
  };

  emailInput.addEventListener("input", validateInputs);
  passwordInput.addEventListener("input", validateInputs);

  document.getElementById("signupForm").addEventListener("submit", (e) => {
    e.preventDefault();
    if (!signupButton.disabled) {
      alert("회원가입 성공!");
    }
  });
});
