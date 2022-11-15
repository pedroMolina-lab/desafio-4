function formEnviar(formEl) {
  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(formEl);
    const formEntries = Object.fromEntries(formData.entries());
    console.log(formEntries);
    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        to: "pedri_molina@hotmail.com",
        message: `Nombre: ${formEntries.name}, Email: ${formEntries.email}, Mensaje: ${formEntries.message}`,
      }),
    }).then((data) => data.json());
    formEl.reset();
  });
}

function contactComponent(conteiner) {
  const formularioEmail = document.createElement("div");

  formularioEmail.innerHTML = `<section class="contacto">
    <h2 class="contacto__title">Contacto</h2>
    <form class="contacto__form">
      <label>
        <h3 class="contacto__label">Nombre</h3>
        <input class="contacto__input" type="text" />
      </label>
      <label>
        <h3 class="contacto__label">Email</h3>
        <input class="contacto__input" type="text" />
      </label>
      <label>
        <h3 class="contacto__label">Mensaje</h3>   
        <textarea class="contacto__input"></textarea>
      </label>
      <div class="contacto__submit-cont">
        <button class="contacto__submit-button">Enviar</button>
      </div>
    </form>
  </section>`;

  formularioEmail.className = ("contact-email");
  const formEl = formularioEmail.querySelector(".contacto__form");
  formEnviar(formEl);
  conteiner.appendChild(formularioEmail);
}
