import { exhibitions } from "./exhibitions.js";

const main = document.querySelector("main");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const exhibition = exhibitions.find((ex) => {
  return ex.id === parseInt(id);
});

function buildHTML() {
  document.title = `${exhibition.header}`;
  main.innerHTML = `<div class="newsImage">
    <img
      src="${exhibition.image}"
      alt="Medicine going through different tools and equipment to then being inserted to a brain"
    />
  </div>
  <h1>${exhibition.header}</h1>
  <p>
    ${exhibition.body}
  </p>
  `;
}

buildHTML();
