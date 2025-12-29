import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Briefcase } from 'lucide-react';
import { personalInfo } from '@/data/portfolio-data';
import { useInView } from '@/hooks/useInView';
import { toast } from 'sonner';

const ContactSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend
    toast.success('Message sent! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: <Mail size={20} />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: <Phone size={20} />, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: <MapPin size={20} />, label: 'Location', value: 'Pakistan', href: '#' },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface-dark/50 to-background" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-mono text-sm mb-4">
            {'// Contact'}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Let's Build Together</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing. I'm always open
            to discussing new opportunities and innovative ideas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 glass-card p-4 rounded-xl hover:neon-border transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="text-foreground font-medium text-sm sm:text-base break-all">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-lg font-display font-semibold mb-4 flex items-center gap-2">
                <span className="text-primary font-mono">{'>'}</span>
                Connect With Me
              </h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href={personalInfo.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
                  title="Portfolio"
                >
                  <Briefcase size={24} />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
                  title="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
                  title="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-4 rounded-xl bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
                  title="Email"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>

            {/* Terminal */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="font-mono text-sm">
                <p className="text-muted-foreground">
                  <span className="text-primary">$</span> node contact.js
                </p>
                <p className="text-green-400 mt-2">
                  ✓ Ready for new opportunities!
                </p>
                <p className="text-accent">
                  → Response time: &lt; 24 hours
                </p>
                <p className="text-muted-foreground mt-2">
                  <span className="text-primary">$</span>
                  <span className="terminal-cursor" />
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card neon-border rounded-2xl p-6 md:p-8 space-y-6"
            >
              <div>
                <label className="block text-sm font-mono text-muted-foreground mb-2">
                  {'// Your Name'}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-muted-foreground mb-2">
                  {'// Your Email'}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-muted-foreground mb-2">
                  {'// Your Message'}
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary text-primary-foreground font-mono font-semibold rounded-xl hover:shadow-neon transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>{'<'} Send Message {'/>'}</span>
                <Send size={18} className="transform transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
