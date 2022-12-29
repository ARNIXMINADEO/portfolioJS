const menuIcon = document.getElementById("menu-icon")
const menuOptions = document.getElementById("menu-options")
const menu = document.getElementById("menu")

//Menu Desplegable inicio
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
//Skills
let skillBtnContent = document.getElementById("btn-skill-content")
let skillButton = document.getElementById("btn-skills")
skillButton.addEventListener("click", (e)=>{
    if(skillButton.textContent == "See more"){
        skillButton.textContent = "See less";
        skillBtnContent.style.flexDirection = "column-reverse";

    }else{
        skillButton.textContent = "See more";
        skillBtnContent.style.flexDirection = "column";
    }
    
})

let skillsList = []
let skillsContent = document.getElementById("skills-content")
class Skills{
    constructor(icon){
        this.icon = icon;
    }
}

//Skills creation
let html = new Skills("/assets/html.svg");
skillsList.push(html);
let css = new Skills("/assets/css.svg");
skillsList.push(css);
let js = new Skills("/assets/js.svg");
skillsList.push(js);
let nodejs = new Skills("/assets/nodejs.svg");
skillsList.push(nodejs);
let git = new Skills("/assets/git.svg");
skillsList.push(git);
let github = new Skills("/assets/github.svg");
skillsList.push(github);
let bootstrap = new Skills("/assets/bootstrap.svg");
skillsList.push(bootstrap);
let react = new Skills("/assets/react.svg");
skillsList.push(react);

skillsList.forEach(e => {
    let skillCard = `
    <div class="skill-card">
        <img src="${e.icon}" alt="" class="card-img">
    </div>
    `
    skillsContent.innerHTML += skillCard; 
});