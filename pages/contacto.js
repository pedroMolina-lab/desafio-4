function main() {
  const headerConteiner = document.querySelector(".bienvenida");
  const formConteiner = document.querySelector(".contact-me");
  const footerConteiner = document.querySelector(".section-footer");

  contactComponent(formConteiner);
  createHeader(headerConteiner);
  footerComponent(footerConteiner);
}
main();
