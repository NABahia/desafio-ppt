import { state } from "../../state";

export function initResult(params) {
  const resultPage = document.createElement("div");
  const shadow = resultPage.attachShadow({ mode: "open" });

  const currentState = state.getState();
  const ganador = state.ganador(currentState.juego);
  const historialUsuario = currentState.resultados.usuario;
  const historialComputadora = currentState.resultados.computadora;
  const historialEmpate = currentState.resultados.empate;

  let resultClass = "";

  if (ganador === "usuario") {
    resultClass = "win";
  } else if (ganador === "computadora") {
    resultClass = "lose";
  } else {
    resultClass = "draw";
  }

  shadow.innerHTML = `
    <style>
      * {
        box-sizing: border-box;
        }
      .contenedor {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
        text-align: center;
        width: 100vw;
        height: 100vh;
        font-size: 30px;
        font-weight: bold;
      }
      .contenedor-closeButton{
        width: 335px; 
        display: flex;
        justify-content: flex-end;
      }

      .closeButton{
        width: 65px;
        height: 65px;
        font-family: "Odibee Sans", sans-serif;
        font-weight: 400;
        font-size: 45px;
        letter-spacing: 5%;
        font-weight: 400;
        padding: 0;
        color: #D8FCFC ;
        border: 10px solid #001997;
        border-radius: 4px;
        background-color: #006CFC;
        color: white;
        cursor: pointer;
        text-align: center;
      }
      .win {
        background-color: rgba(40, 167, 69, 0.7);
        color: white;
      }

      .lose {
        background-color: rgba(220, 53, 69, 0.7);
        color: white;
      }

      .draw {
        background-color: rgba(255, 193, 7, 0.7);
        color: black;
      }
      .contenedor-historial{
        width: 260px;
        border: solid #000000 10px;
        border-radius: 10px;
        background-color: white;
        padding: 30px;
        opacity: 100%;
      }

      .score {
        font-family: "Odibee Sans";
        font-weight: 400;
        font-size: 55px;
        color: #000000;
        text-allign: center;
        margin: 0 auto;
        line-height: 100%;
        letter-spacing: 5%;  
        vertical-align: middle;
        margin-bottom: 15px;
      }
      .resultadoIndividual {
        font-family: "Odibee Sans";
        color: #000000;
        font-weight: 400;
        font-size: 45px;
        text-align: end;
        margin: 0 auto;
        line-height: 100%;
        letter-spacing: 5%;
        vertical-align: middle;
      }  
      .contenedor-button{
        width: 335px;
      }
    </style>
    <div class="contenedor ${resultClass}">

      <div class= "contenedor-closeButton">
        <button class="closeButton">X</button>
      </div>
      

     <svg width="255" height="260" viewBox="0 0 255 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M144.299 45.8325L145.886 46.7163L147.669 46.3755L223.429 31.9126L209.258 109.523L208.946 111.236L209.764 112.772L246.729 182.162L170.214 192.357L168.429 192.594L167.206 193.917L114.278 251.091L81.2017 179.95L80.4517 178.337L78.853 177.56L9.08643 143.653L65.2231 89.3306L66.4849 88.1108L66.7065 86.3696L76.6724 8.17236L144.299 45.8325Z" fill=          ${
          ganador === "usuario"
            ? "#6CB46C"
            : ganador === "computadora"
            ? "#DC5B49"
            : "#c4c118"
        } stroke="black" stroke-width="10"/>
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
          font-size="55px" font-weight="400" font-family="Odibee Sans" fill="white"
          style="letter-spacing: 5%;">
          ${
            ganador === "usuario"
              ? "¡Ganaste!"
              : ganador === "computadora"
              ? "Perdiste"
              : "Empate"
          }
        </text>
      </svg>




      <div class= "contenedor-historial">
      <h2 class= "score">Score</h2>
      <div class= "contenedor-historial2">
      <h3 class= "resultadoIndividual">Vos: ${historialUsuario}</h3>
      <h3 class= "resultadoIndividual">Maquina: ${historialComputadora}</h3>
      <h3 class= "resultadoIndividual">Empate: ${historialEmpate}</h3>
      </div>
      </div>
      
      
      <div class= "contenedor-button">
      <custom-button class= "playAgainButton" label= "Volver a Jugar"></custom-button>
      </div>
    </div>
  `;
  const closeButton = shadow.querySelector(".closeButton");

  closeButton?.addEventListener("click", () => {
    params.goTo("/wellcome");
  });

  const playAgainButton = shadow.querySelector(".playAgainButton");
  playAgainButton?.addEventListener("click", () => {
    params.goTo("/juego");
  });

  return resultPage;
}
