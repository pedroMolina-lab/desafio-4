function getServicios() {
  fetch(
    "https://cdn.contentful.com/spaces/uovi61fy74c1/environments/master/entries?access_token=3wIV7xO_Mx4Ir_LV9Y8pJab2npQtj5G7Ze0cbwar5Vs&&content_type=cards"
  )
    .then((res) => res.json())
    .then((data) => loadServicios(data));
}

function loadServicios(data) {
  const myData = data.items;
  var myContainer = document.querySelector(".services__conteiner-cards");
  var myTemplate = document.querySelector("#services__temp");
  
  for (let i = 0; i < myData.length; i++) {
    var clone = myTemplate.content.cloneNode(true);
    var titleEl = (clone.querySelector(".text__card-title").textContent =
      myData[i].fields.titulo);
    var descriptionEl = (clone.querySelector(".text__pharagraph").textContent =
      myData[i].fields.description);
    var imagenEl = (clone.querySelector(".card__img").src =
      data.includes.Asset[0].fields.file.url);

    myContainer.appendChild(clone);
  }
}

function main() {
  const headerConteinerEl = document.querySelector(".conteiner__header");
  const footerConteinerEl = document.querySelector(".conteiner__footer");
  footerComponent(footerConteinerEl);
  createHeader(headerConteinerEl);
  getServicios();
}

main();
