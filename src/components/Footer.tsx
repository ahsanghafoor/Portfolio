import { Heart } from 'lucide-react';
import { personalInfo, navItems } from '@/data/portfolio-data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="text-center md:text-left">
            <a href="#home" className="inline-flex items-center space-x-2 group">
              <span className="text-xl font-mono font-bold text-primary">
                {'<'}
              </span>
              <span className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                {personalInfo.name.split(' ')[1]}
              </span>
              <span className="text-xl font-mono font-bold text-primary">
                {'/>'}
              </span>
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-end gap-1">
              Built with{' '}
              <Heart size={14} className="text-red-500 animate-pulse" fill="currentColor" /> by{' '}
              <span className="text-primary">{personalInfo.name.split(' ')[1]}</span>
            </p>
            <p className="text-xs text-muted-foreground/70 mt-1 font-mono">
              © {currentYear} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
