import { IMAGES } from "./project-images.js";

const projects = [
  {
    slug: "dj-management",
    title: "DJ Management",
    tag: "Flagship client project",
    desc: "Event management platform with DJ assignment, DJ Instagram scraping to verify promotion, photographer agreements, and a promotional email engine sending 50,000+ emails with per email status tracking.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "AWS SES", "AWS SNS"],
    metric: "50,000+ emails delivered"
  },
  {
    slug: "interchanger",
    title: "Interchanger",
    tag: "Client project",
    desc: "Payment optimization platform helping merchants reduce processing costs through interchange rate optimization, compliance management, region based surcharge calculation APIs, waitlist and finance modules, and a real time transaction monitoring dashboard.",
    tech: ["React", "Node.js", "PostgreSQL", "REST APIs"],
    metric: ""
  },
  {
    slug: "rag-query",
    title: "RAG Document Query",
    tag: "Client project",
    desc: "Document question answering system using vector embeddings and semantic chunking to give accurate answers over private documents.",
    tech: ["Node.js", "Python", "Vector embeddings", "PostgreSQL"],
    metric: ""
  },
  {
    slug: "agentic-commerce",
    title: "Agentic Commerce",
    tag: "Client project",
    desc: "AI driven commerce workflows covering product selection, recommendations, checkout, and payment processing.",
    tech: ["React", "Node.js", "LLM APIs", "PostgreSQL"],
    metric: ""
  },
  {
    slug: "eventvibe",
    title: "EventVibe",
    tag: "Client project",
    desc: "Event platform with listings, photo uploads for past events, lazy loaded galleries, a blog CMS, and Google Analytics tracking.",
    tech: ["Next.js", "TanStack Query", "PostgreSQL"],
    metric: ""
  },
  {
    slug: "ecat-quickbooks",
    title: "eCAT to QuickBooks Sync",
    tag: "Sole builder, client project",
    desc: "Serverless bridge syncing eCommerce data into QuickBooks Desktop: Lambda fetches the eCAT API, SQS queues records into DynamoDB, and a Fargate hosted SOAP/QBXML handler syncs through the QuickBooks Web Connector, with scheduling, retries, and monitoring.",
    tech: ["AWS Lambda", "SQS", "DynamoDB", "Fargate", "SOAP/QBXML"],
    metric: ""
  },
  {
    slug: "firefox-ads",
    title: "Firefox Ads Platform",
    tag: "Client project",
    desc: "Large scale ad delivery platform built with the Mozilla Firefox ads team, covering campaign delivery and performance at scale.",
    tech: ["React", "Django", "Python", "PostgreSQL"],
    metric: ""
  },
  {
    slug: "otherme",
    title: "OtherMe",
    tag: "Client project",
    desc: "AI powered content platform with Twitter integration, personality onboarding, competitor tracking, tweet generation, and plan based usage limits.",
    tech: ["React", "Node.js", "Twitter API", "PostgreSQL"],
    metric: ""
  },
  {
    slug: "bridge-voice",
    title: "Bridge Voice Platform",
    tag: "Client project",
    desc: "Twilio voice platform with secure PIN authentication, agent routing, and real time speech to text transcription for compliance recording.",
    tech: ["Node.js", "Twilio", "Socket.io"],
    metric: ""
  },
  {
    slug: "poker-club",
    title: "Modern Poker Club",
    tag: "Client project",
    desc: "Unity poker game backend and admin panel with JWT auth, game state APIs, Socket.io real time gameplay, tournaments, and rewards.",
    tech: ["Node.js", "Express", "MongoDB", "Socket.io"],
    metric: "1,000+ concurrent users"
  },
  {
    slug: "metamart",
    title: "Metamart",
    tag: "Client project",
    desc: "Unity game backend with an in game commerce store: REST APIs, OAuth, real time analytics, player statistics, product and stock management, checkouts, revenue tracking, and an admin dashboard.",
    tech: ["Node.js", "Express", "MongoDB"],
    metric: ""
  }
];

const [featured, ...rest] = projects;
document.getElementById("featured").innerHTML = `
  <img src="${IMAGES[featured.slug]}" alt="${featured.title} preview">
  <div class="featured-body">
    <span class="flag">Featured project</span>
    <h3>${featured.title}</h3>
    <p>${featured.desc}</p>
    <div class="tags" style="margin-top:14px">${featured.tech.map(t => `<span>${t}</span>`).join("")}</div>
    ${featured.metric ? `<p class="project-metric" style="margin-top:14px">${featured.metric}</p>` : ""}
    <p class="project-tag" style="margin-top:12px">${featured.tag}</p>
  </div>`;

document.getElementById("projects-grid").innerHTML = rest.map(p => `
  <article class="project-card">
    <img src="${IMAGES[p.slug]}" alt="${p.title} preview" loading="lazy">
    <div class="project-body">
      <span class="project-tag">${p.tag}</span>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="tags">${p.tech.map(t => `<span>${t}</span>`).join("")}</div>
      ${p.metric ? `<p class="project-metric">${p.metric}</p>` : ""}
    </div>
  </article>`).join("");

document.getElementById("year").textContent = new Date().getFullYear();
