/**
 * SITE CONTENT — edit this file to update the portfolio.
 * No build step needed: reload the page after saving.
 *
 * Everything here is either real content you provide, or a
 * placeholder clearly marked "TODO" for you to fill in.
 * Nothing here should be presented as real experience unless
 * you have entered real information.
 */

const SITE = {
  meta: {
    name: "Thiego Araújo",
    role: { en: "Cloud Security Analyst", pt: "Analista de Segurança em Nuvem" },
    email: "TODO@example.com", // TODO: put your professional email here
    linkedin: "https://www.linkedin.com/in/TODO", // TODO
    github: "https://github.com/TODO", // TODO
    resumeUrl: "assets/resume/resume.pdf", // TODO: drop your PDF at this path
  },

  nav: {
    en: ["Home", "About", "Specialties", "Certifications", "Projects", "Labs", "Experience", "Stack", "Contact"],
    pt: ["Início", "Sobre", "Especialidades", "Certificações", "Projetos", "Labs", "Experiência", "Stack", "Contato"],
  },

  hero: {
    eyebrow: { en: "Cloud & Cyber Security", pt: "Cyber Security & Cloud" },
    headline: {
      en: "Securing cloud, infrastructure and identity — one exposure at a time.",
      pt: "Protegendo nuvem, infraestrutura e identidade — uma exposição de cada vez.",
    },
    subhead: {
      en: "I work across Microsoft Azure, security operations and vulnerability management to reduce real risk in production environments.",
      pt: "Atuo entre Microsoft Azure, operações de segurança e gestão de vulnerabilidades para reduzir risco real em ambientes de produção.",
    },
    tags: ["Cyber Security", "Cloud Security", "Microsoft Azure", "Vulnerability Management", "Security Operations"],
    ctas: {
      projects: { en: "View Projects", pt: "Ver Projetos" },
      certifications: { en: "View Certifications", pt: "Ver Certificações" },
      resume: { en: "Download Resume", pt: "Baixar Currículo" },
      contact: { en: "Contact Me", pt: "Falar Comigo" },
    },
    // Shown in the live-feed panel. This is illustrative, not a real-time feed.
    feed: {
      label: { en: "Exposure feed", pt: "Feed de exposição" },
      demoTag: { en: "Demo data", pt: "Dados de demonstração" },
      items: [
        { id: "CVE-2024-21412", severity: "high", note: { en: "Internet-facing asset · EPSS 0.91", pt: "Ativo exposto à internet · EPSS 0.91" } },
        { id: "CVE-2023-38831", severity: "medium", note: { en: "Patch available · CISA KEV", pt: "Patch disponível · CISA KEV" } },
        { id: "CVE-2024-30051", severity: "high", note: { en: "Actively exploited", pt: "Exploração ativa" } },
      ],
    },
  },

  stats: [
    { value: "8", label: { en: "Microsoft & partner certifications", pt: "Certificações Microsoft e parceiras" } },
    { value: "5", label: { en: "Security domains covered", pt: "Domínios de segurança cobertos" } },
    { value: "TODO", label: { en: "Years in IT & Security", pt: "Anos em TI & Segurança" } },
  ],

  about: {
    title: { en: "About", pt: "Sobre" },
    heading: { en: "From infrastructure to security.", pt: "Da infraestrutura à segurança." },
    // TODO: replace with your own trajectory — keep it factual, no invented employers or numbers.
    body: {
      en: [
        "I'm an IT professional specializing in security, working across cloud, identity and infrastructure to reduce exposure in corporate environments.",
        "My day-to-day covers Microsoft Azure security, vulnerability and exposure management, security monitoring and endpoint protection — with a practical, hands-on approach rather than a purely theoretical one.",
      ],
      pt: [
        "Sou um profissional de TI especializado em segurança, atuando entre cloud, identidade e infraestrutura para reduzir a exposição em ambientes corporativos.",
        "No dia a dia trabalho com segurança em Microsoft Azure, gestão de vulnerabilidades e exposição, monitoramento de segurança e proteção de endpoints — com uma abordagem prática, não apenas teórica.",
      ],
    },
  },

  specialties: [
    {
      icon: "cloud",
      title: { en: "Cloud Security", pt: "Cloud Security" },
      text: { en: "Microsoft Azure, identity, governance and security architecture for cloud environments.", pt: "Microsoft Azure, identidade, governança e arquitetura de segurança para ambientes em nuvem." },
    },
    {
      icon: "shield",
      title: { en: "Cyber Security", pt: "Cyber Security" },
      text: { en: "Defensive security, security operations, threat detection and continuous monitoring.", pt: "Segurança defensiva, operações de segurança, detecção de ameaças e monitoramento contínuo." },
    },
    {
      icon: "bug",
      title: { en: "Vulnerability Management", pt: "Gestão de Vulnerabilidades" },
      text: { en: "CVE, CVSS, EPSS and exploitability signals driving risk-based remediation.", pt: "CVE, CVSS, EPSS e sinais de exploração orientando remediação baseada em risco." },
    },
    {
      icon: "radar",
      title: { en: "CTEM", pt: "CTEM" },
      text: { en: "Continuous Threat Exposure Management — attack surface and risk prioritization.", pt: "Gestão contínua de exposição a ameaças — superfície de ataque e priorização de risco." },
    },
    {
      icon: "windows",
      title: { en: "Microsoft Security", pt: "Microsoft Security" },
      text: { en: "Defender, Sentinel, Entra ID and Purview across security operations.", pt: "Defender, Sentinel, Entra ID e Purview em operações de segurança." },
    },
    {
      icon: "activity",
      title: { en: "XDR & SecOps", pt: "XDR & SecOps" },
      text: { en: "XDR, SIEM and SOAR concepts applied to detection and response.", pt: "Conceitos de XDR, SIEM e SOAR aplicados a detecção e resposta." },
    },
    {
      icon: "key",
      title: { en: "Identity & Access", pt: "Identidade & Acesso" },
      text: { en: "Microsoft Entra ID, RBAC and conditional access for identity security.", pt: "Microsoft Entra ID, RBAC e acesso condicional para segurança de identidade." },
    },
    {
      icon: "network",
      title: { en: "Endpoint & Network", pt: "Endpoint & Rede" },
      text: { en: "Endpoint protection, network security and firewall-level monitoring.", pt: "Proteção de endpoints, segurança de rede e monitoramento em nível de firewall." },
    },
  ],

  // Filters: all | microsoft | cybersecurity | cloud | secops | other
  certifications: [
    { code: "AZ-104", name: "Microsoft Azure Administrator", vendor: "Microsoft", category: "cloud", date: "TODO", verifyUrl: "", pdfUrl: "" },
    { code: "AZ-500", name: "Microsoft Azure Security Technologies", vendor: "Microsoft", category: "cloud", date: "TODO", verifyUrl: "", pdfUrl: "" },
    { code: "AZ-700", name: "Designing and Implementing Microsoft Azure Networking Solutions", vendor: "Microsoft", category: "cloud", date: "TODO", verifyUrl: "", pdfUrl: "" },
    { code: "SC-100", name: "Microsoft Cybersecurity Architect", vendor: "Microsoft", category: "cybersecurity", date: "TODO", verifyUrl: "", pdfUrl: "" },
    { code: "SC-200", name: "Microsoft Security Operations Analyst", vendor: "Microsoft", category: "secops", date: "TODO", verifyUrl: "", pdfUrl: "" },
    { code: "SC-300", name: "Microsoft Identity and Access Administrator", vendor: "Microsoft", category: "microsoft", date: "TODO", verifyUrl: "", pdfUrl: "" },
    { code: "SC-401", name: "Microsoft Information Security Administrator", vendor: "Microsoft", category: "microsoft", date: "TODO", verifyUrl: "", pdfUrl: "" },
    { code: "MS-500", name: "Microsoft 365 Security Administration", vendor: "Microsoft", category: "microsoft", date: "TODO", verifyUrl: "", pdfUrl: "" },
    { code: "TODO", name: "TODO: add Palo Alto Networks certification name", vendor: "Palo Alto Networks", category: "cybersecurity", date: "TODO", verifyUrl: "", pdfUrl: "" },
    { code: "TODO", name: "TODO: add Trend Micro certification name", vendor: "Trend Micro", category: "cybersecurity", date: "TODO", verifyUrl: "", pdfUrl: "" },
  ],

  // TODO: replace with your real project case studies. Keep placeholders until filled.
  projects: [
    {
      slug: "vuln-ctem-project",
      category: ["Vulnerability Management", "CTEM"],
      title: { en: "TODO: Vulnerability / CTEM project name", pt: "TODO: Nome do projeto de Vulnerability / CTEM" },
      summary: { en: "TODO: one-line summary of the problem this project solves.", pt: "TODO: resumo de uma linha sobre o problema que este projeto resolve." },
      stack: ["TODO"],
      github: "",
      details: {
        problem: { en: "TODO", pt: "TODO" },
        approach: { en: "TODO", pt: "TODO" },
        result: { en: "TODO", pt: "TODO" },
      },
    },
    {
      slug: "azure-security-project",
      category: ["Azure", "Cloud Security"],
      title: { en: "TODO: Azure security project name", pt: "TODO: Nome do projeto de segurança em Azure" },
      summary: { en: "TODO: one-line summary.", pt: "TODO: resumo de uma linha." },
      stack: ["Azure", "TODO"],
      github: "",
      details: {
        problem: { en: "TODO", pt: "TODO" },
        approach: { en: "TODO", pt: "TODO" },
        result: { en: "TODO", pt: "TODO" },
      },
    },
  ],

  ctemStages: [
    { en: "Asset Discovery", pt: "Descoberta de Ativos" },
    { en: "Attack Surface", pt: "Superfície de Ataque" },
    { en: "Vulnerability Discovery", pt: "Descoberta de Vulnerabilidades" },
    { en: "CVE Analysis", pt: "Análise de CVE" },
    { en: "CVSS / EPSS", pt: "CVSS / EPSS" },
    { en: "Exploitability", pt: "Exploração" },
    { en: "Risk Prioritization", pt: "Priorização de Risco" },
    { en: "Remediation", pt: "Remediação" },
    { en: "Validation", pt: "Validação" },
    { en: "Continuous Monitoring", pt: "Monitoramento Contínuo" },
  ],

  // TODO: replace with your real labs.
  labs: [
    {
      title: { en: "TODO: Azure Security Lab", pt: "TODO: Lab de Segurança em Azure" },
      objective: { en: "TODO", pt: "TODO" },
      tools: ["Azure", "TODO"],
      github: "",
    },
    {
      title: { en: "TODO: Microsoft Sentinel Lab", pt: "TODO: Lab de Microsoft Sentinel" },
      objective: { en: "TODO", pt: "TODO" },
      tools: ["Microsoft Sentinel", "TODO"],
      github: "",
    },
  ],

  stack: {
    cloud: ["Microsoft Azure"],
    security: ["Microsoft Defender", "Microsoft Sentinel", "Microsoft Entra", "Palo Alto Networks", "Trend Micro"],
    vulnerability: ["CVE", "CVSS", "EPSS", "CISA KEV", "CTEM"],
    infrastructure: ["Windows Server", "Linux", "Networking"],
    automation: ["PowerShell", "Python"],
  },

  // TODO: replace with your real roles. Do not present placeholders as real experience.
  experience: [
    {
      role: { en: "TODO: Job title", pt: "TODO: Cargo" },
      company: "TODO: Company",
      period: "TODO — Present",
      location: { en: "TODO / Remote", pt: "TODO / Remoto" },
      description: { en: "TODO: what you're responsible for.", pt: "TODO: pelo que você é responsável." },
      tech: ["TODO"],
    },
  ],

  // Qualitative, not a fake percentage — see README.
  dashboard: [
    { label: { en: "Cloud Security", pt: "Cloud Security" }, level: "advanced" },
    { label: { en: "Vulnerability Management", pt: "Gestão de Vulnerabilidades" }, level: "advanced" },
    { label: { en: "Microsoft Azure", pt: "Microsoft Azure" }, level: "advanced" },
    { label: { en: "Security Operations", pt: "Security Operations" }, level: "core" },
    { label: { en: "Identity Security", pt: "Segurança de Identidade" }, level: "core" },
    { label: { en: "CTEM", pt: "CTEM" }, level: "hands-on" },
  ],

  articles: [
    // TODO: add technical notes here, e.g.
    // { title: { en: "Understanding CVSS vs EPSS", pt: "Entendendo CVSS vs EPSS" }, date: "TODO", url: "" },
  ],
};
