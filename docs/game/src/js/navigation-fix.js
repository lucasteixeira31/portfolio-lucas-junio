/*
 * Centralized map navigation for the exported GDevelop build.
 *
 * The original scene events were compiled into code0.js and allowed isolated
 * click handlers. This override keeps movement rules in one place:
 * PontoAtual, Destino, DestinoFinal, RotaAtual, Movendo, AlvoX and AlvoY.
 *
 * Waypoint coordinates below are scene coordinates on the visual centerline of
 * the road. Lucas is positioned by his feet anchor, not by the center of the
 * sprite, so the feet pass through the road centerline.
 *
 * The route controller moves Lucas manually between these points, avoiding the
 * Pathfinding grid from cutting corners or accelerating.
 *
 * To refine later inside GDevelop, create waypoint objects with these names
 * (for example fase2_fase3_a) or adjust the values in virtualWaypoints.
 * Map calibration used for review: original image 1448x1086, scene map
 * instance -10,-2 with size 1290x726.
 */
(function () {
  if (!window.gdjs || !gdjs.Cena_32sem_32t_237tuloCode) return;

  const sceneCode = gdjs.Cena_32sem_32t_237tuloCode;
  const pointNames = ["home", "fase1", "fase2", "fase3", "fase4", "fase5", "fase6"];
  const pointByObjectName = {
    home: 0,
    fase1: 1,
    fase2: 2,
    fase3: 3,
    fase4: 4,
    fase5: 5,
    fase6: 6,
  };

  const varIndex = {
    AlvoX: 0,
    AlvoY: 1,
    Movendo: 2,
    PontoAtual: 4,
    Destino: 5,
  };

  const defaultPhaseSize = {
    fase5: { width: 54, height: 51 },
  };

  // The visible feet are near the bottom of the rendered sprite, not at its
  // geometric center. Targets below are road-center coordinates for this foot.
  const lucasFootAnchor = { xRatio: 0.5, yRatio: 0.86 };
  const targetOffsets = {
    home: { x: 0, y: 0 },
    fase1: { x: 0, y: 0 },
    fase2: { x: 0, y: 0 },
    fase3: { x: 0, y: 0 },
    fase4: { x: 0, y: 0 },
    fase5: { x: 0, y: 28 },
    fase6: { x: 0, y: 0 },
    curva1: { x: 0, y: 0 },
    curva2: { x: 0, y: 0 },
    curva3: { x: 0, y: 0 },
    curva4: { x: 0, y: 0 },
    curva5: { x: 0, y: 0 },
  };

  const movementSpeed = 112; // pixels/second. Keep this low so the walk reads as map navigation.
  const waypointArrivalTolerance = 4;
  const phaseArrivalTolerance = 8;
  const cloudImages = [
    { image: "assets/images/mapa/nuvem-pequena.png", width: 82, height: 82 },
    { image: "assets/images/mapa/nuvem-média.png", width: 118, height: 75 },
    { image: "assets/images/mapa/nuvem-grande.png", width: 172, height: 113 },
  ];
  const cloudState = {
    nextAt: 0,
    count: 0,
    paused: false,
    animations: new Set(),
  };

  const mapSignOverlays = [
    {
      id: "em-desenvolvimento-overlay",
      placement: "fixed",
      image: "assets/images/gdevelop/em-desenvolvimento.png",
      sourceWidth: 1254,
      sourceHeight: 1254,
      crop: { x: 0, y: 0, width: 1254, height: 1254 },
      sceneWidth: 118,
      sceneHeight: 118,
      sceneX: 382,
      sceneY: 255,
      opacity: 1,
      blendMode: "normal",
      filter: "none",
      zIndex: 20,
    },
    {
      id: "montanha1-overlay",
      placement: "fixed",
      image: "assets/images/mapa/montanha1.png",
      sourceWidth: 623,
      sourceHeight: 1080,
      crop: { x: 0, y: 0, width: 623, height: 1080 },
      sceneWidth: 108,
      sceneHeight: 187,
      sceneX: 137,
      sceneY: 20,
      opacity: 1,
      blendMode: "normal",
      filter: "none",
      zIndex: 30,
    },
    {
      id: "montanha-baixo-overlay",
      placement: "fixed",
      image: "assets/images/mapa/montanha-baixo.png",
      sourceWidth: 680,
      sourceHeight: 1080,
      crop: { x: 0, y: 0, width: 680, height: 1080 },
      sceneWidth: 141,
      sceneHeight: 186,
      sceneX: 709,
      sceneY: 304,
      opacity: 1,
      blendMode: "normal",
      filter: "none",
      zIndex: 30,
    },
    {
      id: "montanha-cima-overlay",
      placement: "fixed",
      image: "assets/images/mapa/montanha-cima.png",
      sourceWidth: 720,
      sourceHeight: 1080,
      crop: { x: 0, y: 0, width: 720, height: 1080 },
      sceneWidth: 123,
      sceneHeight: 140,
      sceneX: 676,
      sceneY: 17,
      opacity: 1,
      blendMode: "normal",
      filter: "none",
      zIndex: 30,
    },
  ];

  const virtualWaypoints = {
    // Scene coordinates marking the centerline of the visible road.
    // Add real GDevelop objects with these names to replace/calibrate them visually.
    home_fase1_a: { x: 876, y: 142 },
    home_fase1_b: { x: 878, y: 160 },

    fase1_fase2_f: { x: 1030, y: 290 },

    fase2_fase3_a: { x: 1030, y: 326 },
    fase2_fase3_b: { x: 1030, y: 342 },
    fase2_fase3_c: { x: 1029, y: 358 },
    fase2_fase3_d: { x: 1025, y: 374 },
    fase2_fase3_e: { x: 1018, y: 391 },
    fase2_fase3_f: { x: 1006, y: 406 },
    fase2_fase3_g: { x: 990, y: 420 },
    fase2_fase3_h: { x: 970, y: 431 },
    fase2_fase3_i: { x: 946, y: 438 },
    fase2_fase3_j: { x: 920, y: 442 },
    fase2_fase3_k: { x: 894, y: 443 },
    fase2_fase3_l: { x: 874, y: 442 },

    fase3_fase4_a: { x: 861, y: 462 },
    fase3_fase4_b: { x: 861, y: 484 },
    fase3_fase4_c: { x: 862, y: 507 },
    fase3_fase4_d: { x: 863, y: 531 },
    fase3_fase4_e: { x: 864, y: 550 },

    fase4_fase5_a: { x: 842, y: 565 },
    fase4_fase5_b: { x: 818, y: 565 },
    fase4_fase5_c: { x: 792, y: 562 },
    fase4_fase5_d: { x: 766, y: 557 },
    fase4_fase5_e: { x: 740, y: 550 },
    fase4_fase5_f: { x: 714, y: 541 },
    fase4_fase5_g: { x: 688, y: 536 },
    fase4_fase5_h: { x: 662, y: 531 },
    fase4_fase5_i: { x: 635, y: 525 },
    fase4_fase5_j: { x: 608, y: 520 },
    fase4_fase5_k: { x: 586, y: 518 },

    fase5_fase6_a: { x: 548, y: 523 },
    fase5_fase6_b: { x: 526, y: 528 },
    fase5_fase6_c: { x: 504, y: 535 },
    fase5_fase6_d: { x: 482, y: 544 },
    fase5_fase6_e: { x: 459, y: 554 },
    fase5_fase6_f: { x: 436, y: 564 },
    fase5_fase6_g: { x: 412, y: 574 },
    fase5_fase6_h: { x: 386, y: 582 },
  };

  const paths = {
    "0>1": ["home_fase1_a", "home_fase1_b", "fase1"],
    "1>0": ["home_fase1_b", "home_fase1_a", "home"],
    "1>2": ["curva1", "curva2", "curva3", "curva4", "curva5", "fase1_fase2_f", "fase2"],
    "2>1": ["fase1_fase2_f", "curva5", "curva4", "curva3", "curva2", "curva1", "fase1"],
    "2>3": ["fase2_fase3_a", "fase2_fase3_b", "fase2_fase3_c", "fase2_fase3_d", "fase2_fase3_e", "fase2_fase3_f", "fase2_fase3_g", "fase2_fase3_h", "fase2_fase3_i", "fase2_fase3_j", "fase2_fase3_k", "fase2_fase3_l", "fase3"],
    "3>2": ["fase2_fase3_l", "fase2_fase3_k", "fase2_fase3_j", "fase2_fase3_i", "fase2_fase3_h", "fase2_fase3_g", "fase2_fase3_f", "fase2_fase3_e", "fase2_fase3_d", "fase2_fase3_c", "fase2_fase3_b", "fase2_fase3_a", "fase2"],
    "3>4": ["fase3_fase4_a", "fase3_fase4_b", "fase3_fase4_c", "fase3_fase4_d", "fase3_fase4_e", "fase4"],
    "4>3": ["fase3_fase4_e", "fase3_fase4_d", "fase3_fase4_c", "fase3_fase4_b", "fase3_fase4_a", "fase3"],
    "4>5": ["fase4_fase5_a", "fase4_fase5_b", "fase4_fase5_c", "fase4_fase5_d", "fase4_fase5_e", "fase4_fase5_f", "fase4_fase5_g", "fase4_fase5_h", "fase4_fase5_i", "fase4_fase5_j", "fase4_fase5_k", "fase5"],
    "5>4": ["fase4_fase5_k", "fase4_fase5_j", "fase4_fase5_i", "fase4_fase5_h", "fase4_fase5_g", "fase4_fase5_f", "fase4_fase5_e", "fase4_fase5_d", "fase4_fase5_c", "fase4_fase5_b", "fase4_fase5_a", "fase4"],
    "5>6": ["fase5_fase6_a", "fase5_fase6_b", "fase5_fase6_c", "fase5_fase6_d", "fase5_fase6_e", "fase5_fase6_f", "fase5_fase6_g", "fase5_fase6_h", "fase6"],
    "6>5": ["fase5_fase6_h", "fase5_fase6_g", "fase5_fase6_f", "fase5_fase6_e", "fase5_fase6_d", "fase5_fase6_c", "fase5_fase6_b", "fase5_fase6_a", "fase5"],
  };

  const directionalRoutes = {
    0: { S: 1 },
    1: { W: 0, S: 2, D: 2 },
    2: { W: 1, A: 1, S: 3 },
    3: { W: 2, D: 2, S: 4 },
    4: { W: 3, A: 5 },
    5: { D: 4, A: 6, S: 6 },
    6: { W: 5, D: 5 },
  };

  const directionalKeys = ["W", "A", "S", "D"];
  const gdKeyNames = {
    W: "w",
    A: "a",
    S: "s",
    D: "d",
  };

  const stateByScene = new WeakMap();
  const publicNavigationState = {
    pontoAtual: 0,
    pontoAtualNome: "home",
    destinoFinal: 0,
    destinoFinalNome: "home",
    movendo: false,
    centralizadoNaFase: false,
  };

  window.LucasProjectModalOpen = false;
  window.LucasMapNavigation = window.LucasMapNavigation || {};
  window.LucasMapNavigation.state = publicNavigationState;
  window.LucasMapNavigation.getState = function () {
    return Object.assign({}, publicNavigationState);
  };
  window.LucasMapNavigation.setProjectModalOpen = function (isOpen) {
    window.LucasProjectModalOpen = !!isOpen;
  };
  window.LucasMapNavigation.setCloudsPaused = function (isPaused) {
    setMapCloudsPaused(!!isPaused);
  };

  function isProjectModalOpen() {
    return window.LucasProjectModalOpen === true;
  }

  function getSceneState(runtimeScene) {
    let state = stateByScene.get(runtimeScene);
    if (!state) {
      state = {
        initialized: false,
        currentPoint: 0,
        finalPoint: 0,
        destinationFinal: 0,
        routeQueue: [],
        path: [],
        pathIndex: 0,
        currentTarget: null,
        moving: false,
        keyHeld: { W: false, A: false, S: false, D: false },
      };
      stateByScene.set(runtimeScene, state);
    }
    return state;
  }

  function getPrimaryObject(runtimeScene, name) {
    const objects = runtimeScene.getObjects(name);
    let selected = null;
    for (let i = 0; i < objects.length; i++) {
      const object = objects[i];
      const hasSize = object.getWidth() > 0 && object.getHeight() > 0;
      if (!hasSize && !defaultPhaseSize[name]) continue;
      if (!selected || object.getZOrder() > selected.getZOrder()) selected = object;
    }
    return selected;
  }

  function ensureExportFixes(runtimeScene) {
    Object.keys(defaultPhaseSize).forEach(function (name) {
      const size = defaultPhaseSize[name];
      const objects = runtimeScene.getObjects(name);
      for (let i = 0; i < objects.length; i++) {
        if (objects[i].getWidth() === 0 || objects[i].getHeight() === 0) {
          objects[i].setSize(size.width, size.height);
        }
        objects[i].hide(false);
      }
    });
  }

  function getSignScenePosition(sign, anchor) {
    if (sign.placement === "fixed") {
      return {
        x: (sign.sceneX || 0) + (sign.offsetX || 0),
        y: (sign.sceneY || 0) + (sign.offsetY || 0),
      };
    }

    if (!anchor) return null;

    const gap = sign.gap || 0;
    let x = anchor.getCenterXInScene() - sign.sceneWidth / 2;

    if (sign.placement === "left") {
      x = anchor.getX() - sign.sceneWidth - gap;
    } else if (sign.placement === "right") {
      x = anchor.getX() + anchor.getWidth() + gap;
    }

    return {
      x: x + (sign.offsetX || 0),
      y: anchor.getCenterYInScene() - sign.sceneHeight / 2 + (sign.offsetY || 0),
    };
  }

  function ensureMapSignOverlay(runtimeScene, sign) {
    if (typeof document === "undefined") return;

    const canvas = document.querySelector("canvas");
    const anchor = sign.anchor ? getPrimaryObject(runtimeScene, sign.anchor) : null;
    if (!canvas || (sign.anchor && !anchor)) return;

    let overlay = document.getElementById(sign.id);
    let image = overlay ? overlay.querySelector("img") : null;
    let signCanvas = overlay ? overlay.querySelector("canvas") : null;
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = sign.id;
      overlay.setAttribute("aria-hidden", "true");
      overlay.style.position = "fixed";
      overlay.style.overflow = "hidden";
      overlay.style.pointerEvents = "none";
      overlay.style.zIndex = "20";
      document.body.appendChild(overlay);
    }
    overlay.style.zIndex = String(sign.zIndex || 20);

    if (sign.cutoutLucas) {
      if (image) image.remove();
      if (!signCanvas) {
        signCanvas = document.createElement("canvas");
        signCanvas.style.display = "block";
        signCanvas.style.width = "100%";
        signCanvas.style.height = "100%";
        signCanvas.style.imageRendering = "pixelated";
        overlay.appendChild(signCanvas);
      }
    } else {
      if (signCanvas) signCanvas.remove();
      if (!image) {
        image = document.createElement("img");
        image.alt = "";
        image.style.position = "absolute";
        image.style.imageRendering = "pixelated";
        image.draggable = false;
        overlay.appendChild(image);
      }
    }

    overlay.style.opacity = String(sign.opacity);
    overlay.style.mixBlendMode = sign.blendMode;

    const rect = canvas.getBoundingClientRect();
    const scaleX = rect.width / 1280;
    const scaleY = rect.height / 720;
    const position = getSignScenePosition(sign, anchor);
    if (!position) return;

    const width = sign.sceneWidth * scaleX;
    const height = sign.sceneHeight * scaleY;
    const cropScaleX = width / sign.crop.width;
    const cropScaleY = height / sign.crop.height;

    overlay.style.left = rect.left + position.x * scaleX + "px";
    overlay.style.top = rect.top + position.y * scaleY + "px";
    overlay.style.width = width + "px";
    overlay.style.height = height + "px";

    if (sign.cutoutLucas && signCanvas) {
      drawSignCanvas(runtimeScene, sign, signCanvas, position, width, height);
    } else if (image) {
      image.src = sign.image;
      image.style.filter = sign.filter;
      image.style.left = -sign.crop.x * cropScaleX + "px";
      image.style.top = -sign.crop.y * cropScaleY + "px";
      image.style.width = sign.sourceWidth * cropScaleX + "px";
      image.style.height = sign.sourceHeight * cropScaleY + "px";
    }
  }

  function getSignImageElement(sign) {
    if (!sign._imageElement) {
      sign._imageElement = new Image();
      sign._imageElement.src = sign.image;
    }
    return sign._imageElement;
  }

  function drawSignCanvas(runtimeScene, sign, signCanvas, position, width, height) {
    const pixelWidth = Math.max(1, Math.round(width));
    const pixelHeight = Math.max(1, Math.round(height));

    if (signCanvas.width !== pixelWidth) signCanvas.width = pixelWidth;
    if (signCanvas.height !== pixelHeight) signCanvas.height = pixelHeight;

    const context = signCanvas.getContext("2d");
    const image = getSignImageElement(sign);
    if (!context || !image.complete) {
      image.onload = function () {
        drawSignCanvas(runtimeScene, sign, signCanvas, position, width, height);
      };
      return;
    }

    context.clearRect(0, 0, pixelWidth, pixelHeight);
    context.imageSmoothingEnabled = false;
    context.drawImage(
      image,
      sign.crop.x,
      sign.crop.y,
      sign.crop.width,
      sign.crop.height,
      0,
      0,
      pixelWidth,
      pixelHeight
    );
    clearLucasAreaFromSign(runtimeScene, sign, signCanvas, position);
  }

  function clearLucasAreaFromSign(runtimeScene, sign, signCanvas, position) {
    const lucas = getLucas(runtimeScene);
    if (!lucas) return;

    const signLeft = position.x;
    const signTop = position.y;
    const signRight = signLeft + sign.sceneWidth;
    const signBottom = signTop + sign.sceneHeight;
    const lucasLeft = typeof lucas.getDrawableX === "function" ? lucas.getDrawableX() : lucas.getX();
    const lucasTop = typeof lucas.getDrawableY === "function" ? lucas.getDrawableY() : lucas.getY();
    const lucasRight = lucasLeft + lucas.getWidth();
    const lucasBottom = lucasTop + lucas.getHeight();

    const overlapLeft = Math.max(signLeft, lucasLeft);
    const overlapTop = Math.max(signTop, lucasTop);
    const overlapRight = Math.min(signRight, lucasRight);
    const overlapBottom = Math.min(signBottom, lucasBottom);
    if (overlapRight <= overlapLeft || overlapBottom <= overlapTop) return;

    const scaleX = signCanvas.width / sign.sceneWidth;
    const scaleY = signCanvas.height / sign.sceneHeight;
    const padding = Math.max(1, Math.round(Math.max(scaleX, scaleY) * 2));
    const context = signCanvas.getContext("2d");
    if (!context) return;

    context.clearRect(
      Math.round((overlapLeft - signLeft) * scaleX) - padding,
      Math.round((overlapTop - signTop) * scaleY) - padding,
      Math.round((overlapRight - overlapLeft) * scaleX) + padding * 2,
      Math.round((overlapBottom - overlapTop) * scaleY) + padding * 2
    );
  }

  function ensureMapSignOverlays(runtimeScene) {
    for (let i = 0; i < mapSignOverlays.length; i++) {
      ensureMapSignOverlay(runtimeScene, mapSignOverlays[i]);
    }
  }

  function getCloudLayer(id, zIndex) {
    let layer = document.getElementById(id);
    if (!layer) {
      layer = document.createElement("div");
      layer.id = id;
      layer.setAttribute("aria-hidden", "true");
      layer.style.position = "fixed";
      layer.style.overflow = "hidden";
      layer.style.pointerEvents = "none";
      layer.style.zIndex = String(zIndex);
      document.body.appendChild(layer);
    }
    layer.style.zIndex = String(zIndex);
    return layer;
  }

  function syncCloudLayer(layer, rect) {
    layer.style.left = rect.left + "px";
    layer.style.top = rect.top + "px";
    layer.style.width = rect.width + "px";
    layer.style.height = rect.height + "px";
  }

  function scheduleCloudRemoval(image, delay) {
    if (image._lucasCloudRemoveTimer) {
      window.clearTimeout(image._lucasCloudRemoveTimer);
    }

    image._lucasCloudRemoveAt = Date.now() + delay;
    image._lucasCloudRemoveTimer = window.setTimeout(function () {
      image.remove();
    }, delay);
  }

  function animateCloud(image, targetX, duration) {
    const animation = {
      image: image,
      fromX: 0,
      currentX: 0,
      targetX: targetX,
      duration: duration,
      elapsed: 0,
      lastAt: null,
      raf: 0,
    };

    function step(now) {
      if (!image.isConnected) {
        cloudState.animations.delete(animation);
        return;
      }

      if (animation.lastAt === null) animation.lastAt = now;
      const delta = now - animation.lastAt;
      animation.lastAt = now;

      if (!cloudState.paused) {
        animation.elapsed += delta;
        const progress = Math.min(1, animation.elapsed / animation.duration);
        animation.currentX = animation.fromX + (animation.targetX - animation.fromX) * progress;
        image.style.transform = "translateX(" + animation.currentX + "px)";

        if (progress >= 1) {
          cloudState.animations.delete(animation);
          image.remove();
          return;
        }
      }

      animation.raf = window.requestAnimationFrame(step);
    }

    image._lucasCloudAnimation = animation;
    cloudState.animations.add(animation);
    animation.raf = window.requestAnimationFrame(step);
  }

  function setMapCloudsPaused(isPaused) {
    if (typeof document === "undefined") return;
    if (cloudState.paused === isPaused) return;

    cloudState.paused = isPaused;
  }

  function spawnCloud(rect) {
    const scaleX = rect.width / 1280;
    const scaleY = rect.height / 720;
    const cloud = cloudImages[Math.floor(Math.random() * cloudImages.length)];
    const behindMountains = Math.random() < 0.24;
    const layer = getCloudLayer(
      behindMountains ? "map-clouds-behind" : "map-clouds-front",
      behindMountains ? 28 : 32
    );
    syncCloudLayer(layer, rect);

    const cloudWidth = cloud.width * (0.82 + Math.random() * 0.36);
    const cloudHeight = cloud.height * (cloudWidth / cloud.width);
    let yMin = 18;
    let yMax = 135 - cloudHeight;

    if (behindMountains) {
      const lowerMountainRoute = Math.random() < 0.55;

      if (lowerMountainRoute) {
        yMin = 318;
        yMax = 458 - cloudHeight;
      }
    } else {
      const route = Math.random();

      if (route < 0.48) {
        yMin = 330;
        yMax = 448 - cloudHeight;
      } else if (route < 0.62) {
        yMin = 520;
        yMax = 690 - cloudHeight;
      } else {
        yMin = 78;
        yMax = 270 - cloudHeight;
      }
    }

    const safeYMax = Math.max(yMin, yMax);
    const sceneY = yMin + Math.random() * (safeYMax - yMin);
    const leftToRight = Math.random() < 0.5;
    const startX = leftToRight ? -cloudWidth - 20 : 1300 + cloudWidth;
    const endX = leftToRight ? 1300 + cloudWidth : -cloudWidth - 20;
    const duration = 18000 + Math.random() * 14000;
    const targetX = (endX - startX) * scaleX;

    const image = document.createElement("img");
    image.src = cloud.image;
    image.alt = "";
    image.draggable = false;
    image.style.position = "absolute";
    image.style.left = startX * scaleX + "px";
    image.style.top = sceneY * scaleY + "px";
    image.style.width = cloudWidth * scaleX + "px";
    image.style.height = cloudHeight * scaleY + "px";
    image.style.opacity = String(0.72 + Math.random() * 0.18);
    image.style.imageRendering = "pixelated";
    image.style.pointerEvents = "none";
    image.style.transition = "none";
    image.dataset.targetX = String(targetX);
    image.dataset.duration = String(duration);
    layer.appendChild(image);

    animateCloud(image, targetX, duration);
  }

  function ensureMapClouds() {
    if (typeof document === "undefined") return;
    const canvas = document.querySelector("canvas");
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    syncCloudLayer(getCloudLayer("map-clouds-behind", 28), rect);
    syncCloudLayer(getCloudLayer("map-clouds-front", 32), rect);
    if (cloudState.paused) return;

    const now = Date.now();
    if (!cloudState.nextAt) cloudState.nextAt = now + 700;
    if (now < cloudState.nextAt) return;

    spawnCloud(rect);
    cloudState.count += 1;
    cloudState.nextAt = now + 2200 + Math.random() * 3400;
  }

  function getLucas(runtimeScene) {
    return runtimeScene.getObjects("Lucas")[0] || null;
  }

  function writeLucasState(lucas, state) {
    const variables = lucas.getVariables();
    variables.getFromIndex(varIndex.PontoAtual).setNumber(state.currentPoint);
    variables.getFromIndex(varIndex.Movendo).setBoolean(state.moving);
    variables.getFromIndex(varIndex.Destino).setString(pointNames[state.finalPoint] || "vazio");

    // Export-side variables used by the central route controller.
    // They are documented here because the GDevelop source JSON is not present.
    variables.get("DestinoFinal").setNumber(state.destinationFinal);
    variables.get("RotaAtual").setString(state.routeQueue.map(function (point) {
      return pointNames[point];
    }).join(" -> "));

    if (state.currentTarget) {
      variables.getFromIndex(varIndex.AlvoX).setNumber(state.currentTarget.x);
      variables.getFromIndex(varIndex.AlvoY).setNumber(state.currentTarget.y);
    }
  }

  function getLucasFootOffset(lucas) {
    return {
      x: lucas.getWidth() * lucasFootAnchor.xRatio,
      y: lucas.getHeight() * lucasFootAnchor.yRatio,
    };
  }

  function getTargetPoint(runtimeScene, targetName, lucas) {
    const object = getPrimaryObject(runtimeScene, targetName);
    const virtual = virtualWaypoints[targetName];
    const targetOffset = targetOffsets[targetName] || { x: 0, y: 0 };
    const footOffset = getLucasFootOffset(lucas);

    if (object) {
      return {
        name: targetName,
        isPhase: Object.prototype.hasOwnProperty.call(pointByObjectName, targetName),
        x: object.getCenterXInScene() - footOffset.x + targetOffset.x,
        y: object.getCenterYInScene() - footOffset.y + targetOffset.y,
      };
    }

    if (virtual) {
      return {
        name: targetName,
        isPhase: false,
        x: virtual.x - footOffset.x + targetOffset.x,
        y: virtual.y - footOffset.y + targetOffset.y,
      };
    }

    return null;
  }

  function isLucasCenteredOnPoint(runtimeScene, lucas, pointIndex) {
    const pointName = pointNames[pointIndex];
    if (!pointName) return false;

    const target = getTargetPoint(runtimeScene, pointName, lucas);
    if (!target) return false;

    const dx = target.x - lucas.getX();
    const dy = target.y - lucas.getY();
    return Math.sqrt(dx * dx + dy * dy) <= phaseArrivalTolerance;
  }

  function updatePublicNavigationState(runtimeScene, lucas, state) {
    publicNavigationState.pontoAtual = state.currentPoint;
    publicNavigationState.pontoAtualNome = pointNames[state.currentPoint] || "home";
    publicNavigationState.destinoFinal = state.destinationFinal;
    publicNavigationState.destinoFinalNome = pointNames[state.destinationFinal] || "home";
    publicNavigationState.movendo = state.moving;
    publicNavigationState.centralizadoNaFase =
      state.currentPoint >= 1 &&
      state.currentPoint <= 6 &&
      !state.moving &&
      isLucasCenteredOnPoint(runtimeScene, lucas, state.currentPoint);
  }

  function setAnimationForTarget(lucas, target) {
    const dx = target.x - lucas.getX();
    const dy = target.y - lucas.getY();
    let animationName = "lucas-parado";

    if (Math.abs(dx) > Math.abs(dy)) {
      animationName = dx >= 0 ? "lucas-direita" : "lucas-esquerda";
    } else {
      animationName = dy >= 0 ? "lucas-frente" : "lucas-costas";
    }

    lucas.getBehavior("Animation").setAnimationName(animationName);
  }

  function stopPathfindingMovement(lucas) {
    const pathfinding = lucas.getBehavior("Pathfinding");
    if (pathfinding) {
      pathfinding.setSpeed(0);
      pathfinding.setMaxSpeed(0);
      pathfinding.setAcceleration(0);
    }
    lucas.clearForces();
  }

  function moveToTarget(runtimeScene, lucas, state, targetName) {
    const target = getTargetPoint(runtimeScene, targetName, lucas);
    if (!target) return false;

    state.currentTarget = target;
    stopPathfindingMovement(lucas);
    writeLucasState(lucas, state);
    setAnimationForTarget(lucas, target);
    return true;
  }

  function buildRoute(currentPoint, destinationPoint) {
    const route = [];
    const step = destinationPoint > currentPoint ? 1 : -1;

    for (let point = currentPoint + step; step > 0 ? point <= destinationPoint : point >= destinationPoint; point += step) {
      route.push(point);
    }

    return route;
  }

  function startNextRouteStep(runtimeScene, lucas, state) {
    const nextPoint = state.routeQueue[0];
    const path = paths[state.currentPoint + ">" + nextPoint];
    if (!path) return;

    state.finalPoint = nextPoint;
    state.path = path.slice();
    state.pathIndex = 0;
    state.moving = true;
    writeLucasState(lucas, state);

    if (!moveToTarget(runtimeScene, lucas, state, state.path[state.pathIndex])) {
      cancelTransition(lucas, state);
    }
  }

  function startRoute(runtimeScene, lucas, state, destinationPoint) {
    if (isProjectModalOpen() || state.moving || destinationPoint === state.currentPoint) return;

    state.destinationFinal = destinationPoint;
    state.routeQueue = buildRoute(state.currentPoint, destinationPoint);
    if (state.routeQueue.length === 0) return;

    startNextRouteStep(runtimeScene, lucas, state);
  }

  function cancelTransition(lucas, state) {
    state.finalPoint = state.currentPoint;
    state.destinationFinal = state.currentPoint;
    state.routeQueue = [];
    state.path = [];
    state.pathIndex = 0;
    state.currentTarget = null;
    state.moving = false;
    stopPathfindingMovement(lucas);
    lucas.getBehavior("Animation").setAnimationName("lucas-parado");
    writeLucasState(lucas, state);
  }

  function snapLucasToCurrentPoint(runtimeScene, lucas, state) {
    const pointName = pointNames[state.currentPoint];
    if (!pointName) return;

    const target = getTargetPoint(runtimeScene, pointName, lucas);
    if (target) lucas.setPosition(target.x, target.y);
  }

  function finishRoute(runtimeScene, lucas, state) {
    state.finalPoint = state.currentPoint;
    state.destinationFinal = state.currentPoint;
    state.routeQueue = [];
    state.path = [];
    state.pathIndex = 0;
    state.currentTarget = null;
    state.moving = false;
    stopPathfindingMovement(lucas);
    lucas.getBehavior("Animation").setAnimationName("lucas-parado");
    snapLucasToCurrentPoint(runtimeScene, lucas, state);
    writeLucasState(lucas, state);
  }

  function finishTransition(runtimeScene, lucas, state) {
    state.currentPoint = state.finalPoint;
    if (state.routeQueue[0] === state.currentPoint) state.routeQueue.shift();
    state.path = [];
    state.pathIndex = 0;
    state.currentTarget = null;
    writeLucasState(lucas, state);

    if (state.routeQueue.length > 0) {
      startNextRouteStep(runtimeScene, lucas, state);
    } else {
      finishRoute(runtimeScene, lucas, state);
    }
  }

  function getElapsedSeconds(lucas) {
    const elapsedMilliseconds = lucas.getElapsedTime ? lucas.getElapsedTime() : 1000 / 60;
    const elapsedSeconds = elapsedMilliseconds / 1000;
    return Math.max(0, Math.min(elapsedSeconds || 1 / 60, 1 / 20));
  }

  function stepLucasTowardTarget(lucas, target) {
    stopPathfindingMovement(lucas);

    const dx = target.x - lucas.getX();
    const dy = target.y - lucas.getY();
    const distance = Math.sqrt(dx * dx + dy * dy);
    const tolerance = target.isPhase ? phaseArrivalTolerance : waypointArrivalTolerance;

    if (distance <= tolerance) {
      lucas.setPosition(target.x, target.y);
      return true;
    }

    const step = movementSpeed * getElapsedSeconds(lucas);
    if (distance <= step) {
      lucas.setPosition(target.x, target.y);
      return true;
    }

    lucas.setPosition(
      lucas.getX() + (dx / distance) * step,
      lucas.getY() + (dy / distance) * step
    );
    return false;
  }

  function continueTransition(runtimeScene, lucas, state) {
    if (!state.moving || !state.currentTarget) return;

    const target = state.currentTarget;
    const reached = stepLucasTowardTarget(lucas, target);

    if (!reached) return;

    state.pathIndex += 1;
    if (state.pathIndex >= state.path.length) {
      finishTransition(runtimeScene, lucas, state);
      return;
    }

    if (!moveToTarget(runtimeScene, lucas, state, state.path[state.pathIndex])) {
      cancelTransition(lucas, state);
    }
  }

  function getClickedPoint(runtimeScene) {
    if (!gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left")) return null;

    let clicked = null;
    pointNames.forEach(function (name) {
      const objects = runtimeScene.getObjects(name);
      for (let i = 0; i < objects.length; i++) {
        if (objects[i].getWidth() > 0 && objects[i].getHeight() > 0 && objects[i].cursorOnObject()) {
          if (!clicked || objects[i].getZOrder() > clicked.zOrder) {
            clicked = { point: pointByObjectName[name], zOrder: objects[i].getZOrder() };
          }
        }
      }
    });

    return clicked ? clicked.point : null;
  }

  function handleClick(runtimeScene, lucas, state) {
    if (isProjectModalOpen() || state.moving) return;

    const clickedPoint = getClickedPoint(runtimeScene);
    if (clickedPoint === null || clickedPoint === state.currentPoint) return;

    startRoute(runtimeScene, lucas, state, clickedPoint);
  }

  function isDirectionJustPressed(runtimeScene, state, direction) {
    const keyName = gdKeyNames[direction];
    const input = gdjs.evtTools.input;

    if (input.wasKeyJustPressed) {
      return input.wasKeyJustPressed(runtimeScene, keyName);
    }

    const pressed = input.isKeyPressed ? input.isKeyPressed(runtimeScene, keyName) : false;
    const justPressed = pressed && !state.keyHeld[direction];
    state.keyHeld[direction] = pressed;
    return justPressed;
  }

  function getPressedDirection(runtimeScene, state) {
    for (let i = 0; i < directionalKeys.length; i++) {
      const direction = directionalKeys[i];
      if (isDirectionJustPressed(runtimeScene, state, direction)) return direction;
    }

    return null;
  }

  function handleKeyboard(runtimeScene, lucas, state) {
    const direction = getPressedDirection(runtimeScene, state);
    if (!direction || isProjectModalOpen() || state.moving) return;

    const pointRoutes = directionalRoutes[state.currentPoint] || {};
    const destinationPoint = pointRoutes[direction];
    if (typeof destinationPoint !== "number") return;

    startRoute(runtimeScene, lucas, state, destinationPoint);
  }

  function initialize(runtimeScene, lucas, state) {
    ensureExportFixes(runtimeScene);
    state.initialized = true;
    state.currentPoint = 0;
    state.finalPoint = 0;
    state.destinationFinal = 0;
    state.routeQueue = [];
    state.moving = false;
    state.path = [];
    state.pathIndex = 0;
    state.currentTarget = null;
    state.keyHeld = { W: false, A: false, S: false, D: false };
    const initialTarget = getTargetPoint(runtimeScene, pointNames[state.currentPoint], lucas);
    if (initialTarget) lucas.setPosition(initialTarget.x, initialTarget.y);
    stopPathfindingMovement(lucas);
    lucas.getBehavior("Animation").setAnimationName("lucas-parado");
    writeLucasState(lucas, state);
  }

  sceneCode.func = function (runtimeScene) {
    runtimeScene.getOnceTriggers().startNewFrame();

    const lucas = getLucas(runtimeScene);
    if (!lucas) return;

    const state = getSceneState(runtimeScene);
    if (!state.initialized) initialize(runtimeScene, lucas, state);

    ensureExportFixes(runtimeScene);
    ensureMapClouds();
    ensureMapSignOverlays(runtimeScene);
    continueTransition(runtimeScene, lucas, state);
    handleKeyboard(runtimeScene, lucas, state);
    handleClick(runtimeScene, lucas, state);
    updatePublicNavigationState(runtimeScene, lucas, state);
  };
})();
