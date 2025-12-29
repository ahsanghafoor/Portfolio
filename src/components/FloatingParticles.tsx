import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  char: string;
}

const codeChars = ['<', '>', '/', '{', '}', '(', ')', ';', '=', '+', '-', '*', '0', '1'];

const FloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const createParticle = (): Particle => ({
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 14 + 10,
      opacity: Math.random() * 0.3 + 0.1,
      speed: Math.random() * 30 + 20,
      char: codeChars[Math.floor(Math.random() * codeChars.length)],
    });

    setParticles(Array.from({ length: 30 }, createParticle));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute font-mono text-primary animate-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            fontSize: `${particle.size}px`,
            opacity: particle.opacity,
            animationDuration: `${particle.speed}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          {particle.char}
        </div>
      ))}
    </div>
  );
};

export default FloatingParticles;
