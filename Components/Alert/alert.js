const alertCloseBtn = document.querySelector(".alert-close-btn")

const alertCloseBtnHandler = () => {
    const parentElem = alertCloseBtn.parentNode;
    parentElem.remove()
}

alertCloseBtn.addEventListener('click', alertCloseBtnHandler)