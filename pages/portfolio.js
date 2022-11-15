function getPortfolio() {
  fetch(
    "https://cdn.contentful.com/spaces/uovi61fy74c1/environments/master/entries?access_token=3wIV7xO_Mx4Ir_LV9Y8pJab2npQtj5G7Ze0cbwar5Vs&&content_type=work"
  )
    .then((res) => res.json())
    .then((data) => loadPorfolio(data));
}

function loadPorfolio(data) {
  const myData = data.items;
  var myContainerEl = document.querySelector(".portfolio__conteiner-cards");
  var myTemplateEl = document.querySelector("#portfolio__template");

  for (let i = 0; i < myData.length; i++) {
    var clone = myTemplateEl.content.cloneNode(true);
    var titleEl = (clone.querySelector(".card__title").textContent =
      myData[i].fields.titulo);
    var descriptionEl = (clone.querySelector(".card__description").textContent =
      myData[i].fields.descripcion);
    var urlEl = (clone.querySelector(".card__link").href =
      myData[i].fields.url);
    var imgEl = (clone.querySelector(".card__img-preview").src =
      data.includes.Asset[0].fields.file.url);
    myContainerEl.appendChild(clone);
  }
}

function main() {
  const headerConteinerEl = document.querySelector(".conteiner__header");
  const footerConteinerEl = document.querySelector(".conteiner__footer");
  createHeader(headerConteinerEl);
  footerComponent(footerConteinerEl);
  getPortfolio();
}

main();
