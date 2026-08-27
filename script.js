/* ============================================================
   EDIT YOUR CONTENT HERE. Everything below is plain data —
   change text, add/remove items, nothing else needs to be touched.
   ============================================================ */

const SKILLS = [
  {
    tag: "MSFT",
    title: "Microsoft Security",
    items: ["Defender XDR", "Microsoft Sentinel (SIEM/SOAR)", "Entra ID", "Microsoft Purview"]
  },
  {
    tag: "CLOUD",
    title: "Cloud Security",
    items: ["Azure", "AWS", "Hybrid environments", "Prisma Cloud (CSPM/CWPP/CIEM)"]
  },
  {
    tag: "MAIL/EP",
    title: "Email & Endpoint",
    items: ["Proofpoint (Email Security, TAP, DLP)", "CylancePROTECT / OPTICS"]
  },
  {
    tag: "VALID",
    title: "Control Validation",
    items: ["Picus Security (Breach & Attack Simulation)"]
  },
  {
    tag: "INFRA",
    title: "Infrastructure",
    items: ["Windows Server", "Active Directory", "VMware / Hyper-V", "Veeam", "Dell Storage"]
  },
  {
    tag: "PROC",
    title: "Process",
    items: ["ITIL", "Change Management (GMUD/CT)"]
  }
];

const EXPERIENCE = [
  {
    current: true,
    period: "Nov 2022 — Present",
    role: "Cloud Security Engineer",
    formalTitle: "(formal title: Analista de Segurança em Cloud)",
    company: "Trust Control — Fortaleza, BR",
    bullets: [
      "Architecture, implementation, and operation of Microsoft Defender XDR (Endpoint, Identity, Office 365, Cloud Apps).",
      "Deployment and administration of Microsoft Sentinel (SIEM/SOAR): event correlation, automation, and incident response playbooks.",
      "Administration of Microsoft Entra ID (Identity Protection, MFA, Conditional Access) with governance aligned to Zero Trust.",
      "Implementation of Microsoft Purview (DLP, Information Protection, Compliance) for sensitive data protection.",
      "Security posture management across Azure, AWS, and hybrid environments via Prisma Cloud (CSPM/CWPP/CIEM).",
      "Administration of Proofpoint (Email Security, TAP, DLP, Threat Response) and Cylance endpoint protection.",
      "Continuous control-effectiveness validation using Picus Security (BAS)."
    ]
  },
  {
    period: "Jan 2022 — Dec 2022",
    role: "IT Infrastructure Analyst",
    company: "Universidade de Fortaleza (UNIFOR) — Fortaleza, BR",
    bullets: [
      "Sustained and optimized VMware environments (HA, DRS, SDRS).",
      "Administered Windows Server and Active Directory.",
      "Managed Dell storage and Veeam backup routines.",
      "Documented infrastructure and supported audit processes."
    ]
  },
  {
    period: "Jun 2019 — Jan 2022",
    role: "IT Infrastructure Architect",
    company: "SONDA / Resource IT Solutions — Fortaleza, BR",
    bullets: [
      "Administered Windows Server environments: AD, DNS, DHCP, IIS, Failover Clustering, Hyper-V, VMM.",
      "Produced topology diagrams and technical documentation for systems and infrastructure.",
      "Authored formal Change Tickets (CTs) for change management."
    ]
  },
  {
    period: "Aug 2018 — Jun 2019",
    role: "IT Security Consultant",
    company: "NTSec | Network Security — Fortaleza, BR",
    bullets: [
      "Installed and configured firewall solutions (Checkpoint, Sophos).",
      "Resolved information security incidents.",
      "Worked with Veeam backup, Aruba wireless, VMware virtualization, and CyberArk privileged access management."
    ]
  },
  {
    period: "Sep 2013 — 2018",
    role: "IT Support / Supervisor",
    company: "Clínica Qorpo · Rede de Hospitais São Camilo",
    bullets: [
      "Coordinated IT operations following ITIL practices; virtualized server infrastructure (VMware/Hyper-V); installed and configured firewalls and antivirus across hospital units."
    ]
  }
];

/* code: short label shown on the badge. name: full certification name.
   year: EDIT with the real year. url: paste the credential verification link when you have it. */
const CERTIFICATIONS = [
  { code: "SC-100", name: "Microsoft Certified: Cybersecurity Architect Expert", year: "20XX", url: "" },
  { code: "SC-200", name: "Microsoft Certified: Security Operations Analyst Associate", year: "20XX", url: "" },
  { code: "SC-300", name: "Microsoft Certified: Identity and Access Administrator Associate", year: "20XX", url: "" },
  { code: "SC-401", name: "Microsoft Certified: Information Security Administrator Associate", year: "20XX", url: "" },
  { code: "AZ-104", name: "Microsoft Certified: Azure Administrator Associate", year: "20XX", url: "" },
  { code: "AZ-500", name: "Microsoft Certified: Azure Security Engineer Associate", year: "20XX", url: "" },
  { code: "MS-500", name: "Microsoft 365 Certified: Security Administrator Associate", year: "20XX", url: "" },
  { code: "AZ-700", name: "Microsoft Certified: Azure Network Engineer Associate", year: "20XX", url: "" },
  { code: "VCP-DCV", name: "VMware Certified Professional – Data Center Virtualization", year: "20XX", url: "" },
  { code: "PROOFPT", name: "Proofpoint Certified AI Email Security Specialist", year: "20XX", url: "" },
  { code: "FORENS", name: "Análise Forense de Redes", year: "20XX", url: "" }
];

/* Free courses, tracks, or trails you've completed. Add as many as you like. */
const LEARNING_PATHS = [
  { title: "Microsoft Learn — Security, Compliance & Identity", issuer: "Microsoft Learn" },
  { title: "Microsoft Learn — Azure Security Engineer path", issuer: "Microsoft Learn" },
  { title: "Add your next completed course or track here", issuer: "Issuer / Platform" }
];

/* Add one entry per public project. Set "url" once the repo is live. */
const PROJECTS = [
  {
    title: "KQL Detection Library",
    description: "Documented detection queries for Microsoft Sentinel and Defender XDR — identity, endpoint, and email scenarios, each mapped to MITRE ATT&CK.",
    tags: ["KQL", "Sentinel", "Defender XDR", "MITRE ATT&CK"],
    url: "",
    soon: false
  },
  {
    title: "Secure IaC Templates",
    description: "Terraform templates for Azure with security controls validated via tfsec/Checkov.",
    tags: ["Terraform", "IaC Security"],
    url: "",
    soon: true
  },
  {
    title: "Incident Response Playbooks",
    description: "Documented response flows for phishing, account compromise, and endpoint malware scenarios.",
    tags: ["IR", "Sentinel Playbooks"],
    url: "",
    soon: true
  }
];

/* ============================================================
   Rendering — no need to edit below this line.
   ============================================================ */

function el(tag, className, html) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  SKILLS.forEach(group => {
    const card = el("div", "card reveal");
    card.appendChild(el("span", "card-tag", group.tag));
    card.appendChild(el("h3", null, group.title));
    const tags = el("div", "taglist");
    group.items.forEach(i => tags.appendChild(el("span", "chip", i)));
    card.appendChild(tags);
    grid.appendChild(card);
  });
}

function renderExperience() {
  const wrap = document.getElementById("timeline");
  EXPERIENCE.forEach(job => {
    const item = el("div", "tl-item reveal" + (job.current ? " current" : ""));
    item.appendChild(el("div", "tl-dot"));
    item.appendChild(el("div", "tl-period mono", job.period));
    item.appendChild(el("div", "tl-role", job.role));
    item.appendChild(el("div", "tl-company", job.company + (job.formalTitle ? ` <span class="formal">${job.formalTitle}</span>` : "")));
    const ul = el("ul");
    job.bullets.forEach(b => ul.appendChild(el("li", null, b)));
    item.appendChild(ul);
    wrap.appendChild(item);
  });
}

function renderCertifications() {
  const grid = document.getElementById("certGrid");
  CERTIFICATIONS.forEach(c => {
    const card = el("div", "cert-card reveal");
    const top = el("div", "cert-top");
    top.appendChild(el("div", "cert-name", c.name));
    top.appendChild(el("span", "cert-code mono", c.code));
    card.appendChild(top);
    const meta = el("div", "cert-meta");
    meta.appendChild(el("span", null, c.year));
    meta.appendChild(c.url ? el("a", null, `<a href="${c.url}" target="_blank" rel="noopener">Verify ↗</a>`) : el("span", null, "Add link"));
    card.appendChild(meta);
    grid.appendChild(card);
  });
}

function renderPaths() {
  const wrap = document.getElementById("pathsList");
  LEARNING_PATHS.forEach((p, i) => {
    const row = el("div", "path-row reveal");
    row.appendChild(el("div", "path-idx mono", String(i + 1).padStart(2, "0")));
    const col = el("div");
    col.appendChild(el("div", "path-title", p.title));
    col.appendChild(el("div", "path-issuer mono", p.issuer));
    row.appendChild(col);
    wrap.appendChild(row);
  });
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  PROJECTS.forEach(p => {
    const card = el("div", "proj-card reveal" + (p.soon ? " soon" : ""));
    card.appendChild(el("h3", null, p.title));
    card.appendChild(el("p", null, p.description));
    const tags = el("div", "taglist");
    p.tags.forEach(t => tags.appendChild(el("span", "chip", t)));
    card.appendChild(tags);
    card.appendChild(
      p.soon
        ? el("span", "proj-link mono", "Coming soon")
        : el("a", "proj-link mono", `<a href="${p.url || '#'}" target="_blank" rel="noopener">View on GitHub ↗</a>`)
    );
    grid.appendChild(card);
  });
}

renderSkills();
renderExperience();
renderCertifications();
renderPaths();
renderProjects();

document.getElementById("year").textContent = new Date().getFullYear();

/* Scroll reveal */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(elm => observer.observe(elm));
