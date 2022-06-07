// Get the projects
import projects from "./projects.js";

// Grab the projects container
let projectContainer = document.querySelector(".projects");
let projectDiv = "";

// Grab the the project background image
let projectBackgroundImage = document.querySelector(".project-bg-img");

// Grab the project overlay container
let projectOverlay = document.querySelector(".project-overlay");

// Prepare the projects page
projects.forEach((project, i) => {
  projectDiv += `
    <div class="project-bg-img" id=project_${i}>
    <div class="project-overlay">
    <h1 class="project-title">${project.name}</h1>
    <p class="project-summary">
     ${project.description}
    </p>
    <a href="${project.url}" class="border-secondary">Visit Website</a>
  </div>
  </div>
  `;
});

// Insert the project to the DOM
projectContainer.innerHTML = projectDiv;

// Attach the projectBackgroundImage with an hover event
console.log(projectBackgroundImage);
projectBackgroundImage.addEventListener("click", () => {
  alert("u");
  projectOverlay.classList.add("make-visible");
});