const dismissBtn = document.querySelector(".dismiss-btn")
const dismissBtnContainer = document.querySelector(".dismiss-btn-container")


dismissBtn.addEventListener('click', () => {
    dismissBtnContainer.style.display = "none"
    const parentElem = dismissBtnContainer.parentNode;
    parentElem.innerHTML = "<p style='color:#0097A7; text-align:center'>Card is gone now!</p>"
})