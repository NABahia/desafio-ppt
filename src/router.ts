import { initWellcome } from "./pages/wellcome";
import { initInstructions } from "./pages/instructions";
import { initGame } from "./pages/game";
import { initResult } from "./pages/result";

const routes = [
  { path: /\/wellcome/, component: initWellcome },
  { path: /\/instrucciones/, component: initInstructions },
  { path: /\/juego/, component: initGame },
  { path: /\/resultado/, component: initResult },
];

const BASE_PATH = "/desafio-ppt";

function isGithubPages() {
  return location.host.includes("github.io");
}

export function initRouter(container: HTMLElement) {
  function goTo(path) {
    if (typeof path === "string") {
      const completePath = isGithubPages() ? BASE_PATH + path : path;
      history.pushState({}, "", completePath);
      handleRoute(completePath);
    } else {
      console.error("La ruta debe ser un string:", path);
    }
  }

  function handleRoute(route) {
    console.log("el handle route recibió una nueva ruta: ", route);

    for (const r of routes) {
      if (r.path.test(route)) {
        container.dataset.currentRoute = route;
        const el = r.component({ goTo: goTo });
        container.innerHTML = "";
        container.appendChild(el);
      }
    }
  }

  if (location.pathname === "/") {
    goTo("/wellcome");
  } else {
    handleRoute(location.pathname);
  }

  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}
