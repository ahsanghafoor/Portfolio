import { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
}

const ThreeDBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const pointsRef = useRef<Point[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize points
    const numPoints = 80;
    pointsRef.current = Array.from({ length: numPoints }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * 500,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      vz: (Math.random() - 0.5) * 0.5,
    }));

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 15, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const points = pointsRef.current;
      const mouse = mouseRef.current;

      points.forEach((point, i) => {
        // Update position
        point.x += point.vx;
        point.y += point.vy;
        point.z += point.vz;

        // Mouse interaction
        const dx = mouse.x - point.x;
        const dy = mouse.y - point.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          point.vx -= dx * 0.0001;
          point.vy -= dy * 0.0001;
        }

        // Boundary check
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;
        if (point.z < 0 || point.z > 500) point.vz *= -1;

        // Project 3D to 2D
        const scale = 500 / (500 + point.z);
        const x2d = point.x * scale + (canvas.width * (1 - scale)) / 2;
        const y2d = point.y * scale + (canvas.height * (1 - scale)) / 2;
        const size = Math.max(1, 3 * scale);

        // Draw point
        ctx.beginPath();
        ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
        const alpha = 0.3 + 0.7 * scale;
        ctx.fillStyle = `hsla(156, 100%, 50%, ${alpha})`;
        ctx.fill();

        // Draw connections
        points.forEach((other, j) => {
          if (i >= j) return;

          const otherScale = 500 / (500 + other.z);
          const ox2d = other.x * otherScale + (canvas.width * (1 - otherScale)) / 2;
          const oy2d = other.y * otherScale + (canvas.height * (1 - otherScale)) / 2;

          const distance = Math.sqrt(
            Math.pow(x2d - ox2d, 2) + Math.pow(y2d - oy2d, 2)
          );

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(x2d, y2d);
            ctx.lineTo(ox2d, oy2d);
            const lineAlpha = (1 - distance / 120) * 0.3;
            ctx.strokeStyle = `hsla(156, 100%, 50%, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-60"
    />
  );
};

export default ThreeDBackground;
