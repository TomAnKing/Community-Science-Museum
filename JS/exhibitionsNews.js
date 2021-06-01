import { exhibitions } from "./exhibitions.js";

const newsGrid = document.querySelector(".newsGrid");

function buildHTML() {
  for (let i = 0; i < exhibitions.length; i++) {
    newsGrid.innerHTML += `<div class="newsContent">
        <a href="exhibition.html?id=${exhibitions[i].id}">
          <img
            src="${exhibitions[i].image}"
            alt="Astronaut floating in deep dark space"
          />
          <p>${exhibitions[i].header}</p>
        </a>
      </div>`;
  }
}

buildHTML();
