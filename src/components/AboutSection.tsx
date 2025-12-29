import { Code2, Cpu, Cloud, Sparkles } from 'lucide-react';
import { personalInfo } from '@/data/portfolio-data';
import { useInView } from '@/hooks/useInView';

const AboutSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const highlights = [
    { icon: <Code2 size={24} />, label: 'Full-Stack', value: 'MERN Expert' },
    { icon: <Cpu size={24} />, label: 'AI/ML', value: 'RAG Systems' },
    { icon: <Cloud size={24} />, label: 'Cloud', value: 'AWS Certified' },
    { icon: <Sparkles size={24} />, label: 'Experience', value: '3+ Years' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface-dark/50 to-background" />

      <div
        ref={ref}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-mono text-sm mb-4">
            {'// About Me'}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Who Am I?</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left Column - Main About */}
          <div
            className={`lg:col-span-3 space-y-6 transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="glass-card neon-border p-6 md:p-8 rounded-2xl">
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                {personalInfo.summary}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in building scalable web applications from scratch,
                implementing AI-driven features, and architecting cloud-based systems
                that handle millions of requests. My passion lies in writing clean,
                maintainable code that solves real problems.
              </p>
            </div>

            {/* Decorative Code Block */}
            <div className="glass-card p-5 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full" />
              <pre className="font-mono text-xs md:text-sm text-muted-foreground overflow-hidden">
                <code>
                  <span className="text-secondary">async function</span>{' '}
                  <span className="text-accent">buildAmazing</span>() {'{'}
                  {'\n'}  <span className="text-primary">await</span> learn();
                  {'\n'}  <span className="text-primary">await</span> code();
                  {'\n'}  <span className="text-primary">await</span> deploy();
                  {'\n'}  <span className="text-secondary">return</span>{' '}
                  <span className="text-green-400">'success'</span>;
                  {'\n'}
                  {'}'}
                </code>
              </pre>
            </div>
          </div>

          {/* Right Column - Stats Cards */}
          <div
            className={`lg:col-span-2 grid grid-cols-2 gap-4 transition-all duration-700 delay-400 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass-card p-5 rounded-2xl hover:neon-border transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {item.icon}
                </div>
                <p className="text-xs text-muted-foreground font-mono mb-1">
                  {item.label}
                </p>
                <p className="text-base font-display font-semibold text-foreground">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
