function getWelcome() {
  fetch(
    "https://cdn.contentful.com/spaces/uovi61fy74c1/environments/master/entries?access_token=3wIV7xO_Mx4Ir_LV9Y8pJab2npQtj5G7Ze0cbwar5Vs&&content_type=header"
  )
    .then((res) => res.json())
    .then((data) => loadHeader(data));
}

function loadHeader(data) {
  const headerTemplate = document.querySelector("#bienvenida__temp");
  const conteinerEl = document.querySelector(".bienvenida");
  var clone = headerTemplate.content.cloneNode(true);
  var titleEl = (clone.querySelector(".text__main-title").textContent =
    data.items[0].fields.titulo);
  var SubtitleEl = (clone.querySelector(".text__sub-title").textContent =
    data.items[0].fields.subtitulo);
  conteinerEl.appendChild(clone);
}

function getData() {
  fetch(
    "https://cdn.contentful.com/spaces/uovi61fy74c1/environments/master/entries?access_token=3wIV7xO_Mx4Ir_LV9Y8pJab2npQtj5G7Ze0cbwar5Vs&&content_type=queHago"
  )
    .then((res) => res.json())
    .then((data) => loadData(data));
}

function loadData(data) {
  const aboutMeData = document.querySelector("#about-me__temp");
  const conteinerEl = document.querySelector(".about-me");
  var clone = aboutMeData.content.cloneNode(true);
  var titleEl = (clone.querySelector(".text__sub-title").textContent =
    data.items[0].fields.titulo);
  var subtitleEl = (clone.querySelector(".text__pharagraph").textContent =
    data.items[0].fields.description);
  var imagenEl = (clone.querySelector(".about-me__img").src =
    data.includes.Asset[0].fields.file.url);
  conteinerEl.appendChild(clone);
}

function getServicios() {
  fetch(
    "https://cdn.contentful.com/spaces/uovi61fy74c1/environments/master/entries?access_token=3wIV7xO_Mx4Ir_LV9Y8pJab2npQtj5G7Ze0cbwar5Vs&&content_type=cards"
  )
    .then((res) => res.json())
    .then((data) => loadServicios(data));
}

function loadServicios(data) {
  const myData = data.items;
  var myContainer = document.querySelector(".my-services__cards-conteiner");
  var myTemplate = document.querySelector("#my-services__temp");
  
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
  const headerConteiner = document.querySelector(".bienvenida");
  const formConteiner = document.querySelector(".contact-me");
  const footerConteiner = document.querySelector(".section-footer");
  createHeader(headerConteiner);
  contactComponent(formConteiner);
  footerComponent(footerConteiner);
  getWelcome();
  getData();
  getServicios();


}

main();
