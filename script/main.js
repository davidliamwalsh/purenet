const burgerMenu = document.querySelector("div[data-behavior='burgerMenu']")

function openNav() {
  burgerMenu.classList.add('is-active');
  document.getElementById("popUpNav").style.display = "block";
}

function closeNav() {
  burgerMenu.classList.remove('is-active');
  document.getElementById("popUpNav").style.display = "none";
}

burgerMenu.addEventListener('click', () => 
  burgerMenu.classList.contains('is-active') ? closeNav() : openNav()
)

closeNav();