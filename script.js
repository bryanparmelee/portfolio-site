import PROJECT_DATA from "./project-data.js";

const burger = document.querySelector(".burger-menu");
const navigation = document.querySelector(".navigation");
const mobileNav = document.querySelector(".mobile-nav");
const navLink = document.querySelectorAll(".nav-link");
const navbar = document.querySelector(".navbar");
const projectsContainer = document.querySelector(".projects-container");

const year = document.querySelector(".year");





burger.addEventListener("click", () => {
  mobileNav.classList.toggle("hide");
});

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    mobileNav.classList.toggle("hide");
  })
);


const showProjects = () => {
  let html = '';
  PROJECT_DATA.map((project) => {
    const { 
      id,
      title, 
      image, 
      liveUrl, 
      codeUrl, 
      tech, 
      description 
    } = project;
   
    html += "<div class='project-card' id=" + id + ">";
    html += "<h1 class='proj-title'>";
    html += "<a href='" + liveUrl + "' target='blank'>";
    html += title + "</a></h1>";
    html += "<p class='project-desciption'>" + description + "</p>";
    html += "<p class='alt-text'>" + tech + "</p>";
    html += "<div class='proj-btns'>";
    html += "<a href='" + liveUrl + "' target='blank'><div class='proj-btn'>Live Site</div></a>";
    html += "<a href='" + codeUrl + "' target='blank'><div class='proj-btn'>GitHub </div></a>";
    html += "</div>";
    html += "</div>";
  })
  projectsContainer.innerHTML = html;
}

showProjects();

const projectCards = document.querySelectorAll(".project-card");
const skillsContainer = document.querySelector(".skills-container");

function checkLocation() {
  let height = window.innerHeight;
  let skillsRect = skillsContainer.getBoundingClientRect();
  let skillsHeight = skillsRect.y;
  if(height / 2 > skillsHeight) {
    skillsContainer.classList.add("show-skills");
  }
  if (0 - height > skillsHeight || height < skillsHeight) {
    skillsContainer.classList.remove("show-skills");
  }
  
  projectCards.forEach((card, i) => {
    let rect = card.getBoundingClientRect();
    let cardHeight = rect.y;
    if (height / 2 > cardHeight) {      
      card.classList.add("show-proj");
    } 
    if (0 - height > cardHeight || height < cardHeight) {
      card.classList.remove("show-proj");
    }
  });
   

}

checkLocation();

window.addEventListener('scroll', () => checkLocation());

year.textContent = new Date().getFullYear();