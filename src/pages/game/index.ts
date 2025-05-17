import { state, Juego, Jugada } from "../../state";

const piedraImg = require("url:../../../public/assets/piedra.svg");
const papelImg = require("url:../../../public/assets/papel.svg");
const tijeraImg = require("url:../../../public/assets/tijera.svg");

export function initGame(params) {
  const gamePage = document.createElement("div");
  const shadow = gamePage.attachShadow({ mode: "open" });

  shadow.innerHTML = `
    <style>
      .contenedor {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
        text-align: center;
        width: 100vw;
        height: 100vh;
      }
      .counter-container {
        position: relative;
        width: 240px;
        height: 240px;
      }
      .counter {
        font-size: 50px;
        font-weight: bold;
        color: #000000;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      svg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      circle {
        fill: none;
        stroke: #000000;
        stroke-width: 10;
        stroke-dasharray: 283;
        stroke-dashoffset: 283;
        transition: stroke-dashoffset 1s linear;
      }
    </style>
    <div class="contenedor">
      <div class="counter-container">
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45"></circle>
        </svg>
        <div class="counter">3</div>
      </div>
      <hand-select></hand-select>
    </div>
  `;

  const counterElement = shadow.querySelector(".counter");
  const circleElement = shadow.querySelector("circle");
  const handSelectElement = shadow.querySelector("hand-select");
  let counter = 3;
  const totalDash = 283;

  // 🔹 Función de actualización con sincronización
  const updateUI = () => {
    if (circleElement) {
      const progress = (counter / 3) * totalDash;
      circleElement.style.strokeDashoffset = progress.toString();
    }

    // Espera 900ms antes de actualizar el número para sincronizar con la animación
    setTimeout(() => {
      if (counterElement) {
        counterElement.textContent = counter.toString();
      }
    }, 900);
  };

  updateUI(); // ✅ Ejecuta la primera actualización antes del intervalo

  // 🔹 **Iniciar el intervalo**
  const interval = setInterval(() => {
    counter--;
    updateUI(); // ✅ Ahora la UI se actualiza sincronizada con la animación

    if (
      counter === 0 ||
      handSelectElement?.shadowRoot?.querySelector(".active")
    ) {
      clearInterval(interval);

      const selectedHand =
        handSelectElement?.shadowRoot?.querySelector(".active");
      if (selectedHand) {
        function getRandomIntInclusive(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min + 1) + min);
        }
        const random = getRandomIntInclusive(1, 3);

        const jugadas = {
          1: "piedra",
          2: "papel",
          3: "tijera",
        };

        const jugadaMaquina = jugadas[random];
        const jugadaUsuario = selectedHand.getAttribute("data-type");

        const juego = { miJugada: jugadaUsuario, pcJugada: jugadaMaquina };

        if (juego) {
          state.setJugadaActual(juego);

          const currentState = state.getState();

          state.agregarHistorial(currentState.juego);
          state.agregarResultado(currentState.juego);
          renderResultado();
        }

        function renderResultado() {
          shadow.innerHTML = "";
          shadow.innerHTML = `
          <style>
            img{
            display: none;
            margin: 0 auto;
            width: 170px;
            }
            .computerHand{
              transform: rotate(180deg);
            }
            .separador{
              height: 50px;
            }
          </style>
          <div class= computadoraContainer>        
            <img id= "piedra" src="${piedraImg}" alt="Piedra" class="computerHand" data-type="piedra">
            <img id= "papel" src="${papelImg}" alt="Papel" class="computerHand" data-type="papel">
            <img id= "tijera" src="${tijeraImg}" alt="Tijera" class="computerHand" data-type="tijera">
          </div>
          <div class= separador>        
          </div>
          <div class= usuarioContainer>        
            <img id= "piedra" src="${piedraImg}" alt="Piedra" class="userHand" data-type="piedra">
            <img id= "papel" src="${papelImg}" alt="Papel" class="userHand" data-type="papel">
            <img id= "tijera" src="${tijeraImg}" alt="Tijera" class="userHand" data-type="tijera">
          </div>
          `;
          const userHands = shadow.querySelectorAll(".userHand");
          userHands.forEach((hand) => {
            if (hand.id === jugadaUsuario) {
              hand.style.display = "block";
            }
          });

          const computerHands = shadow.querySelectorAll(".computerHand");
          computerHands.forEach((hand) => {
            if (hand.id === jugadaMaquina) {
              hand.style.display = "block";
            }
          });

          console.log(state.getState().juego);
        }

        setTimeout(() => {
          params.goTo("/resultados");
        }, 1400);
      } else {
        setTimeout(() => {
          params.goTo("/instrucciones");
        }, 1200);
      }
    }
  }, 1000);

  return gamePage;
}
