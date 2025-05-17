const piedraImg = require("url:../../../public/assets/piedra.svg");
const papelImg = require("url:../../../public/assets/papel.svg");
const tijeraImg = require("url:../../../public/assets/tijera.svg");

class HandSelect extends HTMLElement {
  shadow = this.attachShadow({ mode: "open" });

  constructor() {
    super();
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
    <style>
        .container {
            position: relative;
            width: 300px; /* Ajusta según diseño */
            height: 150px; /* Menor que la imagen para ocultar parte inferior */
            overflow: hidden; /* Oculta la parte baja de las imágenes */
            display: flex;
            justify-content: center;
            gap: 10px;
        }
        img {
            width: 100px;
            height: 131px;
            cursor: pointer;
            transition: transform 0.3s;
            transform: translateY(50px); /* Inicia oculta debajo */
        }
        img.active {
            transform: translateY(20px); /* Se levanta completamente */
        }
    </style>
    <div class="container">
      <img src="${piedraImg}" alt="Piedra" class="hand" data-type="piedra">
      <img src="${papelImg}" alt="Papel" class="hand" data-type="papel">
      <img src="${tijeraImg}" alt="Tijera" class="hand" data-type="tijera">
    </div>
    `;

    const hands = this.shadow.querySelectorAll(".hand");
    hands.forEach((hand) => {
      hand.addEventListener("click", () => {
        hands.forEach((h) => h.classList.remove("active"));
        hand.classList.add("active");
      });
    });
  }
}

customElements.define("hand-select", HandSelect);
