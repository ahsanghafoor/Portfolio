// Portfolio Data - Edit this file to update your portfolio content

export const personalInfo = {
  name: "M Ahsan Ghafoor",
  title: "Full-Stack Software Engineer",
  email: "ahsanghafoor2016@gmail.com",
  phone: "+92 309 0490477",
  linkedin: "https://www.linkedin.com/in/ahsanghafoor/",
  github: "https://github.com/ahsanghafoor",
  portfolio: "https://ahsanghafoor-portfolio.netlify.app/",
  summary: "Full-Stack Software Engineer with 3+ years of experience building and scaling web applications, AI-driven features, and cloud-based systems. Strong background in the MERN stack, AWS, real-time communication, and RAG-based AI solutions.",
  tagline: "Building the future, one line of code at a time.",
  resumeUrl: "#", // Add your resume URL here
};

export const skills = {
  languages: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL", "HTML5", "CSS3/SASS"],
  frontend: ["Next.js", "React.js", "Redux", "TanStack Query", "Material-UI", "Tailwind CSS"],
  backend: ["Node.js", "Express.js", "Django", "RESTful APIs", "GraphQL", "Socket.io", "Twilio"],
  databases: ["MongoDB", "MySQL", "PostgreSQL", "DynamoDB"],
  cloud: ["EC2", "S3", "SES", "ECS", "Lambda", "SQS", "SNS", "CloudWatch", "IAM"],
  ai: ["RAG Systems", "LangChain", "OpenAI API", "Vector Embeddings", "Document Processing"],
  devops: ["Git/GitHub", "Docker", "CI/CD", "Postman", "Google Analytics", "System Design"],
};

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    id: "grandeur",
    role: "Software Engineer",
    company: "Grandeur",
    location: "Remote",
    duration: "May 2025 – Present",
    highlights: [
      "Built OtherMe, an AI-powered platform connecting Twitter accounts with personality-driven tweet generation",
      "Engineered Interchanger public API with location-based tax calculation engine across multiple states",
      "Built Bridge voice platform with Twilio integration, achieving 95% accuracy in speech-to-text transcription",
      "Developed RAG system utilizing vector embeddings for intelligent document querying",
      "Contributed to experimental Agentic commerce platform with AI-driven e-commerce workflows",
    ],
  },
  {
    id: "techleadz",
    role: "MERN Stack Developer",
    company: "TechLeadz",
    location: "Lahore, Pakistan",
    duration: "December 2023 – June 2025",
    highlights: [
      "Collaborated with Mozilla Firefox ads team on large-scale ad delivery platform",
      "Designed EventVibe event management platform with Next.js and TanStack Query",
      "Built DJ Management system with automated assignments and 50,000+ email campaigns via Amazon SES",
    ],
  },
  {
    id: "softtik",
    role: "MERN Stack Developer",
    company: "Softtik Technologies",
    location: "Lahore, Pakistan",
    duration: "January 2023 – December 2023",
    highlights: [
      "Developed Modern Poker Club backend with real-time gameplay for 1000+ concurrent users",
      "Built Metamart Unity Game backend with comprehensive RESTful API architecture",
      "Created full-stack E-commerce platform with Elasticsearch and Stripe integration",
    ],
  },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  imagePrompt: string; // Use this as alt text or generate image with AI
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  src: string;
}

export const projects: Project[] = [
  {
    id: "otherme",
    title: "OtherMe AI Platform",
    description: "AI-powered Twitter integration platform that generates personality-driven tweets based on user-defined traits and competitor analysis.",
    tech: ["React", "Node.js", "OpenAI API", "Twitter API", "MongoDB"],
    imagePrompt: "Futuristic AI dashboard with social media analytics, dark theme with neon purple and blue gradients, holographic tweet cards floating in 3D space, neural network visualization in background",
    featured: true,
    src: "1.jpeg"
  },
  {
    id: "bridge",
    title: "Bridge Voice Platform",
    description: "Real-time voice communication platform with Twilio integration, secure PIN authentication, and 95% accurate speech-to-text transcription.",
    tech: ["React", "Twilio", "WebRTC", "Socket.io", "PostgreSQL"],
    imagePrompt: "Modern voice communication interface with sound wave visualizations, dark minimal design with green accent colors, floating microphone icons and audio spectrum analyzer",
    featured: true,
    src: "2.jpeg"
  },
  {
    id: "rag-system",
    title: "RAG Document System",
    description: "Intelligent document querying system using vector embeddings and semantic chunking for rapid information retrieval.",
    tech: ["LangChain", "OpenAI", "Pinecone", "Python", "FastAPI"],
    imagePrompt: "Abstract visualization of document processing with floating text fragments connected by glowing neural pathways, dark background with cyan and white data streams",
    featured: true,
    src: "3.jpeg"
  },
  {
    id: "eventvibe",
    title: "EventVibe Platform",
    description: "Event management platform featuring dynamic listings, photo galleries with lazy loading, blog CMS, and analytics integration.",
    tech: ["Next.js", "TanStack Query", "PostgreSQL", "Google Analytics"],
    imagePrompt: "Event management dashboard showing calendar view with colorful event cards, dark mode interface with gradient accents, confetti and celebration elements",
    featured: false,
    src: "4.png"
  },
  {
    id: "poker-club",
    title: "Modern Poker Club",
    description: "Real-time multiplayer poker platform with game state management APIs and Socket.io integration for 1000+ concurrent users.",
    tech: ["Node.js", "Socket.io", "MongoDB", "Redis", "JWT"],
    imagePrompt: "Sleek online poker table interface with neon card designs, dark casino theme with gold and red accents, chips and cards floating with motion blur",
    featured: false,
    src: "5.jpeg"
  },
  {
    id: "metamart",
    title: "Metamart Game Backend",
    description: "Unity game backend with comprehensive RESTful APIs, OAuth authentication, and real-time analytics dashboard.",
    tech: ["Node.js", "Express", "MongoDB", "Unity", "OAuth"],
    imagePrompt: "Gaming analytics dashboard with 3D charts, dark futuristic theme with electric blue highlights, game controller icons and player statistics",
    featured: false,
    src: "6.jpeg"
  },
];

export const education = [
  {
    degree: "Bachelor of Information Technology",
    institution: "University of Punjab",
    location: "Lahore, Pakistan",
    duration: "2018 – 2022",
  },
  {
    degree: "Intermediate in Computer Science",
    institution: "Punjab College Depalpur",
    location: "Okara, Pakistan",
    duration: "2016 – 2018",
  },
];

export const socialLinks = [
  { name: "Portfolio", url: "https://ahsanghafoor-portfolio.netlify.app/", icon: "briefcase" },
  { name: "GitHub", url: "https://github.com/ahsanghafoor", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/ahsanghafoor/", icon: "linkedin" },
  { name: "Email", url: "mailto:ahsanghafoor2016@gmail.com", icon: "mail" },
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
