const btnLogin = document.querySelectorAll(".btnlogin");
const btnSignup = document.querySelectorAll(".btnsignup");
const home = document.querySelector(".container-1");
const login = document.querySelector(".container-2");
const signup = document.querySelector(".container-3");
const openLogin = function () {
  home.classList.add("hidden");
  login.classList.remove("hidden");
  signup.classList.add("hidden");
};
const openSignup = function () {
  home.classList.add("hidden");
  signup.classList.remove("hidden");
  login.classList.add("hidden");
};
for (let i = 0; i < btnLogin.length; i++)
  btnLogin[i].addEventListener("click", openLogin);
for (let i = 0; i < btnSignup.length; i++)
  btnSignup[i].addEventListener("click", openSignup);
document.querySelector(".forgot").addEventListener("click", function () {
  document.querySelector(".container").classList.add("hidden");
  document.querySelector(".container-forgot").classList.remove("hidden");
});
document.querySelector(".cancel").addEventListener("click", function () {
  document.querySelector(".container").classList.remove("hidden");
  document.querySelector(".container-forgot").classList.add("hidden");
});
