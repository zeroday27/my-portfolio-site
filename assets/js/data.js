/* ============================================================
   Single source of truth for the portfolio.
   Edit this file, nothing else, to change content.
   Rule: no client names, hostnames, account IDs or credentials.
   ============================================================ */
window.PORTFOLIO = {
  person: {
    name: "Ko Ko Naing",
    nick: "Nico",
    title: "Cloud & Infrastructure Architect",
    tagline: "Ten years of building the systems people rely on, from helpdesk tickets to multi-cloud platforms, and now AI-augmented operations.",
    location: "Bangkok, Thailand",
    links: {
      linkedin: "https://www.linkedin.com/in/ko-ko-naing-0410b5158/",
      credly:   "https://www.credly.com/users/ko-ko-naing_kai/badges/credly",
      yangonai: "https://www.yangonai.com/",
      github:   "https://github.com/zeroday27",
      email:    "kokonaingcloud@gmail.com"
    }
  },

  stats: [
    { value: 10,  suffix: "+",  label: "years in production IT" },
    { value: 4,   suffix: "",   label: "clouds run in production" },
    { value: 50,  suffix: "~",  label: "SAP HANA version upgrades", prefixSuffix: true },
    { value: 180, suffix: "+",  label: "client projects under management" },
    { value: 13,  suffix: "",   label: "CMS sites migrated to Kubernetes" },
    { value: 338, suffix: "k",  label: "request botnet mitigated" }
  ],

  /* Eras drive BOTH the timeline and the analytics scrubber. */
  eras: [
    {
      id: "gb", years: "2016 – 2017", short: "2016",
      org: "Good Brothers' Group of Companies", place: "Yangon, Myanmar",
      role: "System Engineer",
      chapter: "Where it starts: the whole stack, by hand",
      summary: "Helpdesk queue in the morning, printers and workstations at noon, Windows Server and VMware ESXi in the afternoon, FortiGate and branch VPNs after hours. Around 50 physical and virtual servers, RAID and storage, site-to-site connectivity for a multi-office group.",
      highlights: [
        "End-user support, printers, workstations and office network for a multi-office group",
        "Windows Server administration and VMware ESXi virtualization",
        "FortiGate firewalls, web-proxy appliances and site-to-site VPN between HQ and branches",
        "Server monitoring, migration and RAID/storage configuration"
      ],
      tags: ["Helpdesk", "Windows Server", "VMware ESXi", "FortiGate", "VPN", "RAID"],
      skills: { systems: 6, network: 5, virt: 5, cloud: 1, sap: 0, arch: 1, auto: 2, k8s: 0, ai: 0 },
      mix:    { support: 35, network: 20, systems: 30, cloud: 0, sap: 5, arch: 5, auto: 5, ai: 0 }
    },
    {
      id: "vg1", years: "2018 – 2019", short: "2018",
      org: "Vanguard Business Solutions & Consulting", place: "Singapore · Myanmar · Thailand",
      role: "System Engineer, SAP Infrastructure",
      chapter: "SAP Gold Partner: Business One on HANA, on SUSE",
      summary: "Joined an SAP Gold Partner and went deep on SAP Business One on HANA running on SUSE Linux Enterprise. Installation, sizing, hardening, backup and the first version-upgrade projects that would become a fifty-project run.",
      highlights: [
        "SAP Business One on HANA deployments on SLES, on-premise and hosted",
        "HANA sizing, backup/recovery and version-upgrade methodology",
        "Linux hardening and operations for customer-facing ERP systems",
        "First cloud footprints on AWS for ERP workloads"
      ],
      tags: ["SAP B1", "SAP HANA", "SLES", "Linux", "Backup/DR", "AWS"],
      skills: { systems: 7, network: 5, virt: 6, cloud: 3, sap: 6, arch: 3, auto: 3, k8s: 0, ai: 0 },
      mix:    { support: 5, network: 10, systems: 15, cloud: 15, sap: 45, arch: 10, auto: 0, ai: 0 }
    },
    {
      id: "vg2", years: "2020 – 2023", short: "2020",
      org: "Vanguard Business Solutions & Consulting", place: "Singapore · Myanmar · Thailand",
      role: "Cloud Solutions Architect / Solution Team Lead",
      chapter: "Founding architect of VCS, an SAP cloud built from scratch",
      summary: "Co-designed and built Vanguard Cloud Service (VCS): SAP Business One on HANA delivered as a cloud service instead of an on-premise install. SAP published to any browser through an HTML5 client on Ericom middleware, a multi-tenant SAP Cloud Control Center written from scratch, and the whole thing sold across APAC. Myanmar's first SAP-on-AWS platform came out of this period, along with roughly fifty HANA version upgrades delivered without breaking customers.",
      highlights: [
        "Founding and core architect of VCS: multi-tenant SAP B1 HANA cloud service",
        "Browser delivery of SAP via HTML5 client on Ericom middleware",
        "SAP Cloud Control Center for tenant provisioning and operations, built from scratch",
        "Myanmar's first SAP-on-AWS platform: Multi-AZ HA, ALB, HANA SLT replication, VDI with AWS Directory Service",
        "~50 SAP HANA version-upgrade projects with maintenance SLAs held",
        "Pre-sales: RFI/RFQ/RFP, BOMs, cloud quotations, channel enablement across APAC"
      ],
      tags: ["Cloud Architecture", "Multi-tenant SaaS", "SAP HANA", "Ericom HTML5", "AWS", "Presales", "FinOps"],
      skills: { systems: 8, network: 6, virt: 7, cloud: 7, sap: 9, arch: 8, auto: 5, k8s: 1, ai: 0 },
      mix:    { support: 5, network: 5, systems: 10, cloud: 30, sap: 20, arch: 25, auto: 5, ai: 0 }
    },
    {
      id: "vo", years: "2023 – 2026", short: "2023", label: "2023 – 2026",
      org: "Visible One Limited", place: "Hong Kong",
      role: "IT Manager, Infrastructure, Cloud & DevOps",
      chapter: "Sole owner of a 180-project multi-cloud estate",
      summary: "Every server, cluster, pipeline and alert for a Hong Kong digital agency: four clouds in production, on-premise virtualization across office and data centre, multi-tenant hosting, self-hosted GitLab and monitoring, and the incident phone. Migrated a 13-site CMS platform to managed Kubernetes with zero unplanned public downtime, and ran daily operations through an agentic AI toolchain with engineered guardrails two years before that was normal.",
      highlights: [
        "13-site CMS platform migrated from AWS to Alibaba Cloud Kubernetes, zero unplanned public downtime",
        "CNI re-architecture (IP-prefix pooling, 112 pods/node) collapsed a two-cluster plan into one",
        "Prometheus/Grafana/Alertmanager stack across the fleet; backup audits that found silent gaps",
        "Incident command: 338k-request botnet, crawler DoS, forensics that proved attack vectors",
        "Agentic AI operations platform with safety gates, MCP integrations and company AI governance",
        "Procurement-grade tenders, BOMs and cost governance presented to client committees"
      ],
      tags: ["AWS", "Azure", "Alibaba Cloud", "Kubernetes", "Terraform", "GitLab CI", "Cloudflare", "Prometheus", "Security", "Agentic AI"],
      skills: { systems: 9, network: 7, virt: 8, cloud: 9, sap: 6, arch: 9, auto: 8, k8s: 7, ai: 8 },
      mix:    { support: 5, network: 5, systems: 10, cloud: 25, sap: 0, arch: 10, auto: 30, ai: 15 }
    },
    {
      id: "ya", years: "2024 – now", short: "2024", hobby: true,
      org: "Yangon AI", place: "Side project",
      role: "Founder & builder (hobby)",
      chapter: "The AI era, hands-on",
      summary: "A weekend project that shipped: Food Menu Translator points a phone camera at a printed menu in Thai, Burmese or Vietnamese and explains every dish in your language, with ingredients, spice level and the exact printed price. Android beta, privacy-first, photos never stored server-side.",
      highlights: [
        "Food Menu Translator: photo-to-understanding in seconds, streaming results, Android beta",
        "LLM vision pipeline with strict price-fidelity and ingredient-safety gates",
        "Edge-hosted API and site on Cloudflare"
      ],
      tags: ["LLM Vision", "Android", "Cloudflare Workers", "Product"],
      link: { label: "Food Menu Translator", href: "https://www.yangonai.com/products/food-menu-translator" },
      skills: { systems: 9, network: 7, virt: 8, cloud: 9, sap: 6, arch: 9, auto: 8, k8s: 7, ai: 9 },
      mix:    { support: 0, network: 0, systems: 0, cloud: 20, sap: 0, arch: 10, auto: 0, ai: 70 }
    }
  ],

  skillAxes: [
    { key: "systems", label: "Linux / Systems" },
    { key: "network", label: "Network & Security" },
    { key: "virt",    label: "Virtualization" },
    { key: "cloud",   label: "Cloud" },
    { key: "sap",     label: "SAP / HANA" },
    { key: "arch",    label: "Architecture & Presales" },
    { key: "auto",    label: "Automation / IaC" },
    { key: "k8s",     label: "Kubernetes" },
    { key: "ai",      label: "AI / LLM Ops" }
  ],

  mixKeys: [
    { key: "support", label: "End-user support" },
    { key: "network", label: "Network & security" },
    { key: "systems", label: "Servers & virtualization" },
    { key: "cloud",   label: "Cloud platforms" },
    { key: "sap",     label: "SAP / HANA" },
    { key: "arch",    label: "Architecture & presales" },
    { key: "auto",    label: "Automation, IaC & SRE" },
    { key: "ai",      label: "AI systems" }
  ],

  work: [
    {
      title: "VCS: SAP Business One on HANA as a cloud service",
      era: "Vanguard · 2020 – 2023",
      problem: "SAP B1 was sold as an on-premise install. Customers across APAC wanted it without owning servers.",
      built: "Multi-tenant platform delivering SAP through an HTML5 browser client on Ericom middleware, with a purpose-built SAP Cloud Control Center for provisioning and operations.",
      result: "A sellable cloud product for the APAC channel and the foundation for Myanmar's first SAP-on-AWS deployment."
    },
    {
      title: "Fifty HANA upgrades, zero surprises",
      era: "Vanguard · 2018 – 2023",
      problem: "Version upgrades on customer-facing ERP databases are where careers end.",
      built: "A repeatable upgrade runbook: sizing checks, tested rollback, maintenance-window discipline, customer communication templates.",
      result: "Roughly fifty upgrade projects delivered while holding maintenance SLAs."
    },
    {
      title: "13-site CMS platform to managed Kubernetes",
      era: "Visible One · 2025 – 2026",
      problem: "A federation client's 13-site estate on AWS needed to move clouds, invisibly, under the client's own Cloudflare edge.",
      built: "ACK cluster with ALB SNI serving the client's Origin CA certs, rc-tagged release trains, Sealed Secrets, Terraform landing zone, CNI re-architected to IP-prefix pooling.",
      result: "Zero unplanned public downtime. 112 pods/node removed the scaling ceiling and the second cluster from the bill."
    },
    {
      title: "Agentic AI operations, with brakes",
      era: "Visible One · 2024 – 2026",
      problem: "LLM tooling is useful for infrastructure work and dangerous near production.",
      built: "A layered operational memory, 18 custom skills, MCP integrations, and safety engineering: confirmation gates for destructive commands, read-before-write enforcement, secret redaction.",
      result: "Daily use for incident triage, migration planning and tender drafting, plus a company-wide AI governance policy."
    },
    {
      title: "Food Menu Translator",
      era: "Yangon AI · hobby",
      problem: "A printed menu in a language you cannot read, and a waiter waiting.",
      built: "Camera-to-LLM pipeline that names each dish in your language with ingredients and spice level, and shows the price exactly as printed.",
      result: "Android beta, free for ten scans a day, photos never reach a server.",
      link: "https://www.yangonai.com/products/food-menu-translator"
    }
  ],

  skills: {
    "Cloud":            ["AWS", "Microsoft Azure", "Alibaba Cloud", "Tencent Cloud", "GCP (certified)", "Cloudflare"],
    "Platform":         ["Kubernetes (ACK, on-prem)", "Docker", "Argo CD", "Helm", "Proxmox VE", "VMware ESXi"],
    "Automation":       ["Terraform", "Ansible", "GitLab CI/CD", "GitHub Actions", "Bash", "Python"],
    "Observability":    ["Prometheus", "Grafana", "Alertmanager", "k6", "ELK"],
    "Security":         ["Hardening", "IAM / least privilege", "WAF & bot management", "Secrets (Infisical, Vault-class)", "Forensics", "PDPO"],
    "Data & middleware":["SAP HANA", "MySQL / MariaDB", "PostgreSQL", "Nginx / Apache", "PHP-FPM", "Exim"],
    "AI":               ["Agentic workflows (Claude, MCP)", "LLM vision pipelines", "RAG (LangChain, Qdrant)", "AI governance"]
  },

  certs: [
    { name: "AWS Certified Solutions Architect, Associate", url: "https://www.credly.com/users/ko-ko-naing_kai/badges/credly" },
    { name: "Microsoft Certified: Azure Solutions Architect Expert", url: "https://www.credly.com/users/ko-ko-naing_kai/badges/credly" },
    { name: "Red Hat Certified Engineer (RHCE)", url: "https://www.credly.com/users/ko-ko-naing_kai/badges/credly" },
    { name: "Red Hat Certified System Administrator (RHCSA)", url: "https://www.credly.com/users/ko-ko-naing_kai/badges/credly" },
    { name: "Red Hat Certified Specialist in Containers", url: "https://www.credly.com/users/ko-ko-naing_kai/badges/credly" },
    { name: "Google Associate Cloud Engineer", url: "https://www.credly.com/users/ko-ko-naing_kai/badges/credly" }
  ]
  ,
  /* ---- Scroll journey (drives the pinned chapter reader). ---- */
  /* Analytics projection (2027 onward). Clearly labelled as a projection in the UI. */
  projection: {
    id: "proj", years: "2027 onward", short: "2027 \u2192", projected: true,
    role: "Where the work is heading",
    org: "Projection, not a claim: the trajectory the last decade points to.",
    skills: { systems: 9, network: 7, virt: 7, cloud: 9, sap: 5, arch: 9, auto: 9, k8s: 8, ai: 9 },
    mix:    { support: 0, network: 0, systems: 5, cloud: 30, sap: 0, arch: 25, auto: 25, ai: 15 }
  },

  journey: [
    { id:"edu", year:"2012", span:"2012 – 2016", kicker:"Chapter 0", title:"A language degree, and a pull toward machines.",
      org:"West Yangon University", place:"Yangon, Myanmar",
      narrative:"Bachelor of Arts in English. Four years learning to explain things clearly to people, which turned out to be the most durable skill in a career spent between engineers, clients and executives. The year the degree finished, the IT career began.",
      points:["BA (English), 2012 – 2016","Later: MA (English), Mahachulalongkornrajavidyalaya University, Thailand, 2024 – 2025"], tags:["Communication","Writing","Teaching"] },
    { id:"gb", year:"2016", span:"2016 – 2017", kicker:"Chapter 1", title:"The whole stack, by hand.",
      org:"Good Brothers' Group of Companies", place:"System Engineer · Yangon",
      narrative:"Helpdesk queue in the morning, printers and workstations at noon, Windows Server and VMware ESXi in the afternoon, FortiGate and branch VPNs after hours. About fifty servers, RAID and storage, and a multi-office network to keep alive.",
      points:["End-user support and office IT for a multi-office group","Windows Server and VMware ESXi virtualization","FortiGate firewalls, web proxy, site-to-site VPN"], tags:["Helpdesk","Windows Server","VMware ESXi","FortiGate","VPN"] },
    { id:"vg1", year:"2018", span:"2018 – 2019", kicker:"Chapter 2", title:"SAP Business One on HANA, on SUSE.",
      org:"Vanguard Business Solutions & Consulting", place:"System Engineer, SAP Infrastructure · SG · MM · TH",
      narrative:"An SAP Gold Partner. Installation, sizing, hardening, backup and the first version upgrades of SAP B1 on HANA running on SUSE Linux Enterprise. The beginning of a run that would reach roughly fifty upgrade projects.",
      points:["SAP B1 on HANA deployments on SLES, on-premise and hosted","HANA sizing, backup/recovery and upgrade methodology","First AWS footprints for ERP workloads"], tags:["SAP B1","SAP HANA","SLES","Linux","AWS"] },
    { id:"vg2", year:"2020", span:"2020 – 2023", kicker:"Chapter 3", title:"Building a cloud service from nothing.",
      org:"Vanguard Business Solutions & Consulting", place:"Cloud Solutions Architect / Solution Team Lead",
      narrative:"Founding and core architect of VCS, Vanguard Cloud Service: SAP B1 HANA delivered as a multi-tenant cloud service rather than an on-premise install. SAP published to any browser through an HTML5 client on Ericom middleware, an SAP Cloud Control Center written from scratch, sold across APAC. Myanmar's first SAP-on-AWS platform came out of this period, alongside about fifty HANA upgrades delivered without breaking customers.",
      points:["Multi-tenant SAP cloud platform, HTML5 delivery via Ericom","SAP Cloud Control Center for tenant provisioning and operations","Myanmar's first SAP-on-AWS: Multi-AZ, ALB, HANA SLT replication","Pre-sales: RFP responses, BOMs, quotations, APAC channel enablement"], tags:["Cloud Architecture","Multi-tenant SaaS","Ericom HTML5","AWS","Presales"] },
    { id:"vo", year:"2023", span:"2023 – 2026", kicker:"Chapter 4", title:"Sole owner of a 180-project, four-cloud estate.",
      org:"Visible One Limited", place:"IT Manager, Infrastructure, Cloud & DevOps · Hong Kong",
      narrative:"Every server, cluster, pipeline and alert for a digital agency: AWS, Azure, Alibaba and Tencent Cloud in production, on-premise virtualization across office and data centre, multi-tenant hosting, self-hosted GitLab and monitoring, and the incident phone. The platform existed to ship software: delivery teams working in PHP and Laravel, WordPress and other CMS platforms, Node.js and Next.js, Go and Python, carried by GitLab CI/CD pipelines, containerized environments and Kubernetes from development through UAT to production. A 13-site CMS platform moved to managed Kubernetes with zero unplanned public downtime, and daily operations ran through an agentic AI toolchain with engineered guardrails.",
      points:["Delivery platform for PHP/Laravel, WordPress and CMS, Node.js/Next.js, Go and Python workloads: GitLab CI/CD, containerized dev, UAT and production environments, release trains to Kubernetes","13-site CMS platform migrated to Kubernetes, zero unplanned public downtime","CNI re-architecture: 112 pods/node, one cluster instead of two","Incident command: 338k-request botnet, crawler DoS, forensics","Agentic AI operations with safety gates, MCP integrations, AI governance"], tags:["AWS","Azure","Alibaba Cloud","Kubernetes","Docker","GitLab CI/CD","Terraform","PHP / Laravel","Node.js","Go","Python","Cloudflare","Prometheus","Agentic AI"] },
    { id:"ya", year:"2024", span:"2024 – now", kicker:"Side chapter", hobby:true, title:"The AI era, hands-on.",
      org:"Yangon AI", place:"Founder & builder · hobby project",
      narrative:"A weekend project that shipped. Food Menu Translator points a phone at a printed menu in Thai, Burmese or Vietnamese and explains every dish in your language, with ingredients, spice level and the exact printed price. Android beta, privacy-first, photos never stored server-side.",
      points:["Camera-to-LLM pipeline with price-fidelity and ingredient-safety gates","Edge-hosted API and site on Cloudflare"], tags:["LLM Vision","Android","Cloudflare Workers"],
      link:{ label:"Try Food Menu Translator", href:"https://www.yangonai.com/products/food-menu-translator" } },
    { id:"next", year:"2026", span:"2026 →", kicker:"Next chapter", title:"Open to the next hard problem.",
      org:"Based in Bangkok, Thailand", place:"Senior Cloud Solution Architect · Infrastructure Engineer · Platform / SRE",
      narrative:"Ten years in, the pattern is clear: design the system, then stay accountable for running it. Multi-cloud architecture, infrastructure and platform engineering, and AI in production with brakes.",
      points:["Open to roles in Singapore, Australia and New Zealand, the European Union and the United States, including relocation","Also available for engagements across Southeast Asia from Bangkok"],
      tags:["Solution Architecture","Infrastructure Engineering","Platform Engineering","AI Operations"], cta:true }
  ],

  about: [
    { h:"Architect who still carries the pager.", p:"I design the platform and then run it. Migration plans, cost models and tenders on one side; 3am incidents, restore drills and post-mortems on the other. The two halves keep each other honest." },
    { h:"From helpdesk to hyperscale, in order.", p:"No skipped layers. Printers and Windows, then Linux and SAP HANA, then a cloud product built from scratch, then a four-cloud estate. Each layer still gets used." },
    { h:"AI with brakes.", p:"Two years running production operations through agentic LLM tooling, with confirmation gates, secret redaction and read-before-write enforcement I engineered myself. Fast, and fenced." }
  ],

  faq: [
    { q:"Architect or engineer?", a:"Both, and deliberately. I have written tender volumes and priced BOMs, and I have rebuilt a wiped MySQL grant table at night. Teams get someone who can hold the whiteboard and the terminal." },
    { q:"Manager or hands-on?", a:"Hands-on first. I managed and mentored, but the job I am best at is owning a production estate end to end and making it boring: documented, monitored, automated, recoverable." },
    { q:"How do you think about AI?", a:"As a power tool with no safety guard by default. I use it daily for triage, planning and documentation, and I built the guardrails and governance around it. I do not let it near irreversible actions unsupervised." },
    { q:"Which clouds, really?", a:"AWS, Azure and Alibaba Cloud in production for years, Tencent Cloud for a China-facing client, GCP certified. Alibaba Cloud in particular is rarer than it should be on CVs." },
    { q:"Where and how do you work?", a:"Based in Bangkok (UTC+7) and open to roles in Singapore, Australia and New Zealand, the EU and the US, including relocation. Fluent English, native Burmese, comfortable in client-facing and procurement-grade settings, and used to genuine on-call." },
    { q:"What is not on this site?", a:"Client names, hostnames and anything confidential. Work is described by what it did. References are available on request." }
  ]

};
