import { useEffect, useRef } from 'react';

interface RipplePoint {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  id: number;
}

const CustomCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -100, y: -100 });
  const ripplesRef = useRef<RipplePoint[]>([]);
  const animationRef = useRef<number>();
  const lastRippleTime = useRef(0);
  const rippleId = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle high DPI displays
    const dpr = window.devicePixelRatio || 1;
    
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      
      // Create ripple on movement (throttled)
      const now = Date.now();
      if (now - lastRippleTime.current > 50) {
        rippleId.current++;
        ripplesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          radius: 0,
          opacity: 0.6,
          id: rippleId.current,
        });
        lastRippleTime.current = now;
        
        // Limit ripples for performance
        if (ripplesRef.current.length > 15) {
          ripplesRef.current = ripplesRef.current.slice(-15);
        }
      }
    };

    const handleClick = (e: MouseEvent) => {
      // Create stronger ripple on click
      rippleId.current++;
      ripplesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        opacity: 1,
        id: rippleId.current,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Update and draw ripples
      ripplesRef.current = ripplesRef.current.filter((ripple) => {
        ripple.radius += 3;
        ripple.opacity -= 0.015;

        if (ripple.opacity <= 0) return false;

        // Draw ripple ring
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `hsla(156, 100%, 50%, ${ripple.opacity * 0.5})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw inner glow
        const gradient = ctx.createRadialGradient(
          ripple.x, ripple.y, 0,
          ripple.x, ripple.y, ripple.radius
        );
        gradient.addColorStop(0, `hsla(156, 100%, 50%, ${ripple.opacity * 0.1})`);
        gradient.addColorStop(0.5, `hsla(156, 100%, 50%, ${ripple.opacity * 0.05})`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        return true;
      });

      // Draw mouse glow effect
      const mouse = mouseRef.current;
      if (mouse.x > 0 && mouse.y > 0) {
        const glowGradient = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, 100
        );
        glowGradient.addColorStop(0, 'hsla(156, 100%, 50%, 0.15)');
        glowGradient.addColorStop(0.5, 'hsla(156, 100%, 50%, 0.05)');
        glowGradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 100, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] pointer-events-none w-full h-full"
      style={{ width: '100vw', height: '100vh' }}
    />
  );
};

export default CustomCursor;
