const menuIcon = document.getElementById("menu-icon")
const menuOptions = document.getElementById("menu-options")
const menu = document.getElementById("menu")
menuIcon.addEventListener("click", ()=>{
    if (menu.style.left === "0%") {
        menu.style.left = "-100%";
        menuIcon.src = "/assets/menu2.svg";
        menuIcon.style.transform = "rotateZ(0)"
    }else{
        menu.style.left = "0%";
        menuIcon.src = "/assets/letterx_83737.svg";
        menuIcon.style.transform = "rotateZ(180deg)"
    }
})