/* Portfolio behavior — vanilla JS, no build step, no dependencies. */
(function () {
  "use strict";

  var STRINGS = {
    aboutKicker: { en: "About", pt: "Sobre" },
    specKicker: { en: "Specialties", pt: "Especialidades" },
    specHeading: { en: "Where I focus.", pt: "Onde eu foco." },
    certKicker: { en: "Certifications", pt: "Certificações" },
    certHeading: { en: "Credentials.", pt: "Certificações." },
    projKicker: { en: "Featured Projects", pt: "Projetos em Destaque" },
    projHeading: { en: "Selected work.", pt: "Trabalhos selecionados." },
    projSub: { en: "Click a project to see the full case study — problem, approach and result.", pt: "Clique em um projeto para ver o case completo — problema, abordagem e resultado." },
    ctemKicker: { en: "Methodology", pt: "Metodologia" },
    ctemHeading: { en: "Exposure management lifecycle.", pt: "Ciclo de gestão de exposição." },
    ctemSub: { en: "The path from asset discovery to continuous validation — the way I approach vulnerability and exposure management.", pt: "O caminho da descoberta de ativos até a validação contínua — como eu abordo gestão de vulnerabilidades e exposição." },
    labsKicker: { en: "Security Labs", pt: "Security Labs" },
    labsHeading: { en: "Hands-on practice.", pt: "Prática técnica." },
    expKicker: { en: "Trajectory", pt: "Trajetória" },
    expHeading: { en: "Professional experience.", pt: "Experiência profissional." },
    stackKicker: { en: "Technology", pt: "Tecnologia" },
    stackHeading: { en: "Stack.", pt: "Stack." },
    dashKicker: { en: "Overview", pt: "Visão Geral" },
    dashHeading: { en: "Security dashboard.", pt: "Painel de segurança." },
    dashSub: { en: "A qualitative view of where each domain sits — not an arbitrary score.", pt: "Uma visão qualitativa de onde cada domínio está — não uma pontuação arbitrária." },
    contactKicker: { en: "Get in touch", pt: "Contato" },
    contactHeading: { en: "Let's connect.", pt: "Vamos conversar." },
    contactSub: { en: "Open to opportunities in Cloud Security and Security Operations, remote or on-site.", pt: "Aberto a oportunidades em Cloud Security e Security Operations, remoto ou presencial." },
    lblName: { en: "Name", pt: "Nome" },
    lblEmail: { en: "Email", pt: "E-mail" },
    lblCompany: { en: "Company", pt: "Empresa" },
    lblSubject: { en: "Subject", pt: "Assunto" },
    lblMessage: { en: "Message", pt: "Mensagem" },
    btnSend: { en: "Send Message", pt: "Enviar Mensagem" },
    footerNote: { en: "Built with a static, dependency-free stack.", pt: "Construído com uma stack estática, sem dependências." },
    modalProblem: { en: "Problem", pt: "Problema" },
    modalApproach: { en: "Approach", pt: "Abordagem" },
    modalResult: { en: "Result", pt: "Resultado" },
    modalStack: { en: "Stack", pt: "Stack" },
    filterAll: { en: "All", pt: "Todos" },
    demoDataNote: { en: "Demo data", pt: "Dados de demonstração" },
  };

  var state = { lang: localStorage.getItem("portfolio-lang") || "en", certFilter: "all" };

  function t(obj) { return obj[state.lang] || obj.en; }

  /* ---------------- render ---------------- */
  function renderNav() {
    var wrap = document.getElementById("navLinks");
    var anchors = ["about", "specialties", "certifications", "projects", "labs", "experience", "stack", "contact"];
    wrap.innerHTML = SITE.nav[state.lang].map(function (label, i) {
      return '<a href="#' + anchors[i] + '">' + label + "</a>";
    }).join("");
  }

  function renderHero() {
    var h = SITE.hero;
    document.getElementById("hero-kicker").textContent = t(h.eyebrow);
    document.getElementById("hero-headline").textContent = t(h.headline);
    document.getElementById("hero-subhead").textContent = t(h.subhead);
    document.getElementById("hero-tags").innerHTML = h.tags.map(function (tag) {
      return '<span class="pill">' + tag + "</span>";
    }).join("");
    document.getElementById("cta-projects").textContent = t(h.ctas.projects);
    document.getElementById("cta-certifications").textContent = t(h.ctas.certifications);
    var resumeBtn = document.getElementById("cta-resume");
    resumeBtn.textContent = t(h.ctas.resume);
    resumeBtn.href = SITE.meta.resumeUrl;
    document.getElementById("link-linkedin").href = SITE.meta.linkedin;
    document.getElementById("link-github").href = SITE.meta.github;
    document.getElementById("link-email").href = "mailto:" + SITE.meta.email;
    document.getElementById("feed-label").textContent = t(h.feed.label);
    document.getElementById("feed-demo").textContent = t(h.feed.demoTag);
    document.getElementById("feed-items").innerHTML = h.feed.items.map(function (it) {
      return '<div class="feed-item"><span class="sev-dot sev-' + it.severity + '"></span>' +
        '<div class="fi-main"><span class="fi-id mono">' + it.id + '</span><span class="fi-note">' + t(it.note) + "</span></div></div>";
    }).join("");
    document.getElementById("brand-name").textContent = SITE.meta.name;
    document.title = SITE.meta.name + " — " + t(SITE.hero.eyebrow);
  }

  function renderStats() {
    document.getElementById("stats-strip").innerHTML = SITE.stats.map(function (s) {
      return '<div class="stat-cell"><div class="stat-value">' + s.value + '</div><div class="stat-label">' + t(s.label) + "</div></div>";
    }).join("");
  }

  function renderAbout() {
    document.getElementById("about-kicker").textContent = t(STRINGS.aboutKicker);
    document.getElementById("about-heading").textContent = t(SITE.about.heading);
    document.getElementById("about-body").innerHTML = SITE.about.body[state.lang].map(function (p) {
      return "<p>" + p + "</p>";
    }).join("");
  }

  var ICONS = {
    cloud: "☁", shield: "🛡", bug: "🐞", radar: "◎", windows: "⊞", activity: "⌁", key: "🔑", network: "▤",
  };

  function renderSpecialties() {
    document.getElementById("spec-kicker").textContent = t(STRINGS.specKicker);
    document.getElementById("spec-heading").textContent = t(STRINGS.specHeading);
    document.getElementById("spec-grid").innerHTML = SITE.specialties.map(function (s) {
      return '<div class="spec-card reveal"><div class="spec-icon">' + (ICONS[s.icon] || "•") + "</div><h3>" + t(s.title) + "</h3><p>" + t(s.text) + "</p></div>";
    }).join("");
  }

  var CERT_FILTERS = ["all", "microsoft", "cybersecurity", "cloud", "secops", "other"];
  var CERT_FILTER_LABELS = {
    all: STRINGS.filterAll,
    microsoft: { en: "Microsoft", pt: "Microsoft" },
    cybersecurity: { en: "Cyber Security", pt: "Cyber Security" },
    cloud: { en: "Cloud", pt: "Cloud" },
    secops: { en: "Security Operations", pt: "Security Operations" },
    other: { en: "Other", pt: "Outras" },
  };

  function renderCertifications() {
    document.getElementById("cert-kicker").textContent = t(STRINGS.certKicker);
    document.getElementById("cert-heading").textContent = t(STRINGS.certHeading);
    document.getElementById("cert-filters").innerHTML = CERT_FILTERS.map(function (f) {
      return '<button class="filter-btn' + (state.certFilter === f ? " active" : "") + '" data-filter="' + f + '">' + t(CERT_FILTER_LABELS[f]) + "</button>";
    }).join("");
    Array.prototype.forEach.call(document.querySelectorAll("[data-filter]"), function (btn) {
      btn.addEventListener("click", function () {
        state.certFilter = btn.getAttribute("data-filter");
        renderCertifications();
      });
    });
    var list = SITE.certifications.filter(function (c) {
      return state.certFilter === "all" || c.category === state.certFilter;
    });
    document.getElementById("cert-grid").innerHTML = list.map(function (c) {
      return '<div class="cert-card reveal">' +
        '<div class="cert-top"><span class="cert-code">' + c.code + '</span><span class="cert-vendor">' + c.vendor + "</span></div>" +
        '<div class="cert-name">' + c.name + "</div>" +
        '<div class="cert-date">' + c.date + "</div></div>";
    }).join("");
  }

  var currentProject = null;

  function renderProjects() {
    document.getElementById("proj-kicker").textContent = t(STRINGS.projKicker);
    document.getElementById("proj-heading").textContent = t(STRINGS.projHeading);
    document.getElementById("proj-sub").textContent = t(STRINGS.projSub);
    document.getElementById("proj-grid").innerHTML = SITE.projects.map(function (p, idx) {
      return '<div class="project-card reveal" data-idx="' + idx + '">' +
        '<div class="cat-row">' + p.category.map(function (c) { return '<span class="cat-tag">' + c + "</span>"; }).join("") + "</div>" +
        "<h3>" + t(p.title) + "</h3>" +
        '<p class="summary">' + t(p.summary) + "</p>" +
        '<div class="stack-row">' + p.stack.map(function (s) { return '<span class="stack-chip">' + s + "</span>"; }).join("") + "</div>" +
        "</div>";
    }).join("");
    Array.prototype.forEach.call(document.querySelectorAll(".project-card"), function (card) {
      card.addEventListener("click", function () { openProjectModal(SITE.projects[+card.getAttribute("data-idx")]); });
    });
  }

  function openProjectModal(p) {
    currentProject = p;
    document.getElementById("modal-cats").innerHTML = p.category.map(function (c) { return '<span class="cat-tag">' + c + "</span>"; }).join("");
    document.getElementById("modal-title").textContent = t(p.title);
    document.getElementById("modal-summary").textContent = t(p.summary);
    document.getElementById("modal-lbl-problem").textContent = t(STRINGS.modalProblem);
    document.getElementById("modal-problem").textContent = t(p.details.problem);
    document.getElementById("modal-lbl-approach").textContent = t(STRINGS.modalApproach);
    document.getElementById("modal-approach").textContent = t(p.details.approach);
    document.getElementById("modal-lbl-result").textContent = t(STRINGS.modalResult);
    document.getElementById("modal-result").textContent = t(p.details.result);
    document.getElementById("modal-lbl-stack").textContent = t(STRINGS.modalStack);
    document.getElementById("modal-stack").innerHTML = p.stack.map(function (s) { return '<span class="stack-chip">' + s + "</span>"; }).join("");
    var ghWrap = document.getElementById("modal-github-wrap");
    if (p.github) { ghWrap.style.display = ""; document.getElementById("modal-github").href = p.github; }
    else { ghWrap.style.display = "none"; }
    document.getElementById("projectModal").classList.add("open");
  }

  function renderCtem() {
    document.getElementById("ctem-kicker").textContent = t(STRINGS.ctemKicker);
    document.getElementById("ctem-heading").textContent = t(STRINGS.ctemHeading);
    document.getElementById("ctem-sub").textContent = t(STRINGS.ctemSub);
    document.getElementById("ctem-flow").innerHTML = SITE.ctemStages.map(function (s, i) {
      return '<div class="ctem-step reveal"><span class="num">' + String(i + 1).padStart(2, "0") + '</span><span class="lbl">' + t(s) + "</span></div>";
    }).join("");
  }

  function renderLabs() {
    document.getElementById("labs-kicker").textContent = t(STRINGS.labsKicker);
    document.getElementById("labs-heading").textContent = t(STRINGS.labsHeading);
    document.getElementById("labs-grid").innerHTML = SITE.labs.map(function (l) {
      return '<div class="lab-card reveal"><h3>' + t(l.title) + "</h3>" +
        '<div class="lbl">Objective</div><p>' + t(l.objective) + "</p>" +
        '<div class="stack-row" style="margin-top:12px">' + l.tools.map(function (x) { return '<span class="stack-chip">' + x + "</span>"; }).join("") + "</div>" +
        (l.github ? '<div style="margin-top:14px"><a class="btn btn-ghost btn-sm" href="' + l.github + '" target="_blank" rel="noopener">GitHub ↗</a></div>' : "") +
        "</div>";
    }).join("");
  }

  function renderExperience() {
    document.getElementById("exp-kicker").textContent = t(STRINGS.expKicker);
    document.getElementById("exp-heading").textContent = t(STRINGS.expHeading);
    document.getElementById("exp-timeline").innerHTML = SITE.experience.map(function (e) {
      return '<div class="timeline-item reveal"><h3>' + t(e.role) + " — " + e.company + "</h3>" +
        '<div class="meta">' + e.period + " · " + t(e.location) + "</div>" +
        "<p>" + t(e.description) + "</p>" +
        '<div class="stack-row" style="margin-top:10px">' + e.tech.map(function (x) { return '<span class="stack-chip">' + x + "</span>"; }).join("") + "</div>" +
        "</div>";
    }).join("");
  }

  function renderStack() {
    document.getElementById("stack-kicker").textContent = t(STRINGS.stackKicker);
    document.getElementById("stack-heading").textContent = t(STRINGS.stackHeading);
    var groupLabels = { cloud: { en: "Cloud", pt: "Cloud" }, security: { en: "Security", pt: "Segurança" }, vulnerability: { en: "Vulnerability / Exposure", pt: "Vulnerabilidade / Exposição" }, infrastructure: { en: "Infrastructure", pt: "Infraestrutura" }, automation: { en: "Automation", pt: "Automação" } };
    document.getElementById("stack-groups").innerHTML = Object.keys(SITE.stack).map(function (key) {
      return '<div class="stack-group"><h4>' + t(groupLabels[key] || { en: key, pt: key }) + '</h4><div class="stack-row">' +
        SITE.stack[key].map(function (x) { return '<span class="stack-chip">' + x + "</span>"; }).join("") + "</div></div>";
    }).join("");
  }

  function renderDashboard() {
    document.getElementById("dash-kicker").textContent = t(STRINGS.dashKicker);
    document.getElementById("dash-heading").textContent = t(STRINGS.dashHeading);
    document.getElementById("dash-sub").textContent = t(STRINGS.dashSub);
    document.getElementById("dash-list").innerHTML = SITE.dashboard.map(function (d) {
      var width = d.level === "advanced" ? "88%" : d.level === "core" ? "70%" : "55%";
      return '<div class="dash-row"><div class="dash-label">' + t(d.label) + '</div>' +
        '<div class="dash-track"><div class="dash-fill" data-width="' + width + '"></div></div>' +
        '<div class="dash-tag">' + d.level + "</div></div>";
    }).join("");
    document.getElementById("dash-legend").innerHTML =
      '<span>Core</span><span>Advanced</span><span>Hands-on</span>';
  }

  function renderContact() {
    document.getElementById("contact-kicker").textContent = t(STRINGS.contactKicker);
    document.getElementById("contact-heading").textContent = t(STRINGS.contactHeading);
    document.getElementById("contact-sub").textContent = t(STRINGS.contactSub);
    document.getElementById("lbl-name").textContent = t(STRINGS.lblName);
    document.getElementById("lbl-email").textContent = t(STRINGS.lblEmail);
    document.getElementById("lbl-company").textContent = t(STRINGS.lblCompany);
    document.getElementById("lbl-subject").textContent = t(STRINGS.lblSubject);
    document.getElementById("lbl-message").textContent = t(STRINGS.lblMessage);
    document.getElementById("btn-send").textContent = t(STRINGS.btnSend);
    document.getElementById("contact-links").innerHTML =
      '<a href="mailto:' + SITE.meta.email + '"><span class="ic">@</span>' + SITE.meta.email + "</a>" +
      '<a href="' + SITE.meta.linkedin + '" target="_blank" rel="noopener"><span class="ic">in</span>LinkedIn</a>' +
      '<a href="' + SITE.meta.github + '" target="_blank" rel="noopener"><span class="ic">gh</span>GitHub</a>';
  }

  function renderFooter() {
    document.getElementById("footer-note").textContent = "© " + new Date().getFullYear() + " " + SITE.meta.name + " · " + t(STRINGS.footerNote);
  }

  function renderAll() {
    document.documentElement.lang = state.lang;
    document.documentElement.setAttribute("data-lang", state.lang);
    renderNav(); renderHero(); renderStats(); renderAbout(); renderSpecialties();
    renderCertifications(); renderProjects(); renderCtem(); renderLabs();
    renderExperience(); renderStack(); renderDashboard(); renderContact(); renderFooter();
    setActiveNav();
    observeReveal();
    setTimeout(animateDashboard, 250);
  }

  /* ---------------- behavior ---------------- */
  function animateDashboard() {
    Array.prototype.forEach.call(document.querySelectorAll(".dash-fill"), function (el) {
      el.style.width = el.getAttribute("data-width");
    });
  }

  function observeReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("in"); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (e) { io.observe(e); });
  }

  function setActiveNav() {
    var links = document.querySelectorAll("#navLinks a");
    var sections = Array.prototype.map.call(links, function (l) { return document.querySelector(l.getAttribute("href")); }).filter(Boolean);
    function onScroll() {
      var pos = window.scrollY + 110;
      var activeIdx = 0;
      sections.forEach(function (sec, i) { if (sec.offsetTop <= pos) activeIdx = i; });
      links.forEach(function (l, i) { l.classList.toggle("active", i === activeIdx); });
      document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 8);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function setupLangToggle() {
    Array.prototype.forEach.call(document.querySelectorAll("[data-lang-btn]"), function (btn) {
      btn.addEventListener("click", function () {
        state.lang = btn.getAttribute("data-lang-btn");
        localStorage.setItem("portfolio-lang", state.lang);
        Array.prototype.forEach.call(document.querySelectorAll("[data-lang-btn]"), function (b) {
          b.classList.toggle("active", b === btn);
        });
        renderAll();
      });
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-lang-btn]"), function (b) {
      b.classList.toggle("active", b.getAttribute("data-lang-btn") === state.lang);
    });
  }

  function setupNavToggle() {
    var toggle = document.getElementById("navToggle");
    var links = document.getElementById("navLinks");
    toggle.addEventListener("click", function () { links.classList.toggle("open"); });
    links.addEventListener("click", function (e) { if (e.target.tagName === "A") links.classList.remove("open"); });
  }

  function setupModal() {
    var backdrop = document.getElementById("projectModal");
    document.getElementById("modalClose").addEventListener("click", close);
    backdrop.addEventListener("click", function (e) { if (e.target === backdrop) close(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
    function close() { backdrop.classList.remove("open"); }
  }

  function setupContactForm() {
    document.getElementById("contact-form").addEventListener("submit", function (e) {
      e.preventDefault();
      var f = new FormData(e.target);
      var subject = encodeURIComponent(f.get("subject") || "Portfolio contact");
      var body = encodeURIComponent(
        "Name: " + f.get("name") + "\nEmail: " + f.get("email") + "\nCompany: " + f.get("company") + "\n\n" + f.get("message")
      );
      window.location.href = "mailto:" + SITE.meta.email + "?subject=" + subject + "&body=" + body;
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupLangToggle();
    setupNavToggle();
    setupModal();
    setupContactForm();
    renderAll();
  });
})();
