export function initInstructions(params) {
  const instructionsPage = document.createElement("div");
  const shadow = instructionsPage.attachShadow({ mode: "open" });

  shadow.innerHTML = `
      <style>
        * {
            box-sizing: border-box;
        }   
        .h1{
          font-family: American Typewriter;
          font-weight: 600;
          font-size: 40px;
          line-height: 100%;
          letter-spacing: 0%;
          text-align: center;
        }
        .contenedor{
         display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
        text-align: center;
        width: 100vw;
        height: 100vh;
        }
        .contenedor-texto{
          width: 284px;
        }
        .contenedor-button{
          width: 335px;
        }
      </style>
      <div class= "contenedor">
        <div class= "contenedor-texto">
          <h1 class= "h1">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</h1>
        </div>
        <div class= "contenedor-button">
          <custom-button class= "playButton" label= "¡Jugar!"></custom-button>
        </div>
          <hand-select class= "select"></hand-select>
      </div>
       `;

  const playButton = shadow.querySelector(".playButton");

  if (playButton) {
    playButton.addEventListener("click", () => {
      params.goTo("/juego");
    });
  }

  return instructionsPage;
}
