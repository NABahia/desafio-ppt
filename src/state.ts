type Jugada = "piedra" | "papel" | "tijera";
type Juego = { miJugada: Jugada; pcJugada: Jugada };
type StateData = {
  juego: Juego;
  historial: Juego[];
  resultados: {
    usuario: 0;
    computadora: 0;
    empate: 0;
  };
};

const state = {
  data: {
    juego: { miJugada: "" as Jugada, pcJugada: "" as Jugada },
    historial: [] as Juego[],
    resultados: {
      usuario: 0,
      computadora: 0,
      empate: 0,
    },
  },
  listeners: [] as Array<() => void>,

  setJugadaActual(juego) {
    const currentState = this.getState();
    const newState = {
      ...currentState,
      juego: juego,
    };
    this.setState(newState);
  },

  ganador(juego: Juego) {
    if (juego.miJugada === juego.pcJugada) {
      return "empate";
    }
    if (
      (juego.miJugada === "papel" && juego.pcJugada === "piedra") ||
      (juego.miJugada === "piedra" && juego.pcJugada === "tijera") ||
      (juego.miJugada === "tijera" && juego.pcJugada === "papel")
    ) {
      return "usuario";
    }
    return "computadora";
  },

  agregarHistorial(juego: Juego) {
    const currentState = this.getState();

    const newHistorial = [...currentState.historial, juego];
    const newState = {
      ...currentState,
      historial: newHistorial,
    };
    this.setState(newState);
  },

  agregarResultado(juego: Juego) {
    const currentState = this.getState();

    const nuevoGanador = this.ganador(juego);
    const nuevoResultado = { ...currentState.resultados };

    if (nuevoGanador === "usuario") {
      nuevoResultado.usuario++;
    } else if (nuevoGanador === "computadora") {
      nuevoResultado.computadora++;
    } else if (nuevoGanador === "empate") {
      nuevoResultado.empate++;
    }

    const newState = {
      ...currentState,
      resultados: nuevoResultado,
    };
    this.setState(newState);
  },

  init() {
    const localData = localStorage.getItem("stateData");
    const parsedData = localData ? JSON.parse(localData) : {};

    const newData: StateData = {
      juego: parsedData.juego || {
        miJugada: "" as Jugada,
        pcJugada: "" as Jugada,
      },
      historial: parsedData.historial || [],
      resultados: parsedData.resultados || {
        usuario: 0,
        computadora: 0,
        empate: 0,
      },
    };

    console.log("Estado inicializado:", newData);
    this.setState(newData);
    localStorage.setItem("stateData", JSON.stringify(this.data));
  },

  getState() {
    return this.data;
  },

  setState(newState) {
    this.data = newState;
    for (const cb of this.listeners) {
      cb();
    }
    const stateData = JSON.stringify(this.data);
    localStorage.setItem("stateData", stateData);
  },

  subscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },
};

export { state, Juego, Jugada };
