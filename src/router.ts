import { initWellcome } from "./pages/wellcome";
import { initInstructions } from "./pages/instructions";
import { initGame } from "./pages/game";
import { initResult } from "./pages/result";

const routes = [
  { path: /\/wellcome/, component: initWellcome },
  { path: /\/instrucciones/, component: initInstructions },
  { path: /\/juego/, component: initGame },
  { path: /\/resultado/, component: initResult },
  { path: /\/404/, component: initWellcome },
];

const BASE_PATH = "/desafio-ppt";

function isGithubPages() {
  return location.host.includes("github.io");
}

export function initRouter(container: HTMLElement) {
  function goTo(path) {
    if (typeof path === "string") {
      const completePath = isGithubPages() ? BASE_PATH + path : path;
      try {
        history.pushState({}, "", completePath);
        handleRoute(completePath);
      } catch (error) {
        console.error(
          "Error al cambiar de ruta con pushState, usando location.href",
          error
        );
        window.location.href = completePath;
      }
    } else {
      console.error("La ruta debe ser un string:", path);
    }
  }

  function handleRoute(route) {
    console.log("El handleRoute recibió una nueva ruta: ", route);

    let newRoute = route;
    if (isGithubPages()) {
      newRoute = route.startsWith(BASE_PATH)
        ? route.slice(BASE_PATH.length)
        : route;
      if (!newRoute || newRoute === "/") {
        newRoute = "/wellcome";
      }
    }

    console.log("Ruta procesada correctamente:", newRoute);

    let foundRoute = false;

    for (const r of routes) {
      if (r.path.test(newRoute)) {
        foundRoute = true;
        container.dataset.currentRoute = newRoute;
        const el = r.component({ goTo });
        container.innerHTML = "";
        container.appendChild(el);
        break;
      }
    }

    if (!foundRoute) {
      console.warn("Ruta no encontrada, redirigiendo a /wellcome");
      goTo("/wellcome");
    }
  }

  if (location.pathname === "/") {
    goTo("/wellcome");
  } else {
    handleRoute(location.pathname);
  }

  window.onpopstate = function (event) {
    const currentPath = event.state ? event.state.path : location.pathname;
    handleRoute(currentPath);
  };
}
