class e extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("button"),a=document.createElement("style");a.innerHTML=`
      * {
        box-sizing: border-box;
      }
      .button {
        width: 100%;
        font-family: "Odibee Sans", sans-serif;
        font-weight: 400;
        font-size: 45px;
        letter-spacing: 5%;
        font-weight: 400;
        color: #D8FCFC ;
        padding: 17px;
        border: 10px solid #001997;
        border-radius: 4px;
        background-color: #006CFC;
        color: white;
        cursor: pointer;
        text-align: center;
      }
      .button-container {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `,t.textContent=this.getAttribute("label")||"Botón",t.className="button";let o=document.createElement("div");o.className="button-container",o.appendChild(t),e.appendChild(o),e.appendChild(a)}}customElements.define("custom-button",e);var t={};t=import.meta.resolve("7XUR4");var a={};a=import.meta.resolve("2TFEB");var o={};o=import.meta.resolve("dOk3L");class i extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML=`
    <style>
        .container {
            position: relative;
            width: 300px; /* Ajusta seg\xfan dise\xf1o */
            height: 150px; /* Menor que la imagen para ocultar parte inferior */
            overflow: hidden; /* Oculta la parte baja de las im\xe1genes */
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
      <img src="${t}" alt="Piedra" class="hand" data-type="piedra">
      <img src="${a}" alt="Papel" class="hand" data-type="papel">
      <img src="${o}" alt="Tijera" class="hand" data-type="tijera">
    </div>
    `;let e=this.shadow.querySelectorAll(".hand");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(e=>e.classList.remove("active")),t.classList.add("active")})})}}customElements.define("hand-select",i);const n={data:{juego:{miJugada:"",pcJugada:""},historial:[],resultados:{usuario:0,computadora:0,empate:0}},listeners:[],setJugadaActual(e){let t={...this.getState(),juego:e};this.setState(t)},ganador:e=>e.miJugada===e.pcJugada?"empate":"papel"===e.miJugada&&"piedra"===e.pcJugada||"piedra"===e.miJugada&&"tijera"===e.pcJugada||"tijera"===e.miJugada&&"papel"===e.pcJugada?"usuario":"computadora",agregarHistorial(e){let t=this.getState(),a=[...t.historial,e],o={...t,historial:a};this.setState(o)},agregarResultado(e){let t=this.getState(),a=this.ganador(e),o={...t.resultados};"usuario"===a?o.usuario++:"computadora"===a?o.computadora++:"empate"===a&&o.empate++;let i={...t,resultados:o};this.setState(i)},init(){let e=localStorage.getItem("stateData"),t=e?JSON.parse(e):{},a={juego:t.juego||{miJugada:"",pcJugada:""},historial:t.historial||[],resultados:t.resultados||{usuario:0,computadora:0,empate:0}};console.log("Estado inicializado:",a),this.setState(a),localStorage.setItem("stateData",JSON.stringify(this.data))},getState(){return this.data},setState(e){for(let t of(this.data=e,this.listeners))t();let t=JSON.stringify(this.data);localStorage.setItem("stateData",t)},subscribe(e){this.listeners.push(e)}},r=[{path:/\/wellcome/,component:function(e){let t=document.createElement("div"),a=t.attachShadow({mode:"open"});a.innerHTML=`
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
          <h1 class= "h1">Piedra Papel <span class= "o">\xf3</span>Tijera</h1>
        </div>
        <div class= "contenedor-button">
          <custom-button class= "startButton" label= "Empezar"></custom-button>
        </div>
        <hand-select class= "select"></hand-select>
      </div>
       `;let o=a.querySelector(".startButton");return o&&o.addEventListener("click",()=>{e.goTo("/instrucciones")}),t}},{path:/\/instrucciones/,component:function(e){let t=document.createElement("div"),a=t.attachShadow({mode:"open"});a.innerHTML=`
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
          <h1 class= "h1">Presion\xe1 jugar y eleg\xed: piedra, papel o tijera antes de que pasen los 3 segundos.</h1>
        </div>
        <div class= "contenedor-button">
          <custom-button class= "playButton" label= "\xa1Jugar!"></custom-button>
        </div>
          <hand-select class= "select"></hand-select>
      </div>
       `;let o=a.querySelector(".playButton");return o&&o.addEventListener("click",()=>{e.goTo("/juego")}),t}},{path:/\/juego/,component:function(e){let i=document.createElement("div"),r=i.attachShadow({mode:"open"});r.innerHTML=`
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
  `;let s=r.querySelector(".counter"),l=r.querySelector("circle"),c=r.querySelector("hand-select"),d=3,u=()=>{if(l){let e=d/3*283;l.style.strokeDashoffset=e.toString()}setTimeout(()=>{s&&(s.textContent=d.toString())},900)};u();let p=setInterval(()=>{if(d--,u(),0===d||c?.shadowRoot?.querySelector(".active")){clearInterval(p);let l=c?.shadowRoot?.querySelector(".active");if(l){var i,s;let c={1:"piedra",2:"papel",3:"tijera"}[s=3,i=Math.ceil(i=1),Math.floor(Math.random()*((s=Math.floor(s))-i+1)+i)],d=l.getAttribute("data-type"),u={miJugada:d,pcJugada:c};if(u){n.setJugadaActual(u);let e=n.getState();n.agregarHistorial(e.juego),n.agregarResultado(e.juego),r.innerHTML="",r.innerHTML=`
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
            <img id= "piedra" src="${t}" alt="Piedra" class="computerHand" data-type="piedra">
            <img id= "papel" src="${a}" alt="Papel" class="computerHand" data-type="papel">
            <img id= "tijera" src="${o}" alt="Tijera" class="computerHand" data-type="tijera">
          </div>
          <div class= separador>        
          </div>
          <div class= usuarioContainer>        
            <img id= "piedra" src="${t}" alt="Piedra" class="userHand" data-type="piedra">
            <img id= "papel" src="${a}" alt="Papel" class="userHand" data-type="papel">
            <img id= "tijera" src="${o}" alt="Tijera" class="userHand" data-type="tijera">
          </div>
          `,r.querySelectorAll(".userHand").forEach(e=>{e.id===d&&(e.style.display="block")}),r.querySelectorAll(".computerHand").forEach(e=>{e.id===c&&(e.style.display="block")}),console.log(n.getState().juego)}setTimeout(()=>{e.goTo("/resultados")},1400)}else setTimeout(()=>{e.goTo("/instrucciones")},1200)}},1e3);return i}},{path:/\/resultado/,component:function(e){let t=document.createElement("div"),a=t.attachShadow({mode:"open"}),o=n.getState(),i=n.ganador(o.juego),r=o.resultados.usuario,s=o.resultados.computadora,l=o.resultados.empate,c="";c="usuario"===i?"win":"computadora"===i?"lose":"draw",a.innerHTML=`
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
        opacity:inherit;
      }
    </style>
    <div class="contenedor ${c}">




     <svg width="255" height="260" viewBox="0 0 255 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M144.299 45.8325L145.886 46.7163L147.669 46.3755L223.429 31.9126L209.258 109.523L208.946 111.236L209.764 112.772L246.729 182.162L170.214 192.357L168.429 192.594L167.206 193.917L114.278 251.091L81.2017 179.95L80.4517 178.337L78.853 177.56L9.08643 143.653L65.2231 89.3306L66.4849 88.1108L66.7065 86.3696L76.6724 8.17236L144.299 45.8325Z" fill=          ${"usuario"===i?"#6CB46C":"computadora"===i?"#DC5B49":"#c4c118"} stroke="black" stroke-width="10"/>
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
          font-size="55px" font-weight="400" font-family="Odibee Sans" fill="white"
          style="letter-spacing: 5%;">
          ${"usuario"===i?"¡Ganaste!":"computadora"===i?"Perdiste":"Empate"}
        </text>
      </svg>




      <div class= "contenedor-historial">
      <h2 class= "score">Score</h2>
      <div class= "contenedor-historial2">
      <h3 class= "resultadoIndividual">Vos: ${r}</h3>
      <h3 class= "resultadoIndividual">Maquina: ${s}</h3>
      <h3 class= "resultadoIndividual">Empate: ${l}</h3>
      </div>
      </div>
      
      
      <div class= "contenedor-button">
      <custom-button class= "playAgainButton" label= "Volver a Jugar"></custom-button>
      </div>
    </div>
  `;let d=a.querySelector(".playAgainButton");return console.log(d),d?.addEventListener("click",()=>{e.goTo("/juego")}),t}}],s="/desafio-ppt";function l(){return location.host.includes("github.io")}n.init();const c=document.querySelector(".root");if(c){function d(e){if("string"==typeof e){let t=l()?s+e:e;try{history.pushState({},"",t),u(t)}catch(e){console.error("Error al cambiar de ruta con pushState, usando location.href",e),window.location.href=t}}else console.error("La ruta debe ser un string:",e)}function u(e){console.log("el handle route recibió una nueva ruta: ",e);let t=e;for(let a of(l()&&((t=e.startsWith(s)?e.slice(s.length):e)&&"/"!==t||(t="/wellcome")),console.log("Ruta procesada correctamente:",t),r))if(a.path.test(t)){c.dataset.currentRoute=t;let e=a.component({goTo:d});c.innerHTML="",c.appendChild(e)}}"/"===location.pathname?d("/wellcome"):u(location.pathname),window.onpopstate=function(e){u(e.state?e.state.path:location.pathname)}}else console.error("Error: No se encontró el elemento con la clase .root");
//# sourceMappingURL=ppt.11f2ca92.js.map
