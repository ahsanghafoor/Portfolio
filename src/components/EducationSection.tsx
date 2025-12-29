import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { education } from '@/data/portfolio-data';
import { useInView } from '@/hooks/useInView';

const EducationSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="education" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div
        ref={ref}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-mono text-sm mb-4">
            {'// Education'}
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="text-gradient">Academic Background</span>
          </h2>
        </div>

        {/* Education Cards */}
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`glass-card p-6 rounded-2xl transition-all duration-700 hover:neon-border ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <GraduationCap size={28} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-primary font-medium mb-2">{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-accent" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-accent" />
                      {edu.duration}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
