const pagina = document.querySelector(".pagina");
const botaoMenu = document.querySelector(".botao-menu");
const linksMenu = document.querySelectorAll(".links-menu a, .navegacao-inicio a");
const secoes = document.querySelectorAll(".secao");
const avatarFundo = document.querySelector(".avatar-fundo");
const avatarRosto = document.querySelector(".avatar-rosto");
const olhosAvatar = document.querySelectorAll(".olho-avatar");
const silhuetaTopoCard = document.querySelector(".silhueta-topo-card");
const imagemSilhueta = document.querySelector(".silhueta-topo-card img");
const imagemHologramaEsquerda = document.querySelector(".gif-sobre-esquerda");
const terminalSaida = document.querySelector(".terminal-saida");
const terminalTexto = document.querySelector("#terminal-texto");
const mapaProjetos = document.querySelector("#mapaProjetos");
const trilhasMapa = document.querySelector(".mapa-trilhas");
const personagemMapa = document.querySelector("#personagemMapa");
const mapaTooltip = document.querySelector("#mapaTooltip");
const miniGameProjetos = document.querySelector("#miniGameProjetos");
const secaoProjetos = document.querySelector("#projetos");
const cardGame = document.querySelector(".card-game");
const gameViewport = document.querySelector(".game-viewport");
const gameStage = document.querySelector("#gameStage");
const iframeMiniGame = document.querySelector("#iframeMiniGame");
const urlCursorGame = new URL("./game/assets/icons/cursor-game.png", window.location.href).href;
const urlPointerGame = new URL("./game/assets/icons/pointer-game.png", window.location.href).href;
const cursorGame = 'url("' + urlCursorGame + '") 19 5, auto';
const cursorGamePortfolio = cursorGame;
const cursorPointerGame = 'url("' + urlPointerGame + '") 20 4, pointer';
const botaoCarregarGame = document.querySelector("#botaoCarregarGame");
const miniGamePlaceholder = document.querySelector("#miniGamePlaceholder");
const modalProjeto = document.querySelector("#modalProjeto");
const modalNivel = document.querySelector("#modalNivel");
const modalTipo = document.querySelector("#modalTipo");
const modalTitulo = document.querySelector("#modalTitulo");
const modalStatus = document.querySelector("#modalStatus");
const modalDescricao = document.querySelector("#modalDescricao");
const modalDesafio = document.querySelector("#modalDesafio");
const modalTecnologias = document.querySelector("#modalTecnologias");
const modalLinks = document.querySelector("#modalLinks");
const fecharModalProjeto = document.querySelector(".fechar-modal");
const areaPagina = document.documentElement;
const simbolosCodigo = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "H", "K", "L", "M", "N", "R", "S", "T", "X", "Y", "Z", "a", "b", "d", "e", "g", "h", "n", "o", "r", "s", "t", "u", "x", "z", "ア", "カ", "タ", "メ", "+", "-", "=", "#", "$", "%", "&", "*", "/", "\\", "|", "_", ":", ";", "{", "}", "[", "]", "(", ")", "<", ">"];
const gotasCodigo = [];
const texturasCodigo = {};
const projetosMapa = [
  {
    id: "portfolio",
    nome: "Portfólio pessoal",
    tipo: "fase",
    status: "em-desenvolvimento",
    nivel: "1-1",
    descricao: "Página estática para apresentar minha trajetória, tecnologias e projetos.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    desafio: "Organizar identidade visual, navegação e responsividade em uma página estática.",
    repo: "",
    demo: "",
    x: 12,
    y: 62,
    conexoes: ["landing-page", "pagina-simples"]
  },
  {
    id: "landing-page",
    nome: "Landing Page",
    tipo: "fase",
    status: "planejado",
    nivel: "1-2",
    descricao: "Página simples para praticar apresentação visual, chamada para ação e responsividade.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    desafio: "Criar uma página clara, bonita e direta sem depender de frameworks.",
    repo: "",
    demo: "",
    x: 25,
    y: 48,
    conexoes: ["portfolio", "pagina-simples"]
  },
  {
    id: "pagina-simples",
    nome: "Página simples",
    tipo: "fase",
    status: "planejado",
    nivel: "1-3",
    descricao: "Projeto menor para treinar estrutura HTML, estilos e comportamento básico com JavaScript.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    desafio: "Praticar base visual e organização de conteúdo sem exagerar na complexidade.",
    repo: "",
    demo: "",
    x: 30,
    y: 64,
    conexoes: ["portfolio", "landing-page", "cadastro", "cardapio"]
  },
  {
    id: "cadastro",
    nome: "Sistema de cadastro",
    tipo: "fase",
    status: "planejado",
    nivel: "1-4",
    descricao: "Projeto para praticar cadastro, listagem, edição e remoção de registros.",
    tecnologias: ["HTML", "CSS", "JavaScript", "Node.js"],
    desafio: "Criar um fluxo simples de cadastro com dados organizados e interface fácil de usar.",
    repo: "",
    demo: "",
    x: 38,
    y: 48,
    conexoes: ["pagina-simples", "api-rest", "site-institucional"]
  },
  {
    id: "api-rest",
    nome: "API REST de tarefas",
    tipo: "fase",
    status: "planejado",
    nivel: "1-5",
    descricao: "Projeto para praticar rotas, organização de dados e operações de tarefas.",
    tecnologias: ["Node.js", "Express", "PostgreSQL"],
    desafio: "Criar rotas claras para cadastrar, listar, editar e remover tarefas.",
    repo: "",
    demo: "",
    x: 51,
    y: 36,
    conexoes: ["cadastro", "saas", "dashboard"]
  },
  {
    id: "cardapio",
    nome: "Cardápio digital",
    tipo: "fase",
    status: "planejado",
    nivel: "1-6",
    descricao: "Página planejada para organizar produtos, categorias e informações de contato.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    desafio: "Montar uma interface simples para consulta rápida em celular.",
    repo: "",
    demo: "",
    x: 26,
    y: 78,
    conexoes: ["pagina-simples", "site-institucional"]
  },
  {
    id: "site-institucional",
    nome: "Site institucional",
    tipo: "fase",
    status: "planejado",
    nivel: "1-7",
    descricao: "Site planejado para apresentar uma marca, serviços e formas de contato.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    desafio: "Organizar páginas e seções com leitura confortável e visual profissional.",
    repo: "",
    demo: "",
    x: 44,
    y: 72,
    conexoes: ["cadastro", "cardapio", "dashboard"]
  },
  {
    id: "dashboard",
    nome: "Dashboard básico",
    tipo: "fase",
    status: "planejado",
    nivel: "1-8",
    descricao: "Tela planejada para praticar cards de resumo, filtros e dados organizados.",
    tecnologias: ["HTML", "CSS", "JavaScript", "SQL"],
    desafio: "Transformar informações em uma tela fácil de acompanhar.",
    repo: "",
    demo: "",
    x: 60,
    y: 68,
    conexoes: ["site-institucional", "api-rest", "sistema-admin", "plataforma-financeira"]
  },
  {
    id: "saas",
    nome: "SaaS",
    tipo: "boss",
    status: "planejado",
    nivel: "Boss 1",
    descricao: "Sistema completo planejado com usuários, assinaturas e painel administrativo.",
    tecnologias: ["Node.js", "PostgreSQL", "Autenticação", "Pagamentos"],
    desafio: "Unir login, banco de dados, planos e gestão em uma aplicação maior.",
    repo: "",
    demo: "",
    x: 64,
    y: 24,
    conexoes: ["api-rest", "sistema-admin", "ecommerce"]
  },
  {
    id: "sistema-admin",
    nome: "Sistema administrativo",
    tipo: "boss",
    status: "planejado",
    nivel: "Boss 2",
    descricao: "Sistema para organizar informações, telas de consulta, filtros e controle de dados.",
    tecnologias: ["JavaScript", "Node.js", "Express", "PostgreSQL"],
    desafio: "Criar telas úteis para consultar, filtrar e manter dados com organização.",
    repo: "",
    demo: "",
    x: 78,
    y: 48,
    conexoes: ["saas", "dashboard", "ecommerce", "chatbot"]
  },
  {
    id: "ecommerce",
    nome: "E-commerce",
    tipo: "boss",
    status: "planejado",
    nivel: "Boss 3",
    descricao: "Projeto futuro para praticar catálogo, carrinho e fluxo de compra.",
    tecnologias: ["Node.js", "Express", "PostgreSQL", "APIs REST"],
    desafio: "Organizar produtos, pedidos e pagamentos em um fluxo confiável.",
    repo: "",
    demo: "",
    x: 88,
    y: 28,
    conexoes: ["saas", "sistema-admin"]
  },
  {
    id: "chatbot",
    nome: "Chatbot IA",
    tipo: "boss",
    status: "planejado",
    nivel: "Boss 4",
    descricao: "Projeto futuro para explorar conversa automatizada e integração com sistemas.",
    tecnologias: ["JavaScript", "Node.js", "APIs"],
    desafio: "Criar respostas úteis e conectar o bot a dados reais de forma simples.",
    repo: "",
    demo: "",
    x: 88,
    y: 68,
    conexoes: ["sistema-admin", "plataforma-financeira"]
  },
  {
    id: "plataforma-financeira",
    nome: "Plataforma financeira",
    tipo: "boss",
    status: "planejado",
    nivel: "Boss 5",
    descricao: "Projeto futuro para estudar cobranças, relatórios e organização financeira.",
    tecnologias: ["Node.js", "Express", "PostgreSQL", "APIs"],
    desafio: "Lidar com dados financeiros com clareza, filtros e cuidado nas regras.",
    repo: "",
    demo: "",
    x: 72,
    y: 82,
    conexoes: ["dashboard", "chatbot"]
  }
];
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
const intervaloCodigo = 1000 / 18;
let mouseCodigoX = -1000;
let mouseCodigoY = -1000;
const raioLuzCodigo = 330;
let mouseAtual = null;
let mousePendente = false;
let quadroSilhueta = 1;
let animacaoSilhueta = null;
let quadroHologramaEsquerda = 1;
let animacaoHologramaEsquerda = null;
let terminalDigitado = false;
let esperaTerminal = null;
let idSecaoAtual = "";
let idProjetoAtual = "portfolio";
let personagemMovendo = false;
const larguraBaseGame = 1920;
const alturaBaseGame = 1080;

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
  moverLuzHologramaEsquerda(evento);
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
  const alcance = Math.max(posicao.width, posicao.height) * 1.05;
  const visivel = luzX > -120 && luzX < posicao.width + 120 && luzY > -120 && luzY < posicao.height + 120 && distancia < alcance;

  silhuetaTopoCard.style.setProperty("--luz-silhueta-x", luzX + "px");
  silhuetaTopoCard.style.setProperty("--luz-silhueta-y", luzY + "px");
  silhuetaTopoCard.classList.toggle("silhueta-visivel", visivel);
}

function moverLuzHologramaEsquerda(evento) {
  if (!imagemHologramaEsquerda) {
    return;
  }

  const posicao = imagemHologramaEsquerda.getBoundingClientRect();
  const luzX = evento.clientX - posicao.left;
  const luzY = evento.clientY - posicao.top;
  const distanciaX = luzX - posicao.width / 2;
  const distanciaY = luzY - posicao.height / 2;
  const distancia = Math.sqrt(distanciaX * distanciaX + distanciaY * distanciaY);
  const alcance = Math.max(posicao.width, posicao.height) * 0.68;
  const visivel = luzX > -120 && luzX < posicao.width + 120 && luzY > -120 && luzY < posicao.height + 120 && distancia < alcance;

  imagemHologramaEsquerda.style.setProperty("--luz-holograma-x", luzX + "px");
  imagemHologramaEsquerda.style.setProperty("--luz-holograma-y", luzY + "px");
  imagemHologramaEsquerda.classList.toggle("holograma-visivel", visivel);
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

  const espacoColuna = larguraCodigo <= 700 ? 4 : 4;
  const limiteGotas = larguraCodigo <= 700 ? 230 : 520;
  const quantidadeColunas = Math.min(Math.ceil(larguraCodigo / espacoColuna) * 2, limiteGotas);

  for (let i = 0; i < quantidadeColunas; i++) {
    const tipoGota = Math.random();
    const gotaMuitoGrande = tipoGota > 0.82;
    const gotaGrande = !gotaMuitoGrande && tipoGota > 0.58;
    const gotaMedia = !gotaMuitoGrande && !gotaGrande && tipoGota > 0.28;
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
  renderizadorCodigo.setPixelRatio(0.62);
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
    opacity: neon ? 1 : 0.86,
    color: neon ? 0xf4e8ff : 0x9b4dff,
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
  contexto.font = "bold 54px Consolas, 'Lucida Console', 'Courier New', monospace";
  contexto.shadowColor = neon ? "#fff7ff" : "#a855ff";
  contexto.shadowBlur = neon ? 30 : 18;

  if (neon) {
    const degrade = contexto.createLinearGradient(0, 18, 0, 78);
    degrade.addColorStop(0, "#ffffff");
    degrade.addColorStop(0.18, "#f6eaff");
    degrade.addColorStop(0.48, "#c8a2ff");
    degrade.addColorStop(0.76, "#9b4dff");
    degrade.addColorStop(1, "#5e18d8");
    contexto.fillStyle = degrade;
  } else {
    contexto.fillStyle = "#dbc7ff";
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
      letra.material.opacity = limitarNumero((0.98 + gota.profundidade * 0.22) * luz, 0, 1);
      letra.material.color.setHex(0xf4e8ff);
      letra.scale.set(gota.fonte * 1.46, gota.fonte * 1.46, 1);
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

  return limitarNumero(luz * 1.85, 0, 1);
}

function aplicarDegradeRastro(letra, finalGota, opacidade, fonte, profundidade, luz) {
  const inicioRastro = limitarNumero(finalGota, 0, 1);
  const brilhoRastro = Math.pow(inicioRastro, 0.62);
  const caudaRastro = Math.pow(inicioRastro, 1.35);
  const matiz = 270 + brilhoRastro * 16;
  const saturacao = 0.92 + brilhoRastro * 0.08;
  const luminosidade = 0.16 + brilhoRastro * 0.46 + caudaRastro * 0.16;
  const forcaProfundidade = 0.54 + profundidade * 0.58;
  const transparencia = opacidade * (0.24 + brilhoRastro * 0.64) * forcaProfundidade * luz;
  const tamanho = fonte * (0.86 + brilhoRastro * 0.22);

  letra.material.opacity = limitarNumero(transparencia * 1.72, 0.07, 0.94);
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

function caminhoQuadroSilhueta(numero) {
  const quadro = String(numero).padStart(2, "0");

  return "./assets/images/silhueta-neon-roxa-frame-" + quadro + ".png";
}

function prepararSilhueta() {
  if (!imagemSilhueta) {
    return;
  }

  const total = Number(imagemSilhueta.dataset.totalFrames || 1);

  for (let i = 1; i <= total; i++) {
    const imagem = new Image();
    imagem.src = caminhoQuadroSilhueta(i);
  }
}

function trocarQuadroSilhueta() {
  if (!imagemSilhueta) {
    return;
  }

  const total = Number(imagemSilhueta.dataset.totalFrames || 1);

  quadroSilhueta += 1;

  if (quadroSilhueta > total) {
    quadroSilhueta = 1;
  }

  imagemSilhueta.src = caminhoQuadroSilhueta(quadroSilhueta);
}

function iniciarSilhueta() {
  if (!imagemSilhueta || animacaoSilhueta) {
    return;
  }

  animacaoSilhueta = setInterval(trocarQuadroSilhueta, 90);
}

function pararSilhueta() {
  if (!animacaoSilhueta) {
    return;
  }

  clearInterval(animacaoSilhueta);
  animacaoSilhueta = null;
}

function caminhoQuadroHologramaEsquerda(numero) {
  const quadro = String(numero).padStart(2, "0");

  return "./assets/images/holograma_glitch_esquerda_frame-" + quadro + ".png";
}

function prepararHologramaEsquerda() {
  if (!imagemHologramaEsquerda) {
    return;
  }

  const total = Number(imagemHologramaEsquerda.dataset.totalFrames || 1);

  for (let i = 1; i <= total; i++) {
    const imagem = new Image();
    imagem.src = caminhoQuadroHologramaEsquerda(i);
  }
}

function trocarQuadroHologramaEsquerda() {
  if (!imagemHologramaEsquerda) {
    return;
  }

  const total = Number(imagemHologramaEsquerda.dataset.totalFrames || 1);

  quadroHologramaEsquerda += 1;

  if (quadroHologramaEsquerda > total) {
    quadroHologramaEsquerda = 1;
  }

  imagemHologramaEsquerda.src = caminhoQuadroHologramaEsquerda(quadroHologramaEsquerda);
}

function iniciarHologramaEsquerda() {
  if (!imagemHologramaEsquerda || animacaoHologramaEsquerda) {
    return;
  }

  animacaoHologramaEsquerda = setInterval(trocarQuadroHologramaEsquerda, 75);
}

function pararHologramaEsquerda() {
  if (!animacaoHologramaEsquerda) {
    return;
  }

  clearInterval(animacaoHologramaEsquerda);
  animacaoHologramaEsquerda = null;
}

function pegarTextoTerminal() {
  if (!terminalTexto) {
    return "";
  }

  const informacoes = terminalTexto.content.querySelector("[data-terminal-info]");
  const arte = terminalTexto.content.querySelector("[data-terminal-arte]");

  if (!informacoes || !arte) {
    return "";
  }

  const textoInformacoes = informacoes.textContent.replace(/\r/g, "");
  const textoArte = centralizarAscii(arte.textContent.replace(/\r/g, ""));

  if (window.innerWidth <= 900) {
    return textoInformacoes + "\n\n" + textoArte;
  }

  return juntarColunasTerminal(textoInformacoes, textoArte);
}

function centralizarAscii(texto) {
  const linhas = texto.split("\n");
  let linhasAntesDoDesenho = 0;

  while (linhas.length && !linhas[linhas.length - 1].trim()) {
    linhas.pop();
  }

  while (linhasAntesDoDesenho < linhas.length && !linhas[linhasAntesDoDesenho].trim()) {
    linhasAntesDoDesenho++;
  }

  const linhasDesenho = linhas.slice(linhasAntesDoDesenho);

  alinharMundoComHello(linhasDesenho);

  const linhasComTexto = linhasDesenho.filter(function (linha) {
    return linha.trim();
  });

  const margemComum = linhasComTexto.reduce(function (menor, linha) {
    const espacos = linha.match(/^ */)[0].length;

    return Math.min(menor, espacos);
  }, Infinity);

  const desenho = linhasDesenho.map(function (linha) {
    const semMargem = margemComum === Infinity ? linha : linha.slice(margemComum);

    return semMargem.replace(/\s+$/, "");
  }).join("\n");

  return "\n".repeat(Math.min(linhasAntesDoDesenho, 6)) + desenho;
}

function alinharMundoComHello(linhas) {
  const linhaVazia = linhas.findIndex(function (linha, indice) {
    return indice > 0 && !linha.trim();
  });

  if (linhaVazia < 1 || linhaVazia >= linhas.length - 1) {
    return;
  }

  const centroHello = centroLinhaAscii(linhas[0]);
  const centroMundo = centroBlocoAscii(linhas.slice(linhaVazia + 1));

  if (centroHello === null || centroMundo === null) {
    return;
  }

  const deslocamento = Math.round(centroHello - centroMundo);

  if (deslocamento <= 0) {
    return;
  }

  for (let i = linhaVazia + 1; i < linhas.length; i++) {
    if (linhas[i].trim()) {
      linhas[i] = " ".repeat(deslocamento) + linhas[i];
    }
  }
}

function centroLinhaAscii(linha) {
  const inicio = linha.search(/\S/);

  if (inicio < 0) {
    return null;
  }

  const fim = linha.length - linha.match(/\s*$/)[0].length - 1;

  return (inicio + fim) / 2;
}

function centroBlocoAscii(linhas) {
  let inicio = Infinity;
  let fim = -Infinity;

  linhas.forEach(function (linha) {
    const primeiro = linha.search(/\S/);

    if (primeiro < 0) {
      return;
    }

    const ultimo = linha.length - linha.match(/\s*$/)[0].length - 1;

    inicio = Math.min(inicio, primeiro);
    fim = Math.max(fim, ultimo);
  });

  if (inicio === Infinity) {
    return null;
  }

  return (inicio + fim) / 2;
}

function juntarColunasTerminal(textoInformacoes, textoArte) {
  const linhasInformacoes = textoInformacoes.split("\n");
  const linhasArte = ajustarArteComTopicos(linhasInformacoes, textoArte.split("\n"));
  const totalLinhas = Math.max(linhasInformacoes.length, linhasArte.length);
  const espacoMinimo = 8;
  const larguraInformacoes = maiorLinhaTerminal(linhasInformacoes);
  const larguraArte = maiorLinhaTerminal(linhasArte);
  const larguraTerminal = pegarLarguraTerminalEmCaracteres();
  const espacoDisponivel = larguraTerminal - larguraInformacoes;
  const colunaArte = larguraTerminal > 0
    ? Math.max(larguraInformacoes + espacoMinimo, larguraInformacoes + Math.floor((espacoDisponivel - larguraArte) / 2))
    : 84;
  const linhas = [];

  for (let i = 0; i < totalLinhas; i++) {
    const linhaInformacao = linhasInformacoes[i] || "";
    const linhaArte = linhasArte[i] || "";

    if (linhaArte) {
      const espacos = Math.max(espacoMinimo, colunaArte - linhaInformacao.length);

      linhas.push(linhaInformacao + " ".repeat(espacos) + linhaArte);
    } else {
      linhas.push(linhaInformacao);
    }
  }

  return linhas.join("\n");
}

function maiorLinhaTerminal(linhas) {
  return linhas.reduce(function (maior, linha) {
    return Math.max(maior, linha.replace(/\s+$/, "").length);
  }, 0);
}

function pegarLarguraTerminalEmCaracteres() {
  if (!terminalSaida) {
    return 0;
  }

  const estilo = window.getComputedStyle(terminalSaida);
  const medida = document.createElement("span");

  medida.textContent = "0000000000";
  medida.style.position = "absolute";
  medida.style.visibility = "hidden";
  medida.style.whiteSpace = "pre";
  medida.style.font = estilo.font;

  document.body.appendChild(medida);

  const larguraLetra = medida.getBoundingClientRect().width / 10;

  medida.remove();

  if (!larguraLetra) {
    return 0;
  }

  return Math.floor(terminalSaida.clientWidth / larguraLetra);
}

function ajustarArteComTopicos(linhasInformacoes, linhasArte) {
  const inicioTopicos = linhasInformacoes.findIndex(function (linha) {
    return linha.trim() === "[base]";
  });

  const inicioArte = linhasArte.findIndex(function (linha) {
    return linha.trim();
  });

  if (inicioTopicos < 0 || inicioArte < 0) {
    return linhasArte;
  }

  let fimTopicos = inicioTopicos;

  for (let i = inicioTopicos; i < linhasInformacoes.length; i++) {
    const linha = linhasInformacoes[i].trim();

    if (linha === "C:\\Users\\Lucas>") {
      break;
    }

    if (linha) {
      fimTopicos = i;
    }
  }

  let fimArte = inicioArte;

  for (let i = inicioArte; i < linhasArte.length; i++) {
    if (linhasArte[i].trim()) {
      fimArte = i;
    }
  }

  const centroTopicos = (inicioTopicos + fimTopicos) / 2;
  const centroArte = (inicioArte + fimArte) / 2;
  const linhasParaDescer = Math.round(centroTopicos - centroArte) - 5;

  if (linhasParaDescer > 0) {
    return new Array(linhasParaDescer).fill("").concat(linhasArte);
  }

  if (linhasParaDescer < 0) {
    return linhasArte.slice(Math.min(Math.abs(linhasParaDescer), inicioArte));
  }

  return linhasArte;
}

function iniciarTerminal() {
  if (!terminalSaida || terminalDigitado) {
    return;
  }

  const texto = pegarTextoTerminal();

  if (!texto) {
    return;
  }

  terminalDigitado = true;
  terminalSaida.textContent = "";

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    terminalSaida.textContent = texto;
    return;
  }

  let posicaoAtual = 0;

  function escreverCaractere() {
    if (posicaoAtual >= texto.length) {
      return;
    }

    const caractere = texto[posicaoAtual];
    terminalSaida.textContent += caractere;
    posicaoAtual += 1;

    const intervalo = caractere === "\n" ? 18 : caractere === " " ? 1 : 1;
    esperaTerminal = setTimeout(escreverCaractere, intervalo);
  }

  escreverCaractere();
}

function pegarProjetoMapa(idProjeto) {
  return projetosMapa.find(function (projeto) {
    return projeto.id === idProjeto;
  });
}

function textoStatusProjeto(status) {
  const textos = {
    planejado: "Planejado",
    "em-desenvolvimento": "Em desenvolvimento",
    concluido: "Concluído"
  };

  return textos[status] || status;
}

function textoTipoProjeto(tipo) {
  return tipo === "boss" ? "Boss / castelo" : "Fase simples";
}

function criarTrilhasMapa() {
  if (!trilhasMapa) {
    return;
  }

  const trilhasCriadas = [];
  trilhasMapa.innerHTML = "";

  projetosMapa.forEach(function (projeto) {
    projeto.conexoes.forEach(function (idConexao) {
      const destino = pegarProjetoMapa(idConexao);
      const chave = [projeto.id, idConexao].sort().join("-");

      if (!destino || trilhasCriadas.includes(chave)) {
        return;
      }

      const caminho = document.createElementNS("http://www.w3.org/2000/svg", "path");
      const meioX = (projeto.x + destino.x) / 2;
      const curva = Math.abs(projeto.y - destino.y) > 18 ? 4 : -4;

      caminho.setAttribute("d", "M " + projeto.x + " " + projeto.y + " C " + meioX + " " + (projeto.y + curva) + ", " + meioX + " " + (destino.y - curva) + ", " + destino.x + " " + destino.y);
      caminho.classList.add("trilha-conexao");
      trilhasMapa.appendChild(caminho);
      trilhasCriadas.push(chave);
    });
  });
}

function criarMapaProjetos() {
  if (!mapaProjetos) {
    return;
  }

  criarTrilhasMapa();

  projetosMapa.forEach(function (projeto) {
    const botaoProjeto = document.createElement("button");
    const labelProjeto = document.createElement("span");
    const statusProjeto = document.createElement("span");

    botaoProjeto.type = "button";
    botaoProjeto.className = "ponto-projeto " + projeto.tipo + " status-" + projeto.status;
    botaoProjeto.dataset.projeto = projeto.id;
    botaoProjeto.style.setProperty("--x", projeto.x + "%");
    botaoProjeto.style.setProperty("--y", projeto.y + "%");
    botaoProjeto.setAttribute("aria-label", "Abrir detalhes do projeto " + projeto.nome);

    if (projeto.id === "saas") {
      botaoProjeto.classList.add("boss-principal");
    }

    if (projeto.tipo === "boss") {
      const castelo = document.createElement("span");
      castelo.className = "castelo";
      botaoProjeto.appendChild(castelo);
    } else {
      const nivel = document.createElement("span");
      const brilho = document.createElement("span");

      nivel.className = "nivel";
      nivel.textContent = projeto.nivel;
      brilho.className = "ponto-brilho";
      botaoProjeto.appendChild(nivel);
      botaoProjeto.appendChild(brilho);
    }

    labelProjeto.className = "label";
    labelProjeto.textContent = projeto.nome;
    statusProjeto.className = "mapa-status-ponto";
    statusProjeto.textContent = textoStatusProjeto(projeto.status);

    labelProjeto.appendChild(statusProjeto);
    botaoProjeto.appendChild(labelProjeto);
    botaoProjeto.addEventListener("click", function (evento) {
      evento.stopPropagation();
      moverParaProjeto(projeto.id);
      abrirProjetoMapa(projeto.id);
    });

    mapaProjetos.appendChild(botaoProjeto);
  });

  atualizarPersonagem(pegarProjetoMapa(idProjetoAtual));
  destacarProjetoAtual();
}

function atualizarPersonagem(projeto) {
  if (!personagemMapa || !projeto) {
    return;
  }

  personagemMapa.style.setProperty("--personagem-x", projeto.x + "%");
  personagemMapa.style.setProperty("--personagem-y", projeto.y + "%");
  mostrarTooltipProjeto(projeto);
}

function destacarProjetoAtual() {
  const projetoAtual = pegarProjetoMapa(idProjetoAtual);

  document.querySelectorAll(".ponto-projeto").forEach(function (botao) {
    const projeto = pegarProjetoMapa(botao.dataset.projeto);
    const disponivel = projetoAtual && projetoAtual.conexoes.includes(botao.dataset.projeto);

    botao.classList.toggle("ponto-atual", botao.dataset.projeto === idProjetoAtual);
    botao.classList.toggle("ponto-disponivel", Boolean(disponivel));
  });
}

function mostrarTooltipProjeto(projeto) {
  if (!mapaTooltip || !projeto) {
    return;
  }

  mapaTooltip.hidden = false;
  mapaTooltip.style.setProperty("--tooltip-x", projeto.x + "%");
  mapaTooltip.style.setProperty("--tooltip-y", projeto.y + "%");
  mapaTooltip.innerHTML = "<strong></strong><span></span>";
  mapaTooltip.querySelector("strong").textContent = projeto.nome;
  mapaTooltip.querySelector("span").textContent = "Enter para abrir";
}

function pegarProjetoNaDirecao(direcao) {
  const projetoAtual = pegarProjetoMapa(idProjetoAtual);

  if (!projetoAtual) {
    return null;
  }

  const conectados = projetoAtual.conexoes
    .map(pegarProjetoMapa)
    .filter(Boolean);

  const candidatos = conectados.filter(function (projeto) {
    if (direcao === "direita") {
      return projeto.x > projetoAtual.x + 1;
    }

    if (direcao === "esquerda") {
      return projeto.x < projetoAtual.x - 1;
    }

    if (direcao === "cima") {
      return projeto.y < projetoAtual.y - 1;
    }

    return projeto.y > projetoAtual.y + 1;
  });

  if (!candidatos.length) {
    return null;
  }

  candidatos.sort(function (a, b) {
    const distanciaA = Math.abs(a.x - projetoAtual.x) + Math.abs(a.y - projetoAtual.y);
    const distanciaB = Math.abs(b.x - projetoAtual.x) + Math.abs(b.y - projetoAtual.y);

    return distanciaA - distanciaB;
  });

  return candidatos[0];
}

function moverPersonagem(direcao) {
  const destino = pegarProjetoNaDirecao(direcao);
  const origem = pegarProjetoMapa(idProjetoAtual);

  if (!destino || personagemMovendo) {
    return;
  }

  personagemMovendo = true;
  idProjetoAtual = destino.id;

  if (personagemMapa) {
    personagemMapa.classList.add("andando");

    if (origem && destino.x < origem.x) {
      personagemMapa.style.setProperty("--lado-personagem", "-1");
    } else if (origem && destino.x > origem.x) {
      personagemMapa.style.setProperty("--lado-personagem", "1");
    }
  }

  atualizarPersonagem(destino);
  destacarProjetoAtual();

  setTimeout(function () {
    personagemMovendo = false;

    if (personagemMapa) {
      personagemMapa.classList.remove("andando");
    }
  }, 420);
}

function moverParaProjeto(idProjeto) {
  const projeto = pegarProjetoMapa(idProjeto);
  const origem = pegarProjetoMapa(idProjetoAtual);

  if (!projeto) {
    return;
  }

  idProjetoAtual = projeto.id;

  if (personagemMapa && origem && projeto.x < origem.x) {
    personagemMapa.style.setProperty("--lado-personagem", "-1");
  } else if (personagemMapa && origem && projeto.x > origem.x) {
    personagemMapa.style.setProperty("--lado-personagem", "1");
  }

  atualizarPersonagem(projeto);
  destacarProjetoAtual();
}

function controlarMapaPorTeclado(evento) {
  const tecla = evento.key.toLowerCase();
  const direcoes = {
    arrowright: "direita",
    d: "direita",
    arrowleft: "esquerda",
    a: "esquerda",
    arrowup: "cima",
    w: "cima",
    arrowdown: "baixo",
    s: "baixo"
  };

  if (direcoes[tecla]) {
    evento.preventDefault();
    moverPersonagem(direcoes[tecla]);
    return;
  }

  if (tecla === "enter" || tecla === " ") {
    evento.preventDefault();
    abrirProjetoMapa(idProjetoAtual);
  }
}

function criarLinksProjeto(projeto) {
  if (!modalLinks) {
    return;
  }

  modalLinks.innerHTML = "";

  if (projeto.repo) {
    const linkRepo = document.createElement("a");

    linkRepo.href = projeto.repo;
    linkRepo.target = "_blank";
    linkRepo.rel = "noopener noreferrer";
    linkRepo.textContent = "Repositório";
    modalLinks.appendChild(linkRepo);
  } else {
    const repoBreve = document.createElement("span");

    repoBreve.textContent = "Repositório em breve";
    modalLinks.appendChild(repoBreve);
  }

  if (projeto.demo) {
    const linkDemo = document.createElement("a");

    linkDemo.href = projeto.demo;
    linkDemo.target = "_blank";
    linkDemo.rel = "noopener noreferrer";
    linkDemo.textContent = "Demo";
    modalLinks.appendChild(linkDemo);
  }
}

function abrirProjetoMapa(idProjeto) {
  const projeto = pegarProjetoMapa(idProjeto);

  if (!projeto || !modalProjeto || !modalNivel || !modalTipo || !modalTitulo || !modalStatus || !modalDescricao || !modalDesafio || !modalTecnologias) {
    return;
  }

  moverParaProjeto(projeto.id);
  modalNivel.textContent = projeto.nivel;
  modalTipo.textContent = textoTipoProjeto(projeto.tipo);
  modalTitulo.textContent = projeto.nome;
  modalStatus.textContent = "Status: " + textoStatusProjeto(projeto.status);
  modalDescricao.textContent = projeto.descricao;
  modalDesafio.textContent = "Desafio: " + projeto.desafio;
  modalTecnologias.innerHTML = "";

  projeto.tecnologias.forEach(function (tecnologia) {
    const tag = document.createElement("span");

    tag.className = "tag-tech";
    tag.textContent = tecnologia;
    modalTecnologias.appendChild(tag);
  });

  criarLinksProjeto(projeto);
  modalProjeto.hidden = false;

  if (fecharModalProjeto) {
    fecharModalProjeto.focus();
  }
}

function fecharProjetoMapa() {
  if (modalProjeto) {
    modalProjeto.hidden = true;
  }

  if (mapaProjetos) {
    mapaProjetos.focus({ preventScroll: true });
  }
}

function ajustarEscalaGame() {
  if (!gameViewport) {
    return;
  }

  const larguraViewport = gameViewport.clientWidth;
  const alturaViewport = gameViewport.clientHeight;

  if (!larguraViewport || !alturaViewport) {
    return;
  }

  const escalaX = larguraViewport / larguraBaseGame;
  const escalaY = alturaViewport / alturaBaseGame;
  const escala = Math.min(escalaX, escalaY);
  const aumentoTexto = Math.min(1.22, Math.max(1, 1 + (1 - escala) * 0.22));

  if (iframeMiniGame && iframeMiniGame.contentDocument) {
    iframeMiniGame.contentDocument.documentElement.style.setProperty("--aumento-texto-game", aumentoTexto.toFixed(3));

    if (iframeMiniGame.contentDocument.body) {
      iframeMiniGame.contentDocument.body.style.setProperty("--aumento-texto-game", aumentoTexto.toFixed(3));
    }
  }
}

function esconderCursorNativoNoCard() {
  const elementos = [cardGame, gameViewport, gameStage, iframeMiniGame];

  elementos.forEach(function (elemento) {
    if (elemento) {
      elemento.style.setProperty("cursor", "none", "important");
    }
  });

  if (secaoProjetos) {
    secaoProjetos.style.removeProperty("cursor");
  }
}

function iniciarCursorFlutuanteNoIframe() {
  if (!iframeMiniGame || !iframeMiniGame.contentWindow) {
    return;
  }

  if (typeof iframeMiniGame.contentWindow.iniciarCursorFlutuante === "function") {
    iframeMiniGame.contentWindow.iniciarCursorFlutuante({
      urlGame: urlCursorGame,
      urlPointer: urlPointerGame
    });
  }
}

function aplicarCursorGameNoIframe() {
  iniciarCursorFlutuanteNoIframe();
}

function aplicarCursorGameNoCard() {
  esconderCursorNativoNoCard();
}

function manterCursorGameNoCard() {
  esconderCursorNativoNoCard();
  iniciarCursorFlutuanteNoIframe();
}

function carregarMiniGame() {
  if (!iframeMiniGame || iframeMiniGame.getAttribute("src")) {
    return;
  }

  aplicarCursorGameNoCard();
  ajustarEscalaGame();

  const caminhoGame = iframeMiniGame.dataset.src;

  if (!caminhoGame) {
    return;
  }

  iframeMiniGame.src = caminhoGame;

  if (miniGameProjetos) {
    miniGameProjetos.classList.add("game-carregado");
  }

  if (botaoCarregarGame) {
    botaoCarregarGame.disabled = true;
    botaoCarregarGame.textContent = "Carregado";
  }

  if (miniGamePlaceholder) {
    miniGamePlaceholder.hidden = true;
  }
}

function prepararCarregamentoGame() {
  if (!iframeMiniGame) {
    return;
  }

  ajustarEscalaGame();

  if (window.ResizeObserver && gameViewport) {
    const observadorTamanhoGame = new ResizeObserver(ajustarEscalaGame);

    observadorTamanhoGame.observe(gameViewport);
  }

  if (!secaoProjetos || !("IntersectionObserver" in window)) {
    carregarMiniGame();
    return;
  }

  const observadorGame = new IntersectionObserver(function (entradas) {
    if (entradas[0].isIntersecting) {
      carregarMiniGame();
      observadorGame.disconnect();
    }
  }, {
    threshold: 0.1
  });

  observadorGame.observe(secaoProjetos);
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

if (fecharModalProjeto) {
  fecharModalProjeto.addEventListener("click", fecharProjetoMapa);
}

if (modalProjeto) {
  modalProjeto.addEventListener("click", function (evento) {
    if (evento.target === modalProjeto) {
      fecharProjetoMapa();
    }
  });
}

if (mapaProjetos) {
  mapaProjetos.addEventListener("click", function (evento) {
    if (!evento.target.closest(".ponto-projeto")) {
      mapaProjetos.focus({ preventScroll: true });
    }
  });
}

if (botaoCarregarGame) {
  botaoCarregarGame.addEventListener("click", carregarMiniGame);
}

if (iframeMiniGame) {
  iframeMiniGame.addEventListener("load", function () {
    ajustarEscalaGame();
    manterCursorGameNoCard();
  });
}

esconderCursorNativoNoCard();
prepararCarregamentoGame();

document.addEventListener("keydown", function (evento) {
  if (evento.key === "Escape" && modalProjeto && !modalProjeto.hidden) {
    fecharProjetoMapa();
    return;
  }

  if (modalProjeto && !modalProjeto.hidden) {
    return;
  }

  const focoNoMapa = mapaProjetos && (document.activeElement === mapaProjetos || mapaProjetos.contains(document.activeElement));

  if (idSecaoAtual === "projetos" || focoNoMapa) {
    controlarMapaPorTeclado(evento);
  }
});

window.addEventListener("resize", prepararMenu);
window.addEventListener("resize", prepararFundoCodigo);
window.addEventListener("resize", ajustarEscalaGame);
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    pararCodigo();
    pararSilhueta();
    pararHologramaEsquerda();
  } else {
    iniciarCodigo();
    iniciarSilhueta();
    iniciarHologramaEsquerda();
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
      idSecaoAtual = entrada.target.id;
      atualizarMenuAtivo(entrada.target.id);

      if (entrada.target.id === "tecnologias") {
        iniciarTerminal();
      }
    }
  });
}, {
  threshold: 0.45
});

secoes.forEach(function (secao) {
  observador.observe(secao);
});

criarMapaProjetos();
prepararMenu();
prepararSilhueta();
prepararHologramaEsquerda();
criarFundoCodigo();
iniciarCodigo();
iniciarSilhueta();
iniciarHologramaEsquerda();
