import PROJECT_DATA from "./project-data.js";

const burger = document.querySelector(".burger-menu");
const navigation = document.querySelector(".navigation");
const navLink = document.querySelectorAll(".nav-link");
const navbar = document.querySelector(".navbar");
const projectsContainer = document.querySelector(".projects-container");
const year = document.querySelector(".year");

burger.addEventListener("click", () => {
  navigation.style.display = navigation.style.display === 'none' ? 'flex' : 'none';
});

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    navigation.style.display = 'none';
  })
);

window.addEventListener('resize', () => {
  if (window.innerWidth >= 480) {
    navigation.style.display = 'flex';
  } else {
    navigation.style.display = 'none';
  }
})

let lastScrollTop = 0;
window.onscroll = () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-60px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
};

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

year.textContent = new Date().getFullYear();