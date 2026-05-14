const pagina = document.querySelector(".pagina");
const botaoMenu = document.querySelector(".botao-menu");
const linksMenu = document.querySelectorAll(".links-menu a, .navegacao-inicio a");
const secoes = document.querySelectorAll(".secao");
const avatarFundo = document.querySelector(".avatar-fundo");
const avatarRosto = document.querySelector(".avatar-rosto");
const olhosAvatar = document.querySelectorAll(".olho-avatar");
const silhuetaTopoCard = document.querySelector(".silhueta-topo-card");
const areaPagina = document.documentElement;
const simbolosCodigo = ["0", "1", "2", "3", "4", "6", "7", "8", "9", "a", "b", "d", "e", "g", "h", "m", "n", "o", "s", "t", "u", "x", "z", "+", "-", "=", "#", "{", "}", "(", ")", "<", ">"];
const gotasCodigo = [];
const texturasCodigo = {};
let renderizadorCodigo = null;
let cenaCodigo = null;
let cameraCodigo = null;
let grupoCodigo = null;
let usaThreeCodigo = false;
let animacaoCodigo = null;
let tempoAnteriorCodigo = 0;
let ultimoQuadroCodigo = 0;
let esperaResizeCodigo = null;
let larguraCodigo = window.innerWidth;
let alturaCodigo = window.innerHeight;
const intervaloCodigo = 1000 / 24;
let mouseCodigoX = window.innerWidth / 2;
let mouseCodigoY = window.innerHeight * 0.2;
const raioLuzCodigo = 230;
let mouseAtual = null;
let mousePendente = false;

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
  mouseAtual = {
    clientX: evento.clientX,
    clientY: evento.clientY,
    target: evento.target
  };

  if (!mousePendente) {
    mousePendente = true;
    requestAnimationFrame(processarMouse);
  }
}

function processarMouse() {
  const evento = mouseAtual;

  if (!evento) {
    mousePendente = false;
    return;
  }

  areaPagina.style.setProperty("--mouse-x", evento.clientX + "px");
  areaPagina.style.setProperty("--mouse-y", evento.clientY + "px");
  mouseCodigoX = evento.clientX;
  mouseCodigoY = evento.clientY;
  moverLuzCard(evento);
  moverLuzSilhueta(evento);
  moverOlhos(evento);
  moverAvatar(evento);
  mousePendente = false;
}

function moverLuzCard(evento) {
  const cardAtual = evento.target.closest(".secao");

  if (!cardAtual) {
    return;
  }

  const posicaoCard = cardAtual.getBoundingClientRect();
  const luzX = evento.clientX - posicaoCard.left;
  const luzY = evento.clientY - posicaoCard.top;

  cardAtual.style.setProperty("--luz-x", luzX + "px");
  cardAtual.style.setProperty("--luz-y", luzY + "px");
}

function moverLuzSilhueta(evento) {
  if (!silhuetaTopoCard) {
    return;
  }

  const posicao = silhuetaTopoCard.getBoundingClientRect();
  const luzX = evento.clientX - posicao.left;
  const luzY = evento.clientY - posicao.top;
  const distanciaX = luzX - posicao.width / 2;
  const distanciaY = luzY - posicao.height / 2;
  const distancia = Math.sqrt(distanciaX * distanciaX + distanciaY * distanciaY);
  const alcance = Math.max(posicao.width, posicao.height) * 0.72;
  const visivel = luzX > -70 && luzX < posicao.width + 70 && luzY > -70 && luzY < posicao.height + 70 && distancia < alcance;

  silhuetaTopoCard.style.setProperty("--luz-silhueta-x", luzX + "px");
  silhuetaTopoCard.style.setProperty("--luz-silhueta-y", luzY + "px");
  silhuetaTopoCard.classList.toggle("silhueta-visivel", visivel);
}

function criarFundoCodigo() {
  if (!window.THREE) {
    criarFundoCodigoSimples();
    return;
  }

  larguraCodigo = window.innerWidth;
  alturaCodigo = window.innerHeight;

  prepararCenaCodigo();

  if (!renderizadorCodigo || !cameraCodigo) {
    return;
  }

  limparGotasCodigo();

  cameraCodigo.left = 0;
  cameraCodigo.right = larguraCodigo;
  cameraCodigo.top = alturaCodigo;
  cameraCodigo.bottom = 0;
  cameraCodigo.updateProjectionMatrix();
  renderizadorCodigo.setSize(larguraCodigo, alturaCodigo, false);

  const espacoColuna = larguraCodigo <= 700 ? 7 : 9;
  const limiteGotas = larguraCodigo <= 700 ? 150 : 280;
  const quantidadeColunas = Math.min(Math.ceil(larguraCodigo / espacoColuna) * 2, limiteGotas);

  for (let i = 0; i < quantidadeColunas; i++) {
    const tipoGota = Math.random();
    const gotaMuitoGrande = tipoGota > 0.9;
    const gotaGrande = !gotaMuitoGrande && tipoGota > 0.72;
    const gotaMedia = !gotaMuitoGrande && !gotaGrande && tipoGota > 0.42;
    const tamanho = 24;
    const fonteBase = gotaMuitoGrande ? 32 + Math.random() * 14 : gotaGrande ? 23 + Math.random() * 9 : gotaMedia ? 15 + Math.random() * 6 : 10 + Math.random() * 4;
    const fonte = larguraCodigo <= 700 ? fonteBase * 0.82 : fonteBase;
    const profundidade = Math.random();
    const escalaProfundidade = gotaMuitoGrande ? 0.86 + profundidade * 0.5 : gotaGrande ? 0.78 + profundidade * 0.62 : 0.5 + profundidade * 0.9;
    const gota = {
      x: Math.random() * larguraCodigo,
      y: Math.random() * alturaCodigo - alturaCodigo,
      velocidade: (gotaMuitoGrande ? 130 + Math.random() * 230 : gotaGrande ? 170 + Math.random() * 280 : 210 + Math.random() * 360) * escalaProfundidade,
      tamanho: tamanho,
      fonte: fonte * escalaProfundidade,
      profundidade: profundidade,
      muitoGrande: gotaMuitoGrande,
      grande: gotaGrande,
      passo: Math.random() * simbolosCodigo.length,
      troca: gotaMuitoGrande ? 18 + Math.random() * 34 : gotaGrande ? 24 + Math.random() * 46 : 34 + Math.random() * 64,
      letras: []
    };

    for (let j = 0; j < tamanho; j++) {
      gota.letras.push(criarLetraCodigo(j === 0, fonte));
    }

    gotasCodigo.push(gota);
  }
}

function prepararCenaCodigo() {
  if (renderizadorCodigo) {
    return;
  }

  try {
    renderizadorCodigo = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: "high-performance"
    });
  } catch (erro) {
    criarFundoCodigoSimples();
    return;
  }

  usaThreeCodigo = true;
  renderizadorCodigo.setPixelRatio(0.75);
  renderizadorCodigo.domElement.classList.add("fundo-codigo");
  document.body.prepend(renderizadorCodigo.domElement);

  cenaCodigo = new THREE.Scene();
  cameraCodigo = new THREE.OrthographicCamera(0, larguraCodigo, alturaCodigo, 0, -10, 10);
  cameraCodigo.position.z = 1;
  grupoCodigo = new THREE.Group();
  cenaCodigo.add(grupoCodigo);
}

function limparGotasCodigo() {
  if (!grupoCodigo) {
    return;
  }

  gotasCodigo.forEach(function (gota) {
    gota.letras.forEach(function (letra) {
      grupoCodigo.remove(letra);
      letra.material.dispose();
    });
  });

  gotasCodigo.length = 0;
}

function criarLetraCodigo(neon, fonte) {
  const simbolo = escolherSimboloCodigo();
  const material = new THREE.SpriteMaterial({
    map: pegarTexturaCodigo(simbolo, neon),
    transparent: true,
    opacity: neon ? 0.98 : 0.62,
    color: neon ? 0xf7efff : 0x8f24ff,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  const letra = new THREE.Sprite(material);
  const tamanho = neon ? fonte * 1.28 : fonte;

  letra.scale.set(tamanho, tamanho, 1);
  letra.userData.neon = neon;
  letra.userData.simbolo = simbolo;
  grupoCodigo.add(letra);

  return letra;
}

function pegarTexturaCodigo(simbolo, neon) {
  const chave = simbolo + (neon ? "-neon" : "-normal");

  if (texturasCodigo[chave]) {
    return texturasCodigo[chave];
  }

  texturasCodigo[chave] = criarTexturaCodigo(simbolo, neon);
  return texturasCodigo[chave];
}

function criarTexturaCodigo(simbolo, neon) {
  const tela = document.createElement("canvas");
  const contexto = tela.getContext("2d");
  const tamanho = 96;

  tela.width = tamanho;
  tela.height = tamanho;
  contexto.textAlign = "center";
  contexto.textBaseline = "middle";
  contexto.font = "bold 56px Consolas, 'Courier New', monospace";
  contexto.shadowColor = neon ? "#f3dcff" : "#a42cff";
  contexto.shadowBlur = neon ? 14 : 6;

  if (neon) {
    const degrade = contexto.createLinearGradient(0, 18, 0, 78);
    degrade.addColorStop(0, "#ffffff");
    degrade.addColorStop(0.34, "#f3dcff");
    degrade.addColorStop(0.68, "#b56cff");
    degrade.addColorStop(1, "#6f1fff");
    contexto.fillStyle = degrade;
  } else {
    contexto.fillStyle = "#ffffff";
  }

  contexto.fillText(simbolo, tamanho / 2, tamanho / 2 + 2);

  const textura = new THREE.CanvasTexture(tela);
  textura.minFilter = THREE.LinearFilter;
  textura.magFilter = THREE.LinearFilter;
  return textura;
}

function desenharFundoCodigo(tempoAtual) {
  if (!renderizadorCodigo || tempoAtual - ultimoQuadroCodigo < intervaloCodigo) {
    animacaoCodigo = requestAnimationFrame(desenharFundoCodigo);
    return;
  }

  const tempo = Math.min((tempoAtual - tempoAnteriorCodigo) / 1000, 0.04);

  ultimoQuadroCodigo = tempoAtual;
  tempoAnteriorCodigo = tempoAtual;

  gotasCodigo.forEach(function (gota) {
    gota.y += gota.velocidade * tempo;
    gota.passo += gota.troca * tempo;

    if (gota.y - gota.tamanho * gota.fonte > alturaCodigo + 80) {
      gota.y = -Math.random() * alturaCodigo;
      gota.velocidade = (gota.muitoGrande ? 130 + Math.random() * 230 : gota.grande ? 170 + Math.random() * 280 : 210 + Math.random() * 360) * (gota.muitoGrande ? 0.86 + gota.profundidade * 0.5 : gota.grande ? 0.78 + gota.profundidade * 0.62 : 0.5 + gota.profundidade * 0.9);
      gota.passo = Math.random() * simbolosCodigo.length;
    }

    atualizarGotaCodigo(gota);
  });

  renderizadorCodigo.render(cenaCodigo, cameraCodigo);
  animacaoCodigo = requestAnimationFrame(desenharFundoCodigo);
}

function atualizarGotaCodigo(gota) {
  gota.letras.forEach(function (letra, indice) {
    const y = gota.y - indice * gota.fonte * 0.72;
    const luz = calcularLuzCodigo(gota.x, y);
    const finalGota = 1 - indice / gota.tamanho;
    const opacidade = limitarNumero(Math.pow(finalGota, 1.7), 0, 0.95);
    const simbolo = simbolosCodigo[Math.floor(gota.passo + indice) % simbolosCodigo.length];

    letra.visible = y > -40 && y < alturaCodigo + 40 && opacidade > 0.05 && luz > 0.02;

    if (!letra.visible) {
      return;
    }

    if (letra.userData.simbolo !== simbolo) {
      letra.userData.simbolo = simbolo;
      letra.material.map = pegarTexturaCodigo(simbolo, letra.userData.neon);
    }

    letra.position.set(gota.x, alturaCodigo - y, gota.profundidade);

    if (letra.userData.neon) {
      letra.material.opacity = (0.82 + gota.profundidade * 0.16) * luz;
      letra.material.color.setHex(0xf7efff);
      letra.scale.set(gota.fonte * 1.28, gota.fonte * 1.28, 1);
    } else {
      aplicarDegradeRastro(letra, finalGota, opacidade, gota.fonte, gota.profundidade, luz);
    }
  });
}

function calcularLuzCodigo(x, y) {
  const distanciaX = x - mouseCodigoX;
  const distanciaY = y - mouseCodigoY;
  const distanciaFeixe = Math.sqrt(distanciaX * distanciaX * 1.8 + distanciaY * distanciaY * 0.72);
  const luz = Math.pow(1 - distanciaFeixe / raioLuzCodigo, 2.2);

  return limitarNumero(0.1 + luz * 0.9, 0.1, 1);
}

function aplicarDegradeRastro(letra, finalGota, opacidade, fonte, profundidade, luz) {
  const inicioRastro = limitarNumero(finalGota, 0, 1);
  const brilhoRastro = Math.pow(inicioRastro, 0.62);
  const caudaRastro = Math.pow(inicioRastro, 1.35);
  const matiz = 275 + brilhoRastro * 16;
  const saturacao = 0.78 + brilhoRastro * 0.18;
  const luminosidade = 0.1 + brilhoRastro * 0.34 + caudaRastro * 0.12;
  const forcaProfundidade = 0.54 + profundidade * 0.58;
  const transparencia = opacidade * (0.24 + brilhoRastro * 0.64) * forcaProfundidade * luz;
  const tamanho = fonte * (0.86 + brilhoRastro * 0.22);

  letra.material.opacity = limitarNumero(transparencia, 0.04, 0.68);
  letra.material.color.setHSL(matiz / 360, saturacao, luminosidade * forcaProfundidade);
  letra.scale.set(tamanho, tamanho, 1);
}

function escolherSimboloCodigo() {
  return simbolosCodigo[Math.floor(Math.random() * simbolosCodigo.length)];
}

function criarFundoCodigoSimples() {
  if (document.querySelector(".fundo-codigo-simples")) {
    return;
  }

  const fundoSimples = document.createElement("div");
  const totalColunas = window.innerWidth <= 700 ? 16 : 34;

  fundoSimples.className = "fundo-codigo-simples";

  for (let i = 0; i < totalColunas; i++) {
    const coluna = document.createElement("span");
    let texto = "";

    const tamanho = Math.random() > 0.55 ? 28 + Math.floor(Math.random() * 22) : 12 + Math.floor(Math.random() * 18);

    for (let j = 0; j < tamanho; j++) {
      texto += escolherSimboloCodigo() + "\n";
    }

    coluna.textContent = texto;
    coluna.style.left = (i / totalColunas * 100) + "%";
    coluna.style.animationDelay = -(Math.random() * 8).toFixed(2) + "s";
    coluna.style.animationDuration = (2.8 + Math.random() * 4.2).toFixed(2) + "s";
    coluna.style.fontSize = (11 + Math.random() * 12).toFixed(0) + "px";
    fundoSimples.appendChild(coluna);
  }

  document.body.prepend(fundoSimples);
}

function iniciarCodigo() {
  if (!window.THREE) {
    criarFundoCodigoSimples();
    return;
  }

  if (animacaoCodigo) {
    return;
  }

  tempoAnteriorCodigo = performance.now();
  ultimoQuadroCodigo = tempoAnteriorCodigo;
  animacaoCodigo = requestAnimationFrame(desenharFundoCodigo);
}

function pararCodigo() {
  if (!animacaoCodigo) {
    return;
  }

  cancelAnimationFrame(animacaoCodigo);
  animacaoCodigo = null;
}

function prepararFundoCodigo() {
  clearTimeout(esperaResizeCodigo);
  esperaResizeCodigo = setTimeout(criarFundoCodigo, 180);
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
window.addEventListener("resize", prepararFundoCodigo);
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    pararCodigo();
  } else {
    iniciarCodigo();
  }
});

if (window.matchMedia("(pointer: fine)").matches) {
  window.addEventListener("mousemove", atualizarMouse, { passive: true });
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
criarFundoCodigo();
iniciarCodigo();
