import "./components/button";
import "./components/select";

import { state } from "./state.ts";
import { initRouter } from "./router.ts";

function main() {
  state.init();

  const root = document.querySelector(".root");

  if (root) {
    initRouter(root as HTMLElement);
  } else {
    console.error("Error: No se encontró el elemento con la clase .root");
  }
}

main();
