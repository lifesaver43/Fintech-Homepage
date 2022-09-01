//Nav Toggle

let menu = document.querySelector(".menu")
let mainNav = document.querySelector("nav")
let exitBtn = document.querySelector(".exit")

menu.addEventListener("click", () => {
    mainNav.classList.add("disp")
})

exitBtn.addEventListener("click", () => {
    mainNav.classList.remove("disp")
})

