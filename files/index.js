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
    constructor(id,icon,name,level,type,impact){
        this.id = id;
        this.icon = icon;
        this.name = name;
        this.level = level;
        this.type = type;
        this.impact = impact;
    }
}

//Skills creation
let html = new Skills("HTML","/assets/html.svg","Html","6","Structure","7");
let css = new Skills("CSS","/assets/css.svg", "Css", "5", "Style", "8");
let js = new Skills("JS","/assets/js.svg","JavaScript","6", "Funtionality", "5");
let nodejs = new Skills("NODEJS","/assets/nodejs.svg","Node.JS","4","Funtionality", "6");
let git = new Skills("GIT","/assets/git.svg","Git","5","Versions Control","7");
let github = new Skills("GITHUB","/assets/github.svg","Github","5","Remote","6");
let bootstrap = new Skills("BOOTSTRAP","/assets/bootstrap.svg","Bootstrap","5","Style/Structure");
let react = new Skills("REACT","/assets/react.svg","React","0","Style/Funtionality", "7");

skillsList.push(html,css,js,nodejs,git,github,bootstrap,react)

skillsList.forEach(e => {
    let skillCard = document.createElement("div");
    let img = document.createElement("img")
    skillCard.classList = "skill-card";
    skillCard.id = e.id;
    skillCard.style.position = "relative"
    img.classList = "card-img";
    img.id = e.id;
    img.src = e.icon
    skillsContent.appendChild(skillCard);
    skillCard.appendChild(img); 
    /*`
    <div class="skill-card" id="${e.id}">
        <img src="${e.icon}" id="${e.id}" alt="" class="card-img">
    </div>
    `*/
    skillCard.addEventListener("click", (e)=>{
        let card = document.createElement("div");
        card.classList = "card-hover"
        if(card.style.opacity === "0"){
            e.target.appendChild(card)
            card.style.opacity = "1";
            console.log(skillCard.children)
        }else{
            skillCard.removeChild(card)
            card.style.opacity = "0";
        }
        
    })
});
