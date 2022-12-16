const menu = document.getElementById("menu-icon")
const menu_options = document.getElementById("menu-options")


menu.addEventListener("click", ()=>{
    if (menu_options.style.transform == "translateX(-50vw)")
     {
        menu_options.style.transform == 0;
    }else{
        menu_options.style.transform == "translateX(-50vw)"
    }
})