import { exhibitions } from "./exhibitions.js";

const newsGrid = document.querySelector(".newsGrid");

const exhibitionsGrid = document.querySelector(".exhibitionsGrid");

function buildNews() {
  for (let i = 0; i < 3; i++) {
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

buildNews();

function buildExhibitions() {
  for (let i = 3; i < exhibitions.length; i++) {
    exhibitionsGrid.innerHTML += ` <div class="exhibitionContent">
        <a href="exhibition.html?id=${exhibitions[i].id}">
          <img
            src="${exhibitions[i].image}"
            alt="Medicine going through different tools and equipment to then being inserted to a brain"
          />
          <p>${exhibitions[i].header}</p>
        </a>
      </div>`;
  }
}

buildExhibitions();
