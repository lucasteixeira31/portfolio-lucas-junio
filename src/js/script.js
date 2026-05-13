const pagina = document.querySelector(".pagina");
const botaoMenu = document.querySelector(".botao-menu");
const linksMenu = document.querySelectorAll(".links-menu a");
const secoes = document.querySelectorAll(".secao");
const avatarFundo = document.querySelector(".avatar-fundo");
const avatarRosto = document.querySelector(".avatar-rosto");
const olhosAvatar = document.querySelectorAll(".olho-avatar");
const areaPagina = document.documentElement;

function menuEstaAberto() {
  return pagina.classList.contains("menu-aberto");
}

function abrirMenu() {
  pagina.classList.add("menu-aberto");
  pagina.classList.remove("menu-fechado");
  botaoMenu.setAttribute("aria-label", "Fechar menu");
  botaoMenu.setAttribute("aria-expanded", "true");
}

function fecharMenu() {
  pagina.classList.remove("menu-aberto");
  pagina.classList.add("menu-fechado");
  botaoMenu.setAttribute("aria-label", "Abrir menu");
  botaoMenu.setAttribute("aria-expanded", "false");
}

function abrirFecharMenu() {
  if (menuEstaAberto()) {
    fecharMenu();
  } else {
    abrirMenu();
  }
}

function fecharMenuNoCelular() {
  if (window.innerWidth <= 900) {
    fecharMenu();
  }
}

function prepararMenu() {
  if (window.innerWidth <= 900) {
    fecharMenu();
  } else {
    abrirMenu();
  }
}

function atualizarMenuAtivo(idSecao) {
  linksMenu.forEach(function (link) {
    const linkAtual = link.getAttribute("href") === "#" + idSecao;
    link.classList.toggle("link-ativo", linkAtual);
  });
}

function atualizarMouse(evento) {
  areaPagina.style.setProperty("--mouse-x", evento.clientX + "px");
  areaPagina.style.setProperty("--mouse-y", evento.clientY + "px");
  moverOlhos(evento);
  moverAvatar(evento);
}

function moverOlhos(evento) {
  olhosAvatar.forEach(function (olho) {
    const pupila = olho.querySelector(".pupila-avatar");
    const posicaoOlho = olho.getBoundingClientRect();
    const centroX = posicaoOlho.left + posicaoOlho.width / 2;
    const centroY = posicaoOlho.top + posicaoOlho.height / 2;
    const distanciaX = evento.clientX - centroX;
    const distanciaY = evento.clientY - centroY;
    const movimentoX = limitarNumero(distanciaX / 18, -5, 5);
    const movimentoY = limitarNumero(distanciaY / 24 + 0.25, -1, 5.5);

    pupila.style.transform = "translate(" + movimentoX + "px, " + movimentoY + "px)";
  });
}

function limitarNumero(numero, minimo, maximo) {
  return Math.max(minimo, Math.min(maximo, numero));
}

function moverAvatar(evento) {
  if (!avatarFundo || !avatarRosto) {
    return;
  }

  const posicaoAvatar = avatarFundo.getBoundingClientRect();
  const centroX = posicaoAvatar.left + posicaoAvatar.width / 2;
  const centroY = posicaoAvatar.top + posicaoAvatar.height * 0.4;
  const distanciaX = evento.clientX - centroX;
  const distanciaY = evento.clientY - centroY;
  const lado = limitarNumero(distanciaX / (window.innerWidth * 0.45), -1, 1);
  const altura = limitarNumero(distanciaY / (window.innerHeight * 0.45), -1, 1);
  const inclinacao = altura < 0 ? limitarNumero(altura * 4, -6, 0) : limitarNumero(altura * 0.35, 0, 0.35);
  const cima = altura < 0 ? Math.abs(altura) : 0;
  const baixo = altura > 0 ? altura : 0;
  const esquerda = lado < 0 ? Math.abs(lado) : 0;
  const direita = lado > 0 ? lado : 0;
  const superiorDireito = cima * direita;
  const superiorEsquerdo = cima * esquerda;
  const inferiorDireito = baixo * direita;
  const inferiorEsquerdo = baixo * esquerda;
  const moverLado = superiorDireito * 1.2 - inferiorDireito * 0.45 - inferiorEsquerdo * 0.45;
  const giroLado = -superiorDireito * 6 + superiorEsquerdo * 6 + inferiorDireito * 2.2 - inferiorEsquerdo * 2.2;
  const levantarQueixo = -(superiorDireito + superiorEsquerdo) * 1.2 - (inferiorDireito + inferiorEsquerdo) * 0.25;
  const levantarSobrancelha = altura < 0 ? Math.abs(altura) : 0;
  const moverVertical = altura < 0 ? altura * 0.25 + levantarQueixo : altura * 0.12 + levantarQueixo;

  avatarRosto.style.setProperty("--mover-rosto-x", moverLado.toFixed(1) + "px");
  avatarRosto.style.setProperty("--mover-rosto-y", moverVertical.toFixed(1) + "px");
  avatarRosto.style.setProperty("--girar-rosto", giroLado.toFixed(2) + "deg");
  avatarRosto.style.setProperty("--inclinar-rosto", inclinacao.toFixed(2) + "deg");
  avatarRosto.style.setProperty("--girar-sobrancelha-esquerda", (-levantarSobrancelha * 4).toFixed(2) + "deg");
  avatarRosto.style.setProperty("--girar-sobrancelha-direita", (levantarSobrancelha * 4).toFixed(2) + "deg");
  avatarRosto.style.setProperty("--mover-sobrancelha-esquerda", (-levantarSobrancelha * 8).toFixed(1) + "px");
  avatarRosto.style.setProperty("--mover-sobrancelha-direita", (-levantarSobrancelha * 8).toFixed(1) + "px");
}

botaoMenu.addEventListener("click", abrirFecharMenu);

linksMenu.forEach(function (link) {
  link.addEventListener("click", function () {
    const idSecao = link.getAttribute("href").replace("#", "");

    atualizarMenuAtivo(idSecao);
    fecharMenuNoCelular();
  });
});

window.addEventListener("resize", prepararMenu);

if (window.matchMedia("(pointer: fine)").matches) {
  window.addEventListener("mousemove", atualizarMouse);
}

secoes.forEach(function (secao) {
  secao.classList.add("secao-animada");
});

const observador = new IntersectionObserver(function (entradas) {
  entradas.forEach(function (entrada) {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("secao-visivel");
      atualizarMenuAtivo(entrada.target.id);
    }
  });
}, {
  threshold: 0.45
});

secoes.forEach(function (secao) {
  observador.observe(secao);
});

prepararMenu();
