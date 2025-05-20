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


        .contenedor-ventana{
          display: flex;
          align-items: center; 
        }
        @media (min-height: 600px) {
          .contenedor-ventana{
            height: 100vh;
          }
        }

        .contenedor{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          text-align: center;
          width: 100vw;
          height: 80vh;
          max-height: 667px;
        }
        .contenedor-texto{
          width: 284px;
        }
        .contenedor-button{
          width: 335px;
        }
        .select{

        }
      </style>
      <div class= "contenedor-ventana">
        <div class= "contenedor">
          <div class= "contenedor-texto">
            <h1 class= "h1">Piedra Papel <span class= "o">ó</span>Tijera</h1>
          </div>
          <div class= "contenedor-button">
            <custom-button class= "startButton" label= "Empezar"></custom-button>
          </div>
          <hand-select class= "select"></hand-select>
        </div>
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
