import { useEffect } from "react";
import { gsap } from "gsap";

/**
 * Desktop pointer flourishes: cursor glow follow, magnetic buttons,
 * subtle 3D tilt on [data-tilt] cards. All disabled on touch/coarse
 * pointers and when reduced motion is requested.
 */
export function useInteractions() {
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    const cleanups: Array<() => void> = [];

    // --- Cursor glow ---
    const glow = document.getElementById("cursor-glow");
    if (glow) {
      const xTo = gsap.quickTo(glow, "x", { duration: 0.5, ease: "power3" });
      const yTo = gsap.quickTo(glow, "y", { duration: 0.5, ease: "power3" });
      const onMove = (e: MouseEvent) => {
        xTo(e.clientX);
        yTo(e.clientY);
      };
      window.addEventListener("mousemove", onMove);
      cleanups.push(() => window.removeEventListener("mousemove", onMove));
    }

    // --- Magnetic buttons ---
    const magnets = gsap.utils.toArray<HTMLElement>("[data-magnetic]");
    magnets.forEach((el) => {
      const strength = 0.35;
      const onMove = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const mx = e.clientX - (r.left + r.width / 2);
        const my = e.clientY - (r.top + r.height / 2);
        gsap.to(el, { x: mx * strength, y: my * strength, duration: 0.4, ease: "power3" });
      };
      const onLeave = () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1,0.4)" });
      };
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      });
    });

    // --- Tilt cards ---
    const tilts = gsap.utils.toArray<HTMLElement>("[data-tilt]");
    tilts.forEach((el) => {
      el.style.transformStyle = "preserve-3d";
      const max = 7;
      const onMove = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        gsap.to(el, {
          rotateY: px * max,
          rotateX: -py * max,
          duration: 0.4,
          ease: "power2.out",
          transformPerspective: 800,
        });
      };
      const onLeave = () => {
        gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.6, ease: "power3.out" });
      };
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);
}
