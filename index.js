const menuIcon = document.getElementById("menu-icon")
const menuOptions = document.getElementById("menu-options")
const menu = document.getElementById("menu")
menuIcon.addEventListener("click", ()=>{
    if (menu.style.left === "0%") {
        menu.style.left = "-100%";
    }else{
        menu.style.left = "0%";
    }
})