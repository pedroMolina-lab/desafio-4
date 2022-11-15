function footerComponent(conteiner) {
  const footerEl = document.createElement("div");
 
  footerEl.innerHTML = `<footer class="footer">
    <div class="footer__conteiner">
      <div class="footer__conteiner-logo"></div>
      <div class="footer__redes-conteiner">
        <a class="link__redes" href="https://www.instagram.com/pittmoli/">
          <img
            class="footer__redes-conteiner-img"
            src="./imagenes/instagram.png"
            alt="logo-instagram"
          />
          <span class="link__logo">Instagram</span>
        </a>
        <a class="link__redes" href="">
          <img
            class="footer__redes-conteiner-img"
            src="./imagenes/linkedin.png"
            alt="logo-linkedin"
          />
          <span class="link__logo">Linkedin</span>
        </a>
        <a class="link__redes" href="https://github.com/pedroMolina-lab">
          <img
            class="footer__redes-conteiner-img"
            src="imagenes/github.png"
            alt="logo-gitHub"
          />
          <span class="link__logo">github</span>
        </a>
      </div>
    </div>
  </footer>`;

  const logoConteiner = footerEl.querySelector(".footer__conteiner-logo")
  createLogo(logoConteiner)
  conteiner.appendChild(footerEl)
}
