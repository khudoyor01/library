const signup = document.querySelector(".signup");
const modalEl = document.querySelector(".modal");
const closeEl = document.querySelector(".close");
const navbarEl = document.querySelector(".navbar");
signup.addEventListener("click", () => {
  modalEl.style.opacity = "1";
  modalEl.style.visibility = "visible";
  navbarEl.style.display = "none";
});
closeEl.addEventListener("click", () => {
  modalEl.style.opacity = "0";
  modalEl.style.visibility = "hidden";
  navbarEl.style.display = "flex";
});

const navbarItems = document.querySelectorAll(".navbar__items");
const text = document.querySelectorAll(".text");
for (let i = 0; i < navbarItems.length; i++) {
  navbarItems[i].addEventListener("click", () => {
    for (let x = 0; x < text.length; x++) {
      text[x].style.display = "none";
      navbarItems[x].style.background = "#fff";
      navbarItems[x].style.color = "#000";
    }
    text[i].style.display = "block";
    navbarItems[i].style.background = "#000";
    navbarItems[i].style.color = "#fff";
  });
}
