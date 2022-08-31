

const btnToggle = document.querySelector(".header-top--toggle")
const btnClose = document.querySelector(".header-top--close")
const menuToggle = document.querySelector(".header-top--menu")
btnToggle.addEventListener("click", ()=>{
  menuToggle.classList.remove("menu-NotActive")
  menuToggle.style = " transition: all 0.3s linear;"
})
btnClose.addEventListener("click", ()=>{
  menuToggle.classList.add("menu-NotActive")
  menuToggle.style = " transition: all 0.3s linear;"
})

