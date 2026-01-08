import { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Briefcase, Download, User } from 'lucide-react';
import { personalInfo, socialLinks } from '@/data/portfolio-data';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    'Full-Stack Developer',
    'AI Solutions Architect',
    'MERN Stack Expert',
    'Cloud Engineer',
  ];

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (typedText.length < currentPhrase.length) {
            setTypedText(currentPhrase.slice(0, typedText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (typedText.length > 0) {
            setTypedText(typedText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentPhraseIndex, phrases]);

  const iconMap: Record<string, React.ReactNode> = {
    github: <Github size={20} />,
    linkedin: <Linkedin size={20} />,
    mail: <Mail size={20} />,
    briefcase: <Briefcase size={20} />,
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-20" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Profile Picture */}
          <div className="animate-fade-up">
            <div className="relative group">
              {/* Glowing ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />

              {/* Profile container */}
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-primary/50 bg-card">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                  <User className="w-24 h-24 sm:w-24 sm:h-24 text-primary/60" />
                  <img src={"/images/profile.jpg"} alt="Profile Picture" width={250} height={250} className="object-cover w-full h-full" />
                </div>
              </div>

              {/* Status badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-green-500/20 border border-green-500/50 rounded-full">
                <span className="text-[10px] font-mono text-green-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  Available
                </span>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-2">
              <span className="text-foreground">Hi, I'm </span>
              <span
                className="glitch neon-text"
                data-text={personalInfo.name.split(' ')[1]}
              >
                {personalInfo.name.split(' ')[1]}
              </span>
            </h1>

            {/* Animated Role Text */}
            <div className="h-10 md:h-12 flex items-center justify-center">
              <span className="text-xl md:text-2xl lg:text-3xl font-mono text-primary font-semibold">
                {typedText}
                <span className="terminal-cursor" />
              </span>
            </div>
          </div>

          {/* Tagline */}
          <p
            className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-xl font-display animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            {personalInfo.tagline}
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center gap-3 animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            <a
              href="#projects"
              className="group relative px-6 py-3 bg-primary text-primary-foreground font-mono font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-neon text-sm"
            >
              <span className="relative z-10 flex items-center gap-2">
                {'<'} View Projects {'/>'}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%] animate-[gradient_3s_ease_infinite] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 border-2 bg-primary-foreground  border-accent/50 text-accent font-mono font-semibold rounded-xl hover:border-accent hover:bg-accent/10 transition-all duration-300 text-sm flex items-center gap-2"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div
            className="flex items-center gap-3 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:shadow-neon-sm"
                title={link.name}
              >
                {iconMap[link.icon]}
              </a>
            ))}
          </div>

          {/* Developer JSON Terminal */}
          {/* <div className="w-full max-w-xl animate-fade-up mt-2" style={{ animationDelay: '0.5s' }}>
            <div className="glass-card rounded-xl p-3 neon-border">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="ml-2 text-[10px] text-muted-foreground font-mono">
                  developer.json
                </span>
              </div>

              <div className="text-left font-mono text-[10px] sm:text-xs flex flex-wrap justify-left gap-x-4 gap-y-1">
                <span><span className="text-primary">"name"</span>: <span className="text-foreground">"{personalInfo.name}"</span></span>
                <span><span className="text-primary">"experience"</span>: <span className="text-accent">3+</span></span>
                <span><span className="text-primary">"available"</span>: <span className="text-green-400">true</span></span>
                <span><span className="text-primary">"skills"</span>: <span className="text-secondary">["React", "Node", "AWS"]</span></span>
              </div>
            </div>
          </div> */}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
