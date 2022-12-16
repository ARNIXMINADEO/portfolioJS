const menuIcon = document.getElementById("menu-icon")
const menuOptions = document.getElementById("menu-options")
const menu = document.getElementById("menu")
menuIcon.addEventListener("click", ()=>{
    menuOptions.classList.toggle("__active");
})