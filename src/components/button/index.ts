class CustomButton extends HTMLElement {
  constructor() {
    super();
    this.render();
  }
  render() {
    const shadow = this.attachShadow({ mode: "open" });
    const button = document.createElement("button");
    const style = document.createElement("style");

    style.innerHTML = `
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
    `;

    button.textContent = this.getAttribute("label") || "Botón";
    button.className = "button";

    const container = document.createElement("div");
    container.className = "button-container";
    container.appendChild(button);

    shadow.appendChild(container);
    shadow.appendChild(style);
  }
}

customElements.define("custom-button", CustomButton);
