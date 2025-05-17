class Contador extends HTMLElement {
  shadow = this.attachShadow({ mode: "open" });

  constructor() {
    super();
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
    <style>

    </style>
    <div class="container">
    </div>
    `;
  }
}

customElements.define("mi-contador", Contador);
