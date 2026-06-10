(function () {
  var urlGame = "assets/icons/cursor-game.png";
  var urlPointer = "assets/icons/pointer-game.png";
  var hotspotGameX = 19;
  var hotspotGameY = 5;
  var hotspotPointerX = 20;
  var hotspotPointerY = 4;
  var margemBorda = 2;

  var seletoresPointer = [
    "#controleSom",
    ".som-controle",
    ".start-inicio.is-ready",
    ".conversa-inicial-acao.is-visible",
    ".project-modal-close",
    ".project-modal-link:not(.is-disabled)",
    ".project-modal-equipment-more.is-clickable",
    "a[href]:not(.project-modal-link.is-disabled)"
  ].join(", ");

  var cursor = null;
  var imgGame = null;
  var imgPointer = null;
  var mouseX = 0;
  var mouseY = 0;
  var ultimoAlvo = null;
  var usarPointer = false;
  var cursorVisivel = false;
  var dentroDoCard = true;
  var canvasGame = null;
  var hotspotAtualX = hotspotGameX;
  var hotspotAtualY = hotspotGameY;

  function esconderCursorNativo() {
    var estilo = document.getElementById("cursor-flutuante-estilo");

    if (!estilo) {
      estilo = document.createElement("style");
      estilo.id = "cursor-flutuante-estilo";
      estilo.textContent = [
        "html.cursor-jogo-dentro,",
        "html.cursor-jogo-dentro body,",
        "html.cursor-jogo-dentro body *,",
        "html.cursor-jogo-dentro canvas,",
        "html.cursor-jogo-dentro #canvasArea,",
        "html.cursor-jogo-dentro #canvasArea *,",
        "html.cursor-jogo-dentro #telaInicialGame,",
        "html.cursor-jogo-dentro #telaInicialGame * { cursor: none !important; }",
        "html.cursor-jogo-fora,",
        "html.cursor-jogo-fora body,",
        "html.cursor-jogo-fora body * { cursor: auto !important; }",
        "canvas {",
        "  position: fixed !important;",
        "  inset: 0 !important;",
        "  width: 100% !important;",
        "  height: 100% !important;",
        "  max-width: 100% !important;",
        "  max-height: 100% !important;",
        "}",
        ".loading-caixa, .loading-caixa .loading-conteudo,",
        ".loading-caixa .loading-inicial, .loading-caixa .loading-brilho,",
        ".loading-caixa .titulo-projetos-inicio,",
        ".start-inicio:not(.is-ready) { pointer-events: none !important; }",
        "#cursorFlutuanteGame {",
        "  position: fixed;",
        "  left: 0;",
        "  top: 0;",
        "  z-index: 2147483647;",
        "  pointer-events: none;",
        "  margin: 0;",
        "  padding: 0;",
        "  will-change: left, top;",
        "  image-rendering: pixelated;",
        "}",
        "#cursorFlutuanteGame img {",
        "  position: absolute;",
        "  left: 0;",
        "  top: 0;",
        "  display: block;",
        "  max-width: none;",
        "  image-rendering: pixelated;",
        "  pointer-events: none;",
        "}",
        "#cursorFlutuanteGame .cursor-pointer {",
        "  display: none;",
        "}",
        "#cursorFlutuanteGame.modo-pointer .cursor-game {",
        "  display: none;",
        "}",
        "#cursorFlutuanteGame.modo-pointer .cursor-pointer {",
        "  display: block;",
        "}"
      ].join("\n");
      document.head.appendChild(estilo);
    }

    document.documentElement.classList.add("cursor-jogo-dentro");
    document.documentElement.classList.remove("cursor-jogo-fora");
  }

  function mouseDentroDoCard() {
    var largura = window.innerWidth;
    var altura = window.innerHeight;

    return mouseX >= margemBorda &&
      mouseX <= largura - margemBorda &&
      mouseY >= margemBorda &&
      mouseY <= altura - margemBorda;
  }

  function marcarCursorForaDoCard() {
    document.documentElement.classList.remove("cursor-jogo-dentro");
    document.documentElement.classList.add("cursor-jogo-fora");
  }

  function marcarCursorDentroDoCard() {
    document.documentElement.classList.add("cursor-jogo-dentro");
    document.documentElement.classList.remove("cursor-jogo-fora");
  }

  function checarPointer(alvo) {
    if (alvo && alvo.closest && alvo.closest(seletoresPointer)) {
      return true;
    }

    if (!canvasGame) {
      canvasGame = document.querySelector("canvas");
    }

    if (!canvasGame) {
      return false;
    }

    return canvasGame.style.cursor.indexOf("pointer") !== -1;
  }

  function aplicarModoPointer(novoModo) {
    if (novoModo === usarPointer) {
      return;
    }

    usarPointer = novoModo;
    hotspotAtualX = usarPointer ? hotspotPointerX : hotspotGameX;
    hotspotAtualY = usarPointer ? hotspotPointerY : hotspotGameY;

    if (cursor) {
      cursor.classList.toggle("modo-pointer", usarPointer);
    }
  }

  function posicionarCursor() {
    cursor.style.left = (mouseX - hotspotAtualX) + "px";
    cursor.style.top = (mouseY - hotspotAtualY) + "px";
  }

  function esconderCursorFlutuante() {
    if (!cursorVisivel) {
      return;
    }

    cursor.style.display = "none";
    cursorVisivel = false;
  }

  function mostrarCursorFlutuante() {
    if (cursorVisivel) {
      return;
    }

    cursor.style.display = "block";
    cursorVisivel = true;
  }

  function atualizarVisibilidade() {
    var agoraDentro = mouseDentroDoCard();

    if (agoraDentro !== dentroDoCard) {
      dentroDoCard = agoraDentro;

      if (dentroDoCard) {
        marcarCursorDentroDoCard();
      } else {
        marcarCursorForaDoCard();
        esconderCursorFlutuante();
        return;
      }
    }

    if (!dentroDoCard) {
      return;
    }

    mostrarCursorFlutuante();
    posicionarCursor();
  }

  function moverCursor(evento) {
    var alvo = evento.target;

    mouseX = evento.clientX;
    mouseY = evento.clientY;

    if (!canvasGame) {
      canvasGame = document.querySelector("canvas");
    }

    if (alvo !== ultimoAlvo) {
      ultimoAlvo = alvo;
      aplicarModoPointer(checarPointer(alvo));
    } else if (canvasGame && alvo === canvasGame) {
      aplicarModoPointer(checarPointer(alvo));
    }

    atualizarVisibilidade();
  }

  function montarCursor() {
    cursor = document.createElement("div");
    cursor.id = "cursorFlutuanteGame";

    imgGame = document.createElement("img");
    imgGame.className = "cursor-game";
    imgGame.src = urlGame;
    imgGame.alt = "";
    imgGame.draggable = false;

    imgPointer = document.createElement("img");
    imgPointer.className = "cursor-pointer";
    imgPointer.src = urlPointer;
    imgPointer.alt = "";
    imgPointer.draggable = false;

    cursor.appendChild(imgGame);
    cursor.appendChild(imgPointer);
    cursor.style.display = "none";

    document.body.appendChild(cursor);

    document.addEventListener("mousemove", moverCursor, { passive: true });

    document.addEventListener("mouseleave", function () {
      esconderCursorFlutuante();
      marcarCursorForaDoCard();
      ultimoAlvo = null;
      dentroDoCard = false;
    });
  }

  function iniciarCursorFlutuante(opcoes) {
    opcoes = opcoes || {};

    if (opcoes.urlGame) {
      urlGame = opcoes.urlGame;
    }

    if (opcoes.urlPointer) {
      urlPointer = opcoes.urlPointer;
    }

    if (opcoes.margemBorda) {
      margemBorda = opcoes.margemBorda;
    }

    esconderCursorNativo();

    if (!cursor) {
      montarCursor();
      return;
    }

    if (imgGame) {
      imgGame.src = urlGame;
    }

    if (imgPointer) {
      imgPointer.src = urlPointer;
    }
  }

  window.iniciarCursorFlutuante = iniciarCursorFlutuante;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      iniciarCursorFlutuante();
    });
  } else {
    iniciarCursorFlutuante();
  }
})();
