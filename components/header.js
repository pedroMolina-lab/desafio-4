function createHeader(container) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `

  <header class="header">
  <div class="header__main-conteiner">
    <div class="header__logo-conteiner"></div>
    <div class="header__nav-conteiner">
      <nav class="header__nav">
        <a class="text__link" href="./portfolio.html">Portfolio</a>
        <a class="text__link" href="./servicios.html">Servicios</a>
        <a class="text__link" href="./contacto.html">Contacto</a>
      </nav>
    </div>
    <img class="menu-mobile" src="/imagenes/menu.png" alt="menu-mobile" />
    <div class="menu-mobile__conteiner">
      <img
        class="menu-mobile__back"
        src="./imagenes/volver-flecha.png"
        alt="back"
      />
      <nav class="menu-mobile__nav">
        <a class="text__link" href="./portfolio.html">Portfolio</a>
        <a class="text__link" href="./servicios.html">Servicios</a>
        <a class="text__link" href="./contacto.html">Contacto</a>
      </nav>
    </div>
  </div>
</header>;`

  const logoConteiner = componentEl.querySelector(".header__logo-conteiner");
  const openMenu = componentEl.querySelector(".menu-mobile");
  const cerrarMenu = componentEl.querySelector(".menu-mobile__back");
  const menuEl = componentEl.querySelector(".menu-mobile__conteiner");
  createLogo(logoConteiner);
  openMenu.addEventListener("click", () => {
    menuEl.style.display = "grid";
  });
  cerrarMenu.addEventListener("click", () => {
    menuEl.style.display = "";
  });
  container.appendChild(componentEl);
}
