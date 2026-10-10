
// Browser-language UI localization. Hexo remains a static site, so the theme
// renders a safe zh-CN default and swaps UI labels client-side according to
// navigator.language. Article/user content is never machine-translated.
(function () {
  "use strict";
  var maps = {
    "zh": {
      "nav.首页": "首页", "nav.归档": "归档", "nav.标签": "标签", "nav.关于": "关于", "nav.分类": "分类",
      "nav.aria": "主导航", "nav.toggle": "切换菜单",
      "collection.tab": "//COLLECTION", "category.database": "CATEGORY_DATABASE", "category.label": "CATEGORY", "category.collection": "收藏",
      "category.foldersAvailable": function(n){ return n + " 个文件夹可用"; }, "collection.files": function(n){ return n + " 个文件"; },
      "archive.database": "MEMORY_DATABASE", "tag.database": "TAG_DATABASE", "tag.label": "TAG", "tag.information": "TAG_INFORMATION",
      "folder.content": "FOLDER_CONTENT", "folder.information": "FOLDER_INFORMATION", "folder.section": "CONTENT", "folder.completion": "Completion", "folder.back": "BACK", "collection.noFiles": "NO FILES CONNECTED.",
      "about.terminal": "PHIGROS_TERMINAL", "about.systemProfile": "SYSTEM_PROFILE", "about.operatorProfile": "PHATASiA LOTUS LAND // LIMBO PROFILE", "about.terminalLabel": "TERMINAL", "about.statusOnline": "STATUS // ONLINE", "about.supervisor": "SUPERVISOR", "about.channelOpen": "CHANNEL // OPEN", "about.contact": "CONTACT", "about.mailAvailable": "MAIL // AVAILABLE",
      "post.date": "DATE", "post.supervisor": "SUPERVISOR", "post.category": "CATEGORY",
    },
    "ja": {
      "nav.首页": "ホーム", "nav.归档": "アーカイブ", "nav.标签": "タグ", "nav.关于": "概要", "nav.分类": "カテゴリ",
      "nav.aria": "メインナビゲーション", "nav.toggle": "メニューを切り替える",
      "collection.tab": "//COLLECTION", "category.database": "CATEGORY_DATABASE", "category.label": "CATEGORY", "category.collection": "COLLECTION",
      "category.foldersAvailable": function(n){ return n + " フォルダ利用可能"; }, "collection.files": function(n){ return n + " FILES"; },
      "archive.database": "MEMORY_DATABASE", "tag.database": "TAG_DATABASE", "tag.label": "TAG", "tag.information": "TAG_INFORMATION",
      "folder.content": "FOLDER_CONTENT", "folder.information": "FOLDER_INFORMATION", "folder.section": "CONTENT", "folder.completion": "Completion", "folder.back": "BACK", "collection.noFiles": "NO FILES CONNECTED.",
      "about.terminal": "PHIGROS_TERMINAL", "about.systemProfile": "SYSTEM_PROFILE", "about.operatorProfile": "PHATASiA LOTUS LAND // LIMBO PROFILE", "about.terminalLabel": "TERMINAL", "about.statusOnline": "STATUS // ONLINE", "about.supervisor": "SUPERVISOR", "about.channelOpen": "CHANNEL // OPEN", "about.contact": "CONTACT", "about.mailAvailable": "MAIL // AVAILABLE",
      "post.date": "DATE", "post.supervisor": "SUPERVISOR", "post.category": "CATEGORY",
    },
    "en": {
      "nav.首页": "HOME", "nav.归档": "ARCHIVE", "nav.标签": "TAGS", "nav.关于": "ABOUT", "nav.分类": "CATEGORIES",
      "nav.aria": "Primary navigation", "nav.toggle": "Toggle menu",
      "collection.tab": "//COLLECTION", "category.database": "CATEGORY_DATABASE", "category.label": "CATEGORY", "category.collection": "COLLECTION",
      "category.foldersAvailable": function(n){ return n + " FOLDERS AVAILABLE"; }, "collection.files": function(n){ return n + " FILES"; },
      "archive.database": "MEMORY_DATABASE", "tag.database": "TAG_DATABASE", "tag.label": "TAG", "tag.information": "TAG_INFORMATION",
      "folder.content": "FOLDER_CONTENT", "folder.information": "FOLDER_INFORMATION", "folder.section": "CONTENT", "folder.completion": "Completion", "folder.back": "BACK", "collection.noFiles": "NO FILES CONNECTED.",
      "about.terminal": "PHIGROS_TERMINAL", "about.systemProfile": "SYSTEM_PROFILE", "about.operatorProfile": "PHATASiA LOTUS LAND // LIMBO PROFILE", "about.terminalLabel": "TERMINAL", "about.statusOnline": "STATUS // ONLINE", "about.supervisor": "SUPERVISOR", "about.channelOpen": "CHANNEL // OPEN", "about.contact": "CONTACT", "about.mailAvailable": "MAIL // AVAILABLE",
      "post.date": "DATE", "post.supervisor": "SUPERVISOR", "post.category": "CATEGORY",
    }
  };
  var lang = String(navigator.language || "zh-CN").toLowerCase();
  var locale = lang.indexOf("ja") === 0 ? "ja" : (lang.indexOf("zh") === 0 ? "zh" : "en");
  document.documentElement.setAttribute("lang", locale === "ja" ? "ja" : (locale === "en" ? "en" : "zh-CN"));
  var map = maps[locale];
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var key = el.getAttribute("data-i18n");
    if (Object.prototype.hasOwnProperty.call(map, key)) el.textContent = map[key];
  });
  document.querySelectorAll("[data-i18n-nav-key]").forEach(function (el) {
    var key = "nav." + el.getAttribute("data-i18n-nav-key");
    if (Object.prototype.hasOwnProperty.call(map, key)) el.textContent = map[key];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
    var key = el.getAttribute("data-i18n-aria");
    if (Object.prototype.hasOwnProperty.call(map, key)) el.setAttribute("aria-label", map[key]);
  });
  document.querySelectorAll("[data-i18n-number]").forEach(function (el) {
    var key = el.getAttribute("data-i18n-number");
    var fn = map[key];
    var n = Number(el.getAttribute("data-i18n-count") || 0);
    if (typeof fn === "function") el.textContent = fn(n);
  });
})();


(function () {
  "use strict";

  var toggle = document.getElementById("phi-nav-toggle");
  var nav = document.getElementById("phi-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var bar = document.querySelector(".phi-progress__bar");
  if (bar) {
    var updateProgress = function () {
      var doc = document.documentElement;
      var max = doc.scrollHeight - doc.clientHeight;
      var ratio = max > 0 ? window.scrollY / max : 0;
      bar.style.width = (Math.max(0, Math.min(1, ratio)) * 100) + "%";
    };
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    updateProgress();
  }


  // Desktop mouse-gyro simulation for Saturn FILE_CONTENT pages.
  // The cursor acts like a virtual gyroscope: horizontal movement tilts
  // around Y, vertical movement tilts around X, and the values are kept
  // deliberately small for a subtle physical-device feel.
  var gyroView = document.querySelector(".phi-file-view");
  var gyroFrame = null;
  var gyroTargetX = 0;
  var gyroTargetY = 0;
  var gyroX = 0;
  var gyroY = 0;

  if (gyroView && window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    var updateGyro = function () {
      gyroFrame = null;
      gyroX += (gyroTargetX - gyroX) * 0.10;
      gyroY += (gyroTargetY - gyroY) * 0.10;
      gyroView.style.setProperty("--gyro-x", gyroX.toFixed(3) + "deg");
      gyroView.style.setProperty("--gyro-y", gyroY.toFixed(3) + "deg");
      if (Math.abs(gyroTargetX - gyroX) > 0.01 || Math.abs(gyroTargetY - gyroY) > 0.01) {
        gyroFrame = requestAnimationFrame(updateGyro);
      }
    };

    var resetGyro = function () {
      gyroTargetX = 0;
      gyroTargetY = 0;
      gyroView.classList.add("is-gyro-active");
      if (!gyroFrame) gyroFrame = requestAnimationFrame(updateGyro);
    };

    document.addEventListener("mousemove", function (event) {
      var nx = (event.clientX / Math.max(window.innerWidth, 1)) * 2 - 1;
      var ny = (event.clientY / Math.max(window.innerHeight, 1)) * 2 - 1;
      // Keep the tilt subtle: about +/- 0.75 degrees horizontally and +/- 0.5 vertically.
      gyroTargetX = nx * 0.75;
      gyroTargetY = ny * -0.5;
      gyroView.classList.add("is-gyro-active");
      if (!gyroFrame) gyroFrame = requestAnimationFrame(updateGyro);
    }, { passive: true });

    document.addEventListener("mouseleave", resetGyro);
    window.addEventListener("blur", resetGyro);
    window.addEventListener("resize", resetGyro);
  }

  // Desktop mouse-gyro simulation for Saturn collection windows.
  // Archive, tags, categories and about use the same subtle physical tilt
  // treatment as FILE_CONTENT.
  var collectionViews = document.querySelectorAll(".phi-collection-shell");
  var collectionFrame = null;
  var collectionTargetX = 0;
  var collectionTargetY = 0;
  var collectionX = 0;
  var collectionY = 0;

  if (collectionViews.length && window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    var updateCollectionGyro = function () {
      collectionFrame = null;
      collectionX += (collectionTargetX - collectionX) * 0.10;
      collectionY += (collectionTargetY - collectionY) * 0.10;
      collectionViews.forEach(function (view) {
        view.style.setProperty("--gyro-x", collectionX.toFixed(3) + "deg");
        view.style.setProperty("--gyro-y", collectionY.toFixed(3) + "deg");
        view.classList.add("is-gyro-active");
      });
      if (Math.abs(collectionTargetX - collectionX) > 0.01 || Math.abs(collectionTargetY - collectionY) > 0.01) {
        collectionFrame = requestAnimationFrame(updateCollectionGyro);
      }
    };

    var resetCollectionGyro = function () {
      collectionTargetX = 0;
      collectionTargetY = 0;
      if (!collectionFrame) collectionFrame = requestAnimationFrame(updateCollectionGyro);
    };

    document.addEventListener("mousemove", function (event) {
      var nx = (event.clientX / Math.max(window.innerWidth, 1)) * 2 - 1;
      var ny = (event.clientY / Math.max(window.innerHeight, 1)) * 2 - 1;
      collectionTargetX = nx * 0.75;
      collectionTargetY = ny * -0.5;
      collectionViews.forEach(function (view) { view.classList.add("is-gyro-active"); });
      if (!collectionFrame) collectionFrame = requestAnimationFrame(updateCollectionGyro);
    }, { passive: true });

    window.addEventListener("blur", resetCollectionGyro);
    window.addEventListener("resize", resetCollectionGyro);
  }

  // Give elements marked as a system readout a live UTC timestamp.
  var clocks = document.querySelectorAll("[data-phi-clock]");
  if (clocks.length) {
    var tick = function () {
      var now = new Date();
      var value = now.toISOString().replace("T", " ").replace(/\.\d{3}Z$/, "Z");
      clocks.forEach(function (el) { el.textContent = value; });
    };
    tick();
    setInterval(tick, 1000);
  }
})();

// v5.1 — Homepage virtual-screen navigation.
// The homepage is a fixed-height stage: mouse-wheel / touch gestures change
// between visual screens instead of scrolling a long document.
(function () {
  "use strict";

  var homeRoot = document.querySelector(".phi-index--home");
  if (!homeRoot || !document.body) return;

  var body = document.body;
  var stage = document.querySelector("[data-home-panel=\"0\"]");
  var panels = Array.prototype.slice.call(document.querySelectorAll("[data-home-panel]"));
  var cue = document.querySelector("[data-scroll-target]");
  if (!stage || !panels.length) return;

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var step = 0;
  var locked = false;
  var wheelAccumulator = 0;
  var touchX = null;
  var touchY = null;
  var touchTime = 0;

  var clamp = function (n, a, b) { return Math.max(a, Math.min(b, n)); };

  var applyStep = function (next, instant) {
    step = clamp(next, 0, panels.length - 1);
    for (var i = 0; i < panels.length; i++) {
      panels[i].classList.toggle("is-home-panel-active", i === step);
    }
    for (var c = 0; c < panels.length; c++) {
      body.classList.remove("is-home-step-" + c);
    }
    body.classList.add("is-home-step-" + step);
    body.style.setProperty("--home-bg-fade", step === 0 ? "0" : "1");
    body.style.setProperty("--home-panel-step", String(step));
    if (instant) {
      body.classList.add("is-home-jump");
      requestAnimationFrame(function () { requestAnimationFrame(function () { body.classList.remove("is-home-jump"); }); });
    }
  };

  var changeStep = function (delta) {
    var target = clamp(step + delta, 0, panels.length - 1);
    if (target === step || locked) return;
    locked = true;
    applyStep(target, reduceMotion);
    window.setTimeout(function () { locked = false; }, reduceMotion ? 40 : 820);
  };

  var initialStep = 0;
  try {
    var requestedScreen = new URLSearchParams(window.location.search).get("screen");
    if (requestedScreen !== null && /^\d+$/.test(requestedScreen)) initialStep = clamp(Number(requestedScreen), 0, panels.length - 1);
  } catch (error) {}
  applyStep(initialStep, true);

  /* Coming-home navigation uses ?screen=1. Clean it after initialization. */
  try {
    if (window.history && window.location.search.indexOf("screen=") !== -1) {
      window.history.replaceState({}, document.title, window.location.pathname + window.location.hash);
    }
  } catch (error) {}

  var onWheel = function (event) {
    if (!body.classList.contains("is-home-page")) return;
    if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) return;
    event.preventDefault();
    if (locked) return;
    wheelAccumulator += event.deltaY;
    if (Math.abs(wheelAccumulator) < 26) return;
    var dir = wheelAccumulator > 0 ? 1 : -1;
    wheelAccumulator = 0;
    changeStep(dir);
  };

  window.addEventListener("wheel", onWheel, { passive: false });

  var onTouchStart = function (event) {
    if (!event.touches || event.touches.length !== 1) return;
    touchX = event.touches[0].clientX;
    touchY = event.touches[0].clientY;
    touchTime = Date.now();
  };
  var onTouchEnd = function (event) {
    if (touchY === null || !event.changedTouches || !event.changedTouches.length) return;
    var dx = event.changedTouches[0].clientX - touchX;
    var dy = event.changedTouches[0].clientY - touchY;
    var dt = Date.now() - touchTime;
    touchX = touchY = null;
    if (Math.abs(dy) < 48 || Math.abs(dy) < Math.abs(dx) || dt > 900) return;
    changeStep(dy < 0 ? 1 : -1);
  };
  window.addEventListener("touchstart", onTouchStart, { passive: true });
  window.addEventListener("touchend", onTouchEnd, { passive: true });

  if (cue) {
    cue.addEventListener("click", function () { changeStep(1); });
  }

  document.addEventListener("keydown", function (event) {
    if (!body.classList.contains("is-home-page")) return;
    if (event.key === "ArrowDown" || event.key === "PageDown" || event.key === " ") {
      event.preventDefault();
      changeStep(1);
    } else if (event.key === "ArrowUp" || event.key === "PageUp") {
      event.preventDefault();
      changeStep(-1);
    } else if (event.key === "Home") {
      event.preventDefault();
      applyStep(0, false);
    } else if (event.key === "End") {
      event.preventDefault();
      applyStep(panels.length - 1, false);
    }
  });

  // Keep the virtual homepage inside a single viewport even on resize/orientation change.
  window.addEventListener("resize", function () { applyStep(step, true); });
})();

// Homepage feature slideshow. Horizontal swipe remains independent from the vertical
// virtual-screen navigation above.
(function () {
  "use strict";
  var slider = document.querySelector("[data-feature-slider]");
  if (!slider) return;
  var track = slider.querySelector(".phi-feature-track");
  var slides = slider.querySelectorAll(".phi-feature-slide");
  var dots = slider.querySelectorAll("[data-feature-dot]");
  var prev = slider.querySelector("[data-feature-prev]");
  var next = slider.querySelector("[data-feature-next]");
  if (!track || !slides.length) return;
  var current = 0;
  var touchStartX = null;
  var setSlide = function (nextIndex) {
    current = (nextIndex + slides.length) % slides.length;
    track.style.transform = "translate3d(" + (-current * 100) + "%,0,0)";
    slides.forEach(function (slide, index) { slide.classList.toggle("is-active", index === current); });
    dots.forEach(function (dot, index) {
      dot.classList.toggle("is-active", index === current);
      dot.setAttribute("aria-selected", index === current ? "true" : "false");
    });
  };
  if (prev) prev.addEventListener("click", function () { setSlide(current - 1); });
  if (next) next.addEventListener("click", function () { setSlide(current + 1); });
  dots.forEach(function (dot) {
    dot.addEventListener("click", function () { setSlide(Number(dot.getAttribute("data-feature-dot") || 0)); });
  });
  slider.addEventListener("touchstart", function (event) {
    if (event.touches.length === 1) touchStartX = event.touches[0].clientX;
  }, { passive: true });
  slider.addEventListener("touchend", function (event) {
    if (touchStartX === null || !event.changedTouches.length) return;
    var dx = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 42) setSlide(current + (dx < 0 ? 1 : -1));
    touchStartX = null;
  }, { passive: true });
})();

// PHANTASiA terminal browser-tab presence signal.
(function () {
  "use strict";
  var normalTitle = "PHANTASiA LOTUS LAND";
  var blurredTitle = "PHANTASiA LOST...";
  var connectedTitle = "PHANTASiA CONNECTED";
  var restoreTimer = null;

  var setNormalTitle = function () {
    if (restoreTimer) {
      window.clearTimeout(restoreTimer);
      restoreTimer = null;
    }
    document.title = normalTitle;
  };

  var onBlur = function () {
    if (restoreTimer) {
      window.clearTimeout(restoreTimer);
      restoreTimer = null;
    }
    document.title = blurredTitle;
  };

  var onFocus = function () {
    if (restoreTimer) window.clearTimeout(restoreTimer);
    document.title = connectedTitle;
    restoreTimer = window.setTimeout(function () {
      restoreTimer = null;
      document.title = normalTitle;
    }, 1000);
  };

  window.addEventListener("blur", onBlur);
  window.addEventListener("focus", onFocus);
  setNormalTitle();
})();


// Saturn FILE_CONTENT BACK: return to the actual previous browser entry.
(function () {
  "use strict";
  document.querySelectorAll("[data-phi-back]").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      if (window.history && window.history.length > 1) window.history.back();
      else window.location.href = "/";
    });
  });
})();

// v8.5 — Mobile Saturn Folder drawer.
(function () {
  "use strict";

  var view = document.querySelector(".phi-file-view");
  var toggle = document.querySelector(".phi-folder-mobile-toggle");
  var panel = document.getElementById("phi-folder-panel");
  var closeButton = document.querySelector(".phi-folder-mobile-close");
  var scrim = document.querySelector(".phi-folder-mobile-scrim");
  if (!view || !toggle || !panel) return;

  var media = window.matchMedia ? window.matchMedia("(max-width: 780px)") : null;
  var isMobile = function () { return !media || media.matches; };

  var setOpen = function (open) {
    view.classList.toggle("is-folder-open", !!open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close folder" : "Open folder");
    toggle.textContent = "FOLDER";
    if (closeButton) closeButton.setAttribute("aria-hidden", open ? "false" : "true");
  };

  toggle.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    setOpen(!view.classList.contains("is-folder-open"));
  });

  if (closeButton) {
    closeButton.setAttribute("aria-hidden", "true");
    closeButton.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      setOpen(false);
    });
  }

  // A real fixed scrim is used instead of relying on document-level click
  // bubbling. This remains clickable even when another page element captures
  // or stops propagation.
  if (scrim) {
    scrim.setAttribute("aria-hidden", "true");
    var closeFromOutside = function (event) {
      if (!isMobile() || !view.classList.contains("is-folder-open")) return;
      event.preventDefault();
      event.stopPropagation();
      setOpen(false);
    };
    scrim.addEventListener("click", closeFromOutside);
    scrim.addEventListener("pointerup", closeFromOutside);
    scrim.addEventListener("touchend", closeFromOutside, { passive: false });
  }

  // Bind directly to each folder item so navigation always collapses the drawer
  // before the browser changes pages.
  panel.querySelectorAll("a.phi-folder-item").forEach(function (link) {
    link.addEventListener("click", function () {
      if (isMobile()) setOpen(false);
    }, true);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && view.classList.contains("is-folder-open")) {
      setOpen(false);
    }
  });

  if (media) {
    var sync = function () { if (!media.matches) setOpen(false); };
    if (media.addEventListener) media.addEventListener("change", sync);
    else if (media.addListener) media.addListener(sync);
  }

  setOpen(false);
})();

/* ==========================================================
   ACCESS KEY GATE — decrypt protected article content locally
   ========================================================== */
(function () {
  "use strict";
  var gates = document.querySelectorAll("[data-access-gate]");
  if (!gates.length) return;

  function fromBase64(value) {
    var binary = atob(value);
    var bytes = new Uint8Array(binary.length);
    for (var i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    return bytes;
  }
  function utf8(value) { return new TextEncoder().encode(value); }
  function getLanguage() { return /^en(?:-|$)/i.test(navigator.language || "") ? "en" : "zh"; }

  gates.forEach(function (gate) {
    var form = gate.querySelector("[data-access-form]");
    var input = gate.querySelector("[data-access-input]");
    var payload;
    try { payload = JSON.parse(gate.getAttribute("data-payload") || "{}"); } catch (_) { return; }
    var content = gate.parentElement.querySelector("[data-access-content]");
    var modal = gate.parentElement.querySelector("[data-access-modal]");
    /* Keep the dialog as a direct child of body. Some glass/backdrop-filter
       ancestors create a containing block for position:fixed, which pushed the
       modal down into the article instead of centering it in the viewport. */
    if (modal && modal.parentElement !== document.body) document.body.appendChild(modal);
    var error = modal && modal.querySelector("[data-access-error]");
    var storageKey = gate.getAttribute("data-storage-key") || "phi-access:article";
    var english = getLanguage() === "en";
    if (input) {
      input.placeholder = english ? "PLEASE INPUT ACCESS KEY..." : "请输入访问密钥...";
      input.setAttribute("aria-label", english ? "Access key" : "访问密钥");
    }
    var description = gate.querySelector("[data-access-description]");
    if (description) description.textContent = english ? "ACCESS RESTRICTED — ENTER THE KEY TO CONTINUE" : "访问被拒绝，需要通行密钥来继续";
    var submit = form && form.querySelector("button[type='submit']");
    if (submit) submit.setAttribute("aria-label", english ? "Unlock article" : "解锁文章");
    if (error) error.textContent = english ? "Incorrect access key!" : "密钥错误！";
    var modalTitle = modal && modal.querySelector("h3");
    if (modalTitle && english) modalTitle.textContent = "WARNING";
    var modalButton = modal && modal.querySelector("[data-access-modal-close]:not(.phi-access-modal__backdrop)");
    if (modalButton && english) modalButton.textContent = "CONFIRM";

    function showError() {
      if (!modal) return;
      modal.hidden = false;
      if (modalButton) modalButton.focus();
    }
    function hideModal() { if (modal) modal.hidden = true; }
    if (modal) modal.querySelectorAll("[data-access-modal-close]").forEach(function (button) {
      button.addEventListener("click", hideModal);
    });

    async function unlock(key, fromCache) {
      if (!window.crypto || !crypto.subtle) throw new Error("WebCrypto unavailable");
      var material = await crypto.subtle.importKey("raw", utf8(key), "PBKDF2", false, ["deriveKey"]);
      var aesKey = await crypto.subtle.deriveKey({
        name: "PBKDF2", salt: fromBase64(payload.salt), iterations: Number(payload.iterations) || 210000, hash: "SHA-256"
      }, material, { name: "AES-GCM", length: 256 }, false, ["decrypt"]);
      var combined = new Uint8Array(fromBase64(payload.data).length + fromBase64(payload.tag).length);
      var encrypted = fromBase64(payload.data), tag = fromBase64(payload.tag);
      combined.set(encrypted, 0); combined.set(tag, encrypted.length);
      var plain = await crypto.subtle.decrypt({ name: "AES-GCM", iv: fromBase64(payload.iv), tagLength: 128 }, aesKey, combined);
      var html = new TextDecoder().decode(plain);
      content.innerHTML = html;
      content.hidden = false;
      gate.hidden = true;
      /* Restore the exact unprotected status and progress from build-time metadata.
         Status is URI-encoded in HTML so punctuation/escaping cannot corrupt it. */
      var filePanel = gate.closest(".phi-file-panel");
      var topbar = filePanel ? filePanel.querySelector(".phi-file-topbar") : document.querySelector(".phi-file-topbar[data-unlocked-progress]");
      if (topbar) {
        var realProgress = topbar.getAttribute("data-unlocked-progress");
        var encodedStatus = topbar.getAttribute("data-unlocked-status");
        var realStatus = "";
        try { realStatus = encodedStatus !== null ? decodeURIComponent(encodedStatus) : ""; } catch (_) { realStatus = ""; }
        /* Defensive cleanup: metadata must be plain UI copy, never quoted data. */
        realStatus = String(realStatus || "").replace(/[\"“”‘’']/g, "").trim();
        /* IMPORTANT: do not write --analysis-progress during unlock.
           The topbar already has the exact per-post percentage in its original
           inline style, identical to an ordinary article. Rewriting from the
           data attribute here was the source of the fill collapsing to 0%. */
        if (realStatus) {
          var statusNode = topbar.querySelector(".phi-analysis-status > span");
          if (statusNode) statusNode.textContent = realStatus;
          topbar.setAttribute("aria-label", realStatus);
        }
        /* Remove any legacy lock marker after restoring the real status. */
        topbar.classList.remove("is-access-locked");
        topbar.removeAttribute("data-unlocked-progress");
        topbar.removeAttribute("data-unlocked-status");
      }
      document.documentElement.classList.remove("phi-access-cache-pending");
      if (filePanel) filePanel.classList.remove("is-access-initializing");
      document.dispatchEvent(new CustomEvent("phi:access-unlocked"));
      if (!fromCache) {
        try { localStorage.setItem(storageKey, key); } catch (_) {}
      }
    }

    form.addEventListener("submit", async function (event) {
      event.preventDefault();
      var key = input.value;
      if (!key) { input.focus(); return; }
      if (submit) { submit.disabled = true; }
      try { await unlock(key, false); }
      catch (_) { showError(); input.select(); }
      finally { if (submit) submit.disabled = false; }
    });

    /* Avoid flashing the red ACCESS DENIED gate on repeat visits.
       The gate is server-rendered hidden; reveal it only when no cached key
       exists or the cached key can no longer decrypt this article. */
    var cachedKey = "";
    try { cachedKey = localStorage.getItem(storageKey) || ""; } catch (_) {}
    if (cachedKey) {
      unlock(cachedKey, true).catch(function () {
        try { localStorage.removeItem(storageKey); } catch (_) {}
        document.documentElement.classList.remove("phi-access-cache-pending");
        var panel = gate.closest(".phi-file-panel");
        if (panel) panel.classList.remove("is-access-initializing");
        gate.hidden = false;
      });
    } else {
      var panel = gate.closest(".phi-file-panel");
      if (panel) panel.classList.remove("is-access-initializing");
      gate.hidden = false;
    }
  });
})();
