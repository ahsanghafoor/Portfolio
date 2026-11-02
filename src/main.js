import { IMAGES } from "./project-images.js";

const projects = [
  {
    slug: "dj-management",
    title: "DJ Management",
    tag: "Flagship client project",
    category: "Events",
    desc: "Event management platform with DJ assignment, DJ Instagram scraping to verify promotion, photographer agreements, and a promotional email engine sending 50,000+ emails with per email status tracking.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "AWS SES", "AWS SNS"],
    metric: "50,000+ emails delivered",
    link: null
  },
  {
    slug: "interchanger",
    title: "Interchanger",
    tag: "Client project",
    category: "Fintech",
    desc: "Payment optimization platform helping merchants reduce processing costs through interchange rate optimization, compliance management, region based surcharge calculation APIs, waitlist and finance modules, and a real time transaction monitoring dashboard.",
    tech: ["React", "Node.js", "PostgreSQL", "REST APIs"],
    metric: "",
    link: null
  },
  {
    slug: "rag-query",
    title: "RAG Document Query",
    tag: "Client project",
    category: "AI",
    desc: "Document question answering system using vector embeddings and semantic chunking to give accurate answers over private documents.",
    tech: ["Node.js", "Python", "Vector embeddings", "PostgreSQL"],
    metric: "",
    link: null
  },
  {
    slug: "agentic-commerce",
    title: "Agentic Commerce",
    tag: "Client project",
    category: "AI",
    desc: "AI driven commerce workflows covering product selection, recommendations, checkout, and payment processing.",
    tech: ["React", "Node.js", "LLM APIs", "PostgreSQL"],
    metric: "",
    link: null
  },
  {
    slug: "eventvibe",
    title: "EventVibe",
    tag: "Live site",
    category: "Events",
    desc: "Event platform with listings, photo uploads for past events, lazy loaded galleries, a blog CMS, and Google Analytics tracking.",
    tech: ["Next.js", "TanStack Query", "PostgreSQL"],
    metric: "",
    link: "https://eventvibe.com/"
  },
  {
    slug: "ecat-quickbooks",
    title: "eCAT to QuickBooks Sync",
    tag: "Sole builder, client project",
    category: "Platforms",
    desc: "Serverless bridge syncing eCommerce data into QuickBooks Desktop: Lambda fetches the eCAT API, SQS queues records into DynamoDB, and a Fargate hosted SOAP/QBXML handler syncs through the QuickBooks Web Connector, with scheduling, retries, and monitoring.",
    tech: ["AWS Lambda", "SQS", "DynamoDB", "Fargate", "SOAP/QBXML"],
    metric: "",
    link: null
  },
  {
    slug: "firefox-ads",
    title: "Firefox Ads Platform",
    tag: "Client project",
    category: "Platforms",
    desc: "Large scale ad delivery platform built with the Mozilla Firefox ads team, covering campaign delivery and performance at scale.",
    tech: ["React", "Django", "Python", "PostgreSQL"],
    metric: "",
    link: null
  },
  {
    slug: "otherme",
    title: "OtherMe",
    tag: "Client project",
    category: "AI",
    desc: "AI powered content platform with Twitter integration, personality onboarding, competitor tracking, tweet generation, and plan based usage limits.",
    tech: ["React", "Node.js", "Twitter API", "PostgreSQL"],
    metric: "",
    link: null
  },
  {
    slug: "bridge-voice",
    title: "Bridge Voice Platform",
    tag: "Client project",
    category: "Platforms",
    desc: "Twilio voice platform with secure PIN authentication, agent routing, and real time speech to text transcription for compliance recording.",
    tech: ["Node.js", "Twilio", "Socket.io"],
    metric: "",
    link: null
  },
  {
    slug: "poker-club",
    title: "Modern Poker Club",
    tag: "Live site",
    category: "Gaming",
    desc: "Unity poker game backend and admin panel with JWT auth, game state APIs, Socket.io real time gameplay, tournaments, and rewards.",
    tech: ["Node.js", "Express", "MongoDB", "Socket.io"],
    metric: "1,000+ concurrent users",
    link: "https://www.modernpokerclub.com/"
  },
  {
    slug: "metamart",
    title: "Metamart",
    tag: "Client project",
    category: "Gaming",
    desc: "Unity game backend with an in game commerce store: REST APIs, OAuth, real time analytics, player statistics, product and stock management, checkouts, revenue tracking, and an admin dashboard.",
    tech: ["Node.js", "Express", "MongoDB"],
    metric: "",
    link: null
  }
];

const [featured, ...rest] = projects;

function linkOrTag(p) {
  if (p.link) return `<a class="btn btn-outline btn-sm" href="${p.link}" target="_blank" rel="noopener">Visit live site ↗</a>`;
  return `<span class="project-tag">${p.tag}</span>`;
}

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

document.getElementById("featured").classList.add("reveal");
document.getElementById("projects-list").innerHTML = rest.map((p, i) => `
  <article class="showcase-row reveal${i % 2 === 1 ? " flip" : ""}" data-category="${p.category}">
    <div class="showcase-img"><img src="${IMAGES[p.slug]}" alt="${p.title} preview" loading="lazy"></div>
    <div class="showcase-body">
      <span class="project-cat">${p.category}</span>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="tags">${p.tech.map(t => `<span>${t}</span>`).join("")}</div>
      ${p.metric ? `<p class="project-metric">${p.metric}</p>` : ""}
      <div class="showcase-foot">${linkOrTag(p)}</div>
    </div>
  </article>`).join("");

document.querySelectorAll("#filters .filter-chip").forEach(chip => {
  chip.addEventListener("click", () => {
    document.querySelectorAll("#filters .filter-chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    const f = chip.dataset.filter;
    document.querySelectorAll(".showcase-row").forEach(row => {
      row.style.display = (f === "all" || row.dataset.category === f) ? "" : "none";
    });
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("revealed");
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal, .job, .skill-card, .about-cards > div, .edu > div").forEach(el => observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();
