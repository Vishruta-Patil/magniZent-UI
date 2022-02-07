const menuContainer = document.querySelector(".menu")

document.addEventListener("click", (e) => {
  if (e.target.id === "hamburger-menu" ) {
    menuContainer.classList.remove("toggle-menu-container")
    menuContainer.classList.add("display-block-container")
  } else {
    menuContainer.classList.add("toggle-menu-container")
    menuContainer.classList.remove("display-block-container")
  }
});