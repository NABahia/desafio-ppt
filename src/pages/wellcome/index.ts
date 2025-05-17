export function initWellcome(params) {
  const wellcomePage = document.createElement("div");
  const shadow = wellcomePage.attachShadow({ mode: "open" });

  shadow.innerHTML = `
      <style>
        * {
            box-sizing: border-box;
        }   
        .h1{
        font-family: "American Typewriter";
        font-weight: 700;
        font-size: 80px;
        line-height: 88%;
        letter-spacing: 0%;
        color: #009048;
        }
        .o{
        color: #91CCAF;
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
        .select{
        margin-top: 89px;
        }
      </style>
      <div class= "contenedor">
        <div class= "contenedor-texto">
          <h1 class= "h1">Piedra Papel <span class= "o">ó</span>Tijera</h1>
        </div>
        <div class= "contenedor-button">
          <custom-button class= "startButton" label= "Empezar"></custom-button>
        </div>
        <hand-select class= "select"></hand-select>
      </div>
       `;

  const startButton = shadow.querySelector(".startButton");

  if (startButton) {
    startButton.addEventListener("click", () => {
      params.goTo("/instrucciones");
    });
  }

  return wellcomePage;
}
