import { 
  Code2, 
  Palette, 
  Server, 
  Database, 
  Cloud, 
  Brain, 
  Wrench,
  FileJson,
  FileCode,
  Globe,
  Layers,
  Zap,
  Box,
  HardDrive,
  Cpu,
  GitBranch,
  Container,
  Settings,
  BarChart3
} from 'lucide-react';
import { skills } from '@/data/portfolio-data';
import { useInView } from '@/hooks/useInView';

// Skill icon mapping
const skillIcons: Record<string, React.ReactNode> = {
  // Languages
  "JavaScript (ES6+)": <FileJson size={16} />,
  "TypeScript": <FileCode size={16} />,
  "Python": <Code2 size={16} />,
  "SQL": <Database size={16} />,
  "HTML5": <Globe size={16} />,
  "CSS3/SASS": <Palette size={16} />,
  // Frontend
  "Next.js": <Layers size={16} />,
  "React.js": <Zap size={16} />,
  "Redux": <Box size={16} />,
  "TanStack Query": <BarChart3 size={16} />,
  "Material-UI": <Palette size={16} />,
  "Tailwind CSS": <Palette size={16} />,
  // Backend
  "Node.js": <Server size={16} />,
  "Express.js": <Server size={16} />,
  "Django": <Server size={16} />,
  "RESTful APIs": <Globe size={16} />,
  "GraphQL": <Layers size={16} />,
  "Socket.io": <Zap size={16} />,
  "Twilio": <Zap size={16} />,
  // Databases
  "MongoDB": <Database size={16} />,
  "MySQL": <Database size={16} />,
  "PostgreSQL": <Database size={16} />,
  "DynamoDB": <HardDrive size={16} />,
  // Cloud
  "EC2": <Cloud size={16} />,
  "S3": <Cloud size={16} />,
  "SES": <Cloud size={16} />,
  "ECS": <Container size={16} />,
  "Lambda": <Zap size={16} />,
  "SQS": <Cloud size={16} />,
  "SNS": <Cloud size={16} />,
  "CloudWatch": <BarChart3 size={16} />,
  "IAM": <Settings size={16} />,
  // AI
  "RAG Systems": <Brain size={16} />,
  "LangChain": <Brain size={16} />,
  "OpenAI API": <Cpu size={16} />,
  "Vector Embeddings": <Brain size={16} />,
  "Document Processing": <FileCode size={16} />,
  // DevOps
  "Git/GitHub": <GitBranch size={16} />,
  "Docker": <Container size={16} />,
  "CI/CD": <Wrench size={16} />,
  "Postman": <Globe size={16} />,
  "Google Analytics": <BarChart3 size={16} />,
  "System Design": <Settings size={16} />,
};

const categoryIcons: Record<string, React.ReactNode> = {
  'Languages & Core': <Code2 size={20} />,
  'Frontend': <Palette size={20} />,
  'Backend & APIs': <Server size={20} />,
  'Databases': <Database size={20} />,
  'AWS Cloud': <Cloud size={20} />,
  'AI/ML & Data': <Brain size={20} />,
  'DevOps & Tools': <Wrench size={20} />,
};

const SkillsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const skillCategories = [
    { title: 'Languages & Core', items: skills.languages, color: 'primary' },
    { title: 'Frontend', items: skills.frontend, color: 'accent' },
    { title: 'Backend & APIs', items: skills.backend, color: 'secondary' },
    { title: 'Databases', items: skills.databases, color: 'primary' },
    { title: 'AWS Cloud', items: skills.cloud, color: 'accent' },
    { title: 'AI/ML & Data', items: skills.ai, color: 'secondary' },
    { title: 'DevOps & Tools', items: skills.devops, color: 'primary' },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-mono text-sm mb-4">
            {'// Tech Stack'}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Skills & Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built over 3+ years of hands-on development
          </p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              <h3 className="text-lg font-display font-semibold mb-4 flex items-center gap-3">
                <span className={`text-${category.color} p-2 rounded-lg bg-${category.color}/10`}>
                  {categoryIcons[category.title]}
                </span>
                <span className="text-foreground">{category.title}</span>
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="skill-tag group cursor-default flex items-center gap-2"
                    style={{
                      animationDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms`,
                    }}
                  >
                    <span className="text-primary group-hover:text-primary-foreground transition-colors">
                      {skillIcons[skill] || <Code2 size={16} />}
                    </span>
                    <span className="text-muted-foreground group-hover:text-primary transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Terminal */}
        <div
          className={`mt-16 glass-card rounded-2xl p-6 max-w-3xl mx-auto transition-all duration-700 delay-500 ${
            isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-4 text-xs text-muted-foreground font-mono">
              skills.sh
            </span>
          </div>

          <div className="font-mono text-sm space-y-2">
            <p className="text-muted-foreground">
              <span className="text-primary">$</span> npm run skills --list
            </p>
            <p className="text-green-400">
              ✓ Loading {skillCategories.reduce((acc, cat) => acc + cat.items.length, 0)} skills...
            </p>
            <p className="text-accent">
              → Frontend: React, Next.js, TypeScript
            </p>
            <p className="text-secondary">
              → Backend: Node.js, Express, Django
            </p>
            <p className="text-primary">
              → Cloud: AWS (EC2, S3, Lambda, SES...)
            </p>
            <p className="text-green-400">
              ✓ All systems operational. Ready to build!
              <span className="terminal-cursor" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
