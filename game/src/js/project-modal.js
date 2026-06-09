/*
 * Pixel-art project modal for the exported GDevelop build.
 *
 * Phase content is loaded from dashboard.json when available. The local
 * PROJECTS_FALLBACK keeps the modal working if the JSON cannot be fetched.
 */
(function () {
  // Replace this with the public raw GitHub URL when the file is published:
  // https://raw.githubusercontent.com/SEU_USUARIO/SEU_REPO/main/dashboard.json
  const DASHBOARD_JSON_URL = window.DASHBOARD_JSON_URL || "assets/data/dashboard.json";

  let dadosDasFases = null;

  const PROJECTS_FALLBACK = {
    1: {
      level: 1,
      title: "Portf\u00f3lio Pessoal",
      subtitle: "Portf\u00f3lio Interativo",
      description: "Um mapa roxo em pixel art para apresentar projetos como fases jog\u00e1veis.",
      difficulty: 0,
      stats: {
        design: 90,
        codigo: 85,
        criatividade: 95,
        desempenho: 80,
        experiencia: 75,
      },
      equipment: ["HTML", "CSS", "JavaScript", "GDevelop", "VS Code", "GitHub", "Figma", "Aseprite", "Git"],
      steps: ["Idea\u00e7\u00e3o", "Prototipa\u00e7\u00e3o", "Desenvolvimento", "Testes", "Publica\u00e7\u00e3o"],
      achievements: ["Projeto conclu\u00eddo", "Interativo", "P\u00e1ginas criadas", "Responsivo"],
    },
    2: {
      level: 2,
      title: "Mapa Naveg\u00e1vel",
      subtitle: "Rotas e Waypoints",
      description: "Sistema de caminho por etapas que guia o Lucas pela estrada sem pular fases.",
      difficulty: 0,
      stats: {
        design: 82,
        codigo: 88,
        criatividade: 86,
        desempenho: 84,
        experiencia: 80,
      },
      equipment: ["JavaScript", "GDevelop", "VS Code", "GitHub", "Aseprite"],
      steps: ["Idea\u00e7\u00e3o", "Prototipa\u00e7\u00e3o", "Desenvolvimento", "Testes"],
      achievements: ["Projeto conclu\u00eddo", "Interativo", "P\u00e1ginas criadas", "Responsivo"],
    },
    3: {
      level: 3,
      title: "Interface Pixel",
      subtitle: "UI do Game",
      description: "Elementos visuais integrados ao mapa, com placas, detalhes roxos e leitura clara.",
      difficulty: 0,
      stats: {
        design: 92,
        codigo: 78,
        criatividade: 90,
        desempenho: 82,
        experiencia: 86,
      },
      equipment: ["HTML", "CSS", "JavaScript", "Figma", "Aseprite"],
      steps: ["Idea\u00e7\u00e3o", "Prototipa\u00e7\u00e3o", "Desenvolvimento", "Testes"],
      achievements: ["Projeto conclu\u00eddo", "Interativo", "P\u00e1ginas criadas", "Responsivo"],
    },
    4: {
      level: 4,
      title: "Sistema de Controles",
      subtitle: "Clique e WASD",
      description: "Entrada por clique e teclado usando as mesmas rotas do mapa, sem movimento livre.",
      difficulty: 0,
      stats: {
        design: 76,
        codigo: 92,
        criatividade: 84,
        desempenho: 86,
        experiencia: 83,
      },
      equipment: ["JavaScript", "GDevelop", "VS Code", "GitHub"],
      steps: ["Prototipa\u00e7\u00e3o", "Desenvolvimento", "Testes", "Publica\u00e7\u00e3o"],
      achievements: ["Projeto conclu\u00eddo", "Interativo", "P\u00e1ginas criadas", "Responsivo"],
    },
    5: {
      level: 5,
      title: "Polimento Visual",
      subtitle: "Estrada e Paradas",
      description: "Refino do caminho usando os p\u00e9s do sprite como guia para centralizar na estrada.",
      difficulty: 0,
      stats: {
        design: 88,
        codigo: 82,
        criatividade: 87,
        desempenho: 81,
        experiencia: 90,
      },
      equipment: ["GDevelop", "JavaScript", "Aseprite", "Figma", "VS Code"],
      steps: ["Idea\u00e7\u00e3o", "Desenvolvimento", "Testes", "Publica\u00e7\u00e3o"],
      achievements: ["Projeto conclu\u00eddo", "Interativo", "P\u00e1ginas criadas", "Responsivo"],
    },
    6: {
      level: 6,
      title: "Entrega Final",
      subtitle: "Projeto Publicado",
      description: "Fase de conclus\u00e3o com ajustes finais, revis\u00e3o do fluxo e experi\u00eancia completa.",
      difficulty: 0,
      stats: {
        design: 86,
        codigo: 90,
        criatividade: 88,
        desempenho: 87,
        experiencia: 92,
      },
      equipment: ["HTML", "CSS", "JavaScript", "GDevelop", "VS Code", "GitHub", "Figma", "Aseprite"],
      steps: ["Idea\u00e7\u00e3o", "Prototipa\u00e7\u00e3o", "Desenvolvimento", "Testes", "Publica\u00e7\u00e3o"],
      achievements: ["Projeto conclu\u00eddo", "Interativo", "P\u00e1ginas criadas", "Responsivo"],
    },
  };

  const STAT_KEYS = ["design", "codigo", "criatividade", "desempenho", "experiencia"];
  const STAT_META = {
    design: { label: "Design", icon: "DS", image: "assets/icons/designe_icon.JPG" },
    codigo: { label: "C\u00f3digo", icon: "</>", image: "assets/icons/codigo_icon.JPG" },
    criatividade: { label: "Criatividade", icon: "CR", image: "assets/icons/criaividade_icon.JPG" },
    desempenho: { label: "Desempenho", icon: "DP", image: "assets/icons/desempenho_icon.JPG" },
    experiencia: { label: "Experi\u00eancia", icon: "XP", image: "assets/icons/experiencia_icon.JPG" },
  };

  const EQUIPMENT_META = {
    HTML: { icon: "H5", tone: "html", image: "assets/icons/html_icon.JPG" },
    CSS: { icon: "C3", tone: "css", image: "assets/icons/css_icon.JPG" },
    JavaScript: { icon: "JS", tone: "js", image: "assets/icons/js_icon.JPG" },
    GDevelop: { icon: "GD", tone: "gdevelop", image: "assets/icons/G_icon.JPG" },
    "VS Code": { icon: "VS", tone: "vscode", image: "assets/icons/vs_icon.JPG" },
    GitHub: { icon: "GH", tone: "github", image: "assets/icons/github_icon.JPG" },
    Figma: { icon: "FG", tone: "figma", image: "assets/icons/figma_icon.JPG" },
    Aseprite: { icon: "AS", tone: "aseprite", image: "assets/icons/aseprite_icon.JPG" },
    Phaser: { icon: "PH", tone: "phaser", image: "assets/icons/phaser_icon.JPG" },
    Git: { icon: "GT", tone: "git", image: "assets/icons/git_icon.JPG" },
    NULL: { icon: "", tone: "empty", image: "assets/equipamentos/block.png" },
  };

  const EMPTY_EQUIPMENT_ITEM = {
    nome: "NULL",
    icone: "assets/equipamentos/block.png",
  };

  const ACHIEVEMENT_META = {
    "Projeto conclu\u00eddo": { icon: "OK", value: "100%", image: "assets/icons/projeto-concluido-icon.JPG" },
    Interativo: { icon: "IN", value: "250 XP", image: "assets/icons/interatividade-icon.JPG" },
    Interatividade: { icon: "IN", value: "250 XP", image: "assets/icons/interatividade-icon.JPG" },
    "P\u00e1ginas criadas": { icon: "PG", value: "10 XP", image: "assets/icons/paginas-criadas-icon.JPG" },
    Responsivo: { icon: "RS", value: "100%", image: "assets/icons/responsividade-icon.JPG" },
    Responsividade: { icon: "RS", value: "100%", image: "assets/icons/responsividade-icon.JPG" },
    Publicado: { icon: "PB", value: "ON", image: "assets/icons/paginas-criadas-icon.JPG" },
  };

  const DEFAULT_ACHIEVEMENTS = [
    "Projeto conclu\u00eddo",
    "Interativo",
    "P\u00e1ginas criadas",
    "Responsividade",
  ];

  const DIFFICULTY_STAR_IMAGES = {
    full: "assets/icons/estrela-acesa.png",
    half: "assets/icons/estrela-meio-acesa.png",
    empty: "assets/icons/estrela-apagada.png",
  };

  const STEP_ICON_META = {
    ideacao: {
      unlocked: "assets/icons/ideacao-icon.JPG",
      locked: "assets/icons/ideacao-block-icon.JPG",
    },
    conceito: {
      unlocked: "assets/icons/ideacao-icon.JPG",
      locked: "assets/icons/ideacao-block-icon.JPG",
    },
    prototipacao: {
      unlocked: "assets/icons/prototipacao-icon.JPG",
      locked: "assets/icons/prototipacao-block-icon.JPG",
    },
    desenvolvimento: {
      unlocked: "assets/icons/desenvolvimento-icon.JPG",
      locked: "assets/icons/desenvolvimento-block-icon.JPG",
    },
    testes: {
      unlocked: "assets/icons/testes-icon.JPG",
      locked: "assets/icons/testes-block-icon.JPG",
    },
    publicacao: {
      unlocked: "assets/icons/publicacao-icon.JPG",
      locked: "assets/icons/publicacao--block-icon.JPG",
    },
  };

  let modalRoot = null;
  let activeLevel = null;
  let activeEquipmentPage = 0;

  window.PROJECTS = PROJECTS_FALLBACK;

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function clampPercent(value) {
    const number = Number(value) || 0;
    return Math.max(0, Math.min(100, number));
  }

  function getDashboardPhaseKey(levelOrId) {
    if (typeof levelOrId === "string" && /^fase\d+$/i.test(levelOrId)) {
      return levelOrId.toLowerCase();
    }

    const number = Number(levelOrId) || 1;
    return "fase" + number;
  }

  function getLevelFromPhaseKey(phaseKey) {
    const match = String(phaseKey || "").match(/\d+/);
    return match ? Number(match[0]) : 1;
  }

  function getSafeArray(value, fallback) {
    if (Array.isArray(value)) return value;
    if (Array.isArray(fallback)) return fallback;
    return [];
  }

  function normalizeKey(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "");
  }

  function getOptionalNumber(source, keys, fallback) {
    if (!source || typeof source !== "object") return fallback;

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        const value = Number(source[key]);
        return Number.isFinite(value) ? value : fallback;
      }
    }

    return fallback;
  }

  function normalizeDifficulty(difficulty) {
    const value = Number(difficulty);
    if (!Number.isFinite(value)) return 0;

    const clamped = Math.max(0, Math.min(5, value));
    return Math.round(clamped * 2) / 2;
  }

  function isLockedStatus(status) {
    return status === "bloqueada" || status === "bloqueado";
  }

  function getStepIcon(title, status) {
    const key = normalizeKey(title);
    const meta = STEP_ICON_META[key] || STEP_ICON_META.ideacao;
    return isLockedStatus(status) ? meta.locked : meta.unlocked;
  }

  function normalizeEquipmentItem(item) {
    if (typeof item === "string") {
      if (normalizeKey(item) === "null") {
        return {
          name: "NULL",
          icon: EMPTY_EQUIPMENT_ITEM.icone,
        };
      }

      const meta = EQUIPMENT_META[item] || {};
      return {
        name: item,
        icon: meta.image || "",
      };
    }

    if (!item || typeof item !== "object") {
      return {
        name: "",
        icon: "",
      };
    }

    const name = item.nome || item.name || "";
    if (normalizeKey(name) === "null") {
      return {
        name: "NULL",
        icon: EMPTY_EQUIPMENT_ITEM.icone,
      };
    }

    return {
      name: name,
      icon: item.icone || item.icon || "",
    };
  }

  function normalizeAchievementItem(item) {
    if (typeof item === "string") {
      const meta = ACHIEVEMENT_META[item] || {};
      return {
        name: item,
        value: meta.value || "",
        icon: meta.image || "",
      };
    }

    if (!item || typeof item !== "object") {
      return {
        name: "",
        value: "",
        icon: "",
      };
    }

    return {
      name: item.titulo || item.name || item.title || "",
      value: item.valor || item.value || "",
      icon: item.icone || item.icon || "",
    };
  }

  function normalizeAchievements(conquistas) {
    const incoming = getSafeArray(conquistas, []).map(normalizeAchievementItem);

    return DEFAULT_ACHIEVEMENTS.map(function (defaultName) {
      const defaultAchievement = normalizeAchievementItem(defaultName);
      const customAchievement = incoming.find(function (achievement) {
        return normalizeKey(achievement.name) === normalizeKey(defaultAchievement.name);
      });

      if (!customAchievement) return defaultAchievement;

      return {
        name: defaultAchievement.name,
        value: customAchievement.value || defaultAchievement.value,
        icon: customAchievement.icon || defaultAchievement.icon,
      };
    });
  }

  function normalizeStep(step, index) {
    if (typeof step === "string") {
      const fallbackStatus = index < 3 ? "desbloqueado" : "bloqueada";
      return {
        number: String(index + 1).padStart(2, "0"),
        title: step,
        description: getStepDescription(step),
        status: fallbackStatus,
        icon: getStepIcon(step, fallbackStatus),
        link: "",
      };
    }

    if (!step || typeof step !== "object") {
      return {
        number: String(index + 1).padStart(2, "0"),
        title: "Etapa",
        description: "Etapa registrada no progresso",
        status: "",
        icon: "",
        link: "",
      };
    }

    const status = step.status || "desbloqueado";

    return {
      number: step.numero || step.number || String(index + 1).padStart(2, "0"),
      title: step.titulo || step.title || "",
      description: step.descricao || step.description || "",
      status: status,
      icon: getStepIcon(step.titulo || step.title || "", status),
      link: step.link || step.github || step.deploy || step.site || "",
    };
  }

  function isUnlockedStep(step) {
    const status = normalizeKey(step && step.status);
    return status.indexOf("desbloquead") !== -1 || status.indexOf("concluid") !== -1 || status.indexOf("publicad") !== -1;
  }

  function getStepByTitleOrNumber(steps, title, number) {
    const titleKey = normalizeKey(title);
    const numberKey = String(number || "").padStart(2, "0");

    return getSafeArray(steps, []).find(function (step) {
      return normalizeKey(step.title) === titleKey || String(step.number || "").padStart(2, "0") === numberKey;
    });
  }

  function getProjectLinksFromSteps(steps, fallbackLinks) {
    const links = fallbackLinks || {};
    const conceptStep = getStepByTitleOrNumber(steps, "Conceito", "01");
    const publishStep = getStepByTitleOrNumber(steps, "Publicacao", "05");

    return {
      github: conceptStep ? (isUnlockedStep(conceptStep) ? conceptStep.link || "" : "") : links.github || "",
      deploy: publishStep ? (isUnlockedStep(publishStep) ? publishStep.link || "" : "") : links.deploy || "",
    };
  }

  function normalizeProject(rawProject, phaseKey) {
    const level = rawProject.level || rawProject.numero || getLevelFromPhaseKey(phaseKey);
    const fallback = PROJECTS_FALLBACK[level] || PROJECTS_FALLBACK[1];
    const steps = getSafeArray(rawProject.steps || rawProject.etapas, fallback.steps).map(normalizeStep);

    return {
      level: level,
      title: rawProject.title || rawProject.titulo || fallback.title,
      subtitle: rawProject.subtitle || rawProject.subtitulo || fallback.subtitle,
      description: rawProject.description || rawProject.descricao || fallback.description,
      difficulty: normalizeDifficulty(getOptionalNumber(rawProject, ["difficulty", "dificuldade"], fallback.difficulty || 0)),
      status: rawProject.status || fallback.status || "",
      stats: rawProject.stats || fallback.stats || {},
      equipment: getSafeArray(rawProject.equipment || rawProject.equipamentos || rawProject.tecnologias, fallback.equipment).map(normalizeEquipmentItem),
      steps: steps,
      highlights: getSafeArray(rawProject.highlights || rawProject.destaques, fallback.highlights),
      achievements: normalizeAchievements(rawProject.achievements || rawProject.conquistas, fallback.achievements),
      links: getProjectLinksFromSteps(steps, rawProject.links || fallback.links || {}),
    };
  }

  function obterDadosDaFase(idDaFase) {
    const phaseKey = getDashboardPhaseKey(idDaFase);
    const level = getLevelFromPhaseKey(phaseKey);
    const source = dadosDasFases && typeof dadosDasFases === "object" ? dadosDasFases : null;
    const rawProject = (source && source[phaseKey]) || PROJECTS_FALLBACK[level] || PROJECTS_FALLBACK[1];

    return normalizeProject(rawProject, phaseKey);
  }

  function getProjectByLevel(level) {
    return obterDadosDaFase(getDashboardPhaseKey(level));
  }

  async function carregarDadosDasFases(urlOverride) {
    const baseUrl = urlOverride || DASHBOARD_JSON_URL;
    const separator = baseUrl.indexOf("?") === -1 ? "?" : "&";
    const url = baseUrl + separator + "v=" + Date.now();

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Erro ao carregar dashboard.json");

      const text = await response.text();
      let json;
      try {
        json = JSON.parse(text);
      } catch (parseError) {
        try {
          json = JSON.parse(text.replace(/,\s*([}\]])/g, "$1"));
          console.warn("dashboard.json tinha v\u00edrgula sobrando no fim de lista/objeto. Corrija o arquivo para manter o JSON v\u00e1lido.");
        } catch (secondParseError) {
          throw new Error("dashboard.json inv\u00e1lido: " + secondParseError.message);
        }
      }

      if (!json || typeof json !== "object" || Array.isArray(json)) {
        throw new Error("dashboard.json precisa ser um objeto com chaves fase1, fase2...");
      }

      dadosDasFases = json;
      return dadosDasFases;
    } catch (error) {
      console.warn("Falha ao carregar dashboard.json. Verifique v\u00edrgulas, aspas e chaves. Usando fallback local.", error);
      dadosDasFases = PROJECTS_FALLBACK;
      return PROJECTS_FALLBACK;
    }
  }

  function getNavigationState() {
    const navigation = window.LucasMapNavigation;
    if (!navigation) return null;
    if (typeof navigation.getState === "function") return navigation.getState();
    return navigation.state || null;
  }

  function setNavigationBlocked(isBlocked) {
    if (window.LucasMapNavigation && typeof window.LucasMapNavigation.setProjectModalOpen === "function") {
      window.LucasMapNavigation.setProjectModalOpen(isBlocked);
      return;
    }

    window.LucasProjectModalOpen = !!isBlocked;
  }

  function focusGameCanvas() {
    const canvas = document.querySelector("canvas");
    if (!canvas || typeof canvas.focus !== "function") return;

    if (!canvas.hasAttribute("tabindex")) canvas.setAttribute("tabindex", "-1");
    canvas.focus({ preventScroll: true });
  }

  function ensureStyles() {
    if (document.getElementById("project-modal-styles")) return;

    const style = document.createElement("style");
    style.id = "project-modal-styles";
    style.textContent = `
      .project-modal-root {
        --pm-ink: #050309;
        --pm-panel: #171524;
        --pm-panel-2: #22203a;
        --pm-plate: #f8f1ff;
        --pm-purple: #7c2bd6;
        --pm-purple-2: #b86cff;
        --pm-purple-3: #4b177d;
        --pm-muted: #cfc1ef;
        --pm-shell-h: min(860px, calc(100vh - 86px));
        --pm-modal-scale: 1;
        --aumento-texto-game: 1.32;
        position: fixed;
        inset: 0;
        z-index: 1000;
        display: none;
        align-items: center;
        justify-content: center;
        padding: 28px 36px 58px;
        background:
          linear-gradient(135deg, rgba(70, 29, 132, 0.24) 0 12px, rgba(21, 9, 42, 0.3) 12px 24px),
          rgba(15, 6, 34, 0.66);
        font-family: "Press Start 2P", "Courier New", monospace;
        color: var(--pm-plate);
        box-sizing: border-box;
      }

      .project-modal-root.is-open {
        display: flex;
      }

      .project-modal-shell {
        width: min(1460px, calc(100vw - 72px));
        height: var(--pm-shell-h);
        box-sizing: border-box;
        overflow: visible;
        position: relative;
        display: flex;
        flex-direction: column;
        border: 5px solid var(--pm-ink);
        background:
          linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0 22px, transparent 22px 44px),
          linear-gradient(180deg, #2b174d 0%, #1a122c 48%, #120d20 100%);
        box-shadow:
          0 0 0 4px #5b2594,
          0 0 0 8px var(--pm-ink),
          14px 14px 0 rgba(5, 3, 9, 0.55);
        transform: scale(var(--pm-modal-scale));
        image-rendering: pixelated;
      }

      .project-modal-shell::before,
      .project-modal-shell::after {
        content: "";
        position: absolute;
        top: -5px;
        width: 76px;
        height: 22px;
        border: 4px solid var(--pm-ink);
        background: linear-gradient(90deg, #7530c4, #c283ff);
        box-shadow: inset -8px -5px 0 rgba(25, 9, 49, 0.45);
      }

      .project-modal-shell::before {
        left: 34px;
      }

      .project-modal-shell::after {
        right: 34px;
      }

      .project-modal-close {
        position: absolute;
        top: 0;
        right: -19px;
        z-index: 6;
        width: 38px;
        height: 38px;
        border: 4px solid var(--pm-ink);
        background: var(--pm-plate);
        color: var(--pm-ink);
        box-shadow: inset -5px -5px 0 #c39afb, 4px 4px 0 var(--pm-ink);
        font: inherit;
        font-size: 16px;
        line-height: 1;
        cursor: pointer;
        transform: translate(0, -50%);
      }

      .project-modal-close:active {
        transform: translate(3px, calc(-50% + 3px));
        box-shadow: inset -3px -3px 0 #c39afb, 1px 1px 0 var(--pm-ink);
      }

      .project-modal-bottom-gap {
        position: absolute;
        left: 50%;
        bottom: -13px;
        z-index: 5;
        width: 230px;
        height: 18px;
        background: #120d20;
        pointer-events: none;
        transform: translateX(-50%);
      }

      .project-modal-links {
        position: absolute;
        left: 50%;
        top: 50%;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        transform: translate(-50%, -50%);
      }

      .project-modal-link {
        display: block;
        position: relative;
        pointer-events: auto;
      }

      .project-modal-link.is-disabled,
      .project-modal-link.has-tooltip {
        cursor: url("assets/icons/cursor-game.png") 19 5, auto;
        pointer-events: auto;
      }

      .project-modal-link.has-tooltip::after {
        content: attr(data-tooltip);
        position: absolute;
        left: 50%;
        bottom: calc(100% + 10px);
        z-index: 10;
        display: none;
        width: max-content;
        max-width: 190px;
        padding: 8px 10px;
        border: 4px solid var(--pm-ink);
        background: #fff9ff;
        color: var(--pm-ink);
        box-shadow:
          inset -5px -5px 0 #c7a3f6,
          4px 4px 0 rgba(5, 3, 9, 0.72);
        font-family: "Courier New", monospace;
        font-size: calc(12px * var(--aumento-texto-game, 1));
        font-weight: 900;
        line-height: 1.15;
        text-align: center;
        transform: translateX(-50%);
        white-space: normal;
      }

      .project-modal-link.has-tooltip::before {
        content: "";
        position: absolute;
        left: 50%;
        bottom: calc(100% + 2px);
        z-index: 11;
        display: none;
        width: 12px;
        height: 12px;
        border-right: 4px solid var(--pm-ink);
        border-bottom: 4px solid var(--pm-ink);
        background: #fff9ff;
        transform: translateX(-50%) rotate(45deg);
      }

      .project-modal-link.has-tooltip:hover::before,
      .project-modal-link.has-tooltip:hover::after,
      .project-modal-link.has-tooltip:focus-visible::before,
      .project-modal-link.has-tooltip:focus-visible::after {
        display: block;
      }

      .project-modal-github-button,
      .project-modal-deploy-button {
        display: block;
        width: 64px;
        height: 64px;
        object-fit: contain;
        image-rendering: pixelated;
        filter: drop-shadow(4px 4px 0 rgba(5, 3, 9, 0.65));
      }

      .project-modal-bottom-gap::before,
      .project-modal-bottom-gap::after {
        position: absolute;
        top: calc(50% + 4px);
        color: var(--pm-purple-2);
        font-family: "Courier New", monospace;
        font-size: 26px;
        font-weight: 900;
        line-height: 1;
        text-shadow:
          2px 2px 0 var(--pm-ink),
          -1px -1px 0 #ffffff;
        animation: project-modal-arrow-blink 0.85s steps(2, end) infinite;
        transform: translateY(-50%);
      }

      .project-modal-bottom-gap.is-github-blocked::before,
      .project-modal-bottom-gap.is-site-blocked::after {
        color: #433855;
        text-shadow:
          2px 2px 0 var(--pm-ink),
          -1px -1px 0 rgba(116, 93, 146, 0.32);
        animation: none;
        opacity: 0.62;
      }

      .project-modal-bottom-gap.is-phase-1.is-site-blocked::after {
        color: var(--pm-purple-2);
        text-shadow:
          2px 2px 0 var(--pm-ink),
          -1px -1px 0 #ffffff;
        animation: project-modal-arrow-blink 0.85s steps(2, end) infinite;
        opacity: 1;
      }

      @keyframes project-modal-arrow-blink {
        0%, 45% {
          opacity: 1;
        }

        46%, 100% {
          opacity: 0.42;
        }
      }

      .project-modal-bottom-gap::before {
        content: ">>";
        left: 6px;
      }

      .project-modal-bottom-gap::after {
        content: "<<";
        right: 6px;
      }

      .project-modal-hero {
        display: grid;
        grid-template-columns: 150px minmax(340px, 1fr) minmax(300px, 0.92fr);
        gap: 16px;
        padding: 20px 20px 14px 20px;
        align-items: stretch;
        flex: 0 0 auto;
      }

      .project-modal-avatar-card,
      .project-modal-title-card,
      .project-modal-description-card,
      .project-modal-panel,
      .project-modal-phase-sign {
        border: 4px solid var(--pm-ink);
        box-shadow:
          inset -6px -6px 0 rgba(75, 23, 125, 0.72),
          0 0 0 3px #6d36a6;
      }

      .project-modal-avatar-card {
        position: relative;
        min-height: 138px;
        padding: 10px;
        display: grid;
        place-items: center;
        overflow: hidden;
        background: #211d34;
        color: var(--pm-ink);
        text-align: center;
        box-shadow:
          inset -9px -9px 0 rgba(10, 8, 18, 0.55),
          0 0 0 3px #6d36a6;
      }

      .project-modal-avatar-card::before,
      .project-modal-avatar-card::after,
      .project-modal-title-card::before,
      .project-modal-title-card::after,
      .project-modal-description-card::before,
      .project-modal-description-card::after {
        content: "";
        position: absolute;
        width: 18px;
        height: 18px;
        background: #8d42dc;
        border: 4px solid var(--pm-ink);
        box-shadow: inset -4px -4px 0 #502082;
      }

      .project-modal-avatar-card::before {
        top: -10px;
        left: -10px;
      }

      .project-modal-avatar-card::after {
        right: -10px;
        bottom: -10px;
      }

      .project-modal-avatar {
        width: 118%;
        height: 118%;
        object-fit: cover;
        object-position: center center;
        image-rendering: pixelated;
      }

      .project-modal-title-card {
        position: relative;
        display: grid;
        grid-template-columns: 98px minmax(0, 1fr);
        gap: 18px;
        align-items: center;
        background:
          linear-gradient(135deg, rgba(124, 43, 214, 0.18) 0 18px, transparent 18px 36px),
          #12111f;
        padding: 12px 14px 10px;
        box-shadow:
          inset 0 0 0 3px #0d0a17,
          inset 0 0 0 6px #3f1c68,
          inset -6px -6px 0 rgba(75, 23, 125, 0.72),
          0 0 0 3px #6d36a6;
      }

      .project-modal-title-card::before {
        top: -10px;
        left: -10px;
      }

      .project-modal-title-card::after {
        right: -10px;
        bottom: -10px;
      }

      .project-modal-description-card {
        position: relative;
        display: grid;
        align-content: center;
        background:
          linear-gradient(135deg, rgba(124, 43, 214, 0.12) 0 16px, transparent 16px 32px),
          #171524;
        padding: 42px 24px 18px;
        box-shadow:
          inset 0 0 0 3px #0d0a17,
          inset 0 0 0 6px #3f1c68,
          inset -6px -6px 0 rgba(75, 23, 125, 0.72),
          0 0 0 3px #6d36a6;
      }

      .project-modal-description-card::before {
        top: -10px;
        left: -10px;
      }

      .project-modal-description-card::after {
        right: -10px;
        bottom: -10px;
      }

      .project-modal-title {
        margin: 0 0 6px;
        font-size: calc(clamp(20px, 2.2vw, 29px) * var(--aumento-texto-game, 1));
        line-height: 1.1;
        color: #ffffff;
        text-shadow: 3px 3px 0 #2d1451;
      }

      .project-modal-subtitle {
        margin: 0 0 8px;
        color: var(--pm-purple-2);
        font-size: calc(clamp(9px, 1.35vw, 12px) * var(--aumento-texto-game, 1));
        line-height: 1.3;
        text-transform: uppercase;
      }

      .project-modal-description {
        max-width: none;
        margin: 0;
        color: #f0eafa;
        font-family: "Courier New", monospace;
        font-weight: 700;
        font-size: calc(14px * var(--aumento-texto-game, 1));
        line-height: 1.28;
      }

      .project-difficulty {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 10px;
        color: #ffffff;
        font-family: "Courier New", monospace;
        font-size: calc(12px * var(--aumento-texto-game, 1));
        font-weight: 900;
        line-height: 1;
      }

      .difficulty-stars {
        display: flex;
        align-items: center;
        gap: 3px;
      }

      .difficulty-star {
        display: block;
        width: 18px;
        height: 18px;
        object-fit: contain;
        image-rendering: pixelated;
      }

      .project-modal-phase-sign {
        align-self: center;
        justify-self: center;
        width: 94px;
        height: 70px;
        position: relative;
        display: grid;
        place-items: center;
        border: 0;
        background: transparent;
        box-shadow: none;
      }

      .project-modal-phase-sign::before,
      .project-modal-phase-sign::after {
        content: "";
        position: absolute;
        left: 50%;
        width: 13px;
        height: 14px;
        transform: translateX(-50%);
        border: 4px solid var(--pm-ink);
        background: #5d22b5;
        box-shadow: inset -3px -3px 0 #2f1455;
      }

      .project-modal-phase-sign::before {
        top: -6px;
      }

      .project-modal-phase-sign::after {
        bottom: -6px;
      }

      .project-modal-phase-plate {
        position: relative;
        z-index: 1;
        width: 92px;
        height: 54px;
        display: grid;
        place-items: center;
        border: 5px solid var(--pm-ink);
        background: #fff9ff;
        color: var(--pm-ink);
        box-shadow:
          inset -7px -6px 0 #d8c9ff,
          5px 5px 0 rgba(5, 3, 9, 0.52);
        font-family: "Courier New", monospace;
        font-size: 44px;
        font-weight: 900;
        line-height: 1;
        image-rendering: pixelated;
      }

      .project-modal-grid {
        display: grid;
        grid-template-columns: minmax(260px, 1.1fr) minmax(260px, 1fr) minmax(270px, 1fr) minmax(260px, 0.92fr);
        gap: 16px;
        min-height: 0;
        padding: 0 20px 14px;
        flex: 1 1 auto;
      }

      .project-modal-bottom {
        display: grid;
        grid-template-columns: minmax(280px, 1fr) minmax(280px, 1.6fr);
        gap: 16px;
        padding: 0 20px 20px;
        flex: 0 0 auto;
      }

      .project-modal-bottom .project-modal-panel {
        min-height: 118px;
        padding-bottom: 14px;
        overflow: hidden;
      }

      .project-modal-panel {
        position: relative;
        min-height: 0;
        background:
          linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0 14px, transparent 14px 28px),
          var(--pm-panel);
        padding: 26px 10px 8px;
        overflow: hidden;
      }

      .project-modal-stats-panel,
      .project-modal-radar-panel,
      .project-modal-steps-panel,
      .project-modal-equipment-panel {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .project-modal-stats-panel {
        justify-content: space-evenly;
      }

      .project-modal-radar-panel .project-modal-radar-wrap,
      .project-modal-steps-panel .project-modal-steps,
      .project-modal-equipment-panel .project-modal-equipment-grid {
        flex: 1 1 auto;
        min-height: 0;
      }

      .project-modal-panel::before {
        content: "";
        position: absolute;
        inset: 5px;
        border: 2px solid rgba(177, 122, 255, 0.28);
        pointer-events: none;
      }

      .project-modal-panel-title {
        position: absolute;
        top: -12px;
        left: 14px;
        min-width: 76px;
        padding: 6px 10px;
        border: 4px solid var(--pm-ink);
        background: linear-gradient(180deg, #8c3fdb 0%, #5a219b 100%);
        color: #ffffff;
        box-shadow: inset -5px -5px 0 #3a1467;
        font-size: calc(10px * var(--aumento-texto-game, 1));
        line-height: 1;
        text-align: center;
        text-transform: uppercase;
        z-index: 2;
      }

      .project-modal-stat {
        display: grid;
        grid-template-columns: 46px minmax(0, 1fr) 48px;
        align-items: start;
        gap: 12px;
        margin: 0 6px;
      }

      .project-modal-stat-icon {
        width: 46px;
        height: 46px;
        display: grid;
        place-items: center;
        border: 3px solid var(--pm-ink);
        background:
          linear-gradient(135deg, rgba(255, 255, 255, 0.05), transparent 42%),
          #121522;
        box-shadow:
          inset -5px -5px 0 rgba(5, 3, 9, 0.56),
          inset 3px 3px 0 rgba(255, 255, 255, 0.035),
          0 0 0 2px #4b2e76,
          3px 3px 0 rgba(5, 3, 9, 0.65);
        color: #ffd955;
        font-size: 12px;
      }

      .project-modal-stat-icon img {
        display: block;
        width: 74%;
        height: 74%;
        object-fit: contain;
        image-rendering: pixelated;
      }

      .project-modal-stat-label {
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        align-items: center;
        gap: 10px;
        margin-bottom: 5px;
        color: #ffffff;
        font-size: calc(10px * var(--aumento-texto-game, 1));
        line-height: 1.1;
        text-transform: uppercase;
      }

      .project-modal-stat-body {
        display: block;
        min-width: 0;
        padding-top: 3px;
      }

      .project-modal-bar {
        display: block;
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
        height: 16px;
        border: 3px solid var(--pm-ink);
        background: linear-gradient(90deg, #4f3b66, #b89fd0);
        overflow: hidden;
        box-shadow: inset 0 0 0 2px #4f2a7e;
        contain: paint;
      }

      .project-modal-fill {
        display: block;
        height: 100%;
        background:
          linear-gradient(180deg, rgba(255, 255, 255, 0.28), transparent 45%),
          linear-gradient(90deg, #5b17d3 0%, #7f20ef 42%, #a64aff 100%);
        box-shadow:
          inset -5px 0 0 rgba(25, 8, 61, 0.55),
          inset 0 -3px 0 rgba(49, 7, 123, 0.55);
      }

      .project-modal-stat-value {
        width: 48px;
        height: 34px;
        display: grid;
        place-items: center;
        margin-top: 2px;
        border: 3px solid var(--pm-ink);
        background: #171322;
        color: #ffffff;
        box-shadow:
          inset -4px -4px 0 rgba(5, 3, 9, 0.48),
          0 0 0 2px #5b2b8a;
        font-size: calc(11px * var(--aumento-texto-game, 1));
        text-align: center;
      }

      .project-modal-radar-wrap {
        min-height: 288px;
        display: grid;
        place-items: center;
      }

      .project-modal-radar {
        width: min(100%, 318px);
        height: auto;
        overflow: visible;
      }

      .project-modal-radar-grid {
        fill: none;
        stroke: rgba(185, 121, 255, 0.35);
        stroke-width: 1.5;
      }

      .project-modal-radar-axis {
        stroke: rgba(185, 121, 255, 0.45);
        stroke-width: 1.4;
      }

      .project-modal-radar-shape {
        fill: rgba(132, 47, 232, 0.72);
        stroke: #d7a1ff;
        stroke-width: 3;
      }

      .project-modal-radar-dot {
        fill: #ffffff;
        stroke: #6d22cb;
        stroke-width: 3;
      }

      .project-modal-radar-text {
        fill: #ffffff;
        font-family: "Courier New", monospace;
        font-size: calc(12px * var(--aumento-texto-game, 1));
        font-weight: 700;
      }

      .project-modal-steps {
        display: grid;
        align-content: space-evenly;
        gap: 5px;
        margin: 0;
        padding: 0;
        list-style: none;
      }

      .project-modal-step {
        display: grid;
        grid-template-columns: 38px 1fr;
        gap: 7px;
        align-items: center;
        min-height: 36px;
        padding: 4px;
        border: 2px solid rgba(177, 122, 255, 0.22);
        background: rgba(255, 255, 255, 0.03);
        overflow: hidden;
      }

      .project-modal-step.is-locked {
        opacity: 0.74;
      }

      .project-modal-step.is-unlocked {
        opacity: 1;
      }

      .project-modal-step-badge {
        position: relative;
        width: 28px;
        height: 28px;
        display: grid;
        place-items: center;
        align-self: center;
        overflow: hidden;
        border: 3px solid var(--pm-ink);
        background:
          linear-gradient(135deg, rgba(255, 255, 255, 0.05), transparent 42%),
          #121522;
        color: #ffffff;
        box-shadow:
          inset -5px -5px 0 rgba(5, 3, 9, 0.56),
          inset 3px 3px 0 rgba(255, 255, 255, 0.035),
          0 0 0 2px #4b2e76,
          3px 3px 0 rgba(5, 3, 9, 0.65);
        font-size: calc(10px * var(--aumento-texto-game, 1));
      }

      .project-modal-step.is-locked .project-modal-step-badge {
        background:
          linear-gradient(135deg, rgba(68, 55, 104, 0.18), transparent 42%),
          #0b0c18;
        box-shadow:
          inset -5px -5px 0 rgba(2, 2, 8, 0.74),
          inset 3px 3px 0 rgba(91, 73, 132, 0.14),
          0 0 0 2px #272340,
          3px 3px 0 rgba(5, 3, 9, 0.72);
      }

      .project-modal-step strong {
        display: block;
        margin-bottom: 2px;
        color: #ffffff;
        font-size: calc(8px * var(--aumento-texto-game, 1));
        line-height: 1.2;
        text-transform: uppercase;
      }

      .project-modal-step > span:not(.project-modal-step-badge),
      .project-modal-step > span:not(.project-modal-step-badge) span {
        display: block;
        color: var(--pm-muted);
        font-family: "Courier New", monospace;
        font-weight: 700;
        font-size: calc(11px * var(--aumento-texto-game, 1));
        line-height: 1.12;
      }

      .project-modal-step-lock {
        display: block;
        width: 84%;
        height: 84%;
        margin: auto;
        place-self: center;
        justify-self: center;
        object-fit: contain;
        object-position: center;
        image-rendering: pixelated;
      }

      .project-modal-equipment-grid {
        display: grid;
        grid-template-columns: repeat(3, 68px);
        align-content: space-evenly;
        align-items: center;
        justify-content: center;
        column-gap: 30px;
        row-gap: 16px;
        margin-top: 0;
      }

      .project-modal-equipment {
        min-width: 0;
        width: 68px;
      }

      .project-modal-equipment-panel {
        padding: 40px 14px 14px;
      }

      .project-modal-equipment-panel.has-extra-equipment {
        padding-bottom: 30px;
      }

      .project-modal-equipment-panel .project-modal-panel-title {
        min-width: 168px;
        left: 18px;
        padding: 7px 11px;
        font-size: calc(11px * var(--aumento-texto-game, 1));
        box-shadow: inset -6px -6px 0 #3a1467;
      }

      .project-modal-equipment-slot {
        aspect-ratio: 1 / 1;
        width: 68px;
        max-height: none;
        display: grid;
        place-items: center;
        border: 4px solid var(--pm-ink);
        background:
          linear-gradient(135deg, rgba(255, 255, 255, 0.05), transparent 42%),
          #121522;
        box-shadow:
          inset -6px -6px 0 rgba(5, 3, 9, 0.54),
          inset 4px 4px 0 rgba(255, 255, 255, 0.035),
          0 0 0 2px #4b2e76,
          4px 4px 0 rgba(5, 3, 9, 0.65);
        color: #ffffff;
        font-size: clamp(12px, 1.4vw, 18px);
      }

      .project-modal-equipment-image {
        display: block;
        width: 78%;
        height: 78%;
        object-fit: contain;
        image-rendering: pixelated;
        filter: drop-shadow(4px 4px 0 rgba(5, 3, 9, 0.75));
      }

      .project-modal-equipment-image.is-block {
        width: 108%;
        height: 108%;
      }

      .project-modal-equipment-icon {
        position: relative;
        width: 72%;
        height: 72%;
        display: grid;
        place-items: center;
        color: #ffffff;
        font-family: "Courier New", monospace;
        font-weight: 900;
        font-size: calc(12px * var(--aumento-texto-game, 1));
        line-height: 1;
        text-shadow: 2px 2px 0 #050309;
        image-rendering: pixelated;
      }

      .project-modal-equipment-icon::before,
      .project-modal-equipment-icon::after {
        content: "";
        position: absolute;
        box-sizing: border-box;
      }

      .project-modal-equipment-icon.is-shield {
        clip-path: polygon(8% 0, 92% 0, 86% 72%, 50% 100%, 14% 72%);
        box-shadow: inset -5px -5px 0 rgba(0, 0, 0, 0.3);
      }

      .project-modal-equipment-icon.is-html { background: #ff5224; }
      .project-modal-equipment-icon.is-css { background: #2f74ff; }

      .project-modal-equipment-icon.is-js {
        width: 68%;
        height: 68%;
        background: #ffd629;
        color: #19140a;
        text-shadow: none;
        box-shadow: inset -5px -5px 0 #cc9e12, 3px 3px 0 #050309;
      }

      .project-modal-equipment-icon.is-gdevelop {
        color: #33c7ff;
        font-size: 24px;
        text-shadow: 3px 3px 0 #153dff;
      }

      .project-modal-equipment-icon.is-vscode {
        color: #22a5ff;
        font-size: 25px;
        text-shadow: 3px 3px 0 #063d8f;
      }

      .project-modal-equipment-icon.is-github {
        border-radius: 50%;
        background: #f8f8ff;
        color: #0b0b13;
        font-size: 20px;
        text-shadow: none;
      }

      .project-modal-equipment-icon.is-figma {
        grid-template-columns: repeat(2, 12px);
        grid-template-rows: repeat(3, 12px);
        gap: 0;
      }

      .project-modal-equipment-dot {
        width: 12px;
        height: 12px;
      }

      .project-modal-equipment-dot:nth-child(1) { background: #ff593d; border-radius: 8px 0 0 8px; }
      .project-modal-equipment-dot:nth-child(2) { background: #ff6b47; border-radius: 0 8px 8px 0; }
      .project-modal-equipment-dot:nth-child(3) { background: #8b5cff; border-radius: 8px 0 0 8px; }
      .project-modal-equipment-dot:nth-child(4) { background: #20b6ff; border-radius: 50%; }
      .project-modal-equipment-dot:nth-child(5) { background: #19c86a; border-radius: 8px 0 8px 8px; }

      .project-modal-equipment-icon.is-aseprite {
        width: 64%;
        height: 64%;
        border: 3px solid #9f83bd;
        border-radius: 4px;
        background: #f4efff;
        color: #312b3f;
        text-shadow: none;
      }

      .project-modal-equipment-icon.is-phaser {
        font-size: 24px;
        text-shadow: 0 3px 0 #006ed9, 3px 3px 0 #050309;
      }

      .project-modal-equipment-icon.is-git {
        width: 62%;
        height: 62%;
        background: #ff4f27;
        transform: rotate(45deg);
        box-shadow: 3px 3px 0 #050309;
      }

      .project-modal-equipment-icon.is-git span {
        transform: rotate(-45deg);
      }

      .project-modal-equipment-slot.is-empty {
        color: #675c80;
        background: #1a1828;
      }

      .project-modal-equipment-slot[data-tone="html"] { color: #ff6d3a; }
      .project-modal-equipment-slot[data-tone="css"] { color: #58a4ff; }
      .project-modal-equipment-slot[data-tone="js"] { color: #ffe34d; }
      .project-modal-equipment-slot[data-tone="gdevelop"] { color: #4aa3ff; }
      .project-modal-equipment-slot[data-tone="vscode"] { color: #44a7ff; }
      .project-modal-equipment-slot[data-tone="github"] { color: #ffffff; }
      .project-modal-equipment-slot[data-tone="figma"] { color: #ff7fcb; }
      .project-modal-equipment-slot[data-tone="aseprite"] { color: #f4efff; }
      .project-modal-equipment-slot[data-tone="phaser"] { color: #5cc7ff; }
      .project-modal-equipment-slot[data-tone="git"] { color: #ff6d3a; }

      .project-modal-equipment-name {
        display: block;
        margin-top: 6px;
        color: #ffffff;
        font-size: calc(8px * var(--aumento-texto-game, 1));
        line-height: 1.18;
        text-align: center;
        text-transform: uppercase;
        overflow-wrap: anywhere;
        text-shadow: 2px 2px 0 #050309;
      }

      .project-modal-equipment-more {
        position: absolute;
        left: 50%;
        bottom: 6px;
        z-index: 3;
        width: 22px;
        height: 22px;
        display: block;
        transform: translateX(-50%);
        image-rendering: pixelated;
        cursor: pointer;
        pointer-events: none;
        filter: drop-shadow(3px 3px 0 rgba(5, 3, 9, 0.7));
        animation: project-modal-equipment-more-blink 1s steps(2, end) infinite;
      }

      .project-modal-equipment-more.is-clickable {
        pointer-events: auto;
      }

      @keyframes project-modal-equipment-more-blink {
        0%,
        100% {
          opacity: 0.32;
          transform: translate(-50%, 0);
        }

        50% {
          opacity: 1;
          transform: translate(-50%, 3px);
        }
      }

      .project-modal-copy {
        margin: 0;
        color: #f0eafa;
        font-family: "Courier New", monospace;
        font-weight: 700;
        font-size: calc(14px * var(--aumento-texto-game, 1));
        line-height: 1.25;
      }

      .project-modal-bullets {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        align-content: center;
        gap: 8px 10px;
        min-height: 0;
        height: 100%;
        margin-top: 4px;
        box-sizing: border-box;
        padding: 8px 4px 10px;
      }

      .project-modal-highlights-panel {
        display: flex;
        flex-direction: column;
      }

      .project-modal-highlights-panel .project-modal-bullets {
        flex: 1 1 auto;
        min-height: 0;
      }

      .project-modal-bullet {
        display: block;
        min-width: 0;
        color: var(--pm-purple-2);
        font-size: calc(10px * var(--aumento-texto-game, 1));
        line-height: 1.22;
        text-transform: uppercase;
        overflow-wrap: anywhere;
      }

      .project-modal-achievements {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        align-items: center;
        align-content: center;
        gap: 8px;
        height: auto;
        min-height: 104px;
        box-sizing: border-box;
        padding: 8px 12px 22px;
      }

      .project-modal-achievement-panel {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .project-modal-achievement-panel .project-modal-achievements {
        flex: 0 0 auto;
      }

      .project-modal-achievement {
        min-height: 78px;
        height: auto;
        box-sizing: border-box;
        display: grid;
        grid-template-columns: 54px minmax(0, 1fr);
        grid-template-rows: 1fr auto 1fr;
        column-gap: 8px;
        row-gap: 2px;
        align-items: center;
        align-content: center;
        justify-items: start;
        padding: 8px 10px;
        border: 3px solid var(--pm-ink);
        background:
          linear-gradient(135deg, rgba(255, 255, 255, 0.05), transparent 42%),
          #121522;
        box-shadow:
          inset -6px -6px 0 rgba(5, 3, 9, 0.54),
          inset 4px 4px 0 rgba(255, 255, 255, 0.035),
          0 0 0 2px #4b2e76,
          4px 4px 0 rgba(5, 3, 9, 0.65);
        text-align: center;
      }

      .project-modal-achievement-icon {
        grid-row: 1 / 4;
        width: 48px;
        height: 48px;
        display: grid;
        place-items: center;
        border: 3px solid var(--pm-ink);
        background:
          linear-gradient(135deg, rgba(255, 255, 255, 0.05), transparent 42%),
          #121522;
        color: #fff8d9;
        box-shadow:
          inset -5px -5px 0 rgba(5, 3, 9, 0.56),
          inset 3px 3px 0 rgba(255, 255, 255, 0.035),
          0 0 0 2px #4b2e76,
          3px 3px 0 rgba(5, 3, 9, 0.65);
        font-size: calc(8px * var(--aumento-texto-game, 1));
      }

      .project-modal-achievement-icon img {
        display: block;
        width: 92%;
        height: 92%;
        object-fit: contain;
        image-rendering: pixelated;
      }

      .project-modal-achievement-name {
        align-self: end;
        min-width: 0;
        color: #ffffff;
        font-size: calc(8px * var(--aumento-texto-game, 1));
        line-height: 1.16;
        text-align: left;
        text-transform: uppercase;
      }

      .project-modal-achievement-value {
        align-self: start;
        color: #ffffff;
        font-size: calc(12px * var(--aumento-texto-game, 1));
        line-height: 1;
        text-align: left;
      }

      @media (max-width: 1040px) {
        .project-modal-grid {
          grid-template-columns: repeat(2, minmax(260px, 1fr));
        }
      }

      @media (max-height: 760px) and (min-width: 900px) {
        .project-modal-root {
          padding: 18px 28px 50px;
          --pm-shell-h: calc((100vh - 68px) / var(--pm-modal-scale));
        }

        .project-modal-shell {
          width: min(1420px, calc(100vw - 56px));
          height: calc(100vh - 68px);
        }

        .project-modal-hero {
          grid-template-columns: 144px minmax(320px, 1fr) minmax(290px, 0.92fr);
          gap: 14px;
          padding: 18px 18px 12px 18px;
        }

        .project-modal-avatar-card {
          min-height: 128px;
          padding: 10px 8px;
        }

        .project-modal-avatar {
          max-height: 112px;
        }

        .project-modal-title-card {
          grid-template-columns: 92px minmax(0, 1fr);
          gap: 16px;
          padding: 14px 14px 12px;
        }

        .project-modal-description-card {
          padding: 38px 20px 16px;
        }

        .project-modal-title {
          margin-bottom: 6px;
          font-size: 38px;
        }

        .project-modal-subtitle {
          margin-bottom: 8px;
          font-size: calc(11px * var(--aumento-texto-game, 1));
        }

        .project-modal-description {
          font-size: calc(14px * var(--aumento-texto-game, 1));
          line-height: 1.25;
        }

        .project-modal-phase-sign {
          width: 88px;
          height: 66px;
        }

        .project-modal-grid {
          gap: 14px;
          padding: 0 18px 12px;
        }

        .project-modal-bottom {
          gap: 14px;
          padding: 0 18px 18px;
        }

        .project-modal-bottom .project-modal-panel {
          min-height: 132px;
          padding-bottom: 18px;
        }

        .project-modal-panel {
          padding: 26px 10px 8px;
        }

        .project-modal-panel-title {
          padding: 6px 10px;
          font-size: calc(10px * var(--aumento-texto-game, 1));
        }

        .project-modal-radar-wrap {
          min-height: 270px;
        }

        .project-modal-radar {
          width: min(100%, 298px);
        }

        .project-modal-stat {
          margin: 0;
        }

        .project-modal-steps {
          gap: 5px;
        }

        .project-modal-step {
          min-height: 36px;
          padding: 4px;
        }

        .project-modal-step-badge {
          width: 28px;
          height: 28px;
        }

        .project-modal-step span {
          font-size: calc(11px * var(--aumento-texto-game, 1));
        }

        .project-modal-equipment-grid {
          gap: 14px 28px;
        }

        .project-modal-equipment,
        .project-modal-equipment-slot {
          width: 64px;
        }

        .project-modal-equipment-slot {
          max-height: none;
          border-width: 3px;
        }

        .project-modal-equipment-name {
          margin-top: 6px;
          font-size: calc(8px * var(--aumento-texto-game, 1));
        }

        .project-modal-copy {
          font-size: calc(13px * var(--aumento-texto-game, 1));
          line-height: 1.2;
        }

        .project-modal-bullets {
          gap: 6px 8px;
          margin-top: 7px;
        }

        .project-modal-bullet {
          font-size: 9px;
        }

        .project-modal-achievement {
          min-height: 94px;
          grid-template-columns: 64px minmax(0, 1fr);
          column-gap: 12px;
          padding: 10px 12px;
        }

        .project-modal-achievement-icon {
          width: 60px;
          height: 60px;
        }
      }

      @media (max-height: 680px) and (min-width: 900px) {
        .project-modal-root {
          --pm-modal-scale: 0.96;
        }
      }

      @media (max-width: 760px) {
        .project-modal-root {
          padding: 10px;
        }

        .project-modal-shell {
          height: calc(100vh - 20px);
        }

        .project-modal-hero,
        .project-modal-title-card,
        .project-modal-description-card,
        .project-modal-grid,
        .project-modal-bottom {
          grid-template-columns: 1fr;
        }

        .project-modal-hero {
          padding: 22px 16px 14px;
        }

        .project-modal-title-card {
          padding-right: 16px;
        }

        .project-modal-description-card {
          padding: 30px 16px 12px;
        }

        .project-modal-avatar-card {
          min-height: auto;
          width: min(150px, 100%);
        }

        .project-modal-avatar {
          max-height: 88px;
        }

        .project-modal-phase-sign {
          justify-self: start;
          width: 74px;
          height: 54px;
        }

        .project-modal-grid,
        .project-modal-bottom {
          padding-left: 16px;
          padding-right: 16px;
        }

        .project-modal-bullets {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .project-modal-achievements {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }
    `;

    document.head.appendChild(style);
  }

  function renderStats(stats) {
    return STAT_KEYS.map(function (key) {
      const meta = STAT_META[key];
      const value = clampPercent(stats[key]);
      return `
        <div class="project-modal-stat">
          <span class="project-modal-stat-icon">${renderStatIcon(meta)}</span>
          <span class="project-modal-stat-body">
            <span class="project-modal-stat-label">
              <span>${escapeHtml(meta.label)}</span>
              <span>${value}/100</span>
            </span>
            <span class="project-modal-bar" aria-hidden="true">
              <span class="project-modal-fill" style="width: ${value}%"></span>
            </span>
          </span>
          <span class="project-modal-stat-value">${value}</span>
        </div>
      `;
    }).join("");
  }

  function atualizarStats(stats) {
    return renderStats(stats || {});
  }

  function renderStatIcon(meta) {
    if (meta.image) {
      return `<img src="${escapeHtml(meta.image)}" alt="${escapeHtml(meta.label)}" loading="lazy">`;
    }
    return escapeHtml(meta.icon);
  }

  function getRadarPoint(centerX, centerY, radius, index, total, value) {
    const angle = (-90 + (360 / total) * index) * Math.PI / 180;
    const distance = radius * (clampPercent(value) / 100);
    return {
      x: centerX + Math.cos(angle) * distance,
      y: centerY + Math.sin(angle) * distance,
    };
  }

  function getRadarRing(centerX, centerY, radius, total) {
    const points = [];
    for (let index = 0; index < total; index += 1) {
      const angle = (-90 + (360 / total) * index) * Math.PI / 180;
      points.push([
        Math.round(centerX + Math.cos(angle) * radius),
        Math.round(centerY + Math.sin(angle) * radius),
      ].join(","));
    }
    return points.join(" ");
  }

  function renderRadar(stats) {
    const centerX = 180;
    const centerY = 170;
    const radius = 100;
    const total = STAT_KEYS.length;
    const shapePoints = STAT_KEYS.map(function (key, index) {
      const point = getRadarPoint(centerX, centerY, radius, index, total, stats[key]);
      return [Math.round(point.x), Math.round(point.y)].join(",");
    }).join(" ");

    const rings = [0.25, 0.5, 0.75, 1].map(function (scale) {
      return `<polygon class="project-modal-radar-grid" points="${getRadarRing(centerX, centerY, radius * scale, total)}"></polygon>`;
    }).join("");

    const axes = STAT_KEYS.map(function (key, index) {
      const point = getRadarPoint(centerX, centerY, radius, index, total, 100);
      return `<line class="project-modal-radar-axis" x1="${centerX}" y1="${centerY}" x2="${Math.round(point.x)}" y2="${Math.round(point.y)}"></line>`;
    }).join("");

    const dots = STAT_KEYS.map(function (key, index) {
      const point = getRadarPoint(centerX, centerY, radius, index, total, stats[key]);
      return `<circle class="project-modal-radar-dot" cx="${Math.round(point.x)}" cy="${Math.round(point.y)}" r="5"></circle>`;
    }).join("");

    const labels = STAT_KEYS.map(function (key, index) {
      const point = getRadarPoint(centerX, centerY, radius + 38, index, total, 100);
      const value = clampPercent(stats[key]);
      return `
        <text class="project-modal-radar-text" x="${Math.round(point.x)}" y="${Math.round(point.y)}" text-anchor="middle">
          <tspan x="${Math.round(point.x)}">${escapeHtml(STAT_META[key].label.toUpperCase())}</tspan>
          <tspan x="${Math.round(point.x)}" dy="18">${value}</tspan>
        </text>
      `;
    }).join("");

    return `
      <div class="project-modal-radar-wrap">
        <svg class="project-modal-radar" viewBox="0 0 360 340" role="img" aria-label="Gr\u00e1fico de progresso">
          ${rings}
          ${axes}
          <polygon class="project-modal-radar-shape" points="${shapePoints}"></polygon>
          ${dots}
          ${labels}
        </svg>
      </div>
    `;
  }

  function atualizarGrafico(stats) {
    return renderRadar(stats || {});
  }

  function atualizarEtapas(etapas) {
    return renderSteps(etapas || []);
  }

  function atualizarEquipamentos(equipamentos, page) {
    return renderEquipment(equipamentos || [], page || 0);
  }

  function atualizarDestaques(destaques, project) {
    return renderHighlights(Object.assign({}, project || {}, { highlights: destaques || [] }));
  }

  function atualizarConquistas(conquistas) {
    return renderAchievements(conquistas || []);
  }

  function atualizarLinks(links, level) {
    return renderProjectLinks(links || {}, level);
  }

  function renderEquipment(items, page) {
    const pageIndex = Math.max(0, Number(page) || 0);
    const start = pageIndex * 9;
    const slots = getSafeArray(items, []).slice(start, start + 9);

    while (slots.length < 9) {
      slots.push(EMPTY_EQUIPMENT_ITEM);
    }

    return slots.map(function (item) {
      const equipment = normalizeEquipmentItem(item);
      const itemName = equipment.name || "NULL";
      const isEmptySlot = normalizeKey(itemName) === "null";
      const meta = isEmptySlot ? EQUIPMENT_META.NULL : EQUIPMENT_META[itemName] || { icon: itemName.slice(0, 2).toUpperCase(), tone: "generic" };
      return `
        <div class="project-modal-equipment">
          <span class="project-modal-equipment-slot" data-tone="${escapeHtml(meta.tone)}">${renderEquipmentIcon(itemName, meta, equipment.icon)}</span>
          <span class="project-modal-equipment-name">${escapeHtml(itemName)}</span>
        </div>
      `;
    }).join("");
  }

  function getEquipmentPageCount(items) {
    return Math.max(1, Math.ceil(getSafeArray(items, []).length / 9));
  }

  function updateEquipmentGrid(project) {
    if (!modalRoot || !project) return;

    const grid = modalRoot.querySelector(".project-modal-equipment-grid");
    if (!grid) return;

    const pageCount = getEquipmentPageCount(project.equipment);
    if (activeEquipmentPage >= pageCount) activeEquipmentPage = 0;
    grid.innerHTML = atualizarEquipamentos(project.equipment, activeEquipmentPage);
  }

  function renderEquipmentIcon(item, meta, iconOverride) {
    const tone = meta.tone || "generic";
    if (normalizeKey(item) === "null") {
      return `<img class="project-modal-equipment-image is-block" src="assets/equipamentos/block.png" alt="Bloqueado" loading="lazy" onerror="this.style.display='none'">`;
    }

    const image = meta.image || iconOverride;
    if (image) {
      return `<img class="project-modal-equipment-image" src="${escapeHtml(image)}" alt="${escapeHtml(item)}" loading="lazy" onerror="this.style.display='none'">`;
    }
    if (tone === "html" || tone === "css") {
      return `<span class="project-modal-equipment-icon is-shield is-${escapeHtml(tone)}">${escapeHtml(meta.icon)}</span>`;
    }
    if (tone === "figma") {
      return `
        <span class="project-modal-equipment-icon is-figma" aria-hidden="true">
          <span class="project-modal-equipment-dot"></span>
          <span class="project-modal-equipment-dot"></span>
          <span class="project-modal-equipment-dot"></span>
          <span class="project-modal-equipment-dot"></span>
          <span class="project-modal-equipment-dot"></span>
        </span>
      `;
    }
    if (tone === "git") {
      return `<span class="project-modal-equipment-icon is-git"><span>${escapeHtml(meta.icon)}</span></span>`;
    }
    return `<span class="project-modal-equipment-icon is-${escapeHtml(tone)}">${escapeHtml(meta.icon)}</span>`;
  }

  function renderSteps(items) {
    if (!Array.isArray(items) || items.length === 0) {
      return `
        <li class="project-modal-step">
          <span class="project-modal-step-badge">--</span>
          <span>
            <strong>Nenhuma etapa</strong>
            <span>Nenhuma etapa cadastrada.</span>
          </span>
        </li>
      `;
    }

    return items.map(function (item, index) {
      const step = normalizeStep(item, index);
      const isLocked = isLockedStatus(step.status);
      const statusText = isLocked ? "Bloqueada" : "Desbloqueada";
      return `
        <li class="project-modal-step ${isLocked ? "is-locked etapa-bloqueada" : "is-unlocked etapa-desbloqueada"}" data-status="${escapeHtml(step.status)}">
          <span class="project-modal-step-badge">
            <img class="project-modal-step-lock etapa-lock-icon" src="${escapeHtml(step.icon)}" alt="${escapeHtml(statusText)}" loading="lazy" onerror="this.style.display='none'">
          </span>
          <span>
            <strong>${escapeHtml(step.number)} ${escapeHtml(step.title)}</strong>
            <span>${escapeHtml(step.description || "Etapa registrada no progresso")}</span>
          </span>
        </li>
      `;
    }).join("");
  }

  function getStepDescription(step) {
    const descriptions = {
      "Idea\u00e7\u00e3o": "Conceito, objetivos e planejamento",
      "Prototipa\u00e7\u00e3o": "Wireframes e estrutura do projeto",
      Desenvolvimento: "Codifica\u00e7\u00e3o e implementa\u00e7\u00e3o",
      Testes: "Valida\u00e7\u00e3o, usabilidade e ajustes",
      "Publica\u00e7\u00e3o": "Deploy e lan\u00e7amento do projeto",
    };
    return descriptions[step] || "Etapa registrada no progresso";
  }

  function renderAchievements(items) {
    const normalized = normalizeAchievements(items);

    return normalized.map(function (item) {
      const achievement = item;
      const name = achievement.name;
      const value = achievement.value;
      const meta = ACHIEVEMENT_META[name] || { icon: "UP", value: "OK" };
      return `
        <div class="project-modal-achievement">
          <span class="project-modal-achievement-icon">${renderAchievementIcon(name, meta, achievement.icon)}</span>
          <span class="project-modal-achievement-name">${escapeHtml(name)}</span>
          <span class="project-modal-achievement-value">${escapeHtml(value || meta.value)}</span>
        </div>
      `;
    }).join("");
  }

  function renderAchievementIcon(item, meta, iconOverride) {
    const image = iconOverride || meta.image;
    if (image) {
      return `<img src="${escapeHtml(image)}" alt="${escapeHtml(item)}" loading="lazy" onerror="this.style.display='none'">`;
    }

    return escapeHtml(meta.icon);
  }

  function renderHighlights(project) {
    const highlights = getSafeArray(project.highlights, []).filter(function (item) {
      return String(item || "").trim() !== "";
    });

    if (highlights.length === 0) {
      highlights.push(
      "Interatividade",
      "Design retro",
      "Navega\u00e7\u00e3o por fases",
      );
    }

    return highlights.map(function (item) {
      return `<span class="project-modal-bullet">+ ${escapeHtml(item)}</span>`;
    }).join("");
  }

  function renderDifficultyStars(difficulty) {
    const normalizedDifficulty = normalizeDifficulty(difficulty);
    const stars = [];

    for (let position = 1; position <= 5; position++) {
      let state = "apagada";
      let image = DIFFICULTY_STAR_IMAGES.empty;

      if (normalizedDifficulty >= position) {
        state = "acesa";
        image = DIFFICULTY_STAR_IMAGES.full;
      } else if (normalizedDifficulty >= position - 0.5) {
        state = "meio acesa";
        image = DIFFICULTY_STAR_IMAGES.half;
      }

      stars.push(`<img class="difficulty-star" src="${escapeHtml(image)}" alt="Estrela ${position} ${state} da dificuldade ${escapeHtml(normalizedDifficulty)} de 5" loading="lazy">`);
    }

    return stars.join("");
  }

  function isSafeExternalLink(url) {
    return /^https?:\/\//i.test(String(url || ""));
  }

  function renderProjectLinks(links, level) {
    const githubLink = isSafeExternalLink(links && links.github) ? links.github : "";
    const isCurrentSite = Number(level) === 1;
    const deployLink = !isCurrentSite && isSafeExternalLink(links && links.deploy) ? links.deploy : "";
    const githubImage = githubLink ? "assets/icons/bot\u00e3o-github.JPG" : "assets/icons/botao-block-github.JPG";
    const deployImage = deployLink ? "assets/icons/bot\u00e3o-site.JPG" : "assets/icons/bot\u00e3o-block-site.JPG";
    const githubBlockedTooltip = Number(level) >= 2 ? "Reposit\u00f3rio n\u00e3o criado." : "";
    const siteBlockedTooltip = isCurrentSite ? "Voc\u00ea j\u00e1 est\u00e1 aqui." : "Site fora do ar.";
    const githubBlockedClass = githubBlockedTooltip ? "project-modal-link is-disabled has-tooltip" : "project-modal-link is-disabled";
    const siteBlockedClass = "project-modal-link is-disabled has-tooltip";

    return `
      <div class="project-modal-links">
        ${githubLink ? `<a class="project-modal-link" href="${escapeHtml(githubLink)}" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><img class="project-modal-github-button" src="${githubImage}" alt="GitHub" loading="lazy"></a>` : `<span class="${githubBlockedClass}" aria-label="${escapeHtml(githubBlockedTooltip || "GitHub sem link")}" aria-disabled="true" tabindex="0"${githubBlockedTooltip ? ` data-tooltip="${escapeHtml(githubBlockedTooltip)}"` : ""}><img class="project-modal-github-button" src="${githubImage}" alt="GitHub bloqueado" loading="lazy" onerror="this.onerror=null;this.src='assets/icons/botao-block-github.JPG';"></span>`}
        ${deployLink ? `<a class="project-modal-link" href="${escapeHtml(deployLink)}" target="_blank" rel="noopener noreferrer" aria-label="Site"><img class="project-modal-deploy-button" src="${deployImage}" alt="Site" loading="lazy"></a>` : `<span class="${siteBlockedClass}" aria-label="${escapeHtml(siteBlockedTooltip)}" aria-disabled="true" tabindex="0" data-tooltip="${escapeHtml(siteBlockedTooltip)}"><img class="project-modal-deploy-button" src="${deployImage}" alt="${escapeHtml(siteBlockedTooltip)}" loading="lazy"></span>`}
      </div>
    `;
  }

  function ensureModalRoot() {
    if (modalRoot) return modalRoot;

    ensureStyles();
    modalRoot = document.createElement("div");
    modalRoot.id = "project-modal-root";
    modalRoot.className = "project-modal-root";
    modalRoot.setAttribute("aria-hidden", "true");
    document.body.appendChild(modalRoot);
    return modalRoot;
  }

  function renderProject(project) {
    const root = ensureModalRoot();
    activeEquipmentPage = 0;
    const equipmentPageCount = getEquipmentPageCount(project.equipment);
    const hasMoreEquipment = equipmentPageCount > 1;
    const isGithubBlocked = !isSafeExternalLink(project.links && project.links.github);
    const isSiteBlocked = Number(project.level) === 1 || !isSafeExternalLink(project.links && project.links.deploy);
    const bottomGapClasses = [
      "project-modal-bottom-gap",
      Number(project.level) === 1 ? "is-phase-1" : "",
      isGithubBlocked ? "is-github-blocked" : "",
      isSiteBlocked ? "is-site-blocked" : "",
    ].filter(Boolean).join(" ");

    root.innerHTML = `
      <div class="project-modal-shell" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
        <button class="project-modal-close" type="button" aria-label="Fechar">X</button>
        <div class="${bottomGapClasses}">
          ${atualizarLinks(project.links, project.level)}
        </div>
        <header class="project-modal-hero">
          <div class="project-modal-avatar-card" aria-hidden="true">
            <img class="project-modal-avatar" src="assets/sprites/character-avatar.png" alt="">
          </div>
          <div class="project-modal-title-card">
            <div class="project-modal-phase-sign" aria-label="Fase ${escapeHtml(project.level)}">
              <span class="project-modal-phase-plate">${escapeHtml(project.level)}</span>
            </div>
            <div>
              <h2 class="project-modal-title" id="project-modal-title">${escapeHtml(project.title)}</h2>
              <p class="project-modal-subtitle">Projeto: ${escapeHtml(project.subtitle)}</p>
            </div>
          </div>
          <div class="project-modal-description-card">
            <h3 class="project-modal-panel-title">Descri\u00e7\u00e3o</h3>
            <p class="project-modal-description">${escapeHtml(project.description)}</p>
            <div class="project-difficulty">
              <span>Dificuldade:</span>
              <div class="difficulty-stars">${renderDifficultyStars(project.difficulty)}</div>
            </div>
          </div>
        </header>

        <div class="project-modal-grid">
          <section class="project-modal-panel project-modal-stats-panel">
            <h3 class="project-modal-panel-title">Stats</h3>
            ${atualizarStats(project.stats)}
          </section>
          <section class="project-modal-panel project-modal-radar-panel">
            <h3 class="project-modal-panel-title">Gr\u00e1fico</h3>
            ${atualizarGrafico(project.stats)}
          </section>
          <section class="project-modal-panel project-modal-steps-panel">
            <h3 class="project-modal-panel-title">Etapas</h3>
            <ol class="project-modal-steps">${atualizarEtapas(project.steps)}</ol>
          </section>
          <section class="project-modal-panel project-modal-equipment-panel ${hasMoreEquipment ? "has-extra-equipment" : ""}">
            <h3 class="project-modal-panel-title">Equipamentos</h3>
            <div class="project-modal-equipment-grid">${atualizarEquipamentos(project.equipment, activeEquipmentPage)}</div>
            ${hasMoreEquipment ? '<img class="project-modal-equipment-more is-clickable" src="assets/icons/descer.png" alt="Mais equipamentos" role="button" tabindex="0" loading="lazy">' : ""}
          </section>
        </div>

        <div class="project-modal-bottom">
          <section class="project-modal-panel project-modal-highlights-panel">
            <h3 class="project-modal-panel-title">Destaques</h3>
            <div class="project-modal-bullets">${atualizarDestaques(project.highlights, project)}</div>
          </section>
          <section class="project-modal-panel project-modal-achievement-panel">
            <h3 class="project-modal-panel-title">Conquistas</h3>
            <div class="project-modal-achievements">${atualizarConquistas(project.achievements)}</div>
          </section>
        </div>
      </div>
    `;

    root.querySelector(".project-modal-close").onclick = closeProjectModal;
    root.querySelector(".project-modal-shell").onclick = function (event) {
      event.stopPropagation();
    };
    root.onclick = closeProjectModal;

    const equipmentMoreButton = root.querySelector(".project-modal-equipment-more");
    if (equipmentMoreButton) {
      const goToNextEquipmentPage = function (event) {
        event.preventDefault();
        event.stopPropagation();
        activeEquipmentPage = (activeEquipmentPage + 1) % getEquipmentPageCount(project.equipment);
        updateEquipmentGrid(project);
      };

      equipmentMoreButton.onclick = goToNextEquipmentPage;
      equipmentMoreButton.onkeydown = function (event) {
        const isEnter = event.key === "Enter" || event.code === "Enter";
        const isSpace = event.key === " " || event.key === "Spacebar" || event.code === "Space";
        if (isEnter || isSpace) goToNextEquipmentPage(event);
      };
    }
  }

  function atualizarCabecalhoFase(dados) {
    return dados;
  }

  function atualizarModalFase(dados) {
    const project = dados && dados.level ? dados : normalizeProject(dados || PROJECTS_FALLBACK[1], getDashboardPhaseKey((dados && (dados.numero || dados.level)) || 1));

    atualizarCabecalhoFase(project);
    atualizarStats(project.stats);
    atualizarGrafico(project.stats);
    atualizarEtapas(project.steps);
    atualizarEquipamentos(project.equipment);
    atualizarDestaques(project.highlights, project);
    atualizarConquistas(project.achievements);
    atualizarLinks(project.links, project.level);
    renderProject(project);
  }

  async function openProjectModal(level) {
    await carregarDadosDasFases();

    const project = getProjectByLevel(level);
    if (!project || !document.body) return;

    activeLevel = level;
    atualizarModalFase(project);
    modalRoot.classList.add("is-open");
    modalRoot.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-fase-aberto");
    setNavigationBlocked(true);

    const closeButton = modalRoot.querySelector(".project-modal-close");
    if (closeButton) closeButton.focus({ preventScroll: true });
  }

  function closeProjectModal() {
    if (!modalRoot) {
      setNavigationBlocked(false);
      return;
    }

    activeLevel = null;
    modalRoot.classList.remove("is-open");
    modalRoot.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-fase-aberto");
    setNavigationBlocked(false);
    focusGameCanvas();
  }

  function shouldOpenCurrentProject() {
    const state = getNavigationState();
    if (!state) return false;

    return (
      state.pontoAtual >= 1 &&
      state.pontoAtual <= 6 &&
      state.movendo === false &&
      state.centralizadoNaFase === true &&
      !!getProjectByLevel(state.pontoAtual)
    );
  }

  function handleKeydown(event) {
    const isEscape = event.key === "Escape" || event.code === "Escape";
    const isEnter = event.key === "Enter" || event.code === "Enter";
    const isSpace = event.key === " " || event.key === "Spacebar" || event.code === "Space";
    const movementKey = ["KeyW", "KeyA", "KeyS", "KeyD"].indexOf(event.code) !== -1;

    if (activeLevel !== null) {
      if (isEscape || isEnter || isSpace) closeProjectModal();
      if (isEscape || isEnter || isSpace || movementKey) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
      return;
    }

    if (!isSpace || !shouldOpenCurrentProject()) return;

    const state = getNavigationState();
    event.preventDefault();
    event.stopImmediatePropagation();
    openProjectModal(state.pontoAtual);
  }

  window.ProjectModal = {
    open: openProjectModal,
    close: closeProjectModal,
    projects: PROJECTS_FALLBACK,
    dashboardUrl: DASHBOARD_JSON_URL,
    carregarDadosDasFases: carregarDadosDasFases,
    obterDadosDaFase: obterDadosDaFase,
    atualizarModalFase: atualizarModalFase,
    atualizarCabecalhoFase: atualizarCabecalhoFase,
    atualizarStats: atualizarStats,
    atualizarGrafico: atualizarGrafico,
    atualizarEtapas: atualizarEtapas,
    atualizarEquipamentos: atualizarEquipamentos,
    atualizarDestaques: atualizarDestaques,
    atualizarConquistas: atualizarConquistas,
    atualizarLinks: atualizarLinks,
  };

  window.carregarDadosDasFases = carregarDadosDasFases;
  window.obterDadosDaFase = obterDadosDaFase;
  window.atualizarModalFase = atualizarModalFase;
  window.atualizarCabecalhoFase = atualizarCabecalhoFase;
  window.atualizarStats = atualizarStats;
  window.atualizarGrafico = atualizarGrafico;
  window.atualizarEtapas = atualizarEtapas;
  window.atualizarEquipamentos = atualizarEquipamentos;
  window.atualizarDestaques = atualizarDestaques;
  window.atualizarConquistas = atualizarConquistas;
  window.atualizarLinks = atualizarLinks;
  window.abrirModalDaFase = function (idDaFase) {
    const level = getLevelFromPhaseKey(getDashboardPhaseKey(idDaFase));
    openProjectModal(level);
  };
  window.fecharModalFase = closeProjectModal;

  carregarDadosDasFases();
  window.addEventListener("keydown", handleKeydown, true);
  window.addEventListener("blur", function () {
    if (activeLevel === null) setNavigationBlocked(false);
  });
  window.addEventListener("pagehide", function () {
    setNavigationBlocked(false);
  });
})();
