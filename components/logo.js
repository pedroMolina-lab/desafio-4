function createLogo(container) {
  const logoEl = document.createElement("div");
  logoEl.innerHTML = `<a href="./index.html"> <img src="./imagenes/logo.png" alt="logo" class="logo"></a>`;
  container.appendChild(logoEl);
}
